import { useState, createContext, useContext } from 'react';

const ScrollContext = createContext();

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within ScrollProvider');
  }

  return context;
};

export const ScrollProvider = ({ children }) => {
  const [scrollId, setScrollIds] = useState(null);

  const onSetScrollId = (id) => {
    setScrollIds(id);
  };

  return (
    <ScrollContext.Provider value={{ scrollId, onSetScrollId }}>
      {children}
    </ScrollContext.Provider>
  );
};
