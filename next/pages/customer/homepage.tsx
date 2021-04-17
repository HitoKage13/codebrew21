import { Button, ButtonGroup } from "@chakra-ui/button";
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
        <Heading>John Wick</Heading>
        <Image
          src="/logo.png"
          width={35}
          height={35}
          objectFit="contain"
          quality={100}
        />
      </Flex>
      <HStack mt="1.5rem">
        <Image src="/InfoSquare.png" width={24} height={24}></Image>
        <Text color="gray.500">Enter store location to check in. It’s as easy as that!</Text>
      </HStack>
      <Image src="/Location.png" width={181} height={181}></Image>
      <HStack mt="1rem">
        <Text color="indigo.DEFAULT" fontWeight="600">
          HISTORY
        </Text>
        <Box width="full" height="1px" bgColor="indigo.DEFAULT"></Box>
      </HStack>
      <VStack spacing="1rem" mt="1rem">
        <Box p="1.25rem" width="full" boxShadow="base">
          <Flex alignItems="center">
            <Image src="/CityHeroes.png" width={24} height={24}></Image>
            <Text fontWeight="600" p="1.25rem">CityHeroes Pool & Billiards</Text>
          </Flex>
        </Box>
        <Box p="1.25rem" width="full" boxShadow="base">
          <Flex alignItems="center">
            <Image src="/Chinatown.png" width={24} height={24}></Image>
            <Text fontWeight="600">Chinatown Noodle King</Text>
          </Flex>
        </Box>
        <Box p="1.25rem" width="full" boxShadow="base">
          <Flex alignItems="center">
            <Image src="/GYG.png" width={24} height={24}></Image>
            <Text fontWeight="600">Guzman y Gomez</Text>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

export default Homepage;
