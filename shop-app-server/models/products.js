const db = require('../db');
const mongoose = db.mongoose;
const Schema = db.Schema;
const TotalList = new Schema({
  user:{
    type:String,
    default:''
  },
  userName:{
    type: String,
    default: ''
  },
  phone:{
    type: String,
    default: ''
  },
  address:{
    type: String,
    default: ''
  },
  mark:{
    type: String,
    default: ''
  },
  totalNum:{
    type: String,
    default: ''
  },
  totalPrice:{
    type: String,
    default:''
  },
  date:{
    type:String,
    default:''
  }
})
// 商品分类模型
const Products = mongoose.model('products',TotalList)

module.exports = Products;
