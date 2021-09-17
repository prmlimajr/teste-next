import { AppProps } from "next/app";
import { Provider as NextAuthProvider } from "next-auth/client";
import { Footer } from "../components/Footer";
import { AppProvider } from "../context";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
      <Footer />
      <GlobalStyle />
    </NextAuthProvider>
  );
}

export default MyApp;
