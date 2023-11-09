const { json } = require('body-parser');
const fs = require('fs');
const path = require('path');

const DATABASE_FILE = path.join(__dirname + '/../server/files/data.txt');

var services = function(app) {
    app.post('/write-record', function(req, res) {
        var id = "lib" + Date.now();
        console.log("name " + req.body.name);
        var burgerData = {
            name: req.body.name,
            location: req.body.location,
            type: req.body.type,
            value: req.body.value,
            rating: req.body.rating,
            

        };
        console.log("burger init " + JSON.stringify(burgerData))

        var burgerArray = [];

        if(fs.existsSync(DATABASE_FILE)) {
            fs.readFile(DATABASE_FILE, "utf-8", function(err, data){
                if(err) {
                    res.send(JSON.stringify({msg: err}));
                }else {
                    burgerArray = JSON.parse(data);
                    burgerArray.push(burgerData);

                    fs.writeFile(DATABASE_FILE, JSON.stringify(burgerArray), function(err) {
                        if(err) {
                            res.send(JSON.stringify({msg: err}));

                        }
                        else {
                            res.send(JSON.stringify({msg: "SUCCESS"}))
                        }
                    })
                    
                }
            })
        }
        else{
            burgerArray.push(burgerData);
            console.log(JSON.stringify(burgerData));
            console.log(JSON.stringify(burgerArray));

            fs.writeFile(DATABASE_FILE, JSON.stringify(burgerArray),function(err){
                if(err){
                    res.send(JSON.stringify({msg: err}));
                }
                else{
                    res.send(JSON.stringify({msg: "SUCCUSS"}));
                }
            });
        }

    });

    app.get("/get-records", function(req, res){
        if(fs.existsSync(DATABASE_FILE)){
            fs.readFile(DATABASE_FILE, "utf-8", function(err, data){
                if(err){
                    res.send(JSON.stringify({msg: err}));
                }
                else{
                    libraryData = JSON.parse(data);
                    res.send(JSON.stringify({msg: "SUCCUSS", reviews: libraryData}));
                }
            })
        }
        else{
            var data = [];
            res.send(JSON.stringify({msg: "SUCCUSS", reviews: libraryData}));
        }
    })
};

module.exports = services;