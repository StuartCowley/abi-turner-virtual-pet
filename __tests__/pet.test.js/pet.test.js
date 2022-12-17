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
});

describe('feed', () => {
    it('decreases hunger level to a minimum of 0', () => {
        const pet = new Pet('fido');

        pet.hunger = 3;
        pet.feed();

        expect(pet.hunger).toEqual(0);
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


});