//Origin
let arr = ["James", "Brennie"];
console.log(arr);

//Append “Robert” to the end.
arr.push("Robert");
console.log(arr);

// Replace the value in the middle by “Calvin”. Your code for finding the middle value should work for any arrays with odd length.
arr.splice(1, 1, "Calvin");
console.log(arr);

// Remove the first value of the array and show it.
arr.shift();
console.log(arr);

// Prepend Rose and Regal to the array.
arr.unshift("Rose", "Regal");
console.log(arr);