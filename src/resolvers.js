const messageHello = "Hello World !"

const resolvers = {
    Query: {
        hello: () => messageHello
    }
}

export default resolvers