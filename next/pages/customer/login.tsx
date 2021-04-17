import {Button} from "@chakra-ui/button";
import {Heading, Text, VStack} from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <>
      <VStack>
        <Heading>Welcome!</Heading>
        <Text>Sign up with your Service NSW account to continue</Text>
        <Button>
          <Image src="./Welcome.png" width={100} height={100}/>
          Continue with Service NSW
        </Button>
      </VStack>
    </>
  );
};

export default Login;