import React, { createContext, useState, ReactNode } from "react";

type GameContextType = {
  player1Score: number;
  player2Score: number;
  winner: string | null;
  setPlayer1Score: React.Dispatch<React.SetStateAction<number>>;
  setPlayer2Score: React.Dispatch<React.SetStateAction<number>>;
  setWinner: React.Dispatch<React.SetStateAction<string | null>>;
  resetGame: () => void;
};

export const Context = createContext<GameContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);

  const resetGame = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setWinner(null);
  };

  return (
    <Context.Provider
      value={{
        player1Score,
        player2Score,
        winner,
        setPlayer1Score,
        setPlayer2Score,
        setWinner,
        resetGame,
      }}
    >
      {children}
    </Context.Provider>
  );
};
