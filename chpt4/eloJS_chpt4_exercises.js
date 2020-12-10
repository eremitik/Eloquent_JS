//The Sum of a Range
function range(a,b){
  newArr = [];
  for (i=a; i<=b; i++){
    newArr.push(i)
  }
  return newArr
}

function sum(array){
  let tally = 0
  for (i=0; i<array.length; i++){
    tally += array[i]
  }
  return tally
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



//Reversing an Array
function reversedArray(array){
  var temp = [];
  for (i=array.length-1; i>=0; i--){    //counts from 3 --> 0, as we need position values
    temp.push(array[i]);                //starting with position 3 for i, it grabs 'D' and pushes to temp array. i goes to 2, grabs 'C' and pushes to temp, etc.
  }
  return temp
}

//another version (one week later):
function reverseArray(array){
  newArr = [];
  for (i=0; i<array.length; i++){
    newArr.unshift(array[i])
  }
  return newArr
}


function reverseArrayInPlace(array){
  var temp = [];
  for (i=0; i<Math.floor(array.length/2); i++){
    temp = array[i]
    array[i] = array[array.length-1-i]
    array[array.length-1-i] = temp
  }
  return array
}



//A List
function arrayToList(array){
  newObj = null;
  for (i=array.length-1; i>=0; i--){
    newObj = {value: array[i], rest: newObj}
  }
  return newObj
}


function listToArray(obj){
  let newArr = [];
  for (j=obj; j; j=j.rest){ //j.rest, dot notion for looking into obj to pull 'rest' values
    newArr.push(j.value)
  }
  return newArr
}


function prepend(elements, list){
  var newList = {value: elements, rest: list};
  return newList
}
console.log(prepend(10, prepend(20, null)));


function nth (list, num){
  if (!list){
    return undefined;
  } else if (num === 0){
    return list.value;
  } else {
    return nth(list.rest, num-1);
  }
}
console.log(nth(arrayToList([10, 20, 30]), 0))

//better version, one week later
function nth(list, n){
  return !list ? undefined : n===0 ? list.value : nth(list.rest, n-1)
}


//Deep Comparison
/*need to keep restudying this one, toughest one in the book so far.*/
function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  var propsInA = 0, propsInB = 0;

  for (var prop in a)
     propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}
var obj = {here: {is: "an"}, object: 2};
var objTwo = {here: {is: "an"}, object: 3};
console.log(deepEqual(obj, objTwo));

