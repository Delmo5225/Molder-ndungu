
function reversestring(){
    // Function to reverse a string

  // Step 1: Split the string into an array of characters
  let charArray = str.split("");
  
  // Step 2: Reverse the array
  let reversedArray = charArray.reverse();
  
  // Step 3: Join the characters back into a string
  let reversedStr = reversedArray.join("");
  
  // Step 4: Return the reversed string
  return reversedStr;
}

// Example tests
console.log(reverseString("hello"));    
console.log(reverseString("Molder"));    
console.log(reverseString("how $ is $ you"));

