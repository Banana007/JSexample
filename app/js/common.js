const turtle = {
	name: "Bob",
	age: 156,
	legs: 4,
	food: "milk",
	shell: true
};

'bad code'
function feed(animal) {
	return `Feed ${animal.name}, ${animal.age}, ${animal.food}`;
}
// console.log(feed(turtle));


'good code'
function feed({name, age, food}) {
	return `Feed ${name} ${age} ${food}`;
}
console.log(feed(turtle));