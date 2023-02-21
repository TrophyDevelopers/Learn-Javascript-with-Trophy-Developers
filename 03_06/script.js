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

console.log("The backpack object:", backpack);
console.log(  "Color of The backpack  is:" , backpack.color);
console.log(  "Number of pockects  :" , backpack.pocketNum);
console.log(  "Straplength of The backpack  is:" , backpack.strapLength.left);// dot notation
var query = "pocketNum";
console.log(  "Number of Pockets:" , backpack[query]); //bracket Notation