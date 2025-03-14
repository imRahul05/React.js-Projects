function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
       return false;
      }
    }
    return true;
   }
  
   //Function to find the nth prime number
  export function findNthPrime(n) {
    let count = 0;
    let num = 2;
    
    while (count < n) {
      if (isPrime(num)) {
        count++;
        if (count === parseInt(n)) { // Check if we've found the nth prime
          return num;
        }
      }
      num++;
    }
    return num - 1; // This line shouldn't be reached with the fixed logic
   }