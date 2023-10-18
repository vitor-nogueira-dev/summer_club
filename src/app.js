const express = require('express');
const clubRouter = require('./routes/club.routes');

const app = express();

app.use('/club', clubRouter);
// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

module.exports = app;
