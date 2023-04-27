module.exports = (sequelize , DataTypes)=>{
    const Invoice_Item = sequelize.define('invoice_item',{
        invoice_id:{
            type: DataTypes.INTEGER,
        },
        item_id :{
            type: DataTypes.INTEGER,
        }
        
    },{
        
        timestamps: false,
    });
    return Invoice_Item;
   
}