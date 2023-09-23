let decision = window.confirm("Is it OK?"); // will prompt user with OK or cancel
console.log(decision);


let remove = confirm("Remove all data?"); // will prompt user
let message = remove ? "Deleting Data" : "Cancelled" // values present to return to console, depending on input

console.log(message);
