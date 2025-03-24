import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { GameContext } from "../context/GameContext";
import ChoiceButton from "../components/ChoiceButton";
import Scoreboard from "../components/score";
import ResultDisplay from "../components/result";

const choices = ["Rock", "Paper", "Scissors"] as const;
type Choice = (typeof choices)[number];

const GameScreen: React.FC = () => {
  const gameContext = useContext(GameContext);
  if (!gameContext) return null;
  const { score, setScore } = gameContext;

  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    if (userChoice) {
      const randomChoice: Choice = choices[Math.floor(Math.random() * 3)];
      setComputerChoice(randomChoice);
      determineWinner(userChoice, randomChoice);
    }
  }, [userChoice]);

  const determineWinner = (user: Choice, computer: Choice) => {
    if (user === computer) {
      setResult("It's a tie!");
    } else if (
      (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper")
    ) {
      setResult("You Win!");
      setScore((prevScore) => ({ ...prevScore, user: prevScore.user + 1 }));
    } else {
      setResult("You Lose!");
      setScore((prevScore) => ({
        ...prevScore,
        computer: prevScore.computer + 1,
      }));
    }
  };

  return (
    <View style={styles.container}>
      <Scoreboard userScore={score.user} computerScore={score.computer} />
      <ResultDisplay
        userChoice={userChoice}
        computerChoice={computerChoice}
        result={result}
      />
      <View style={styles.buttonContainer}>
        {choices.map((choice) => (
          <ChoiceButton
            key={choice}
            choice={choice}
            onPress={() => setUserChoice(choice)}
          />
        ))}
      </View>
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
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
});

export default GameScreen;
