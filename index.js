import {GraphQLServer} from "graphql-yoga";
import resolvers from "./graphql/resolvers"

const Server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers: resolvers 
});

Server.start(() => console.log(`keep running!!!!!!`));