const str1 = 42 + "1";
console.log(str1);        // -> 421
console.log(typeof str1); // -> string

const str2 = 42 - "1";
console.log(str2);        // -> 41
console.log(typeof str2); // -> number

const str3 = 42 + +"1";
console.log(str3); // -> 43
console.log(typeof str3); // -> number
