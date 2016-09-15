//School Way
function isPrime(n){
  //Corner case
  if(n <= 1) return false; 

  for(var i = 2;i < n; i++){
    if(n%i===0){
      return false;
    }
  }
  
  return true;
}

//Optimized Way
function isPrime(n){
  //Corner case
  if(n <= 1) return false;
  
  for(var i = 2; i*i <= n; i++){
    if(n%i===0){
      return false;
    }
  }
  
  return true;
}

//6K+-1 form : All the prime numbers are of this form
function isPrime(n){
  //Corner case
  if(n <= 1) return false;
  
  if(n <= 3) return true;
  
  if(n%2===0 || n%3===0) return false;
  
  for(var i = 5; i*i <=n; i=i+6){
    if(n%i === 0 || n%(i+2) === 0){
      return false;
    }
  }
  return true;
}

//For any prime number there exists 'a' , 1 < a < n
//for which a^(n-1)%n == 1
//This is mathematically correct but will fail for higher numbers as computer use double-precision floating format
//Thats why, 17 is not prime when this code runs
function isPrime(n){
  if(n<2) return false;
  
  if(n === 2) return true;
  
  for(var a = 2;a<n;a++){
    console.log(a,Math.pow(a,n-1)%n);
    if(Math.pow(a,n-1)%n !== 1){
         return false;
    }
  }
  return true;
}
