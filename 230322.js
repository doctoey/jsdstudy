//With Null

class Users1 {
    constructor(email, password, displayName, height, weight, gender, image) {
        this.email = email;
        this.password = password;
        this.displayName = displayName;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
        this.image = image;
    }
    // ... other methods ...
}
class ChildUsers1 extends Users1 {
    constructor(email, displayName, image) {
        super(email, null, displayName, null, null, null, image);
    }
    // You can add methods specific to ChildUsers here
}
// Example usage
const childUser1 = new ChildUsers1('email@example.com', 'John Doe', 'path/to/image.jpg');
console.log(childUser1.email); // 'email@example.com'
console.log(childUser1.displayName); // 'John Doe'
console.log(childUser1.image); // 'path/to/image.jpg'



//destructuring without Null
class Users2 {
    constructor({ email, password, displayName, height, weight, gender, image }) {
        this.email = email;
        this.password = password;
        this.displayName = displayName;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
        this.image = image;
    }
    // ... other methods ...
}
class ChildUsers2 extends Users2 {
    constructor({ email, displayName, image }) {
        super({ email, displayName, image });
    }
    // You can add methods specific to ChildUsers here
}
// Example usage
const childUser2 = new ChildUsers2({ email: 'email@example.com', displayName: 'John Doe', image: 'path/to/image.jpg' });
console.log(childUser2.showEmail); // 'email@example.com'
console.log(childUser2.showDisplay); // 'John Doe'
console.log(childUser2.showImage); // 'path/to/image.jpg'





//pass object เข้าไป คล้ายกับท่าบน
class Users3 {
    constructor(options) {
        this.email = options.email;
        this.password = options.password;
        this.displayName = options.displayName;
        this.height = options.height;
        this.weight = options.weight;
        this.gender = options.gender;
        this.image = options.image;
    }
    // ... other methods ...
}

class ChildUsers3 extends Users3 {
    constructor(options) {
        super({
            email: options.email,
            displayName: options.displayName,
            image: options.image,
        });
    }

    // You can add methods specific to ChildUsers here
}

// Example usage
const childUser3 = new ChildUsers3({ email: 'email@example.com', displayName: 'John Doe', image: 'path/to/image.jpg' });
console.log(childUser3.email); // 'email@example.com'
console.log(childUser3.displayName); // 'John Doe'
console.log(childUser3.image); // 'path/to/image.jpg'




/// คุณปลั้กไฟนอล
class Users99 {
    constructor(obj) {
      this.email = obj.email;
      this.password = obj.password;
      this.displayName = obj.displayName;
      this.height = obj.height;
      this.weight = obj.weight;
      this.gender = obj.gender;
      this.image = obj.image;
    }
    get showEmail() {
      return this.email;
    }
    get showDisplay() {
      return this.displayName;
    }
    get showImage() {
      return this.image;
    }
  }
  
  class UserLogin99 extends Users99 {
    constructor(obj) {
      super({
        email: obj.email,
        password: obj.password,
        image: obj.email,
      });
      this.isLogin = 0;
      this.showTextResponse = "";
    }
    get checkLogin() {
      if (this.email === "user1@gmail.com" && this.password === "123456") {
        this.isLogin = 1;
      } else {
        this.isLogin = 0;
      }
      return this.isLogin;
    }
    get showLoginResponse() {
      if (!this.checkLogin) {
        return "Email or password incorrect";
      } else {
        return `Welcome ${this.showEmail}`;
      }
    }
  }
  
  const iMember = new UserLogin99({
    email: "user1@gmail.com",
    password: "123456",
    image: "image.png",
  });
  console.log(iMember.showLoginResponse);





  class Animal {
    constructor() {
      this.type = "unknown";
      this.car = "unknown";
    }
  }
  
  class Dog extends Animal {
    constructor() {
      super(); // calling parent constructor with no arguments
      this.type = "dog";
      this.car = 'benz';
    }
  }
  
  const myDog = new Dog();
  console.log(myDog.type); // Output: "dog"
  console.log(myDog.car); // Output: "benz"



  //ของคุณทัช
  class User {
    constructor(username, fname, lname, age) {
      this.username = username,
      this.firstName = fname,
      this.lastName = lname,
      this.age = age,
      this.activity = [],
      this.activityCount = 1
    }
    
    addActivity(val) {
      let temp = {}
      temp.name = val
      temp.activityId = this.activityCount
      temp.time = new Date()
      this.activity.push(temp) 
      this.activityCount++
    }
    
    removeActivity(id) {
      this.activity.forEach((e,idx) => {
        e.activityId === id ? this.activity.splice(idx,1) : null;
      })
    }
    
    editActivity(id, val) {
      this.activity.forEach((e,idx) => {
        e.activityId === id ? this.activity[idx].name = val : null;
      })
    }
  }
  
  const a = new User("kuku247", 'Chaiyaphon', 'Yuyod', 24)
  // console.log(a)
  a.addActivity('boxing');
  a.addActivity('running');
  a.addActivity('muay-thai');
  a.removeActivity(1)
  a.removeActivity(3)
  a.editActivity(2, "biking");
  

  //ของคุณไก่
  class User4{
    constructor(username,email,gender,age,password){
        this._username = username;
        this._email = email;
        this._gender = gender;
        this._age = age;
        this._password = password;
    }

    get username(){ return this._username; };
    get email(){ return this._email; };
    get gender(){ return this._gender; };
    get age(){ return this._age; };

    showInfo(){
        return `User: ${this._username}, ${this._email}, ${this._gender}`;
    }

    login(password){
        if (this._password === password){
            return 'Login Success';
        }else{
            return 'Login Failure';
        }
    }

    createActivityCard(name,duration,date){
        return `Activity: ${name}, Duration: ${duration} hrs, Created: ${date}`;
    }
}

class Admin4 extends User4{
    delete(user){
        return `${user.username} was deleted!`;
    }

    showInfo(){
        return `Admin: ${this._username}, ${this._email}, ${this._gender}`;
    }
}

//Create Users
const user11 = new User4('Joe','joe@email.com','male',49,'1234');
const user22 = new User4('Billy','billy@live.com','male',23,'4321');
const user33 = new Admin4('Samanta','samanta@123.com','female',32,'xxxy');

console.log(user11.showInfo());
console.log(user22.showInfo());
console.log(user33.showInfo());

console.log(user11.login('1234'));
console.log(user22.login('11'));

console.log(user11.createActivityCard('Bicycling',4.5,Date()));

console.log(user33.delete(user22));



//ของคุณหมีพู
class User51 {
    constructor(name, email, password) {
        this._name = name;
        this._email = email;
        this._password = password;
        this._isImage = false;
        this._isOnline = false;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    addImage() {
        this._isImage = true;
    }

    delImage() {
        this._isImage = false;
    }

    login() {
        this._isOnline = true;
    }

    logout() {
        this._isOnline = false;
    }

    resetPass(newPass) {
        this._password = newPass;
    }

}

class AdminUser51 extends User51 {
    constructor(name, email, password) {
        super(name, email, password);
        this._isAdmin = true;
        this._isAllPermission = true;
    }

    get isAdmin() {
        return this._isAdmin;
    }

    get isAllPermission() {
        return this._isAllPermission;
    }
}

const user511 = new User51('Mee-pooh', 'tlimpawittayakul@gmail.com', '12345678');
const admin511 = new AdminUser51('admin1', 'admin1@gaintrack.com', 'admin111');

console.log(user511);
console.log(admin511);


user511.login();
user511.resetPass(11111111);
user511.addImage();
console.log(user511);