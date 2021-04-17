import { AspectRatio, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      mx="auto"
      width="clamp(0%, 90vw, 400px)"
      p="1rem"
    >
      <Heading>Hello!</Heading>
      <AspectRatio width="70%" ratio={1}>
        <Image src="/Welcome.png" layout="fill" objectFit="cover" />
      </AspectRatio>
      <Text mt="2rem" color="gray.500">
        Are you a business or customer?
      </Text>
      <Link href="/business/login">
        <Button
          mt="1rem"
          bgColor="blue.900"
          color="white"
          height="3.5rem"
          width="full"
          borderRadius="0.875rem"
        >
          I'm a business
        </Button>
      </Link>
      <Link href="/customer/login">
        <Button
          mt="1rem"
          bgColor="blue.900"
          color="white"
          height="3.5rem"
          width="full"
          borderRadius="0.875rem"
        >
          I'm a customer
        </Button>
      </Link>
    </Flex>
  );
};

export default Home;
