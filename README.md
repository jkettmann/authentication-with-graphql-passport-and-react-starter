This project was set up using `create-react-app`. All client side code resides in the `/src` folder. You can find the code for the GraphQL API inside the `/api` directory.

## Articles of this series

[Preparing a GraphQL server for authentication](https://jkettmann.com/authentication-and-authorization-with-graphql-and-passport/)

[Password-based authentication with GraphQL and Passport](https://jkettmann.com/password-based-authentication-with-graphql-and-passport/)

[Facebook login with GraphQL and Passport](https://jkettmann.com/facebook-login-with-graphql-and-passport/)

[Building the React  frontend](https://jkettmann.com/authentication-with-graphql-and-passport-js-the-frontend/)

[3 ways for authorization with GraphQL and Apollo](https://jkettmann.com/3-ways-for-authorization-with-graphql-and-apollo/)

[Authorization with GraphQL and custom directives](https://jkettmann.com/authorization-with-graphql-and-custom-directives/)


## How to install and run the project

To install and start the app run following commands.

```
npm install
npm start
```

Visit [http://localhost:4000/graphql](http://localhost:4000/graphql). You will see the Apollo playground. There you can run following query and mutation

```graphql
query {
  currentUser {
    id
    firstName
    lastName
    email
  }
}

mutation {
  logout
}
```