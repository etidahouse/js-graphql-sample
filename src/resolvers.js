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
    },
    Mutation: {
        createUser: (parent, { id, name, email, age }) => {
            let checkID = users.findIndex(user => user.id == id)
            if (checkID == -1) {
                let newUser = { id, name, email, age }
                users.push(newUser)
                return newUser
            } else {
                throw new Error('ID already exist')
            }
        },
        deleteUser: (parent, { id }) => {
            let checkID = users.findIndex(user => user.id == id)
            if (checkID == -1) {
                users.splice(checkID, 1)
                return true
            } else {
                throw new Error('Unknow ID')
            }
        }
    }
}

export default resolvers