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

const Dashboard = () => {
  return (
    <Box width="full">
      <Text color="gray.500">Account Details</Text>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading>Welcome!</Heading>
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
          SETUP
        </Text>
        <Box width="full" height="1px" bgColor="indigo.DEFAULT"></Box>
      </HStack>
      <VStack spacing="1rem" mt="1rem">
        <Box p="1.25rem" width="full" boxShadow="base">
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontWeight="600">Verify your ABN</Text>
            <AspectRatio
              ratio={1}
              width="1.5rem"
              bgColor="indigo.DEFAULT"
              borderRadius="50%"
              color="white"
            >
              <div>1</div>
            </AspectRatio>
          </Flex>
          <ButtonGroup mt="1rem">
            <Button>Verify</Button>
            <Button colorScheme="white" color="gray.500">
              Learn More
            </Button>
          </ButtonGroup>
        </Box>
        <Box p="1.25rem" width="full" boxShadow="base">
          <Text fontWeight="600">Register your device as a beacon</Text>
          <ButtonGroup mt="1rem">
            <Button>Register</Button>
            <Button colorScheme="white" color="gray.500">
              Learn More
            </Button>
          </ButtonGroup>
        </Box>
      </VStack>
    </Box>
  );
};

export default Dashboard;
