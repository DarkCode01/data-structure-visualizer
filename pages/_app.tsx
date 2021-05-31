import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import ELGlobalStyles from "@/components/ELGlobalStyle";
import { store } from "@/app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ELGlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
