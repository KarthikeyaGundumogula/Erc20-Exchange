import React from "react";
import {
  Center,
  Button,
  Input,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";

const Transaction = (props) => {
  return (
    <React.Fragment>
      <Grid
        templateColumns="repeat(8,1fr)"
        templateRows="repeat(2,auto)"
        borderWidth={1}
        borderColor="black.100"
        margin={1}
      >
        <GridItem rowStart={1} colSpan={5}>
          <Heading>{`${props.txType} Tokens`}</Heading>
        </GridItem>
        <GridItem rowStart={2} colSpan={4} margin={1}>
          <Input
            placeholder="Enter Address"
            borderWidth={1}
            borderColor="black"
            margin={2}
          />
        </GridItem>
        <GridItem rowStart={2} colStart={5} colEnd={8} margin={1}>
          <Input
            placeholder="Amount"
            borderWidth={1}
            borderColor="black"
            margin={2}
          />
        </GridItem>
        <GridItem rowStart={2} colStart={8} colEnd={9} margin={1}>
          <Button margin={2} colorScheme="cyan">
            {props.txType}
          </Button>
        </GridItem>
      </Grid>
    </React.Fragment>
  );
};

export default Transaction;
