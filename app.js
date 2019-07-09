/**
 * PROTOTYPES EXPLAINED
 */

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = dob;
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}

const john = new Person('John', 'Doe', '08-01-2000');
const alice = new Person('Alice', 'Allison', '06-01-1991');

console.log(john);

/**
 * OBJECT ORIENTED JS
 */

/* INTRO TO ES6 CLASSES */

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }

//     greeting() {
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     }

//     calculateAge() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970)
//     }

//     getsMarried(newLastName) {
//         this.lastName = newLastName;
//     }
// }

// const mary = new Person('Mary', 'Williwham', '01-01-1990');

// mary.getsMarried('Berry');

// console.log(Date.now());

/* SUB CLASSES AND INHERITANCE */

// class Person {
//     constructor(firstName, lastName)   {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     greeting() {
//         return `Hey there ${this.firstName} ${this.lastName}`;
//     }

//     static getMembershipCost() {
//         return 1000;
//     }
// }

// //this is the subclass
// class Customer extends Person {
//     constructor(firstName, lastName, phone, membership) {
//         super(firstName, lastName);

//         this.phone = phone;
//         this.membership = membership;
//     }
// }

// const Kurt = new Customer('John', 'Wick', '09-300-0000', 'Premier');

// console.log(Customer.getMembershipCost());