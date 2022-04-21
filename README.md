# Sample GraphQL JS API

## Install
npm install --global yarn  
yarn add --dev graphpack

## Run
yarn dev  
see at http://localhost:4000

## Test

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