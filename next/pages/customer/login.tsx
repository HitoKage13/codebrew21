import {Button} from "@chakra-ui/button";
import {Heading, Text, VStack} from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";
import styled from "@emotion/styled";

const ImageDivider = styled.div`
  position: static;
  width: 81px;
  height: 44px;
  left: 16px;
  top: 12px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
  background-color: white;
`

const Login = () => {
  return (
    <>
      <VStack>
        <Heading>Welcome!</Heading>
        <Text>Sign up with your Service NSW account to continue</Text>
        <Button style={{ width: '331px', height: '68px', backgroundColor: '#3372D3', color: 'white' }}>
          <ImageDivider>
            <Image src="/ServiceNSW.png" width={74} height={27} />
          </ImageDivider>
          Continue with Service NSW
        </Button>
      </VStack>
    </>
  );
};

export default Login;