function calWithReturn (num1,num2){
    return num1 + num2; 
  }
  const total = calWithReturn(5,9);
  console.log(total);   //14
  
  //then total can use later
  function calUseReturn(total){
      console.log (total*5); //70
  }
  calUseReturn(total);
  
  function cal(a){
      console.log (a+1); 
  }
  cal(total);//15   //มาไงวะะะ หาคนถามเอา // //อ๋อ total มัน 14 +1 เลย 15



  ///block scope

  {
    let first = 'html';
  let seco = 'css'        
  console.log(first)        //'html'
  } 
  
  {
    let first = 'harry'
    console.log(first)     //'harry'
  }

//การบ้าน

/*
Exercise #1
Maria has to calculate the cost of her payments for the month. 
For every transation there is a $3 fee and a 0.1% (0.01) interest fee. 
Can you help her calculate her costs?
Return the value of what she should be paying.*/

let maria = (transation) => {
    let transationFee = 3;
    let interestFee = 0.01;
    let interestAmount = interestFee * transation;
    let total = transation + transationFee + interestAmount;
    return total;

}

maria(1000)  //1013
console.log(maria(1000))

/*Exercise #2
Part 1
Ed would like a way to input 3 names of his friends. 
The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.
Part 2
Ed would like to create a function that takes in a birth year and returns the age.
i.e. 1990 returns 30
Part 3
Ed would like to create a function that prints out, Welcome {name1}, 
you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.
*/

let edfriend = (name1, name2 , name3) =>{
    console.log(`Welcome ${name1}, ${name2}, ${name3}`)
}
// edfriend('t','o','e')


let edfriendyear = (birthYear) => {
    const currentYear = new Date().getFullYear();
    const agenow =  currentYear - birthYear;
    return agenow;
}
edfriendyear(1990) //33


let printEdfriendwithAge = (name1, birthY1, name2, birthY2, name3, birthY3) => {
    const age1 = edfriendyear(birthY1)
    const age2 = edfriendyear(birthY2)
    const age3 = edfriendyear(birthY3)
    console.log(`Welcome ${name1}, you are ${age1}. 
Welcome ${name2}, you are ${age2}. 
Welcome ${name3}, you are ${age3}.`)
}


printEdfriendwithAge('Toey',1990,'Hate',1985,'Java',1995);


//A teacher wants to create a rubric for grading. The rubric is from 0 - 11.
/*
Part 1
A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.
Part 2
A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.
Part 3
A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.
*/

let rubric = (pt) => {
    
    if(pt >=5 ) {
      if(pt > 8){
        console.log('Excellent')
      }
      if(pt === 11){
        console.log('Perfect')
      }
      return true;
    } else {
      return false;
    }
}

rubric(5)
rubric(8)
rubric(9)
rubric(11)
