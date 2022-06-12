import { ApolloServer } from 'apollo-server'
import { schema } from '@app/schema'

const server = new ApolloServer({
  schema,
})

const port = 3000

server.listen({ port }).then(({ url }) => {
  console.log(`Server is ready at ${url}`)
})
