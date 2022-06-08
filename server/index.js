const express = require("express");
require("dotenv").config();
const color = require("colors");
const connectDB = require("./config/db");
const { graphqlHttp, graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const port = process.env.PORT || 5000;

const app = express();

//connect to SB
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server runnign on Port ${port}`));
