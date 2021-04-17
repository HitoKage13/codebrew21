import { AspectRatio, Button, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <HStack spacing="1.25rem">
        <Image
          src="/logo.png"
          width={35}
          height={35}
          objectFit="contain"
          quality={100}
        />
        <Heading color="oxford-blue.DEFAULT">Hello!</Heading>
      </HStack>
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
