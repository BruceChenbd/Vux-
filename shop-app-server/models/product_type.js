const db = require('../db');
const mongoose = db.mongoose;
const Schema = db.Schema;
const UserSchema = new Schema({
  user: {
    type: String,
    default: ''
  },
  psw: {
    type: String,
    default: ''
  },
});

// 商品分类模型
const Users = mongoose.model('product_type',UserSchema);

module.exports = Users;
