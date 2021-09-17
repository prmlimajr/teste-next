import { AppProps } from "next/app";
import { Footer } from "../components/Footer";
import { AppProvider } from "../context";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
