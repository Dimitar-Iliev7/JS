function Dog() {
    this.name = "Rex",
    this.color = "brown",
    this.numLegs = 4;
  }

//   Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.
// Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.