import React, { useState } from "react";
import {
  Center,
  Grid,
  GridItem,
  Image,
  Text,
  Box,
  HStack,
  ChakraProvider,
  Heading,
} from "@chakra-ui/react";
import ConnectBtn from "./components/ConnectBtn";
import Transaction from "./components/Transaction";
import GetBalance from "./components/GetBalance";

const App = () => {
  const [accAddress, setAccAddress] = useState("acc address");
  const [user,setUser] = useState()
  const [balance,setBalance] = useState(0);
  const [isClicked,setIsClicked]= useState(false)

  const getUser =async (user)=>{
    setUser(user);
    setAccAddress(await user.getAddress());
  }

  const balanceInfo=(bal)=>{
    setBalance(bal);
    setIsClicked(!isClicked)
  }

  return (
    <ChakraProvider>
      <Center bg="white.200">
        <Box borderWidth={10} w="40%" h="100%" bg="whitesmoke">
          <Grid templateColumns="repeat(5,1fr)" gap={4}>
            <GridItem colSpan={3}>
              <HStack>
              <GetBalance user={user} balanceLift={balanceInfo}/>
            {isClicked&&<Heading margin={1} fontSize='3xl' color='white.200'>{balance}</Heading>}</HStack>
            </GridItem>
            <GridItem colStart={6} colEnd={8}>
              <ConnectBtn clickLift={getUser} />
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
          <Transaction txType="Send" user={user} balance={balance}/>
          <Transaction txType="Mint" user={user}/>
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default App;
