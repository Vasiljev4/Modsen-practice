function ZeroError(num1, num2) {
    try {
        if (num2 === 0) {
            throw new Error("Ошибка: Второе число не должно быть равно нулю.");
        }
        else{
        console.log(`Все норм`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

ZeroError(10, 2);
ZeroError(10, 0); 
