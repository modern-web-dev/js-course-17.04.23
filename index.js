const person = {
    firstName: 'Marek',
    age: 44,
    whoIAm() {
        // return 'My name is ' + this.firstName;
        return `My name is ${this.firstName.toUpperCase()}
        ...and I am ${this.age} years old`;
    }
}

console.log(person.whoIAm());
