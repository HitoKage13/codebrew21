import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Layout } from "../../components/layout";

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const login = () => {
    setIsLoading(true);
    setTimeout(() => router.push("/business/dashboard"), 500);
  };
  return (
    <Layout layoutId="business-login">
      <HStack spacing="1.25rem">
        <Image
          src="/logo.png"
          width={35}
          height={35}
          objectFit="contain"
          quality={100}
        />
        <Heading color="oxford-blue.DEFAULT">Welcome!</Heading>
      </HStack>
      <Text mt="1rem" color="gray.500">
        Sign in to your business account to continue
      </Text>
      <Box width="full" as="form" mt="4.5rem">
        <FormControl>
          <Input
            type="text"
            focusBorderColor="oxford-blue.DEFAULT"
            height="3.75rem"
            variant="flushed"
            placeholder="Email"
          />
        </FormControl>
        <FormControl>
          <Input
            type="password"
            focusBorderColor="oxford-blue.DEFAULT"
            height="3.75rem"
            variant="flushed"
            placeholder="Password"
          />
        </FormControl>
        <Button
          isLoading={isLoading}
          onClick={login}
          height="3.5rem"
          colorScheme="oxford-blue"
          mt="10rem"
        >
          Sign In
        </Button>
      </Box>
      <Text mt="2.25rem" color="gray.500">
        Don't have an account?{" "}
        <NextLink href="/business/create" passHref>
          <Link color="blue.500">Create Account</Link>
        </NextLink>
      </Text>
    </Layout>
  );
};

export default Login;
