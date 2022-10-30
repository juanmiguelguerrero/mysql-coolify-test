const mysql = require('mysql');

const connection = mysql.createConnection({
	host: process.env.,
	database: '',
	user: '',
	password: ''
});


connection.connect(function(error) {

	if (error) {
		console.log("Connection error: " + error.stack);
		return;
	}

	console.log("Connection success whith ID: " + connection.threadId)
})

connection.end();