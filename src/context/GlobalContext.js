import { createContext } from 'react';


const GlobalContext = createContext({
  selectedTheme: "dark",
  setSelectedTheme: theme => {},
});

export default GlobalContext;
