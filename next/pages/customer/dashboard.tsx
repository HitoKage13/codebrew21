import { Button, ButtonGroup } from "@chakra-ui/button";
import { Box, Divider, Heading, HStack, Text } from "@chakra-ui/layout";
import React from "react";

const Dashboard = () => {
  return (
    <Box>
      <Text>Account Details</Text>
      <Heading>Welcome!</Heading>
      <HStack>
        <Text>Setup</Text>
        <Divider />
      </HStack>
      <Box mt="1rem">
        <Text>Allow permission for bluetooth and GPS tracking</Text>
        <ButtonGroup>
          <Button>Allow</Button>
          <Button>Remind me later</Button>
        </ButtonGroup>
      </Box>
      <Box mt="2rem">
        <Text>Add quick sign-in method</Text>
        <ButtonGroup>
          <Button>Add PIN</Button>
          <Button>Remind me later</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Dashboard;
