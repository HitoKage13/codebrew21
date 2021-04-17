import { Button, ButtonGroup } from "@chakra-ui/button";
import { Box, Divider, Heading, HStack, Text } from "@chakra-ui/layout";
import React from "react";

const Dashboard = () => {
  return (
    <Box>
      <Text color="gray.500">Account Details</Text>
      <Heading mt="1rem">Welcome!</Heading>
      <HStack mt="1.5rem">
        <Text color="#4E63D2">SETUP</Text>
        <Divider bg="#4E63D2"/>
      </HStack>
      <Box width="80%" mt="1rem" p="1.25rem" boxShadow="base">
        <Text mt="1.5rem">Allow permission for bluetooth and GPS tracking</Text>
        <Box borderRadius="50%" bg="#4E63D2" width="1.5rem" height="1.5rem">
          <Text color="white">
            1
          </Text>
        </Box>
        <ButtonGroup>
          <Button bg="#4E63D2" color="white">Allow</Button>
          <Button>Remind me later</Button>
        </ButtonGroup>
      </Box>
      <Box width="80%" mt="1rem" p="1.25rem" boxShadow="base">
        <Text mt="1.5rem">Add quick sign-in method</Text>
        <Box borderRadius="50%" bg="#4E63D2" width="1.5rem" height="1.5rem">
          <Text color="white">
            2
          </Text>
        </Box>
        <ButtonGroup>
          <Button bg="#4E63D2" color="white">Add PIN</Button>
          <Button>Remind me later</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Dashboard;
