// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

const doctors = (name,specialty, address) => {
   return{
    name: name,
    specialty: specialty,
    address: address
}
}

const drSally = doctors("Sally", "Vet", "123 Dog Pl")

console.log(drSally)


// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels


const createPet = (name, breed) => {
    return {
        name: name,
        breed: breed
    };
};

const piper = createPet("Piper", "Mut")
console.log(piper)

const bowWowKennels = [
    createPet("Piper", "Mut"),
    createPet("Steve", "Lab"),
    createPet("Rambo", "Pit")
];

console.log("bowWowKennels", bowWowKennels)
