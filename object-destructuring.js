//object destructuring
const webDeveloper = {
    name: 'rocky',
    id: 210,
    years: 10,
    language: {
        script: 'js',
        web: 'php',
        job: { office: 'google', salary: 100 }
    }
}
const { office, salary } = webDeveloper.language.job;
console.log(office);

//array destructuring 

const [num1, num2] = [100, 300];
console.log(num1, num2);

// optional chaining 
const fish = { name: 'elish', add: 'chandPur', area: { one: 'trimuhuna', third: 'lauchghat' } }
console.log(fish.areas?.one);