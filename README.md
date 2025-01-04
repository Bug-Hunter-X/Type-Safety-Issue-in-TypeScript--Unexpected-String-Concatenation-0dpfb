# TypeScript Type Safety Bug

This repository demonstrates a subtle type safety issue in TypeScript where passing an array to a function expecting a string leads to unexpected string concatenation instead of a type error.  The bug and its solution are provided in separate TypeScript files.

## Bug Description:
The `greeter` function is designed to take a string and return a greeting. However, passing an array of strings results in the array elements being concatenated without any error, leading to incorrect output.

## Solution:
The solution enforces stricter type checking by explicitly defining the parameter type and handling cases where an array is passed to prevent this unexpected behavior. 
