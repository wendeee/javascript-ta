// complete the function
function prime (num) {
  // code goes here

  //My solution

  // A prime number can have only two factors.
  // Hence, 0 and 1 is not included

  //2 is the only even number that is a prime number.

  //Check if num equal 2

  if (num===2) {
    return true;
  }

  // check if num equal 0, 1

  if (num < 2) {
    return false;
  }

  // Looping through 2 to check if num is prime

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  } 
  return true;
  
}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
