'use strict';

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}


console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript"));
console.log(countVowels("БГУИР")); 
