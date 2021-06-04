const express = require('express');

const app = express();
const port = 5000;

// static file
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));

// Templating engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Routes
const masterRouters = require('./src/routes/master');
app.use('/', masterRouters);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
