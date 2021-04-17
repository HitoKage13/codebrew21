import {Button} from "@chakra-ui/button";
import {Heading, Text} from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";
import {Box, Link} from "@chakra-ui/react";
import NextLink from "next/link";

const Login = () => {
  return (
    <>
      <Heading>
        <Image src="/ChecknLogo.png" width={35} height={35} />
        Welcome!
      </Heading>
      <Text mt="2.25rem" color="gray.500">Sign in to your business account to continue</Text>
      <Box width="full" as="form" mt="4.5rem">
        <Button color="white" bgColor="blue.900" width="full" mt="10rem">
          <Box width="84px" height="30px" bg="white">
            <Image src="/ServiceNSW.png" width={74} height={27} objectFit="contain" objectPosition="center" />
          </Box>
          Continue with Service NSW
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