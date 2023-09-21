// typeof Operator
let year = 10191;
console.log(typeof year);
console.log(typeof false);

// instanceof Operator
let names = ["Patti", "Bob"];
let name = names[0];
console.log(names instanceof Array); // -> true
console.log(name instanceof Array); // -> false

// delete Operator
let user = {
    name: "Alice",
    age: 38
  };
  console.log(user.age); // -> 38
  delete user.age;
  console.log(user.age); // -> undefined

// ternary Operator
console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob




let name = 1 > 2 ? "Alice" : "Bob";
console.log(name); // -> Bob
