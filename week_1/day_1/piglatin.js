function pigLatin (str)
{
  let newEnding = str[0] + "ay";
  let pigLatin = str.substring(1);
  pigLatin += newEnding;

  return pigLatin;
}

const args = process.argv;
args.splice(0,2);

let final = [];

for(let i = 0; i < args.length; i++)
{
  final.push(pigLatin(args[i]));
}

console.log(final.join(" "));
