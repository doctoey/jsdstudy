class Users {
    constructor(email, password, displayName, height, weight, gender, image) {
      this.email = email;
      this.password = password;
      this.displayName = displayName;
      this.height = height;
      this.weight = weight;
      this.gender = gender;
      this.image = image;
    }
  
    get showEmail() {
      return this.email;
    }
  
    get showDisplay() {
      return this.displayName;
    }
  }
  
  class userLogin extends Users {
    constructor(email, password, isLogin, image) {
      super(email, password, null, null, null, null, image);
      this.isLogin = isLogin;
    }
  
    get showImage() {
      return this.image;
    }
  }
  
  const pramote = new userLogin("test@gmail.com", "123456789", 1, "path/to/image.jpg");
  console.log(pramote.showImage); // Output: "path/to/image.jpg"










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