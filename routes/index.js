var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.post('/', function(req, res, next) {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "mywebsite",
        dateStrings: true
    });
    connection.connect();
    connection.query("SELECT * FROM articles WHERE status=1", function(err, rows) {
    	if (err) {throw err;}
        res.json(rows);
        connection.end();
    });
});

module.exports = router;
