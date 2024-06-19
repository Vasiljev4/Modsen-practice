function checkInteger(num) {
    if (!Number.isInteger(num)) {
        throw new Error("Параметр должен быть целым числом.");
    }
    console.log("Число является целым:", num);
}

try {
    checkInteger(42);
    checkInteger(3.14); 
} catch (error) {
    console.error(error.message);
}

try {
    checkInteger(-10);
    checkInteger("42"); 
} catch (error) {
    console.error(error.message);
}
