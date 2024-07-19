const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("journal_app","root","Mayur211065",{ 
    host : "db", 
    dialect: 'mysql'
}
);

const db = {};
db.sequelize = sequelize;
db.models = {}; 
db.models.User=require("./user")(sequelize,Sequelize.DataTypes);

module.exports = db;