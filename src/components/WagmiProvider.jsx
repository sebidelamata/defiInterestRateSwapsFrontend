import React, { createContext, useContext } from 'react';

const ConfigContext = createContext();

export const WagmiProvider = ({ config, children }) => {
  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
};

export const useConfig = () => {
  return useContext(ConfigContext);
};