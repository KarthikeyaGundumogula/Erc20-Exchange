import React from 'react'
import { Button } from '@chakra-ui/react'

const GetBalance = (props) => {

    const clickHandler=()=>{
        
    }

  return (
    <div>
    <Button colorScheme="blue" size="sm" inline="true" margin={2} onClick={clickHandler}>
      Get Balance
    </Button></div>
  )
}

export default GetBalance