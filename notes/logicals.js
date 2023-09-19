// A conjunction, i.e. logical AND (&& symbol)
// An alternatice, i.e. logical OR (|| symbol)
// A negation, i.e. logical NOT (symbol !)

// AND operators
console.log(true && true); // -> true
console.log(true && false); // -> false
console.log(false && true); // -> false
console.log(false && false); // -> false

// OR operators
console.log(true || true); // -> true
console.log(true || false); // -> true
console.log(false || true); // -> true
console.log(false || false); // -> false

// NOT operators
console.log(!true); // -> false
console.log(!false); // -> true

/* We can, of course, connect as many of these operators 
as we need, creating more complex “sentences”. As in 
the case of arithmetic operators, the sequence of 
actions is determined here. The highest priority is 
negation !, then conjunction &&, and finally the 
alternative ||. The precedence can of course be 
changed by means of parentheses. */

const a = false;
const b = true;
const c = false;
const d = true;

console.log(a && b && c || d); // -> true
console.log(a && b && (c || d)); // -> false


