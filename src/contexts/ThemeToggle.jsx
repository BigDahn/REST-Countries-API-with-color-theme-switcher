import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const ThemeToggle = createContext();

function ThemeContext({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  function handleTheme() {
    setDarkTheme((theme) => setDarkTheme(!theme));
  }

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  });
  return (
    <ThemeToggle.Provider
      value={{
        handleTheme,
        darkTheme,
      }}
    >
      {children}
    </ThemeToggle.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeToggle);
  if (context === undefined)
    throw new Error("ThemeContext was used outside of context provider");
  return context;
}

export { useTheme, ThemeContext };
