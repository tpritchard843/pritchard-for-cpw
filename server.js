const express = require('express');
const app = express();
const logger = require('morgan');

const mainRoutes = require('./routes/main');
const aboutRoutes = require('./routes/about');
const voteRoutes = require('./routes/vote');
const issuesRoutes = require('./routes/issues');
const issues = require('./controllers/issues');

require('dotenv').config({path: './config/.env'});
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

const PORT = process.env.PORT || 8000;

app.use('/', mainRoutes);
app.use('/about', aboutRoutes);
app.use('/vote', voteRoutes);
app.use('/priorities', issuesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}.`)
})
