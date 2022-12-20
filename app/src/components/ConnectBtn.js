import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { ethers } from "ethers";

const ConnectBtn = (props) => {
  const [isConnected, setIsConnected] = useState(false);

  const clickHandler = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", [])
    const user = await provider.getSigner();
    setIsConnected(true);
    props.clickLift(user);
  };

  return (
    <div>
      <Button colorScheme="blue" size="sm" margin={2} onClick={clickHandler}>
        {isConnected ? ".connected" : ".connect"}
      </Button>
    </div>
  );
};

export default ConnectBtn;
