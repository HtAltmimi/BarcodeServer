
const db= require('../model');

const product = db.product;
const  {Sequelize , Op , QueryTypes, DataTypes} = require('sequelize');

var InsertProduct =async  (id,name , weight , price)=> {
     try{
        const pro = await product.create({
            id:id,
            name:name,
            weight:weight,
            price:price
        });
        if(pro)
        return true 
        else return false;
     } catch(e){
        return false;
     }
}

var selectProduct = async (id) =>{
   
   try{
      let selectProduct = await product.findOne({
         where:{
            id :id
        },
        attributes:[
               "id","name","weight","price"
            ],
      }) ;
      console.log (JSON.stringify(selectProduct))
      return JSON.stringify(selectProduct);
   }catch(error){
      const err = new Error("Can Not Select Product")
      return err;
   }
}

module.exports = {
   InsertProduct,
   selectProduct,
}