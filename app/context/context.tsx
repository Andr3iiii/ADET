import React, { createContext, useState, ReactNode } from "react";

export const Context = createContext<any>(null);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);
  const [gameTime, setGameTime] = useState(10);

  const resetGame = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setWinner(null);
    setGameTime(10);
  };

  return (
    <Context.Provider
      value={{
        player1Score,
        setPlayer1Score,
        player2Score,
        setPlayer2Score,
        winner,
        setWinner,
        gameTime,
        setGameTime,
        resetGame,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
