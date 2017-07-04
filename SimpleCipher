//Write a function that accepts str string and key number and returns a string representing encoded str.

function encode(str,  n)
{ var letters = 'abcdefghijklmnopqrstuvwxyz';
 var indices = [];
 var newString = [];
 var output = "";
  for (i=0;i<str.length;i++){
    indices[i] = letters.indexOf(str.charAt(i));
    indices[i] = (indices[i]+(n))%25;
    var newLetter = indices[i];
    newString[i] = letters[newLetter];
    output = newString.join('');
  }
  return output;
}
