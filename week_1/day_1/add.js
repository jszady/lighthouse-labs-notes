const args = process.argv;
args.splice(0,2);

const num1 = Number(args[0]);
const num2 = Number(args[1]);

console.log(num1 + num2);
