//With Null
/*
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
    // ... other methods ...
}
class ChildUsers extends Users {
    constructor(email, displayName, image) {
        super(email, null, displayName, null, null, null, image);
    }
    // You can add methods specific to ChildUsers here
}
// Example usage
const childUser = new ChildUsers('email@example.com', 'John Doe', 'path/to/image.jpg');
console.log(childUser.showEmail); // 'email@example.com'
console.log(childUser.showDisplay); // 'John Doe'
console.log(childUser.showImage); // 'path/to/image.jpg'
*/


//destructuring without Null
class Users {
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
class ChildUsers extends Users {
    constructor({ email, displayName, image }) {
        super({ email, displayName, image });
    }
    // You can add methods specific to ChildUsers here
}
// Example usage
const childUser = new ChildUsers({ email: 'email@example.com', displayName: 'John Doe', image: 'path/to/image.jpg' });
console.log(childUser.showEmail); // 'email@example.com'
console.log(childUser.showDisplay); // 'John Doe'
console.log(childUser.showImage); // 'path/to/image.jpg'























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