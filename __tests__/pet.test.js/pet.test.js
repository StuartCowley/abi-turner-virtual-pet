const Pet = require('../../src/pet');

describe('constructor', () => {
    it("returns an object", () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });


});

describe('constructor', () => {
    it('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });
});

describe('constructor', () => {
   it('has a initial age of 0', () => {
    const pet = new Pet('Fido');
    
    expect(pet.age).toEqual(0);
   });
    
});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
      });
});

describe('gettingUnhealthier', () => {
    it('increases the hunger by 5 when age increases', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });
    it('decreases the fitness by 3 when age increases', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {
    it('increases fitness by 4 to a maximum of 10', () => {
        const pet = new Pet('fido');
        
        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
      });
});

describe('feed', () => {

    it('decreases hunger level to a minimum of 0', () => {
        const pet = new Pet('fido');

        pet.hunger = 3;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
      });
});

describe('checkUp', () => {
    it('returns how the pet is feeling', () => {
        const pet = new Pet('fido');

        pet.hunger = 5;
        pet.fitness = 3;
        
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');

    });

    it('returns how the pet is feeling', () => {
        const pet = new Pet('fido');

        pet.hunger = 0;
        pet.fitness = 4;
        
        expect(pet.checkUp()).toEqual('I feel great!');

    });

    it('returns how the pet is feeling', () => {
        const pet = new Pet('fido');

        pet.hunger = 0;
        pet.fitness = 2;
        
        expect(pet.checkUp()).toEqual('I need a walk');

    });

    it('returns how the pet is feeling', () => {
        const pet = new Pet('fido');

        pet.hunger = 6;
        pet.fitness = 5;
        
        expect(pet.checkUp()).toEqual('I am hungry');

    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
      });


});

describe('isAlive', () => {
    it('returns if the pet is alive', () => {
        const pet = new Pet('fido');

        pet.hunger = 7;
        pet.fitness = 8;
        pet.age = 20;

        expect(pet.isAlive).toEqual(true);
    });

    it('returns if the pet is alive', () => {
        const pet = new Pet('fido');

        pet.hunger = 7;
        pet.fitness = 8;
        pet.age = 30;

        expect(pet.isAlive).toEqual(false);
    });

    it('returns if the pet is alive', () => {
        const pet = new Pet('fido');

        pet.hunger = 7;
        pet.fitness = 0;
        pet.age = 20;

        expect(pet.isAlive).toEqual(false);
    });

    it('returns if the pet is alive', () => {
        const pet = new Pet('fido');

        pet.hunger = 10;
        pet.fitness = 8;
        pet.age = 20;

        expect(pet.isAlive).toEqual(false);
    });

    
});

describe('adoptChild', () => {
    
    it('returns the child onto the parent pet', () => {
        const parent = new Pet('Dave');
        const child = new Pet('Amelia');

        expect(parent.adoptChild(child)).toEqual('You have adopted Amelia!');
        


    })
      
});

describe('haveBaby', () => {
    it('adds a new child to the parent' , () => {
        const parent = new Pet('Dave');
        parent.haveBaby('Billy');
        
        expect(parent.children).toEqual(expect.arrayContaining([{"age": 0, "children": [], "fitness": 10, "hunger": 0, "name": "Billy"}]));

        parent.haveBaby('Bob');

        expect(parent.children).toEqual(expect.arrayContaining([{"age": 0, "children": [], "fitness": 10, "hunger": 0, "name": "Billy"}], [{"age": 0, "children": [], "fitness": 10, "hunger": 0, "name": "Bob"}]));



        
    })
})
