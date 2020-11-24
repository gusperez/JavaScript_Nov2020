var arbol= "arbol";
var nombre = "Gus";

console.log(arbol, nombre)

console.log("----- Remove item from an array -----")

const items = ['a', 'b', 'c', 'd', 'e', 'f']
const valueToRemove = 'c'
const filteredItems = items.filter(item => item !== valueToRemove)

console.log(filteredItems)

console.log("----- const array -----")

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

//cars = ["Toyota", "Volvo", "Audi"];

console.log(cars)