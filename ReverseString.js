//Add a method to the string class to return reverse of the string.

String.prototype.reverse = function(){
  var charArray = this.split('');
  var charArrayLength = charArray.length;
  var reverseMessage = '';
  for(var i = charArrayLength-1;i>=0;i--){
    reverseMessage+=charArray[i];
  }
  return reverseMessage;
};

//Using the the function reverse
var message = "I am Bhupendra";

console.log(message.reverse());