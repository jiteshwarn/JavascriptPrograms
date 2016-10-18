/*
* Find a pair in an array of size 'n', whose sum is X
*/
var arr1 = [1,2,3,4,5,6,7,8,9,0];

/*
* O(n^2) complexity
*/
function findpair(arr,sum){
  var pairs = [];
  var i, j;
  for(i = 0; i< arr.length; i++){
    for(j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === sum){
        pairs.push([arr[i],arr[j]]);
      }
    }
  }
  return pairs;
}

/*
* O(2n) complexity by using Hashtable
*/
/*function findpair(arr,sum){
  var i;
  var pairs = [];
  var hash = {};
  
  for(i = 0; i< arr.length; i++){
    hash[arr[i]] = i;
  }
  
  for(i = 0; i < arr.length; i++){
    if(hash[sum-arr[i]] !== i){
      pairs.push([arr[i], sum-arr[i]]);
    }
  }
  
  return pairs;
}*/

console.log(findpair(arr1,7));
