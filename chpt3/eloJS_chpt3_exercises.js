//Minimum
function min(num1, num2){
  if (num1>num2)
    return num2;
  else
    return num1;
}
console.log(min(0, 10));

//better version (one week later):
function min (a,b){
  return a===b ? a : a>b ? b : a
}

//better again (two weeks later):
function min(a,b){
  return a<b?a:b
}






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

//better version (two weeks later):
function isEven(n){
  return n===0?true:n===1?false:n<0?'??':isEven(n-2)
}






//Bean Counting (WIP)
function countBs(word){
  var count = 0
  for (i=0; i<word.length; i++)
    if (word.charAt(i)=="B")
      count += 1;
    else
      count += 0;
  return count 
}
console.log(countBs("BBC"));


function countChar(word, letter){
  var count = 0
  for (i=0; i<word.length; i++)
    if (word.charAt(i)==letter)
      count += 1;
    else
      count += 0;
  return count
}
console.log(countChar('kakkerlak', 'k'))


//better version (two weeks later):
function countChar(str, char){
  var count = 0
  for (i=0; i<str.length; i++){
    str.charAt(i) === char ? count+=1 : count+=0
  }
  return count
}
