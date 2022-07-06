import { ClientContext, GraphQLClient } from "graphql-hooks"
import RepositoryList from "./component/RepositoryList"
import { ChakraProvider, theme, Text, Divider, Center } from "@chakra-ui/react"
import InputField from "./component/InputField"
import { useState } from "react"
import useDebounce from "./hooks/useDebounce"

const client = new GraphQLClient({
  url: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GH_TOKEN}`
  }
})

export const App = () => {
  const [inputValue, setInputValue] = useState('react')

  const debounceSearchTerm = useDebounce(inputValue, 500)

  return (
    <ClientContext.Provider value={client}>
      <ChakraProvider theme={theme}>
        <InputField inputValue={inputValue} setInputValue={setInputValue} />
        <Text fontSize='sm'>Search any Github repositories</Text>
        <Center height='60px'>
          <Divider />
        </Center>
        <RepositoryList searchQuery={debounceSearchTerm} />
      </ChakraProvider>
    </ClientContext.Provider>
  )
}

