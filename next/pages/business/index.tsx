import { Button, ButtonGroup } from "@chakra-ui/button";
import { Progress } from "@chakra-ui/react"
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";

const Homepage = () => {
  return (
    <Box width="full">
      <Text color="gray.500">Welcome back</Text>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading>Event Cinemas George Street</Heading>
        <Image
          src="/logo.png"
          width={35}
          height={35}
          objectFit="contain"
          quality={100}
        />
      </Flex>
      <HStack mt="1rem">
        <Text color="indigo.DEFAULT" fontWeight="600">
          LOCATION DETAILS
        </Text>
        <Box width="50%" height="1px" bgColor="indigo.DEFAULT"></Box>
      </HStack>
      <VStack spacing="1rem" mt="1rem">
        <Box p="1.25rem" width="full" boxShadow="base">
          <Flex alignItems="center">
            <Image src="/CityHeroes.png" width={24} height={24}></Image>
            <VStack ml="2rem">
              <Text fontWeight="600">Event Cinemas George Street</Text>
              <Text>505/525 George St, Sydney NSW 2000</Text>
              <Text>250 person capacity</Text>
            </VStack>
          </Flex>
        </Box>
      </VStack>
      <HStack mt="1rem">
        <Text color="indigo.DEFAULT" fontWeight="600">
          CHECK IN DETAILS
        </Text>
        <Box width="50%" height="1px" bgColor="indigo.DEFAULT"></Box>
      </HStack>
      <VStack spacing="1rem" mt="1rem">
        <Box p="1.25rem" width="full" boxShadow="base">
          <Heading mt="1rem">160/250</Heading>
          <Text mt="1rem">people at location</Text>
          <Progress value={64} size="lg" mt="1rem"/>
        </Box>
      </VStack>
    </Box>
  );
};

export default Homepage;
