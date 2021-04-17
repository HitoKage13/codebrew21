import { ChakraProvider } from "@chakra-ui/react";
import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import { theme } from "../theme";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ChakraProvider>
  );
};

export default App;
