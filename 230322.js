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
console.log(childUser1.showEmail); // 'email@example.com'
console.log(childUser1.showDisplay); // 'John Doe'
console.log(childUser1.showImage); // 'path/to/image.jpg'



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
console.log(childUser3.showEmail); // 'email@example.com'
console.log(childUser3.showDisplay); // 'John Doe'
console.log(childUser3.showImage); // 'path/to/image.jpg'








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