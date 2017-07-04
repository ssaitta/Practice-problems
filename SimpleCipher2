//Write a function that accepts str string and key number and returns an array of integers representing encoded str.

function encode(str,  n)
{ var letters = 'abcdefghijklmnopqrstuvwxyz';
var indices = [];
n = String(n);
var lengthOfN = n.length;
  for (i=0;i<str.length;i++){
          indices[i] = letters.indexOf(str.charAt(i))+1;
          indices[i] = indices[i]+(Number(n.charAt(i%lengthOfN)));
  }
  return indices; //only return numbers not the corresponding cipher text
}
