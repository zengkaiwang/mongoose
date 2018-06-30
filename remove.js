var User = require("./user");

function del() {
    //需要删除的数据
    var wherestr = {'username' : 'vilim'};

    User.remove(wherestr,function (err, res) {
        if(err){
            console.log("Error: " + err)
        }else{
            console.log("Success Remove: " + res);
        }
    })
}

del();