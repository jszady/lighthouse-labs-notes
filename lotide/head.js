const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  if(arr[0] === '') {
    return undefined;
  }

  let firstElement = arr[0];
  return firstElement;

}

assertEqual(head([5,6,7]), 5);
assertEqual(head([]), 0)
assertEqual(head([,6,7]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
