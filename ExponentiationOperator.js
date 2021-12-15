//ES 7 provides an alternative way to get a base to the 
//exponent power by using the exponentiation operator ( **).

var result = 2 ** 2;
console.log(result); // 4

result = 2 ** 3;
console.log(result); // 8

let base = 2
let exponent = 3
console.log('using Math.pow()',Math.pow(base,exponent)) //8
console.log('using exponentiation operator',base**exponent) //8 

console.log(3 ** 4); //  output: 81
console.log(10 ** -2);//  output: 0.01
console.log(2 ** 3 ** 2); //  output: 512
//exponentiation operator is right-associative: a ** b ** c is equal to a ** (b ** c)
console.log((2 ** 3) ** 2);
//  output: 64