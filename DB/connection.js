const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECT_STRING).then(
    result=>{
      console.log("Mongodb Atlas connected ith pfServer");
    }
).catch(err=>{
  console.log("Connection Failed!!!");
  console.log(err);
})