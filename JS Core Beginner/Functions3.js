function firstNonRepeatingCharacter(str) {
    const charCount = {};
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
  
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonRepeatingCharacter("swiss")); 
console.log(firstNonRepeatingCharacter("level")); 
console.log(firstNonRepeatingCharacter("aabbcc"));
