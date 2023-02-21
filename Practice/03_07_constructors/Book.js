class Book{
    constructor(
      name,
        coverColor,
        numRuled,
        numNonRuled,
        colorBlankPages,
        numCovers,
        coverOpen,
        totalBookpages
  
    ){
        this.name= name;
        this.coverColor=coverColor;
        this.numRuled=numRuled;
        this.numNonRuled=numNonRuled;
        this.colorBlankPages=colorBlankPages;
        this.numCovers=numCovers;
        this.coverOpen =coverOpen;
        this. totalBookpages =  totalBookpages;
        
    }
      // Add methods like normal functions:
      toggleCover(coverStatus){
        this.coverOpen = coverStatus;
      }
      newRuledPages(numNonRuled, numRuled){
        this.newRuledPages.numNonRuled = numRuled;
        this.newRuledPages.newRuledPages = numNonRuled;
      
        }
      }

  
  export default Book;