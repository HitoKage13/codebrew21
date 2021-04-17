import { AspectRatio, Button, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <Heading color="oxford-blue.DEFAULT">Hello!</Heading>
      <AspectRatio width="70%" ratio={1}>
        <Image src="/Welcome.png" layout="fill" objectFit="cover" />
      </AspectRatio>
      <Text mt="2rem" color="gray.500">
        Are you a business or customer?
      </Text>
      <Link href="/business/login">
        <Button mt="1rem" height="3.5rem" colorScheme="oxford-blue">
          I'm a business
        </Button>
      </Link>
      <Link href="/customer/login">
        <Button mt="1rem" height="3.5rem" colorScheme="oxford-blue">
          I'm a customer
        </Button>
      </Link>
    </>
  );
};

export default Home;
