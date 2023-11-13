
    Use slice instead of splice: While splice does work in this case, it modifies the original array. In general, it's a good practice to avoid mutating original data whenever possible. You can use slice instead, which returns a new array and leaves the original array unchanged. Here's how you can do it:

const args = process.argv.slice(2);

    Error handling: Your code currently assumes that the user will always provide exactly two arguments. If the user provides more or fewer arguments, your program might behave unexpectedly. It would be a good idea to add some error handling to ensure that the user has provided exactly two arguments. Here's an example:

if (args.length !== 2) {
    console.error('Please provide exactly two arguments');
    process.exit(1);
}

    Use a function for addition: While your code is simple and doesn't necessarily need a function for addition, it's a good practice to use functions for operations that might be reused. Here's how you can do it:

function add(a, b) {
    return a + b;
}

console.log(add(num1, num2));

    Variable naming: While num1 and num2 are not bad names, you could consider more descriptive names like firstNumber and secondNumber.
