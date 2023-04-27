module.exports = (sequelize , DataTypes) =>{
    const Item = sequelize.define('item', {
        name:{
            type: DataTypes.STRING,
        },
        number:{
            type: DataTypes.INTEGER,
        },
        weight:{
            type: DataTypes.STRING,
        },
        price: {
            type:DataTypes.STRING
        }
},{
    timestamps:false
});
return Item;
}