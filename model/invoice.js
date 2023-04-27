module.exports = (sequelize, DataTypes) => {

    const Invoice = sequelize.define('invoice',{
        totalPrice: {
            type:DataTypes.STRING,
        },
        totalWeight:{
            type:DataTypes.STRING
        },
        
    },{
        
        timestamps: false,
    });
    return Invoice;
}