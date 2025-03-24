import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  choice: string;
  onPress: (choice: string) => void;
}

const ChoiceButton: React.FC<Props> = ({ choice, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={() => onPress(choice)}>
    <Text style={styles.buttonText}>{choice}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default ChoiceButton;
