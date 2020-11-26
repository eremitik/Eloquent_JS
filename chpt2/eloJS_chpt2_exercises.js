//Looping a Triangle
let hashy = ''
for (i=0; i<7; i++)
  console.log(hashy += '#')



//FizzBuzz
for (i=1; i<=100; i++)
  console.log(i%3==0 && i%5==0 ? 'FizzBuzz':
                        i%3==0 ? 'Fizz': 
                        i%5==0 ? 'Buzz': i)



//Chess Board
var spaces = 8;
for (row=0; row<spaces; row++){
  var board = '';
  for (col=0; col<spaces; col++){
       var sum = row+col;
       sum%2==0 ? board += ' ' : board += '#';
  };
  console.log(board);
};
