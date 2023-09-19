// Objects and Arrays tasks

// Task 1
let ticket = {
    from: "Amsterdam",
    to: "Berlin",
    price: 12
}

// Task 2
let person = {}
person.name = "Firstname";
person.surname = "Lastname";

// Task 3
let books = [{
    name: "Speaking JavaScript",
    author: "Acel Rauschmayer",
    pages: 460
},
{
    name: "Programming JavaScript Application",
    author: "Eric Elliott",
    pages: 254
},
{
    name: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352
}]

// Task 4
let newBook = {
    name: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
}
books.push(newBook);

// Task 5
let selectedBooks = books.slice(-2); // copy last 2 books to new arr

// Task 6
books.shift() //remove first book fron list

// Task 7
let sum = books[0].pages + books[1].pages + books[2].pages;
console.log(`sum: ${sum}`)