// Reference: https://www.youtube.com/watch?v=nnwD5Lwwqdo

class Animal {
  constructor(name) {
    this.name = name;
  }
  move() {
    console.log(`${this.name} Can Move !`);
  }
}

class Bird extends Animal{
  fly() {
    console.log(`${this.name} Can Fly !`);
  }
}

class Fish extends Animal{
  swim() {
    console.log(`${this.name} Can Swim !`);
  }
}

/* class HybridBirdFish {
    It Can Fly and Swim. ( Wanna Reuse )
} */

/* So I want HybridBirdFish should fly and swim
   So which Class it Extends ? Fish or Bird ?
   we need to do Extra Things for that
   That's the reason we should use Composition instead of inheritance
*/

const bird = new Bird('Moyna');
bird.move(); // Moyna Can Move !
bird.fly();  // Moyna Can Fly !

const fish = new Fish('Puti Mach');
fish.move(); // Puti Mach Can Move !
fish.swim(); // Puti Mach Can Swim !


console.log('-----------------------\n');
// (==>----------------------------------------<==)


function FunSwimmer({name}) {
  return {
    swim : () => {
      console.log(`${name} Can Swim !`);
    } 
  }
}

function FunFlyer({name}) {
  return {
    fly : () => {
      console.log(`${name} Can Fly !`);
    } 
  }
}

function HybridSwimmerFlyer({name}) {
  const hybridObj = {name : name}
  return{
    hybridObj,
    ...FunSwimmer(hybridObj),
    ...FunFlyer(hybridObj)
  }
}

const fishFun = FunSwimmer({name : 'Boicha Mach'});
fishFun.swim(); // Boicha Mach Can Swim !

const birdFun = FunFlyer({name : 'Shalik'});
birdFun.fly(); // Shalik Can Fly !

const hybrid = HybridSwimmerFlyer({name : 'Mr Hybrid'});
hybrid.swim(); // Mr Hybrid Can Swim !
hybrid.fly();  // Mr Hybrid Can Fly !
