import { createContext } from 'react';


const GlobalContext = createContext({
  selectedTheme: "white",
  setSelectedTheme: theme => {},
});

export default GlobalContext;
