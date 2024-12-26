const mysql= require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'gabishes',
    password: 'gabi123',
    database: 'taylor_api'
});

connection.connect((err) =>{
    if(err){
        console.error('Error connecting to the database:' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

module.exports = connection;