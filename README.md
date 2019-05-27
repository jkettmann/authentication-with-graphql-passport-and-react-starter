This project was set up using `create-react-app`. All client side code resides in the `/src` folder. You can find the code for the GraphQL API inside the `/api` directory.

## Articles of this series

[Introduction and implementation of dummy API](https://jkettmann.com/authentication-and-authorization-with-graphql-and-passport/)

[Authentication with credentials using GraphQL and Passport](https://jkettmann.com/password-based-authentication-with-graphql-and-passport/)

[Facebook login with GraphQL and Passport](https://jkettmann.com/facebook-login-with-graphql-and-passport/)

Apollo-React app for authentication with GraphQL and Passport (coming soon)


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