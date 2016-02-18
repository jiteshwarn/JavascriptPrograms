var myArray = [['A',0],['B',1],['C',2],['D',3],['E',4],['F',5]];

var my2DArray = [
    ['A','B','C','D','E','F'],
    ['G','L','C','D','E','F'],
    ['H','L','M','D','E','F'],
    ['I','L','C','N','E','F'],
    ['J','L','C','D','O','F'],
    ['K','L','C','D','E','P']
];

function formWordsFrom2DArray(arr){
  var words=[];
 
  for(var i = 0;i<arr.length;i++){
    var row = [];
    var column = [];
    //var diagonal = [];
    for(var j = 0; j<arr[i].length; j++){
      row.push(arr[i][j]);
      column.push(arr[j][i]);
      //diagonal.push(arr[j][j]);
    }
    console.log(row,column);
  }
  
  return words;
}

formWordsFrom2DArray(my2DArray);

function formWords(arr){
  var words = [];
  for(var i = 0; i<arr.length-2;i++){
    for(var j = i + 2; j<arr.length;j++){
      var word='';
      for(var k = i; k<=j;k++){
        word += arr[k][0];
      }
      words.push(word);
    }
  }
  return words;
}

var allWords = formWords(myArray);
console.log(allWords);
