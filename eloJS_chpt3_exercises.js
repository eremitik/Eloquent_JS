//Minimum
function min(num1, num2){
  if (num1>num2)
    return num2;
  else
    return num1;
}
console.log(min(0, 10));



//Recursion
function isEven(num){
  if (num<0)
    return "??"
  else if (num==0)
    return true;
  else if (num==1)
    return false;
  else
    return isEven(num-2);
}
console.log(isEven(50));



//Bean Counting (WIP)
