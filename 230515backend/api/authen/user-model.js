const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
},{
    collection: "User",
})
  
   




module.exports = mongoose.model("User", userSchema);
//User อันนี้จะไป ลิ้ง กับ database ที่ชื่อว่า User ใน MongoDB