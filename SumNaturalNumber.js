/* Find the sum of first n natural number using recursion,
but not using named function and arguments.callee 
*/
/*
Using arguments.callee

var sum = (function(n){
   if(n>1){
     return n + arguments.callee(n-1);
   }
   return 1;
})(5);
*/

var sum = (function(foo,n){
   return n + foo(foo,n-1);
})(function(foo,n){
  if(n>1){
    return n + foo(foo,n-1);
  }else{
    return n;
  }
},5);

console.log(sum);
