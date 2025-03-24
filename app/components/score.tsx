import React from "react";
import { Text, StyleSheet, View } from "react-native";

interface Props {
  userScore: number;
  computerScore: number;
}

const score: React.FC<Props> = ({ userScore, computerScore }) => (
  <View style={styles.container}>
    <Text style={styles.scoreText}>
      Your Score: {userScore} | Computer: {computerScore}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default score;
