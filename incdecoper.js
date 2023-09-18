let n1 = 10;
let n2 = 10;

console.log(n1); // -> 10
console.log(n1++); // -> 10
console.log(n1); // -> 11

console.log(n2); // -> 10
console.log(++n2); // -> 11
console.log(n2); // -> 11

let n3 = 20;
let n4 = 20;

console.log(n3); // -> 20
console.log(n3--); // -> 20
console.log(n3); // -> 19

console.log(n4); // -> 20
console.log(--n4); // -> 19
console.log(n4); // -> 19

/* Probably the easiest way to understand
it is to use an example from the editor. */

// This happens because the code line

console.log(n1++);

// is interpreted as
console.log(n1);
n1 = n1 + 1

// while the line
console.log(++n1);

// means the same as
n1 = n1 + 1
console.log(n1);

/* Keep in mind that the Number type is a floating-point type,
which means that the results of some of the operations
may be imprecise */
console.log(0.2 + 0.1);     // 0.30000000000000004
console.log(0.2 * 0.1);     // 0.020000000000000004
console.log(0.3 / 0.1);     // 2.9999999999999996

/* These are artefacts of floating-point arithmetic.
The number will be precise for integers up to 252, but fractions 
may not be as precise, as many fractins are impossible
to directly represent in binary format. */