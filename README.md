# Sample GraphQL JS API

## Install
```bash
npm install --global yarn  
yarn add --dev graphpack
```

## Run
yarn dev  
see at http://localhost:4000

## Test

### Query

Hello Query :
`query {
    hello
}`

Users Query :
`query {
  	users {
      id
      name
    }
}`

Get an User Query :
`query {
  	user(id: 1) {
      id
      name
    }
}`

### Mutation

Create user :
`mutation {
  createUser(id: 3, name: "Eti", email: "eti@email.net", age: 27) {
    id
    name
    age
  }
}`

Delete user :
`mutation {
  deleteUser(id: 2)
}`
