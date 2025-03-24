import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../context/context";

const Game: React.FC = () => {
  const navigation = useNavigation<any>();
  const gameContext = useContext(Context);
  if (!gameContext) throw new Error("Game must be used within ContextProvider");

  const {
    player1Score,
    setPlayer1Score,
    player2Score,
    setPlayer2Score,
    setWinner,
    gameTime,
    setGameTime,
  } = gameContext;

  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (gameTime === 0) {
      setWinner(player1Score > player2Score ? "Player 1" : "Player 2");
      setIsPlaying(false);
      setTimeout(() => navigation.navigate("Result"), 1000);
      return;
    }

    const timer = setInterval(() => {
      setGameTime((prev: number) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameTime]);

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>Time Left: {gameTime}s</Text>

      <View style={styles.buttonRow}>
        <View style={styles.playerContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => isPlaying && setPlayer1Score(player1Score + 1)}
          >
            <Text style={styles.buttonText}>Player 1</Text>
          </TouchableOpacity>
          <Text style={styles.score}>Taps: {player1Score}</Text>
        </View>

        <View style={styles.playerContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => isPlaying && setPlayer2Score(player2Score + 1)}
          >
            <Text style={styles.buttonText}>Player 2</Text>
          </TouchableOpacity>
          <Text style={styles.score}>Taps: {player2Score}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  timer: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  playerContainer: { alignItems: "center" },
  button: {
    backgroundColor: "#007bff",
    padding: 20,
    borderRadius: 10,
    width: 120,
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 20, fontWeight: "bold" },
  score: { fontSize: 20, fontWeight: "bold", marginTop: 10 },
});

export default Game;
