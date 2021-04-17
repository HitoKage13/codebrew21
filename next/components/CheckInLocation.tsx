import React from 'react';
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import Image from "next/image";
import {Button} from "@chakra-ui/react";

const CheckInLocation = () => {
  return(
    <Box p="1.5rem" width="full" boxShadow="base">
      <VStack>
        <Text mt="1.5rem" >Are you currently at</Text>
        <Heading mt="1.5rem" textAlign="center">Event Cinemas George Street?</Heading>
        <Box mt="4.5rem"></Box>
        <Image src="/CityHeroes.png" width={185} height={98} />
        <Text mt="1.5rem" >505/525 George St, Sydney NSW 2000</Text>
      </VStack>
      <HStack mt="1.5rem">
        <Button height="3.5rem" colorScheme="oxford-blue">
          No
        </Button>
        <Button height="3.5rem" colorScheme="oxford-blue">
          Yes
        </Button>
      </HStack>
    </Box>
  )
}

export default CheckInLocation;