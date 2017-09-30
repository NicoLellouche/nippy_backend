var express = require('express');
var mysql = require('mysql');
var app = express();
var PORT = process.env.PORT || 3000;


app.get('/', function (req, res) {
	res.send('Car_data connexion setting up...');
});

app.listen(PORT, function(){
	console.log('express listening on port' + PORT + 'Tabarnak!');
});

var connection = mysql.createConnection({
  host     : '213.162.52.162',
  user     : 'test_nippycar',
  password : '37xjbejxkxpppyu4',
  database : 'test_jato'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as user ' + connection.user);
});
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();