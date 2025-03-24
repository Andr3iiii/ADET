import React, { createContext, useState } from "react";

interface Score {
  user: number;
  computer: number;
}

interface GameContextType {
  score: Score;
  setScore: React.Dispatch<React.SetStateAction<Score>>;
}

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [score, setScore] = useState<Score>({ user: 0, computer: 0 });

  return (
    <GameContext.Provider value={{ score, setScore }}>
      {children}
    </GameContext.Provider>
  );
};
