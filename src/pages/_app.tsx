import react, { useState } from "react";
import "../assets/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function MyApp({ Component, pageProps }: any) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
