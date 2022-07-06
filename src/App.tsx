import * as React from "react"
import { ClientContext, GraphQLClient } from "graphql-hooks"
import RepositoryList from "./component/RepositoryList"

const client = new GraphQLClient({
  url: 'https://api.github.com/graphql',
  headers: {
    Authorization:`bearer ${process.env.REACT_APP_GH_TOKEN}`
  }
})

export const App = () => {
  return (
    <ClientContext.Provider value={client}>
      <RepositoryList />
    </ClientContext.Provider>
  )
}

