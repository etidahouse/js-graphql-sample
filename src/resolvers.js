const messageHello = "Hello World !"

let users = [
    {id: 1, name: "Jake", email: "jake@email.net", age: 23},
    {id: 1, name: "Paul", email: "paul@email.net", age: 27}
]

const resolvers = {
    Query: {
        hello: (parent, args, context, info) => messageHello,
        users: () => users,
        user: (parent, { id }) => {
            return users.find(user => user.id == id)
        }
    }
}

export default resolvers