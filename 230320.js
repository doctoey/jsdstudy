let obj = {
  name: 'toey',
  and: 'hungry',
  want: 'somesleep',
  
  myobj:function(){
    return `หิวจังฮู้ว`
  }
  
}

obj.name
obj.and
obj.want
obj.myobj()
console.log(obj.name)
console.log(obj.and)
console.log(obj.want)
console.log(obj.myobj())

let myObject = {
  name: 'toey',
  and: 'hungry',
  want: 'somesleep',

myobj:function(){
    return `หิวจังฮู้ว`
},
  
propfunc: function(n){
  let sum = 0;
  for(let i=0 ; i<=n ;i++){
  sum += i ;
  }
return sum
  }
};

myObject.property1
myObject.propfunc(3)


//ของพี่มีน

function IceCreamMaking(flavor, type, toppings) {
  this.type = type;
  this.flavor = flavor;
  this.toppings = toppings;

  this.make = function () {
    return `${this.flavor.charAt(0).toUpperCase()}${this.flavor.slice(1)} ${
      this.type
    } served with ${this.toppings.slice(
      0,
      toppings.length - 1
    )} and ${this.toppings.slice(-1)}. 😉`;
  };
}

const vanillaFlavor = new IceCreamMaking("vanilla", "gelato", [
  "almond",
  "caramel suace",
]);

// console.log(vanillaFlavor.make());

const mintChocChip = new IceCreamMaking("Mint Chocolate Chip", "ice cream", [
  "choclate sauce",
  "hazelnut",
  "cherry",
]);

// console.log(mintChocChip.make());

const strawberryYogurt = new IceCreamMaking("strawberry", "frozen yogurt", [
  "strawberry",
  "whipped cream",
  "strawberry sauce",
]);

// console.log(strawberryYogurt.make());

//
function showProps(obj, objName) {
  let result = "";
  for (let i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
}
// console.log(showProps(vanillaFlavor, "vanillaFlavor"));

function showProps2(obj, objName) {
  let result = "";
  for ([key, value] of Object.entries(obj)) {
    if (obj.hasOwnProperty(key)) {
      result += objName + "." + key + " = " + value + "\n";
    }
  }
  return result;
}
// console.log(showProps2(vanillaFlavor, "vanillaFlavor"));