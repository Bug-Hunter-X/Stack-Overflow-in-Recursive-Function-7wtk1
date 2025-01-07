# JavaScript Stack Overflow Bug

This repository demonstrates a common error in JavaScript: stack overflow due to uncontrolled recursion.  The `foo` function recursively calls itself without a proper base case for large inputs, leading to a stack overflow error.  The solution provides an iterative approach to avoid this problem.

## Bug

The `bug.js` file contains the faulty recursive function.  For larger values of `a` and `b`, this will exceed the JavaScript call stack limit and throw a stack overflow error.

## Solution

The `bugSolution.js` file provides a corrected version using iteration to avoid the stack overflow. This solution is much more efficient and robust for larger inputs.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a JavaScript environment.
3. Call the `foo` function from each file with various inputs (including large numbers) to see the difference in behavior.
