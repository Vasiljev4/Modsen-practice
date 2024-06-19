function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }

    console.log("Сумма квадратов элементов массива:", sum);
}

sumOfSquares([1, 2, 3, 4, 5]); //55 
sumOfSquares([10, 20, 30]); //1400
sumOfSquares([2, 4, 6, 8]); //120
