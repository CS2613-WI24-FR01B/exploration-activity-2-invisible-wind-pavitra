const prompt = require('prompt-sync')({sigint: true});

function addBook(givenBookArray, bookName){

	givenBookArray.push(bookName);
	return givenBookArray;
	

};

function removeBook(givenBookArray, bookName){

	let newBookArray = [];
	let counter = 0;
	for (let i = 0; i < givenBookArray.length; i++){
		if (givenBookArray[i] != bookName){
			newBookArray.push(givenBookArray[i]);
			counter++;
		}
	}
	if (counter ==  givenBookArray.length){
		console.log("ERROR: Invalid Book Name");
	}
	return newBookArray;
};

const printCart = function(givenBookArray){
	for (let i = 0; i < givenBookArray.length; i++){
		console.log(givenBookArray[i]);
	}
};


const test1 = function(givenBookArray){
	describe("./exploration2.js", () => {
		test('number of books = 1', () => {
			expect(givenBookArray.length.toBe(1));
		});
	})
};

/**
const newChart = new Chart("newChart",{
	type: "scatter",
	data: {},
	options: {}
});
*/
let firstTime = 0;
let finalBookArray = [];
while(true){
	console.log('\n\nSelect an operation: \n 1. Add a Book \n 2. Remove a Book \n 3. Print the book cart\n 4. CheckOut \n5. Quit \n');
	const userInput = Number(prompt(''));
	if (userInput == 1){
		console.log("\n Please Enter the name of the book: \n");
		const bookName = prompt('');
		finalBookArray = addBook(finalBookArray, bookName);
	}
	else if (userInput == 2){
		console.log("\n Please Enter the name of the book to be Removed: \n");
		const bookName = prompt('');
		finalBookArray = removeBook(finalBookArray, bookName);
	}
	else if (userInput == 3){
		printCart(finalBookArray);
	}
	else if (userInput == 4){
		console.log("Please enter 'yes' to make a payment: \n");
		const payment = prompt('');
		if (payment == "yes"){
			console.log("Payment completed. Thank you!");
		}
		else{
			console.log("Error in payment. Please try again.");
		}
	}
	else {
		break;
	}


}

test('First book Added', () => {
	arr = [];
	arr = addBook(arr,"New Book Added");
	expect(arr.length).toBe(1);
});

test('First Book Removed', () => {
	arr = [];
	arr = addBook(arr,"New Book Added");
	arr = removeBook(arr, "New Book Added");
	expect(arr.length).toBe(0);
});

test('Book removed from the End', () => {
	arr = [];
	arr = addBook(arr,"Math");
	arr = addBook(arr,"Science");
	arr = addBook(arr,"English");
	arr = addBook(arr,"French");
	arr = removeBook(arr, "French");
	expect(arr.length).toBe(3);
});

test('Book removed from the Middle', () => {
	arr = [];
	arr = addBook(arr,"Math");
	arr = addBook(arr,"Science");
	arr = addBook(arr,"English");
	arr = addBook(arr,"French");
	arr = removeBook(arr, "English");
	expect(arr.length).toBe(3);
});

test('Many Books Added', () => {
	arr = [];
	arr = addBook(arr,"Math");
	arr = addBook(arr,"Science");
	arr = addBook(arr,"English");
	arr = addBook(arr,"French");
	
	expect(arr.length).toBe(4);
});

