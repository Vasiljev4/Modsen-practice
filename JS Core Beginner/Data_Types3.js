function sumFirstAndLastDigit(number) {
    let numStr = number.toString();
    let firstDigit = parseInt(numStr[0]);
    let lastDigit = parseInt(numStr[numStr.length - 1]);
    let sum = firstDigit + lastDigit;

    console.log("Сумма первой и последней цифры:", sum);
}

sumFirstAndLastDigit(12345); 
sumFirstAndLastDigit(987654); 
sumFirstAndLastDigit(5); 
