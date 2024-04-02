[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/RPDAFNpj)
# EA2

# Exploration Activity 2

## Section 1: Which package/library does the sample program demonstrate?
The library that the sample program demonstrates is Jest. The programming language used is JavaScript.

## Section 2: How does someone run your program?
To run the program, the user needs to clone the repository from GitHub. The user should navigate to the directory through command line and needs to run the program using `npm test`. The program would run and the user can use the book buying program. Once the user quits the program by pressing 5, the results of the tests is displayed.

## Section 3: What purpose does your program serve?
The program allows users to add books of their choice to their cart, remove books of their choice from the cart, print the cart, make a payment, and quit the program. Once the program is quit by pressing 5, the program executes test cases built into the program using Jest to test the functionality of the adding and removing books. Overall, this program demonstrates the usage of Jest library of JavaScript to execute a wide variety of test cases. 

## What would be some sample input/output?
Sample input 1: 
```
> exploration2@1.0.0 test
> jest

  console.log
    
    
    Select an operation: 
     1. Add a Book 
     2. Remove a Book 
     3. Print the book cart
     4. CheckOut 
     5. Quit

      at Object.log (exploration2.test.js:52:10)

5
```
Sample Input 1 screenshot:

<img width="642" alt="image" src="https://github.com/CS2613-WI24-FR01B/exploration-activity-2-invisible-wind-pavitra/assets/113079611/5c07e3da-a6d4-4f14-bfef-d885ccdbdcbb">
Sample input 2: 
```
> exploration2@1.0.0 test
> jest

  console.log
    
    
    Select an operation: 
     1. Add a Book 
     2. Remove a Book 
     3. Print the book cart
     4. CheckOut 
    5. Quit

      at Object.log (exploration2.test.js:52:10)

1
  console.log
    
     Please Enter the name of the book:

      at Object.log (exploration2.test.js:55:11)

Math - Calculus
  console.log
    
    
    Select an operation: 
     1. Add a Book 
     2. Remove a Book 
     3. Print the book cart
     4. CheckOut 
    5. Quit

      at Object.log (exploration2.test.js:52:10)

3
  console.log
    Math - Calculus

      at log (exploration2.test.js:29:11)

  console.log
    
    
    Select an operation: 
     1. Add a Book 
     2. Remove a Book 
     3. Print the book cart
     4. CheckOut 
    5. Quit

      at Object.log (exploration2.test.js:52:10)

5
 PASS  ./exploration2.test.js (24.22 s)
  ✓ First book Added (5 ms)
  ✓ First Book Removed (1 ms)
  ✓ Book removed from the End
  ✓ Book removed from the Middle
  ✓ Many Books Added

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        24.249 s
Ran all test suites.

```
Sample Input 2 Screenshot:

<img width="502" alt="image" src="https://github.com/CS2613-WI24-FR01B/exploration-activity-2-invisible-wind-pavitra/assets/113079611/5df1226f-af96-4cd1-9a13-809d48dac327">


