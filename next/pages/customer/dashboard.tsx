import { Button, ButtonGroup } from "@chakra-ui/button";
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/layout";
import {
  Collapse,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PinInput,
  PinInputField,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React, { useState } from "react";
import { Layout } from "../../components/layout";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = useState<"track" | "pin">("track");
  const [isTrack, setIsTrack] = useState(false);
  const [isPin, setIsPin] = useState(false);

  return (
    <Layout layoutId="customer-dashboard">
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
        <VStack spacing="1rem" mt="1rem" height="clamp(360px, 80vh, 520px)">
          <Box p="1.25rem" width="full" boxShadow="base">
            <Flex alignItems="flex-start" justifyContent="space-between">
              <Text fontWeight="600">
                Allow permission for bluetooth and GPS tracking
              </Text>
              <AspectRatio
                mt="0.25rem"
                ratio={1}
                width="1.5rem"
                bgColor="indigo.DEFAULT"
                borderRadius="50%"
                color="white"
              >
                {isTrack ? <div>&#10003;</div> : <div>1</div>}
              </AspectRatio>
            </Flex>

            <Collapse
              in={!isTrack}
              endingHeight="3.5rem"
              startingHeight={0}
              unmountOnExit
            >
              <ButtonGroup mt="1rem">
                <Button
                  width="auto"
                  onClick={() => {
                    setModalContent("track");
                    onOpen();
                  }}
                >
                  Allow
                </Button>
                <Button width="auto" colorScheme="white" color="gray.500">
                  Remind me later
                </Button>
              </ButtonGroup>
            </Collapse>
          </Box>
          <Box p="1.25rem" width="full" boxShadow="base">
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontWeight="600">Add quick sign-in method</Text>
              <AspectRatio
                ratio={1}
                width="1.5rem"
                bgColor="indigo.DEFAULT"
                borderRadius="50%"
                color="white"
              >
                {isPin ? <div>&#10003;</div> : <div>2</div>}
              </AspectRatio>
            </Flex>
            <Collapse
              in={!isPin}
              endingHeight="3.5rem"
              startingHeight={0}
              unmountOnExit
            >
              <ButtonGroup mt="1rem">
                <Button
                  width="auto"
                  onClick={() => {
                    setModalContent("pin");
                    onOpen();
                  }}
                >
                  Add PIN
                </Button>
                <Button width="auto" colorScheme="white" color="gray.500">
                  Remind me later
                </Button>
              </ButtonGroup>
            </Collapse>
          </Box>
        </VStack>
        {isTrack && isPin && (
          <Flex justifyContent="flex-end">
            <NextLink href="/customer">
              <Link color="gray.500">Next</Link>
            </NextLink>
          </Flex>
        )}
      </Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="clamp(0%, 80vw, 360px)">
          <ModalHeader>
            {modalContent === "track" ? "GPS Tracking" : "Quick Sign-in"}
          </ModalHeader>
          <ModalBody>
            {modalContent === "track" ? (
              <Text>
                Please confirm that you would like to turn on GPS tracking
              </Text>
            ) : (
              <>
                <Text>Select a pin in to enable quick sign-on</Text>
                <HStack as="form" justifyContent="center">
                  <PinInput>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <ButtonGroup>
              <Button
                type="submit"
                color="indigo.DEFAULT"
                onClick={onClose}
                colorScheme="white"
                width="auto"
              >
                Cancel
              </Button>
              <Button
                width="auto"
                onClick={() => {
                  modalContent === "track" ? setIsTrack(true) : setIsPin(true);
                  onClose();
                }}
              >
                Submit
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  );
};

export default Dashboard;
