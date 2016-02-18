var myArray = ['A','B','C','D','E','F'];

function formWords(arr){
  var words = [];
  for(var i = 0; i<arr.length-2;i++){
    for(var j = i + 2; j<arr.length;j++){
      var word='';
      for(var k = i; k<=j;k++){
        word += arr[k];
      }
      words.push(word);
    }
  }
  return words;
}

var allWords = formWords(myArray);
console.log(allWords);
