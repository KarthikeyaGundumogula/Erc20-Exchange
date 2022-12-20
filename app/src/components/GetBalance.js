import{ ethers} from "ethers"
import React from 'react'
import { Button} from '@chakra-ui/react'

const GetBalance = (props) => {
    const clickHandler=async ()=>{
      const token=await new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS,process.env.REACT_APP_CONTRACT_ABI,props.user)
      const add =await props.user.getAddress()
      const balance=ethers.utils.formatEther(await token.balanceOf(add))
      console.log(balance)
      props.balanceLift(balance)
    }

  return (
    <div>
    <Button colorScheme="blue" size="sm" inline="true" margin={2} onClick={clickHandler}>
      Get Balance
    </Button>
    </div>
  )
}

export default GetBalance