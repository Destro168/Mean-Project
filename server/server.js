// Setup all expressjs stuff.
var cors = require('cors');
const express = require('express')
var app = express();
app.use(cors());
const port = 8080

// ExpressJS Functions for handling urls.
app.post('/saveData', (req, res) => saveData());
app.get('/getData', (req, res) => getUserData(res));
app.listen(port, () => console.log("Conneciton Made"));

// Setup all mangoose stuff.
var mongoose = require('mongoose');

// Connect to MongoDB and create/use database called MT2Test
mongoose.connect('mongodb://localhost/MT2Test');

var userDataSchema = new mongoose.Schema({
    AKOID: Number,
    userDataJSON: String,
    updated_at: {
        type: Date,
        default: Date.now
    },
});

var userDataModel = mongoose.model('UserDataModel', userDataSchema);

function saveData() {
    console.log("Starting writes!");
    console.time('looper');

    for (var i = 0; i < 1000; i++) {
        new userDataModel({
            AKOID: i,
            userDataJSON: "{Some String}",
        }).save();
    }

    console.timeEnd('looper');
    console.log("Ending writes!");
}

/* The delete function is unused. Would need to be actually written...
function deleteData() {
    userDataModel.delete
    userDataModel.find(function (err, dataModel) {
        if (err)
            return console.error("Unknown Error (926): " + err);

        console.log(dataModel);
    });
}
*/

function getUserData(res) {
    // Just get the first record.
    userDataModel.findById("5c048c5009700e0d584e9253", function (err, post) {
        if (err) {
            res.json(err);
            return;
        }
        
        res.status(200);
        res.json(post);
        res.end();
    });
}

console.log("Server started successfully on localhost:8080");

/*

Old code from before using Mongoose and ExpressJS.

// Setup all mangodb stuff.
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var databaseURL = "mongodb://localhost:27017/customWebsite";

// Mongodb functions called by expressjs functions.
function createDatabase() {
    MongoClient.connect(databaseURL, function (err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
    });
}

function saveUserData(userAKOID) {


}

function getUserData(userAKOID) {

    MongoClient.connect(databaseURL, function (err, db) {
        if (err) throw err;

        var dbo = db.db("customWebsite");

        dbo.collection("customers").findOne({}, function (err, result) {
            if (err) throw err;
            console.log(result.name);
            db.close();
        });
    });
}
*/


/*

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World 3!');

    if (req.url === "/write") {
        console.log("Woah, we managed to connect AngularJS and Node.");
    }
    if (req.url === "/read") {
        console.log("Woah, we managed to connect AngularJS and Node.");
    }

    // Read POST Methods.
    if (req.method == 'POST') {
        var body = '';

        req.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                req.connection.destroy();
        });

        req.on('end', function () {
            var post = qs.parse(body);
            console.log("POST: ", post);

            // use post['blah'], etc.
        });
    }
}).listen(8080);
*/