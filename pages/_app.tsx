import type { AppProps } from "next/app";
import HwGlobalStyles from "@/components/HwGlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HwGlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
