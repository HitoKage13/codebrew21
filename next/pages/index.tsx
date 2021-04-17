import { Button } from "@chakra-ui/button";
import { Heading, Text, VStack } from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <VStack>
        <Heading>Hello!</Heading>
        <Image src="/Welcome.png" width={200} height={200} />
        <Text>Are you a business or customer?</Text>
        <Button>I'm a business</Button>
        <Button>I'm a customer</Button>
      </VStack>
    </>
  );
};

export default Home;
