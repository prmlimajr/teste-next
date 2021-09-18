import { AppProps } from "next/app";
import { Provider as NextAuthProvider } from "next-auth/client";

import { AppProvider } from "../context";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <AppProvider>
        <>
          <Header />
          <Component {...pageProps} />
        </>
      </AppProvider>
      <Footer />
      <GlobalStyle />
    </NextAuthProvider>
  );
}

export default MyApp;
