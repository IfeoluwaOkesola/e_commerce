const sequelize = require("./config/connections");
const { Product } = require("./models/products");

sequelize.sync({force:true}).then(rs=>{
    console.log(rs)
}).catch(err=>{
    console.log(err)
})