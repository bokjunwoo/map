import React, { createContext, useContext, useState } from 'react';

const ExpRateStateContext = createContext<number | undefined>(undefined);
const ExpRateUpdaterContext = createContext<
  React.Dispatch<React.SetStateAction<number>> | undefined
>(undefined);

export const ExpRateStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [expRate, setExpRate] = useState(100);

  return (
    <ExpRateUpdaterContext.Provider value={setExpRate}>
      <ExpRateStateContext.Provider value={expRate}>
        {children}
      </ExpRateStateContext.Provider>
    </ExpRateUpdaterContext.Provider>
  );
};

export const useExpRateValue = (): number => {
  const context = useContext(ExpRateStateContext);
  if (context === undefined) {
    throw new Error(
      'useExpRateValue must be used within a ExpRateStateContext'
    );
  }
  return context;
};

export const useSetExpRate = (): React.Dispatch<
  React.SetStateAction<number>
> => {
  const context = useContext(ExpRateUpdaterContext);
  if (context === undefined) {
    throw new Error(
      'useSetExpRate must be used within a ExpRateUpdaterContext'
    );
  }
  return context;
};
