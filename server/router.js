const path = require('path');

// page listeners
var router = function(app){
 
    app.get("/", function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../client/BeefRate.html"));
    });
    app.get("/BeefRate", function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../client/BeefRate.html"));
    });

    app.get("/write-data", function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../client/write-data.html"));
    });

    app.get("/view-data", function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../client/view-data.html"));
    });
};

module.exports = router;