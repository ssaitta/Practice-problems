//Create a list of all numbers up to n, where every number divisable by 3 is replaceed with 'Fizz', and every
//number dividable by 5 is replaced by 'Buzz'. If a number is divisable by both 3 and 5, replace it with 'FizzBuzz'

var FizzBuzz = function (number)

{
if(number%3===0 && number%5===0)
return number = "FizzBuzz";

else if(number%3===0)
return number = 'Fizz';

else if(number%5===0)
return number = "Buzz";

else 
return number;

};

for (var result = 1; result <=100; result ++)

console.log(FizzBuzz(result));
