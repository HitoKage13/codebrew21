import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { Layout } from "../../components/layout";

const Login = () => {
  return (
    <Layout layoutId="customer-login">
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
      <Text textAlign="center" width="15rem" mt="3.5rem" color="gray.500">
        Sign up with your Service NSW account to continue
      </Text>
      <Box width="full" as="form" mt="4.5rem">
        <NextLink href="/customer/dashboard">
          <Button colorScheme="oxford-blue" height="4rem">
            <Flex
              alignItems="center"
              justifyContent="center"
              width="84px"
              height="43px"
              bg="white"
              mr="1rem"
            >
              <Image
                src="/ServiceNSW.png"
                width={74}
                height={27}
                objectFit="contain"
                objectPosition="center"
              />
            </Flex>
            Continue with Service NSW
          </Button>
        </NextLink>
      </Box>
      <Text mt="3rem" color="gray.500">
        Don't have Service NSW account?{" "}
      </Text>
      <Text>
        <NextLink href="/customer/create" passHref>
          <Link color="blue.500">Create Account</Link>
        </NextLink>
      </Text>
    </Layout>
  );
};

export default Login;
