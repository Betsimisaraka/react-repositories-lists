import React, { useState } from 'react'

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
    CircularProgress,
    Center,
    Alert,
    AlertDescription,
    AlertTitle,
    AlertIcon,
  } from "@chakra-ui/react"
import { useQuery } from 'graphql-hooks'
import { searchRepositories } from '../api/queries'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import InputField from './InputField'

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

interface Props {
  searchQuery: string
}

const RepositoryList = ({ searchQuery }:Props) => {

    const { loading, error, data } = useQuery<RepositoriesResult>(searchRepositories, {
        variables: {
          searchInput: searchQuery
        }
    })

    if (loading) return <Center><CircularProgress size={200} color={'green'} isIndeterminate /></Center>
    if (error) return <Alert
    status='error'
    variant='subtle'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    height='200px'
    color={'red'}
  >
    <AlertIcon boxSize='40px' mr={0} />
    <AlertTitle mt={4} mb={1} fontSize='lg'>
      Application error!
    </AlertTitle>
    <AlertDescription maxWidth='sm'>
      Please check your github token or contact the admin ;)
    </AlertDescription>
  </Alert>

  return (
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
  )
}

export default RepositoryList