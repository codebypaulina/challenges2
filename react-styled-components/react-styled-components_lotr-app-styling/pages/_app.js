import { GlobalStyle, darkMode, lightMode } from "../styles";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleToggleDarkMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <GlobalStyle />
      <Component
        {...pageProps}
        onToggleDarkMode={handleToggleDarkMode}
        isDarkMode={isDarkMode}
      />
    </ThemeProvider>
  );
}
