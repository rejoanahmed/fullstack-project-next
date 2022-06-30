import type { AppProps } from "next/app";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <PrimaryLayout>{<Component {...pageProps} />}</PrimaryLayout>;
}
