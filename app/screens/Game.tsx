import React, { useContext, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Context } from "../context/context";
import { useNavigation } from "@react-navigation/native";

const Game: React.FC = () => {
  const gameContext = useContext(Context);
  if (!gameContext) throw new Error("Game must be used within ContextProvider");

  const {
    player1Score,
    player2Score,
    setPlayer1Score,
    setPlayer2Score,
    setWinner,
  } = gameContext;
  const navigation = useNavigation();
  const [countdown, setCountdown] = useState(5);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    let count = 5;
    setCountdown(5);
    setGameStarted(false);

    const countdownInterval = setInterval(() => {
      count -= 1;
      setCountdown(count);
      if (count === 0) {
        clearInterval(countdownInterval);
        setGameStarted(true);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const handleTap = (player: "player1" | "player2") => {
    if (!gameStarted) return;

    if (player === "player1") setPlayer1Score((prev) => prev + 1);
    else setPlayer2Score((prev) => prev + 1);
  };

  useEffect(() => {
    if (player1Score >= 10 || player2Score >= 10) {
      setGameStarted(false);
      setWinner(player1Score > player2Score ? "Player 1" : "Player 2");
      navigation.navigate("Result");
    }
  }, [player1Score, player2Score]);

  return (
    <View style={styles.container}>
      {countdown > 0 ? (
        <Text style={styles.countdown}>Starting in: {countdown}</Text>
      ) : (
        <Text style={styles.title}>TAP FAST!</Text>
      )}

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleTap("player1")}
        >
          <Text style={styles.buttonText}>Player 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleTap("player2")}
        >
          <Text style={styles.buttonText}>Player 2</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.score}>Player 1: {player1Score}</Text>
      <Text style={styles.score}>Player 2: {player2Score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  countdown: {
    fontSize: 40,
    fontWeight: "bold",
    color: "red",
    marginBottom: 20,
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 20,
    borderRadius: 10,
    width: 130,
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 20, fontWeight: "bold" },
  score: { fontSize: 20, fontWeight: "bold", marginTop: 10 },
});

export default Game;
