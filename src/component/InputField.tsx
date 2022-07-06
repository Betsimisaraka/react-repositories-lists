import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'

interface Props {
    inputValue: string;
    setInputValue: (value: string) => void
}

const InputField = ({ inputValue, setInputValue}:Props) => {

  return (
    <InputGroup>
        <InputLeftElement
        pointerEvents='none'
        children={<SearchIcon color='gray.300' />}
        />
        <Input variant='outline' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Enter github name' />
    </InputGroup>
  )
}

export default InputField