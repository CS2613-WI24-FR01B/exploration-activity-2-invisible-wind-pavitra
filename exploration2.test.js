const prompt = require('prompt-sync')({sigint: true});

// Used to add a book
function addBook(givenBookArray, bookName){

	givenBookArray.push(bookName);
	return givenBookArray;
	

};

// Used to remove a book
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

// Used to print the book cart
const printCart = function(givenBookArray){
	for (let i = 0; i < givenBookArray.length; i++){
		console.log(givenBookArray[i]);
	}
};




let firstTime = 0;
let finalBookArray = [];
// while loop for the program
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

// Test case 1
test('** Length Check ** - First book Added', () => {
	arr = [];
	arr = addBook(arr,"New Book Added");
	expect(arr.length).toBe(1);
});

// Test case 2
test('** Book Addition Check ** - First book Added', () => {
	arr = [];
	arr = addBook(arr,"Math");
	expect(arr).toEqual(["Math"]);
});

// Test Case 3
test('** Length Check ** - First Book Removed', () => {
	arr = [];
	arr = addBook(arr,"New Book Added");
	arr = removeBook(arr, "New Book Added");
	expect(arr.length).toBe(0);
});

//Test Case 4
test('** Book Removal Check ** - Books Removed', () => {
	arr = [];
	arr = addBook(arr,"Math");
	arr = addBook(arr,"Science");
	arr = removeBook(arr, "Math");
	expect(arr).toEqual(["Science"]);
});

// Test Case 5
test('** Length Check ** - Book removed from the End', () => {
	arr = [];
	arr = addBook(arr,"Math");
	arr = addBook(arr,"Science");
	arr = addBook(arr,"English");
	arr = addBook(arr,"French");
	arr = removeBook(arr, "French");
	expect(arr.length).toBe(3);
});

//Test Case 6
test('** Length Check ** - Book removed from the Middle', () => {
	arr = [];
	arr = addBook(arr,"Math");
	arr = addBook(arr,"Science");
	arr = addBook(arr,"English");
	arr = addBook(arr,"French");
	arr = removeBook(arr, "English");
	expect(arr.length).toBe(3);
});


// Test Case 7
test('** Removal Check ** - Book removed from the Middle', () => {
	arr = [];
	arr = addBook(arr,"Math");
	arr = addBook(arr,"Science");
	arr = addBook(arr,"English");
	arr = addBook(arr,"French");
	arr = removeBook(arr, "English");
	expect(arr).toEqual(["Math", "Science", "French"]);
});

// Test Case 8
test('Many Books Added', () => {
	arr = [];
	arr = addBook(arr,"Math");
	arr = addBook(arr,"Science");
	arr = addBook(arr,"English");
	arr = addBook(arr,"French");
	
	expect(arr.length).toBe(4);
});

