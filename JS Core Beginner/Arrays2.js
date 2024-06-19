function sumFirstHalf(arr) {
    const middleIndex = Math.floor(arr.length / 2);
    let sum = 0;
    for (let i = 0; i < middleIndex; i++) {
        sum += arr[i];
    }

    console.log("Сумма первой половины массива:", sum);
}

sumFirstHalf([1, 2, 3, 4, 5, 6]); 
sumFirstHalf([10, 20, 30, 40, 50]); 
sumFirstHalf([5, 15, 25, 35, 45, 55, 65, 75]); 
