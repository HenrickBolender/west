import Dog from "./Dog.js";

class PseudoDuck extends Dog {
  constructor(name = "Псевдоутка", maxPower = 3, image) {
    super(name, maxPower, image);
  }

  quacks() {
    console.log("quack");
  }

  swims() {
    console.log("float: both;");
  }
}

export default PseudoDuck;
