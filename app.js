const express = require('express');
const app = express();

// view engine setup
app.set('view engine', 'ejs');
// our templates live under src/views now
app.set('views', __dirname + '/src/views');

// static files
app.use(express.static(__dirname + '/public'));  // public directory remains at project root

// routes
const homeRouter = require('./src/routes/home');
app.use('/', homeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});