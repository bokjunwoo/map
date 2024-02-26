import React, { createContext, useContext, useState } from 'react';

type LevelState = {
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
};

const LevelStateContext = createContext<LevelState | undefined>(undefined);

export const LevelStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [level, setLevel] = useState(260);

  const state: LevelState = { level, setLevel };

  return (
    <LevelStateContext.Provider value={state}>
      {children}
    </LevelStateContext.Provider>
  );
};

export const useLevelState = (): LevelState => {
  const context = useContext(LevelStateContext);
  if (!context) {
    throw new Error('useLevelState must be used within a LevelStateProvider');
  }
  return context;
};
