import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

const ContextWrapper = props => {
  const [selectedTheme, setSelectedTheme] = useState("dark");

  return (
    <GlobalContext.Provider value={{ selectedTheme, setSelectedTheme }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default ContextWrapper;
