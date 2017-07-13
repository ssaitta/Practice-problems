//Write a function which will return an array with all prime numbers smaller than or equal to an arbitrary parameter "n".

function primeArray(n){
  var primeArray=[];
  var factors=[];
  for(k=2;k<=n;k++){
  for(i=2;i<=Math.sqrt(k);i++){
    if(k%i===0){
      factors.push(k);
    }
  }
    if(factors.includes(k)===false){
    primeArray.push(k);
    } 
  }
  return primeArray;
}
