/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack things:",  backpack);
const book ={
  name: "Picfare Book",
  color: "Black",
  numPages: 96,
  ruled: true,
  blank: true,
  colorBlank:"white",
  numCovers: 2,
  coverOpen: false,
  toggleCover: function(coverStatus){
    this.coverOpen = coverStatus;
  },

}
console.log("The Properties of a book:",  book);
