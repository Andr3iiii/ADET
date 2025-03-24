import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  userChoice: string | null;
  computerChoice: string | null;
  result: string;
}

const result: React.FC<Props> = ({ userChoice, computerChoice, result }) => (
  <View style={styles.container}>
    <Text style={styles.choiceText}>Your Choice: {userChoice || "?"}</Text>
    <Text style={styles.choiceText}>Computer: {computerChoice || "?"}</Text>
    <Text style={styles.resultText}>{result}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  choiceText: {
    fontSize: 18,
    marginVertical: 5,
  },
  resultText: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default result;
