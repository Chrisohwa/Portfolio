import React, { createContext, useContext, useState } from "react";

const TabContext = createContext();

export const useTab = () => useContext(TabContext);

export const TabProvider = ({ children }) => {
  const [tab, setTab] = useState(1); // Default to tab 1

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};
