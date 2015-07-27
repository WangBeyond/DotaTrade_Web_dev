var express = require('express');
var app = express();

app.set('views','cloud/views');
app.set('view engine', 'ejs');
app.use(express.bodyParser());

app.get('/hello', function(req, res) {
  //console.log('Exec path ................... ' + process.execPath);
  //res.render("hello");
  res.render('hello', { message: 'Congrats, you just set up your app!' + 'Exec path ................... ' + process.execPath});
});

app.listen();