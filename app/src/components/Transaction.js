import React,{useState} from "react";
import {
  Button,
  Input,
  Grid,
  GridItem,
  Heading,
  FormControl,
} from "@chakra-ui/react";
import { ethers } from "ethers";

const Transaction = (props) => {
  const [address,setAddress] = useState("address")
  const [amount,setAmount]=useState("0")

  const clickHandler=async ()=>{ 
    const token=await new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS,process.env.REACT_APP_CONTRACT_ABI,props.user)
    if(props.balance<ethers.utils.parseEther(amount)){
      alert("cant process transaction not enough balance");
      return
    }
    let tx=await token.transfer(address,ethers.utils.parseEther(amount))
  }

  const addressHandler =(event)=>{
    setAddress(event.target.value)
  }
  const amountHandler =(event) =>{
    setAmount(event.target.value)
  }

  return (
    <React.Fragment>
      <FormControl>
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
            onChange={addressHandler}
          />
        </GridItem>
        <GridItem rowStart={2} colStart={5} colEnd={8} margin={1}>
          <Input
            placeholder="Amount"
            borderWidth={1}
            type="number"
            borderColor="black"
            margin={2}
            onChange={amountHandler}
          />
        </GridItem>
        <GridItem rowStart={2} colStart={8} colEnd={9} margin={1}>
          <Button margin={2} colorScheme="cyan" onClick={clickHandler}>
            {props.txType}
          </Button>
        </GridItem>
      </Grid>
      </FormControl>
    </React.Fragment>
  );
};

export default Transaction;
