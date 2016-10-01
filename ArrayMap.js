//Assume there is no map method exist for Array.
//Implementing Array.map() method

Array.prototype.map = function(f){
  var newArray = [];
  var i;
  //Traversing the array
  //this refers to the array instance
  
  for( i = 0; i<this.length; i++){
    newArray.push(f(this[i],i,this));
  }
  
  return newArray;
}