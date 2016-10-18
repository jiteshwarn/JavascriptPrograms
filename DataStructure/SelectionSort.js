const n = [64, 25, 12, 22, 11];

var selectionSort = n => { var tempArray = n.slice();
                          for(var i = 0; i < tempArray.length; i++)
                            tempArray = swapInArray(tempArray, i, tempArray.indexOf(minValueInArray(tempArray.slice(i))));
                            return tempArray; 
                         };

var swapInArray = (n, i, j) => { 
  								//Copy array
                                var tempArray = n.slice();
  
  								//Swap the value at i and j index
                                var temp = tempArray[i];
                                tempArray[i] = tempArray[j];
                                tempArray[j] = temp;
  
  								return tempArray;
                              };

var minValueInArray = n => Math.min.apply(null, n);

console.log(selectionSort(n));
