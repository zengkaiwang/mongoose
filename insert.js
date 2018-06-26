//引入User的模型model
var User = require('./user.js');

//把数据插入到数据库中的函数
function insert() {
	
	//用模型model创建一个Entity实体，就是一条User数据
	var user_1 = new User({
		username: 'vilim',
		userpwd: '123456',
		userage: 20,
		logindate: new Date()
	});

	//调用user_1的save方法，插入user_1的数据到数据库
	user_1.save(function (err, res) {
		if (err) {
			console.log('Error:', err)
		} else {
			console.log('Success res:', res)
		}
	})
}

//执行插入数据函数
insert();