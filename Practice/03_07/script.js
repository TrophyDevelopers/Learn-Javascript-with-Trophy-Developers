/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const book ={
  name: "Picfare Book",
  coverColor: "Black",
  totalPages:{  numRuled: 96,
    numNonRuled : 45,},
  blank: true,
  colorBlankPages:"White",
  numCovers: 2,
  coverOpen: false,
  toggleCover(coverStatus){
    this.coverOpen = coverStatus;
  },
  newRuledPages(numNonRuledPages, numRuledPages){
  this.newRuledPages.numNonRuled = numRuledPages;
  this.newRuledPages.numRuled = numNonRuledPages;

  },

}
console.log("The Properties of a book:",  book);

