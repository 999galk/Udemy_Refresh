//Evaluate these:
//#1
[2] === [2]
{} === {}

Both are false cuase obj is kept as reference, each has a different location in memory and that's what is compared

//#2 what is the value of property a for each object.
const object1 = { a: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { a: 5};
object1.a = 4;

// object1 is {a:4}
// object2 is {a:4}
// object3 is also {a:4}
// object4 is {a:5}

//#3 create two classes: an Animal class and a Mamal class.
Class Animal {
  constructor(name, type, color){
    this.name : name,
    this.type : type,
    this.color : color
  }
}

class Memal extends Animal{
  constructor(name, type, color){
    super(name, type, color)
  }
  sound(){
    console.log(`I'm mooo${this.name} of type ${this.type} and color ${this.color}`);
  }
}

// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

const cow = new Memal('Hava', 'Cow', 'Dotted');
cow.sound();
