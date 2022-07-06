export const searchRepositories = `
   query searchRepository($searchInput: String!){
    search(
      query: $searchInput
      type: REPOSITORY
      first: 5
    ) {
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