import { ChakraProvider, Flex } from "@chakra-ui/react";
import React from "react";
import { theme } from "../theme";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        mx="auto"
        width="clamp(0%, 90vw, 400px)"
        p="1rem"
      >
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
