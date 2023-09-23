let name = window.prompt("What is your name?", "John Doe"); // Will ask user for name, and will default to John Doe
name = name ? name : "anonymous"; // if no name is inserted, default to anonymous.

let age = prompt("Hello " + name + " how old are you?"); // prompts user to input age
alert(name + " is " + age + " years old"); // output a message including the age declaration
