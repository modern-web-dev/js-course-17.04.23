class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
const marek = new Person('Marek', 'Matczak', 0);

const czarek = {
    firstName: 'Czarek',
    lastName: 'Kowalski',
    age: 33
}

const marysia = {
    'first-name': 'Marysia',
    lastName: 'Nowak',
    age: 35,
    sex: 'female',
    address: {
        zipCode: '53-601',
        streetName: 'Legnicka',
        city: 'Wroclaw'
    }
}

marek.favouriteColor = 'red';
// delete marek.age;

// falsy values: undefined, null, '', 0, false, NaN
// truthy values: {}, []

const zipCode = marek?.age ?? 'no age';

if(zipCode != null) {

}

console.log(zipCode);
