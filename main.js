// .length of array
const cars = ['Ford', 'Chevy', 'Toyota', 'BMW'];
console.log("Beginning of Length of Array" + cars.length);

// .concat with more cars and total cars
const moreCars = ['Mercedes', 'Saab', 'Buick', 'Honda'];

const totalCars = cars.concat(moreCars);

console.log(totalCars);
console.log('New length of array' + totalCars.length);

// .indexOf() and .lastIndexOf() 
console.log("Index of Honda" + totalCars.indexOf('Honda'));
console.log("Index of BMW" + totalCars.lastIndexOf('BMW'));

// .join()
const stringOfCars = totalCars.join();
console.log(stringOfCars);

// .split()
const carsFromString = stringOfCars.split(",");
console.log(carsFromString);

// .reverse()
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

// .sort()
carsInReverse = carsInReverse.sort()
console.log(carsInReverse.indexOf('BMW'));

// .slice()
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird'];
const keepReptiles = pets.slice(4,6);
console.log(keepReptiles);
console.log(pets);

// .splice()
const removedReptiles = pets.splice(4,2);
console.log(removedReptiles);
console.log(pets);

// addHamster to arr
const addHamster = pets.splice(4,2, "hamster")
console.log(pets);

// .pop()
const removedPets = pets.pop();
console.log(pets);
console.log(removedPets);

// .push()
const reAddPets = pets.push("hamster");
console.log(pets);

// .shift()
const movePet = pets.shift();
console.log(pets);

// .unshift()
const addTurtle = pets.unshift("turtle");
console.log(pets);

// .forEach()
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
numbers.forEach(addTwo = (num, index) => {
  return numbers[index] = (num + 2);
});
console.log(numbers);