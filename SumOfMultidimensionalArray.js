//Write a function that takes the sum of all elements of a multidimensional array. 
//The elements of the input array are all integers or arrays, and the array can have any level of depth.

function sumArray(array){
  var newArray = [];
  var multiArray = [];
  var tot = 0;
  if(array.length === 0 ){
    return newArray;
  }
  for(i=0; i< array.length; i++){
    if(Array.isArray(array[i])){
 //If the i-th element is an array go one level deeper
      for(j=0; j<array[i].length; j++){
        if(Array.isArray(array[i][j])){
          multiArray.push(array[i][j]);
        }
        else{
          newArray.push(array[i][j]);
        }
      }
    }
    else{
      newArray.push(array[i]);
    }
  }
//Use a recursive function to enter all subarrays and bring their integer elements into newArray
  newArray = newArray.concat(sumArray(multiArray));
  for(k=0;k<newArray.length;k++){
    tot=tot+newArray[k];
  }
  return tot;
}
