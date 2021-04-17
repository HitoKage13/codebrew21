import { CheckIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { AspectRatio, Collapse, IconButton } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CheckInLocation from "../../components/CheckInLocation";
import { Layout } from "../../components/layout";

const history = [
  {
    name: "City Heroes Pools and Billiards",
    date: "14 April 2021",
    img: "/CityHeroes.png",
    time: "5pm - 7pm",
    address: "505 George St, Sydney NSW 2000",
  },
  {
    name: "Chinatown Noodle King",
    date: "13 April 2021",
    img: "/Chinatown.png",
    time: "8pm - 12am",
    address: "1/357 Sussex St, Sydney NSW 2000",
  },
  {
    name: "Guzman y Gomez",
    date: "12 April 2021",
    img: "/GYG.png",
    time: "12:pm - 1pm",
    address: "14 Darling Dr, Sydney NSW 2000",
  },
];

const Homepage = () => {
  const [selected, setSelected] = useState<number>(-1);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const select = (i: number) => {
    if (i === selected) {
      setSelected(-1);
    } else {
      setSelected(i);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShow1(false);
      setTimeout(() => {
        setShow2(true);
      }, 500);
    }, 5000);
  }, []);

  return (
    <Layout layoutId="customer">
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
        <Box minHeight="17.5rem">
          <AnimatePresence exitBeforeEnter>
            {show1 && (
              <motion.div
                layoutId="4"
                transition={{ duration: 0.5 }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
              >
                <HStack spacing="1rem" alignItems="flex-start" mt="1.5rem">
                  <Box mt="0.25rem">
                    <Image src="/InfoSquare.png" width={24} height={24}></Image>
                  </Box>
                  <Text color="gray.500">
                    Enter store location to check in. It’s as easy as that!
                  </Text>
                </HStack>
                <AspectRatio mx="auto" width="50%" ratio={1}>
                  <Image
                    src="/Location.png"
                    layout="fill"
                    objectFit="contain"
                  />
                </AspectRatio>
              </motion.div>
            )}
            {show2 && (
              <motion.div
                layoutId="2"
                transition={{ duration: 0.5 }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
              >
                <CheckInLocation
                  onClick={() => {
                    setShow2(false);
                    setTimeout(() => {
                      setShow3(true);
                    }, 500);
                  }}
                />
              </motion.div>
            )}
            {show3 && (
              <motion.div
                layoutId="3"
                transition={{ duration: 0.5 }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
              >
                <Text mt="2rem" textAlign="center" color="gray.500">
                  You are checked into
                </Text>
                <Flex
                  px="2.5rem"
                  mt="1.5rem"
                  alignItems="center"
                  justifyContent="center"
                >
                  <AspectRatio width="125px" ratio={2.5}>
                    <Image
                      src="/event2.png"
                      layout="fill"
                      objectFit="contain"
                    />
                  </AspectRatio>
                  <Box ml="1.5rem">
                    <Heading
                      fontWeight="600"
                      fontSize="1.75rem"
                      color="gray.500"
                    >
                      Event Cinemas George Street
                    </Heading>
                  </Box>
                </Flex>
                <Flex mt="2rem" justifyContent="center">
                  <IconButton
                    height="48px"
                    aria-label="tick"
                    icon={<CheckIcon />}
                    width="48px"
                  />
                </Flex>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
        <HStack mt="1rem">
          <Text color="indigo.DEFAULT" fontWeight="600">
            HISTORY
          </Text>
          <Box width="full" height="1px" bgColor="indigo.DEFAULT"></Box>
        </HStack>
        <VStack spacing="1rem" mt="1rem">
          {history.map((item, i) => (
            <Box
              key={i}
              p="1.25rem"
              width="full"
              boxShadow="base"
              onClick={() => select(i)}
              cursor="pointer"
            >
              <HStack alignItems="flex-start" spacing="1rem">
                <Box mt="0.25rem">
                  <Image src={item.img} width={24} height={24}></Image>
                </Box>
                <Box>
                  <Text fontWeight="600" color="gray.900">
                    {item.name}
                  </Text>
                  <Collapse in={selected === i} startingHeight={0}>
                    <Text fontSize="0.75rem" color="gray.500">
                      {item.address}
                    </Text>
                    <Text fontSize="0.75rem" color="gray.500">
                      {item.time}
                    </Text>
                  </Collapse>
                  <Text fontSize="0.75rem" color="gray.500">
                    {item.date}
                  </Text>
                </Box>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Box>
    </Layout>
  );
};

export default Homepage;
