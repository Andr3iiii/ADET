import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Context } from "../context/context";
import { useNavigation } from "@react-navigation/native";

const Result: React.FC = () => {
  const gameContext = useContext(Context);
  if (!gameContext)
    throw new Error("Result must be used within ContextProvider");

  const { winner, resetGame } = gameContext;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over!</Text>
      <Text style={styles.winner}>🏆 Winner: {winner} 🏆</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          resetGame();
          navigation.navigate("home");
        }}
      >
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  winner: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: { color: "white", fontSize: 18 },
});

export default Result;
