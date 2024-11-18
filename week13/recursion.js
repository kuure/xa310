// you probably don't want to run this code...
function infiniteRecursion() {
	console.log("This will run forever... or until a stack overflow!")
	infiniteRecursion()
}



// a function to calcultate the factorial of an integer 
function factorialIterative(n) {
	if (n < 0) {
		return("Factorial is not defined for negative numbers.")
	}

	let result = 1

	for (let i = 1; i <= n; i++) {
		result *= i
	}
	return result
}

console.log(factorialIterative(5)); 
console.log(factorialIterative(10)); 






// a function to calcultate the factorial of an integer recursively
function factorialRecursive(n) {

	// Base case: factorial of 0 or 1 is 1
	if (n === 0 || n === 1) {
		return 1
	}

	// Recursive case
	return n * factorialRecursive(n - 1)
}

// prints 120
console.log(factorialRecursive(5)) 

// how many ways to deal a standard 52 card deck?
console.log(`There are ${factorialRecursive(52)} ways to deal a standard deck of cards`)


