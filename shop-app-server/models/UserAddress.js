const db = require('../db');
const mongoose = db.mongoose;
const Schema = db.Schema;
const UserSchema = new Schema({
  user: {
    type: String,
    default: ''
  },
  name:{
      type:String,
      default:''
  },
  phone:{
      type:String,
      default:''
  },
  address:{
      type:String,
      default:''
  },
  defaultAddress:{
      type:Boolean,
      default:''
  }
});

// 商品分类模型
const Address = mongoose.model('UserAddress',UserSchema);

module.exports = Address;
