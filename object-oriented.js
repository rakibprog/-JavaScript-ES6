// object oriented javascript 
class About {
    name;
    designation = 'I am Web Developer';
    constructor(name, addres) {
        this.name = name;
        this.address = addres;
    }
    life() {
        console.log(this.name, 'my life is very simple');
    }
    address = 'bd';
}

const rocky = new About('rocky', 'bd');
rocky.life();
console.log(rocky);


// inheritance

class A {
    name;
    designation = 'I am Web Developer';
    constructor(name, addres) {
        this.name = name;
        this.address = addres;
    }
    life() {
        console.log(this.name, 'my life is very simple');
    }
    address = 'bd';

}
// inheritence 
class B extends A {

    age;
    constructor(name, addres, age) {
        super(name, addres);
        this.age = age;
    }
    life() {
        console.log('i am rocky');
    }
}


const b = new B('rocky', 'bd', 20);
console.log(b);

function min(nums) { return Math.min(nums) }
console.log(min([1, 3, 2]));