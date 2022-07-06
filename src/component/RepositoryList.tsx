import React from 'react'

import {
    ChakraProvider,
    TableContainer,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Link,
    theme,
  } from "@chakra-ui/react"
import { useQuery } from 'graphql-hooks'
import { searchRepositories } from '../api/queries'
import { ExternalLinkIcon } from '@chakra-ui/icons'

interface RepositoryNode {
  id: string,
  name: string,
  description: string,
  url: string,
  stargazerCount: number,
  forkCount: number
}

interface RepositoriesResult {
  search: {nodes: RepositoryNode[]}
}

const RepositoryList = () => {

    const { loading, error, data } = useQuery<RepositoriesResult>(searchRepositories, {
        variables: {
          limit: 10
        }
    })

    console.log(data)

    if (loading) return <div>'Loading...'</div>
    if (error) return <div>'Something is wrong'</div>

  return (
    <ChakraProvider theme={theme}>
    <TableContainer>
      <Table variant='striped' colorScheme='teal'>
        <TableCaption>React repositories list</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th isNumeric>Stars</Th>
            <Th isNumeric>Forks</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.search?.nodes.map(({ id, name, stargazerCount, forkCount, description, url}) => (
            <Tr key={id}>
              <Td>
                <Link href={url} isExternal>
                  {name} <ExternalLinkIcon mx='2px' />
                </Link>
              </Td>
              <Td>{description}</Td>
              <Td isNumeric>{stargazerCount}</Td>
              <Td isNumeric>{forkCount}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  </ChakraProvider>
  )
}

export default RepositoryList