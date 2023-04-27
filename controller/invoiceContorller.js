
const db = require('../model');

const Invoice = db.invoice;
const Item = db.item;
const Inovice_item = db.invoice_item;
const product = db.product;
const sequelize = db.sequelize;

const  {Sequelize , Op , QueryTypes, DataTypes} = require('sequelize');

var insertInvoice = async (totalprice , totalweight ,item)=>{
    
    try{
        const inv = await Invoice.create({
            totalPrice:totalprice,
            totalWeight:totalweight,
            
        });
        
        const its = await Item.bulkCreate(
            item,
            
               
            
        );
        console.log(its);
        for (const it of its ){
            console.log(inv.id)
            console.log(it.id);
            const in_it = await Inovice_item.create({
                invoice_id:inv.id,
                item_id: it.id
            });
        }
        

        
        return true;
    }catch(e){
        return false;
    }
}


var selectInvoice = async ()=>{
    try{
        console.log(";lkd;alkdsj;akld")
       let data=  await Invoice.findAll({

        attributes:['totalPrice','totalWeight'],
        include:[{
            model:Item,
            through:{
                attributes:[]
            },
            as:"item"
        }]
       
         });
         
         return data;
    }catch(err){
        return false;
    }
   
    
}
module.exports = {
     
    insertInvoice,
    selectInvoice
}