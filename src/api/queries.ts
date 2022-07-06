export const searchRepositories = `
{
    search(
      query: "react"
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
    }
  }
`