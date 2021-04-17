import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { theme } from "../theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  );
};

export default App;
