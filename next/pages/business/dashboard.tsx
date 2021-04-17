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
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React, { useState } from "react";
import { Layout } from "../../components/layout";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = useState<"verify" | "register">(
    "verify"
  );
  const [isVerified, setIsVerified] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <Layout layoutId="business-dashboard">
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
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontWeight="600">Verify your ABN</Text>
              <AspectRatio
                ratio={1}
                width="1.5rem"
                bgColor="indigo.DEFAULT"
                borderRadius="50%"
                color="white"
              >
                {isVerified ? <div>&#10003;</div> : <div>1</div>}
              </AspectRatio>
            </Flex>

            <Collapse
              in={!isVerified}
              endingHeight="3.5rem"
              startingHeight={0}
              unmountOnExit
            >
              <ButtonGroup mt="1rem">
                <Button
                  width="auto"
                  onClick={() => {
                    setModalContent("verify");
                    onOpen();
                  }}
                >
                  Verify
                </Button>
                <Button width="auto" colorScheme="white" color="gray.500">
                  Learn More
                </Button>
              </ButtonGroup>
            </Collapse>
          </Box>
          <Box p="1.25rem" width="full" boxShadow="base">
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontWeight="600">Register your device as a beacon</Text>
              <AspectRatio
                ratio={1}
                width="1.5rem"
                bgColor="indigo.DEFAULT"
                borderRadius="50%"
                color="white"
              >
                {isRegistered ? <div>&#10003;</div> : <div>2</div>}
              </AspectRatio>
            </Flex>
            <Collapse
              in={!isRegistered}
              endingHeight="3.5rem"
              startingHeight={0}
              unmountOnExit
            >
              <ButtonGroup mt="1rem">
                <Button
                  width="auto"
                  onClick={() => {
                    setModalContent("register");
                    onOpen();
                  }}
                >
                  Register
                </Button>
                <Button width="auto" colorScheme="white" color="gray.500">
                  Learn More
                </Button>
              </ButtonGroup>
            </Collapse>
          </Box>
        </VStack>
        {isVerified && isRegistered && (
          <Flex justifyContent="flex-end">
            <NextLink href="/business">
              <Link color="gray.500">Next</Link>
            </NextLink>
          </Flex>
        )}
      </Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="clamp(0%, 80vw, 360px)">
          <ModalHeader>
            {modalContent === "verify"
              ? "Verify your ABN"
              : "Register your device as a beacon"}
          </ModalHeader>
          <ModalBody>
            <Text>
              {modalContent === "verify"
                ? "Please provide your business ABN"
                : "Please provide your device's Beacon ID"}
            </Text>
            <FormControl>
              <Input
                mt="0.5rem"
                placeholder={
                  modalContent === "verify" ? "Business ABN" : "Beacon ID"
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <ButtonGroup>
              <Button
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
                  modalContent === "verify"
                    ? setIsVerified(true)
                    : setIsRegistered(true);
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
