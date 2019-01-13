const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schemas');

const app = express();

// Remplacer avec ton url mlab
const MONGO_URI = 'mongodb://jeff:JFRtnjsjade2010@ds255784.mlab.com:55784/movies';
if (!MONGO_URI) {
  throw new Error('Tu dois fournir une url mongoDB');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI,
    { useNewUrlParser: true });
mongoose.connection
    .once('open', () => console.log('Connecté à MongoLab'))
    .on('error', error => console.log('Erreur de connexion à MongoLab:', error));

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
