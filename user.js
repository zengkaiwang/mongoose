//导入之前我们创建的mongoose对象
var mongoose = require('./db.js');

//引入schema对象
var Schema = mongoose.Schema;

//创建一个schema实例
var UserSchema = new Schema({
	username: {type: String},
	userpwd: {type: String},
	userage: {type: Number},
	logindate: {type: Date}
})

//利用UserSchema实例，发布一个User的model并导出
module.exports = mongoose.model('User', UserSchema);