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
    theme,
  } from "@chakra-ui/react"

const RepositoryList = () => {
  return (
    <ChakraProvider theme={theme}>
    <TableContainer>
      <Table variant='striped' colorScheme='teal'>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Stars</Th>
            <Th isNumeric>Forks</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  </ChakraProvider>
  )
}

export default RepositoryList