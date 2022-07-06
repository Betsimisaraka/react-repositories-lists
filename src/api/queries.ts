export const searchRepositories = `
   query searchRepository($searchInput: String!){
    search(
      query: $searchInput
      type: REPOSITORY
      first: 5
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      nodes {
        ... on Repository {
          description
          name
          url
          forkCount
          stargazerCount
          id
        }
      }
    }}
`