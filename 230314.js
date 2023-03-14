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
  cal(total);//15