const express = require('express');
const app = express();
const logger = require('morgan');

const mainRoutes = require('./routes/main')

require('dotenv').config({path: './config/.env'});
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

const PORT = process.env.PORT || 8000;

app.get('/', mainRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}.`)
})
