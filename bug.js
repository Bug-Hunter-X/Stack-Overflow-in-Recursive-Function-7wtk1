function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct
  } else if (a === 0) {
    return b; // Correct
  } else if (b === 0) {
    return a; // Correct
  } else {
    return foo(a - 1, b - 1) + a + b; // Incorrect: Stack overflow for large a, b
  }
}