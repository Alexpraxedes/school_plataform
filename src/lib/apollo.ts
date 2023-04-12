import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/clgd1eeui4nav01t3az29bslq/master',
    cache: new InMemoryCache()
});