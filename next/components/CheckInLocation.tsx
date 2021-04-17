import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
type Props = {
  onClick: () => void;
};

const CheckInLocation = ({ onClick }: Props) => {
  return (
    <Box p="1.5rem" mt="2rem" width="full" boxShadow="base">
      <VStack>
        <Text mt="1.5rem">Are you currently at</Text>
        <Heading
          mt="1.5rem"
          color="gray.500"
          fontWeight="600"
          textAlign="center"
        >
          Event Cinemas George Street?
        </Heading>
        <Box mt="1.5rem">
          <Image src="/event2.png" width={185} height={98} />
        </Box>
        <Text mt="1.5rem" color="gray.500" fontSize="0.75rem">
          505/525 George St, Sydney NSW 2000
        </Text>
      </VStack>
      <HStack mt="2.25rem">
        <Button height="3.5rem" colorScheme="white" color="gray.500">
          No
        </Button>
        <Button height="3.5rem" onClick={onClick}>
          Yes
        </Button>
      </HStack>
    </Box>
  );
};

export default CheckInLocation;
