const express = require('express');
const router = express.Router();
const multer = require('multer');

var headerConfig = multer.diskStorage({
  // 目的地
  destination:'public/allHeaders',
  filename:function(req,file,callback){
    console.log(req)
    // 图片名字 账号名字加类型
    // 获取登录用户的账号
    var name = req.body.userName;
    // originalname 图片名字  666666.JPG
    var type = file.originalname.split('.');
    // .spli()  以括号里面的内容进行分割
    // 分割的结果是数组  JPG , PNG ,JPEG
    type = type[type.length - 1];
    // callback生成的是图片最终的名字
    // 里面有两个参数
    // 参数1：错误信息
    // 参数2：图片名字的拼接方式
    callback(null, name + '.' + type);

  }
})
// 图片进行存储的时候 使用headerConfig这个配置信息
var upLoad = multer({ storage: headerConfig });

const Users = require('../../../models/product_type');
const Products = require('../../../models/products');
const Address = require('../../../models/UserAddress');
// 注册
router.post('/regist', (req,res) => {
  let model = new Users(req.body);
  var user = req.body.user;
  Users.find({user:user}).exec(function(err,data){
    if(err){
      res.json({
        status: 'n',
        msg:err
      })
    }else{
      if(data.length == 0){
        model.save()
        .then(rev => {
          res.json({
            status: 'y',
            msg: '注册成功',
            info: '保存数据成功'
          })
        })
        .catch(err => {
          res.json({
            status: 'n',
            msg: '注册失败',
            info: err,
          });
        })
      }else{
        res.json({
          status: 'n',
          msg: '用户名已被注册'
        })
      }
    }
  })
});

//  登录
router.post('/login', (req, res) => {
  var user = req.body.user;
  var psw = req.body.psw;
  res.cookie('name',user,{ maxAge:900000, httpOnly:true });
  Users.find({user:user}).exec(function(err,data){
    if(err){
      res.json({
        status: 'n',
        msg: '查找失败',
        info: err,
      })
    }else{
      console.log(data)
      if(data[0].psw != psw){
        res.json({
          status:'n',
          msg:'登录失败'
        })
      }else{
          res.json({
            status: 'y',
            msg: '登录成功'
          })
      }
    }
  })
});
// 更改密码
router.post('/update',(req,res) => {
 var user = req.body.user;
 var psw = req.body.psw;
 console.log(psw)
 var psw2 = req.body.psw2;
 var psw1 = req.body.psw1;
Users.find({user:user,psw:psw}).exec(function(err,data){
  if(!err){
    console.log(data)
    Users.update({user:user},{psw:psw1},function(err,data){
      if(!err){
        res.json({
          status: 'y',
          msg: '修改成功'
        })
      }else{
        res.json({
          status:'n',
          msg:'修改失败'
        })
      }
  })
  }else{
    res.json({
      status:'n',
      msg:'原密码输入不正确'
    })
  }
})
});
// 提交订单
router.post('/subOrder',(req,res) => {
  let model = new Products(req.body);
  console.log(model)
      model.save()
      .then(rev => {
        res.json({
          status: 'y',
          msg: '保存成功',
          info: '保存数据成功'
        })
      })
      .catch(err => {
        res.json({
          status: 'n',
          msg: '保存失败',
          info: err,
        });
      })
})
router.post('/orderlist',(req,res) => {
  var user = req.body.user;
  Products.find({user:user}).exec(function(err,data){
    if(!err){
      res.json({
        status:'y',
        msg: '查找成功',
        data
      })
    }else{
      res.json({
        status: 'n',
        msg: '查找失败'
      })
    }
  })
})
router.post('/delete',(req,res) => {
  var id = req.body.id
  console.log(id)
  Address.findByIdAndRemove(req.body.id)
    .then(res => {
      res.json({
        status: 'n',
        msg: '删除成功',
        info: '删除数据成功'
      })
    })
    .catch(err => {
      res.json({
        status: 'n',
        msg: '删除数据失败',
        info: err,
      });
    })
});

// 上传头像
router.post('/upload',upLoad.single('file'),function(req,res){
  var name = req.body.userName;
  console.log(name)
  // 获取类型
  var type = req.file.originalname.split('.');

  type = type[type.length - 1];

  var header = 'allHeaders/' + name + '.' + type;

  res.send(header)
    
})

router.post('/address',(req,res)=>{
  let model = new Address(req.body);
  console.log(model)
      model.save()
      .then(rev => {
        res.json({
          status: 'y',
          msg: '保存成功',
          info: '保存数据成功'
        })
      })
      .catch(err => {
        res.json({
          status: 'n',
          msg: '保存失败',
          info: err,
        });
      })
})

router.post('/addressList',(req,res) =>{
     var user = req.body.user;
     console.log(user)
     Address.find({user:user}).exec(function(err,data){
         if(!err){
           res.json({
             status:'y',
             msg:'查找成功',
             data
           })
         }else{
           res.json({
             status:'n',
             msg:'查找失败'
           })
         }
     })
})
router.post('/editSearch',(req,res) =>{
  var id = req.body.id;
  Address.find({_id:id}).exec(function(err,data){
    if(!err){
      res.json({
        status:'y',
        msg:'查找成功',
        data
      })
    }else{
      res.json({
        status:'n',
        msg:'查找失败'
      })
    }
  })
})
router.post('/updateAddress',(req,res)=>{
    var id = req.body._id;
    console.log(id)
    var name = req.body.name;
    var phone = req.body.phone;
    var address = req.body.address;
    var defaultAddress = req.body.defaultAddress;
    var updateStr = {
      'name':name,
      'phone':phone,
      'address':address,
      'defaultAddress':defaultAddress,
    }
    Address.findByIdAndUpdate(id,updateStr).then(res=>{
       if(!err){
         res.json({
           status:'y'
         })
       }else{
         res.json({
           status:n
         })
       }
    })
})
module.exports = router;
