import { ChakraProvider, Flex } from "@chakra-ui/react";
import React from "react";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
