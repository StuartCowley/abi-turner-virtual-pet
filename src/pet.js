
const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const MINIMUM_NEEDFEEDING = 5;
const MINIMUM_NEEDWALK = 3;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
};

Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
  };

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      } else {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
      };
};

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      } else if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
};

Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      } else if((this.hunger - 3) >= MINIMUM_HUNGER) {
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }
};

Pet.prototype.checkUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      } else if((this.hunger >= MINIMUM_NEEDFEEDING) && (this.fitness <= MINIMUM_NEEDWALK)) {
        return 'I am hungry AND I need a walk';
    } else if ((this.hunger < MINIMUM_NEEDFEEDING) && (this.fitness <= MINIMUM_NEEDWALK)) {
        return 'I need a walk';
    } else if ((this.hunger >= MINIMUM_NEEDFEEDING) && (this.fitness > MINIMUM_NEEDWALK)) {
        return 'I am hungry';
    } else {
        return 'I feel great!';
    }
};

Pet.prototype.adoptChild = function(child) {
    this.children = [child];
    return `You have adopted ${child.name}!`;

};

const parent = new Pet();
const child = new Pet();




module.exports = Pet;