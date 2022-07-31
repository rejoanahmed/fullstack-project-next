import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import createEmotionCache from "../utility/createEmotionCache";
import lightThemeOptions from "../styles/theme/lightTheme";
import "../styles/global.css";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { StyledEngineProvider } from "@mui/material/styles";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <PrimaryLayout>
            <Component {...pageProps} />
          </PrimaryLayout>
        </ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
};
export default MyApp;
