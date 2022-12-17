import React, { useState } from "react";
import {
  Center,
  Button,
  Grid,
  GridItem,
  Image,
  Text,
  Box,
  ChakraProvider,
} from "@chakra-ui/react";
import ConnectBtn from "./components/ConnectBtn";
import Transaction from "./components/Transaction";
import GetBalance from "./components/GetBalance";

const App = () => {
  const [accAddress, setAccAddress] = useState("acc address");

  const getAddress =(address)=>{
    setAccAddress(address);
  }

  return (
    <ChakraProvider>
      <Center bg="white.200">
        <Box borderWidth={10} w="40%" h="100%" bg="whitesmoke">
          <Grid templateColumns="repeat(5,1fr)" gap={4}>
            <GridItem colSpan={2}>
              <GetBalance user={accAddress} />
            </GridItem>
            <GridItem colStart={6} colEnd={8}>
              <ConnectBtn clickLift={getAddress} />
            </GridItem>
          </Grid>
          <Center>
            <Image
              borderRadius="full"
              boxSize="200px"
              borderColor="black.100"
              alt="Karthikeya Kap"
              fallbackSrc="https://via.placeholder.com/200"
            />
          </Center>
          <Center>
            <Text>{accAddress}</Text>
          </Center>
          <Transaction txType="Send" />
          <Transaction txType="Mint" />
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default App;
