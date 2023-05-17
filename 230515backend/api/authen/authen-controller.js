const userModel = require("./user-model");

class AuthenController {
  async register(req, res) {
    // console.log(req.body)
    // res.json('hello registerrrrrr')
    //1.เช็คว่าข้อมูลซ้ำมั้ย /email ซ้ำ
    //2.ซ้ำ ส่ง res กลับไปว่าซ้ำ
    //3.ไม่ซ้ำ สร้าง user ใน database
    //4.พอสร้างเสร็จ ส่ง res กลับไปว่าสำเร็จ
    const { email, password, firstname, lastname } = req.body;
    const foundUser = await userModel.find({ email });
    //ถ้าเจอ เมล์ ที่ซ้ำกัน ใน databaseแปลว่ามีแล้ว
    if (foundUser.length > 0) {
      res.status(400).json("Email already exists");
    } else {
      //ถ้าไม่ซ้ำ(ไม่มีเมล์อยู่ก่อนหน้า)
      const newUser = new userModel({
        //ปั้มโมเดลลงไปใน database
        email,
        password,
        firstname,
        lastname,
      });
      const newUserData = await newUser.save();
      console.log(newUserData);
      res.status(200).json(newUserData);
    }
  }
}

module.exports = new AuthenController();
