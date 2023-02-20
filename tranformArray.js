// Your task is to add the missing logic to a transformToObjects() function that 
// transforms a list of numbers into a list of JavaScript objects.

// For the provided input [1, 2, 3] the transformToObjects() function should return [{val: 1}, {val: 2}, {val: 3}].

function transformArray(arr) {
  return arr.map(item => ({val: item}))
}


console.log(transformArray([1,2,3]))
console.log(transformArray(['a','b','c']))