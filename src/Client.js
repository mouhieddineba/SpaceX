import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'

const Link = new HttpLink({
    uri: "http://10.3.222.195:4000/graphql"
})

const Client = new ApolloClient({
    link: Link,
    cache: new InMemoryCache
});

export default Client;