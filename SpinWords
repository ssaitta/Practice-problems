//Write a function that takes in a string of one or more words, and returns the same string, 
//but with all five or more letter words reversed. 

function spinWords(str){
  var words = str.split(' ');
  var array = [];
  for(i =0;i<words.length;i++){
    var newWord = words[i].split('');
    var newWordLength = newWord.length;
    var midPoint = Math.floor(newWordLength/2);
    if(newWordLength>4){
      for(k = 0; k<midPoint; k++){
        var letterToSwap = newWord[k];
        newWord[k] = newWord[newWordLength-(k+1)];
        newWord[newWordLength-(k+1)] = letterToSwap;
      }
      array.push(newWord.join(''));
    }
    else{
      array.push(newWord.join(''));
    }
  }
    return(array.join(' '));
}
