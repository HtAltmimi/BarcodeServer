module.exports = (sequelize , DataTypes) =>{

    const Product  = sequelize.define('product', {
        name: {
            type: DataTypes.STRING
        },
        weight:{
            type:DataTypes.STRING
        },
        price: {
            type: DataTypes.STRING
        }

    },{
        timestamps:false
    });
    return Product;
}