//Abstraction
/*an action to perform within the function can be added as an arg.*/
function forEach(array, action){
  for (var i=0; i<array.length; i++)
    action(array[i])
}
forEach(['Wampeter', 'Foma', 'Granfalloon'], console.log) //returns the strings


var numbers = [1,2,3,4,5], sum=0;
forEach(numbers, function(number){sum += number;}); //function(number) becomes the 'action' arg within forEach function
console.log(sum)    //returns 15


/*another example of abstraction, and simplification using official 'forEach' function*/
function gatherCorrelations(journal){
  var phis = {};
  for (var entry=0; entry<journal.length; entry++){
    var events = journal[entry].events;
    for (var i=0; i<events.length; i++){
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}


/*shorter ver*/
function gatherCorrelations(journal){
  var phis = {};
  journal.forEach(function(entry){
    entry.events.forEach(function(event){
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    })
  });
  return phis;
}


/*personal notes*/
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
days.forEach(function(day, index){console.log(`${day} is ${index+1}/7 out of the week.`)})


//Higher-order Functions
/*function which creates a new function*/
function greaterThan(n){
  return function(m){return m>n}
  }
var greaterThan10 = greaterThan(10)
console.log(greaterThan10(11))
console.log(greaterThan(10)(11))    //naming the greaterThan10 first, or having double ()() for variables works.

/*function that change other functions*/
function noisy(f){
  return function(arg){
    console.log('calling with', arg)
    var val = f(arg)
    console.log('called with', arg, '- got', val)
    return val
  }
}
noisy(Boolean)(0)


/*functions which provide new types of control flow*/
function unless(test, then){if(!test) then();}
function repeat(times, body){for (i=0; i<times; i++) body(i)}
repeat(3, function(n){unless(n%2, function(){console.log(n, 'is even')})})


//Passing Along Arguments
/*function 'noisy' has defect, as we don't know how many args it can take. 
to get around this, we can use apply method*/
function tranparentWrapping(f){
  return function(){
    return f.apply(null, arguments);
  };
}



//Filtering an Array
function filter(array, test){
  var passed = []
  for (var i = 0; i<array.length; i++){
    if (test(array[i]))
      passed.push(array[i])
  }
  return passed
}



//Transforming with Map
function map(array, transform){
  var mapped = []
  for (var i = 0; i<array.length; i++)
    mapped.push(transform(array[i]))
  return mapped
}


//Summarizing with Reduce
function reduce(array, combine, start){
  var current = start
  for(var i=0; i<array.length; i++)
    current = combine(current, array[i])
  return current
}
console.log(reduce([1,2,3,4], function(a,b){return a+b}, 0))



//Composability
function average(array){
  function plus(a,b){return b+b}
  return array.reduce(plus)/array.length
}
/*no need to write long code, can compose the logic neatly to write concise code./*



//***for code chrysalis, its recommended to skip sections 'JSON' and 'The cost~Binding' for now. 
