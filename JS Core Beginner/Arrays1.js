function increaseByTenPercent(numbers) {
    return numbers.map(number => number * 1.10);
}

const originalArray = [10, 20, 30, 40, 50];
const increasedArray = increaseByTenPercent(originalArray);

console.log("Оригинальный массив:", originalArray);
console.log("Увеличенный массив:", increasedArray);
