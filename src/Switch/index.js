import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        value={theme}
        onChange={()=>setTheme(theme==='light'?'dark':'light')}
        checked={theme === "light"}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
