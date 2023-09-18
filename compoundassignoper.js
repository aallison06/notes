let x = 10;

x += 2;
console.log(x); // -> 12

x -= 4;
console.log(x); // -> 8

x *= 3;
console.log(x); // -> 24

x /= 6;
console.log(x); // -> 4

x **= 3;
console.log(x); // -> 64

x %= 10;
console.log(x); // -> 4

// CONTINUED
let a = true;
console.log(a);
a &&= false;
console.log(a);

/* The instruction a &&= false means exactly the same as 
a = a && false */

let b = false;
console.log(b);
b ||= true;
console.log(b);
