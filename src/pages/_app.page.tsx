import { ErrorBoundary, AppProps } from "@blitzjs/next";
import React, { Suspense } from "react";
import { withBlitz } from "src/blitz-client";
import { RootErrorFallback } from "../core/components/RootErrorFallback";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback}>
      <MantineProvider>
        <Suspense fallback="Loading...">
          <Component {...pageProps} />
        </Suspense>
      </MantineProvider>
    </ErrorBoundary>
  );
}

export default withBlitz(MyApp);
