//The Sum of a Range
function range(start, end) {
  var array = [];
  for (i=start; i<=end; i++){
    array.push(i)
  }
  return array
}


function sum(array){
  var summation = 0;
  for (i=0; i<array.length; i++){
    summation += array[i]
  }
  return summation
}


//bonus assignment, modifying 'range' function
function range(start, end, step){
  if (step == null) 
    step = 1;
  var array = [];
  if (step<0){
    for(i=start; i>=end; i+=step){
      array.push(i);
      }
  } else {
  for (i=start; i<=end; i+=step){
    array.push(i)
    }
  }
  return array
}
console.log(range(1,10));
console.log(range(5,2,-1));
console.log(sum(range(1,10)));




//Reversing an Array
function reversedArray(array){
  var temp = [];
  for (i=array.length-1; i>=0; i--){    //counts from 3 --> 0, as we need position values
    temp.push(array[i]);                //starting with position 3 for i, it grabs 'D' and pushes to temp array. i goes to 2, grabs 'C' and pushes to temp, etc.
  }
  return temp
}
console.log(reversedArray(['A','B','C','D']));



// function reverseArrayInPlace(array){
//   var temp = [];
//   for (i=0; i<Math.floor(array.length/2); i++){
//     temp = array[i]
//     array[i] = array[array.length-1-i]
//     array[array.length-1-i] = temp
//   }
//   return array
// }
// console.log(reverseArrayInPlace(['A','B','C','D','E']));


