import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      enableSystem={false}
      forcedTheme={Component.theme || undefined}
      attribute="class"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
