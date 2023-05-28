import React from "react";

const ThemeContext = React.createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);
