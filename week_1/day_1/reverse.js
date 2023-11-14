function reverse (str)
{
  let reversedStr = '';

  for(let i = str.length - 1; i >= 0; i--)
  {
    reversedStr += str[i];
  }
  return reversedStr;
}

const args = process.argv;
args.splice(0,2);

for(let i = 0; i < args.length; i++)
{
  console.log(reverse(args[i]));
}
