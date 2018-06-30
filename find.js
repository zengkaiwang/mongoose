var User = require('./user');

function findByConditions() {
    var wherestr = {'username' : 'vilim'};
    User.find(wherestr,function (err, res) {
        if(err){
            console.log("Error: " + err);
        }else{
            console.log("Find Res: " + res);
        }
    });
}

findByConditions();