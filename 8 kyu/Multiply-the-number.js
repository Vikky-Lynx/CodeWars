/*DESCRIPTION:
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹) */

 //Solution:

    function multiplyByFivePower(n) {
    let numDigits = Math.abs(n).toString().length; // Get number of digits (ignoring the sign)
    return n * Math.pow(5, numDigits);
}

// Testing examples
console.log(multiplyByFivePower(3));    // 15
console.log(multiplyByFivePower(10));   // 250
console.log(multiplyByFivePower(200));  // 25000
console.log(multiplyByFivePower(0));    // 0
console.log(multiplyByFivePower(-3));   // -15