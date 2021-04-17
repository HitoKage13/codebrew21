import { Box, FormControl, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
    <Box>
      <Heading>Welcome!</Heading>
      <Text>Sign in to your business account to continue</Text>
      <Box as="form">
        <FormControl>
          <Input placeholder="Email" />
        </FormControl>
        <FormControl>
          <Input placeholder="Password" />
        </FormControl>
        <Text>Don't have an account? Create Account</Text>
      </Box>
    </Box>
  );
};

export default Login;
