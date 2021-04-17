import { Flex } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  layoutId: string;
};

export const Layout = ({ layoutId, children }: Props) => (
  <motion.main
    layoutId={layoutId}
    transition={{ duration: 0.5 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ x: 0, opacity: 0 }}
  >
    <Flex
      overflowY="auto"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      mx="auto"
      width="clamp(0%, 90vw, 400px)"
      p="1rem"
    >
      {children}
    </Flex>
  </motion.main>
);
