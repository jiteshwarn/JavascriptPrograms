function getCombination(str){ // returns array of all the string combination
  var c = str.split('');
  var finalList = [c[0]];
  var tempArray;
  for(var i = 1;i<c.length;i++){
    tempArray = [];
    finalList.forEach(function(elem){
      var elemArray = elem.split('');
      elemArray.push(c[i]);
      tempArray.push(elemArray.join(''));
      for(var j = 0;j<elemArray.length-1;j++){
          tempArray.push(swap(elemArray.slice(), j,elemArray.length-1).join(''));
      }
    });
    finalList = tempArray;
  }
  
  function swap(arr, p1,p2){
    var temp = arr[p1];
      arr[p1] = arr[p2];
      arr[p2] = temp;
    return arr;
  }
  return finalList;
}

console.log(getCombination('ABC'));
