const userModel = require("./user-model");
const bcrypt = require("bcrypt"); //เข้ารหัส password
// import bcrypt from "bcrypt";

class AuthenController {
  async register(req, res) {
    // console.log(req.body)
    // res.json('hello registerrrrrr')
    //1.เช็คว่าข้อมูลซ้ำมั้ย /email ซ้ำ
    //2.ซ้ำ ส่ง res กลับไปว่าซ้ำ
    //3.ไม่ซ้ำ สร้าง user ใน database
    //4.พอสร้างเสร็จ ส่ง res กลับไปว่าสำเร็จ
    try {
      const { email, password, firstname, lastname } = req.body;
      const foundUser = await userModel.find({ email });
      //ถ้าเจอ เมล์ ที่ซ้ำกัน ใน databaseแปลว่ามีแล้ว
      if (foundUser.length > 0) {
        return res.status(400).json("Email already exists");
      } else {
        //hash password
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPassword = bcrypt.hashSync(password, salt);
        const isMatch = bcrypt.compareSync(password, hashPassword);

        //ถ้าไม่ซ้ำ(ไม่มีเมล์อยู่ก่อนหน้า)
        const newUser = new userModel({
          //ปั้มโมเดลลง database
          email: email,
          password: hashPassword,
          firstname: firstname,
          lastname: lastname,
        });
        const newUserData = await newUser.save();

        res.status(200).json({ newUserData });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal error");
    }
  }
}

module.exports = new AuthenController();
