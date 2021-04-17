import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const Login = () => {
  return (
    <>
      <Heading>Welcome!</Heading>
      <Text>Sign in to your business account to continue</Text>
      <Box width="full" as="form" mt="4.5rem">
        <FormControl>
          <Input height="3.75rem" variant="flushed" placeholder="Email" />
        </FormControl>
        <FormControl>
          <Input height="3.75rem" variant="flushed" placeholder="Password" />
        </FormControl>
        <Button color="white" bgColor="blue.900" width="full" mt="10rem">
          Sign In
        </Button>
      </Box>
      <Text mt="2.25rem" color="gray.500">
        Don't have an account?{" "}
        <NextLink href="/business/create" passHref>
          <Link color="blue.500">Create Account</Link>
        </NextLink>
      </Text>
    </>
  );
};

export default Login;
