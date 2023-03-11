//import required libraries
const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const PORT = 4000;
const cors = require('cors');

//Setup express app
const app = express();

//allow cross-origin requests
app.use(cors());

//connect to mongodb database
mongoose.connect(
  'mongodb+srv://vrushank796:Vrushank796@cluster0.ona7y.mongodb.net/gql-vrushank'
);

mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

//GraphQL Endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

//Setup the app to listen for requests on port 4000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
