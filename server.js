const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mongodb-social-network-API', {
  
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);

app.use(routes);
app.listen(PORT, () => console.log(`🌍 Listening and connected on localhost:${PORT}`));