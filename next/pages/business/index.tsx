import { EditIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/layout";
import { IconButton, Progress } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Layout } from "../../components/layout";

const Homepage = () => {
  return (
    <Layout layoutId="business">
      <Box width="full">
        <Text color="gray.500">Welcome back</Text>
        <Flex justifyContent="space-between" alignItems="flex-start">
          <Heading color="oxford-blue.DEFAULT">
            Event Cinemas George Street
          </Heading>
          <AspectRatio mt="0.25rem" ratio={1} width="52px">
            <Image src="/logo.png" layout="fill" quality={100} />
          </AspectRatio>
        </Flex>
        <HStack mt="1rem">
          <Text color="indigo.DEFAULT" fontWeight="600">
            LOCATION DETAILS
          </Text>
          <Box width="50%" height="1px" bgColor="indigo.DEFAULT"></Box>
        </HStack>
        <Box mt="1rem" p="1.25rem" width="full" boxShadow="base">
          <Flex alignItems="flex-start">
            <Image src="/event.png" width={57} height={30}></Image>
            <Box ml="2rem">
              <Text fontWeight="600" color="gray.900">
                Event Cinemas George Street
              </Text>
              <Text color="gray.500" fontSize="0.75rem">
                505/525 George St, Sydney NSW 2000
              </Text>
              <Text color="gray.500">250 person capacity</Text>
            </Box>
            <IconButton
              width="auto"
              variant="outline"
              colorScheme="gray"
              color="gray.500"
              aria-label="edit"
              icon={<EditIcon />}
            />
          </Flex>
        </Box>
        <HStack mt="1rem">
          <Text color="indigo.DEFAULT" fontWeight="600">
            CHECK IN DETAILS
          </Text>
          <Box width="50%" height="1px" bgColor="indigo.DEFAULT"></Box>
        </HStack>
        <Flex
          mt="1rem"
          flexDirection="column"
          alignItems="center"
          p="1.25rem"
          width="full"
          boxShadow="base"
        >
          <Heading mt="1rem" color="gray.500" fontSize="2.5rem">
            160
            <Text as="span" fontSize="1rem" fontWeight="400">
              /250
            </Text>
          </Heading>
          <Text color="gray.500">people at location</Text>
          <Progress
            width="100%"
            colorScheme="indigo"
            borderRadius="10px"
            value={64}
            size="lg"
            mt="1rem"
          />
          <Text mt="1rem" color="gray.500" fontSize="0.75rem">
            64% capacity
          </Text>
          <Text color="gray.500" fontSize="0.75rem">
            15 April 2021
          </Text>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Homepage;
