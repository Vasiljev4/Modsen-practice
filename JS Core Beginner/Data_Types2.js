function printLastCharacter(str) {
    if (str.length > 0) {
        console.log(str[str.length - 1]);
    } else {
        console.log("Строка пустая");
    }
}

printLastCharacter("Привет"); 
printLastCharacter("Hello"); 
printLastCharacter(""); 
