
const {Sequelize , DataTypes , Model} = require("sequelize");

const sequelize = new Sequelize('', '','',{
    host:'145.14.156.192',
    dialect:'mysql',
    logging:true,
    pool:{max:5 , min:0,idle:10000}
});

sequelize.authenticate()
.then(()=>{
    console.log('database connection')
})
.catch(
    err=> console.log(err)
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.sequelize.sync({force:false, alter:false})
.then(
(  )=>{console.log('yah re-sync')}
);

db.product = require('./product')(sequelize , DataTypes);
db.item = require('./item')(sequelize, DataTypes);
db.invoice = require('./invoice')(sequelize, DataTypes);
db.invoice_item = require('./invoice-item')(sequelize, DataTypes);


db.invoice.belongsToMany(db.item, {through:"invoice_item",foreignKey:"invoice_id", as : "item"})
db.item.belongsToMany(db.invoice, {through:"invoice_item",foreignKey:"item_id", as : "invoice"})
module.exports = db;
