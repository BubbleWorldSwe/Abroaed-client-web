import { createContext, useEffect, useState } from 'react';
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [selectedShades, setSelectedShades] = useState(JSON.parse(sessionStorage.getItem('selectedShades') ?? '[]'));
  const [selectedSizes, setSelectedSizes] = useState(JSON.parse(sessionStorage.getItem('selectedSizes') ?? '[]'));

  useEffect(() => {
    sessionStorage.setItem('selectedShades', JSON.stringify(selectedShades));
    sessionStorage.setItem('selectedSizes', JSON.stringify(selectedSizes));
  }, [selectedShades, selectedSizes]);

  const contextValue = {
    selectedShades,
    setSelectedShades,
    selectedSizes,
    setSelectedSizes
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
