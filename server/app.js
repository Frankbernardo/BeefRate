const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const bodyPars = require('body-parser');

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(bodyPars.json());
app.use(bodyPars.urlencoded({extended: false}));
app.use("/client", express.static(path.resolve(__dirname + "/../client/")));

//make a server
var server;
var port = 3000;

//page listeners
var router = require("./router.js");
router(app);

//service listeners
var services = require("./services.js");
services(app);

//start the web server
server = app.listen(port, function(err) {
    if(err) throw err;

    console.log("Listening on port: " + port);
})
