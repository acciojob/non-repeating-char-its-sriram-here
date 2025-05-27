function firstNonRepeatedChar(str) {
    const charCount = {};

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no non-repeating character found
}

const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);

if (result === null) {
    alert("No non-repeating character found.");
} else {
    alert("First non-repeating character is: " + result);
}
