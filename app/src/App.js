import React from "react";
import { Center, Button, Box, HStack, Input } from "@chakra-ui/react";

function app() {
  return (
    <Box w="100%" h="45rem" bg="black">
      <Center>
        <Box
          borderWidth={10}
          w="40%"
          h="35rem"
          bg="whitesmoke"
          marginTop="5rem"
        >
          <HStack spacing="70%">
            <Button colorScheme="blue" size="sm" inline="true">
              Get Balance
            </Button>
            <Button colorScheme="blue" size="sm">
              .connect
            </Button>
          </HStack>
          <HStack>
            <Input
              placeholder="Enter to address"
              marginTop="10rem"
              w="35%"
              borderWidth={2}

            />
          </HStack>
          <Center></Center>
        </Box>
      </Center>
    </Box>
  );
}

export default app;
