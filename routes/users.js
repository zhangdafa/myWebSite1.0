var express = require('express');
var router = express.Router();
var mysql = require("mysql");

var connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "mywebsite",
    dateStrings: true
});
/* GET users listing. */

// refresh
router.post('/refresh', function(req, res) {
    connection.query("SELECT * FROM articles WHERE status=1", function(err, rows) {
        console.log(rows);
        res.json(rows);
    });
});
// 增加数据
router.post('/insert_db', function(req, res, next) {

    var title=req.body.title,
    	content=req.body.content,
    	time=req.body.time;

    connection.query("INSERT INTO articles (id,title,time,content,status) VALUES (NULL,?,?,?,1)",[title,time,content],
    				 function(err,rows){
					    res.json({success:"插入成功"});

    });
});
router.post('/delete_db',function(req,res){
	var deleteID=req.body.deleteID;
	connection.query("UPDATE articles SET status=0 WHERE id=?",[deleteID],function(err,rows){
		res.json({success:"删除成功"});
	});
});
router.post('/update_db',function(req,res){
	var id=req.body.id,
		title=req.body.title,
		content=req.body.content,
		time=req.body.time;
	connection.query("UPDATE articles SET title=?,content=?,time=? WHERE id=?",[title,content,time,id],
					 function(err,rows){
					 	res.json({success:"修改完成"});
					 }
		);
});
module.exports = router;
