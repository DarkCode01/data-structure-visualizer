import type { AppProps } from "next/app";
import ELGlobalStyles from "@/components/ELGlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ELGlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
