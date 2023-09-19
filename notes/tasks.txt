// Task 1
let b1 = true;
let b2 = Boolean(true);

let n1 = 123;
let n2 = Number(123);

let bi1 = 982n;
let bi2 = BigInt(982);

let s1 = "123";
let s2 = String("123"); 

let u1 = undefined;

let n1 = null;

// Task 2

console.log(`${b1} : ${typeof b1}`);
console.log(`${b2} : ${typeof b2}`);
console.log(`${n1} : ${typeof n1}`);
console.log(`${n2} : ${typeof n2}`);
console.log(`${bi1} : ${typeof bi1}`);
console.log(`${bi2} : ${typeof bi2}`);
console.log(`${s1} : ${typeof s1}`);
console.log(`${s2} : ${typeof s2}`);
console.log(`${u1} : ${typeof u1}`);

// Task 3

let s = "1234"
let n = Number(s);
let bi = BigInt(n);
let b = Boolean(bi);
console.log(`${b} : ${typeof b}`);

// Task 4 
let b = true + false;
let s = "He" + "llo";
let bi = 12n + 24n;
let u = undefined + undefined;
let n = null + null;

console.log(b);
console.log(s);
console.log(bi);
console.log(u);
console.log(n);

// Task 5

// Boolean and String
let b1 = false + "Hello";

// Boolean and BigInt
let b2 = True + 123456789123456789123n;

// Boolean and Undefined
let b3 = false + undefined;

// Boolean and Null
let b4 = true + null;

// BigInt and String
let bi1 = 123456789123456789123n + "Hello";

// BigInt and Undefined
let bi2 = 123456789123456789123n + undefined;

// BigInt and Null
let bi3 = 123456789123456789123n + null;

// String and Undefined
let s1 = "Hello" + undefined;

// String and Null
let s2 = "Hello" + null;

// Undefined and Null
let u1 = undefined + null;

// Number and BigInt
let n1 = 100 + 200n;

// Number and Boolean
let n2 = 100 + true;

// Number and String
let n3 = 100 + "200";

// b1, b2, b3, b4, bi1, bi2, bi3, s1, s2, u1, n1, n2, n3

console.log(`${b1} : ${typeof b1}`);
console.log(`${b2} : ${typeof b2}`);
console.log(`${b3} : ${typeof b3}`);
console.log(`${b4} : ${typeof b4}`);
console.log(`${bi1} : ${typeof bi1}`);
console.log(`${bi2} : ${typeof bi2}`);
console.log(`${bi3} : ${typeof bi3}`);
console.log(`${s1} : ${typeof s1}`);
console.log(`${s2} : ${typeof s2}`);
console.log(`${u1} : ${typeof u1}`);
console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);
console.log(`${n3} [${typeof n3}]`);


// Task 6

// Original: const str1 = 42 + "1";
// Do not remove quotes

const str1 = 42 + +"1";