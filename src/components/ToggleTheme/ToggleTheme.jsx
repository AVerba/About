import {useContext} from "react";
import GlobalContext from "../../context/GlobalContext";

export const ToggleTheme = () => {
  const {selectedTheme,setSelectedTheme} = useContext(GlobalContext);
  const toggleTheme= ()=>{
    const res=selectedTheme === "dark" ? "white" : "dark";
    setSelectedTheme(res)
  }
  return (
    <button onClick={()=>{toggleTheme()}}>toggle</button>
  )

}
