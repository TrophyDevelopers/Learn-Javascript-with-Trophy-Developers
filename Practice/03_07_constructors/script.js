/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// const book ={
//   name: "Picfare Book",
//   coverColor: "Black",
//   totalPages:{  numRuledPages: 96,
//     numNonRuledPages: 45,},
//   colorBlankPages:"White",
//   numCovers: 2,
//   coverOpen: false,
//   toggleCover(coverStatus){
//     this.coverOpen = coverStatus;
//   },
//   newRuledPages(numNonRuledPages, numRuledPages){
//   this.newRuledPages.numNonRuledPages = numRuledPages;
//   this.newRuledPages.newRuledPages = numNonRuledPages;

//   },

// }
// console.log("The Properties of a book:",  book);
import Book from "./Book.js";

const everydayBook = new Book(
  "Picfare Book",
  true, 
  96, 
  45,
  false, 
  "black",
  2,
 96+45,


)

console.log("The everyday Book:", everydayBook);
console.log("The Name of the book Manufacturer:", everydayBook.name);
console.log("The Total Pages:", everydayBook.totalBookpages);