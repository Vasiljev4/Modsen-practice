function opa(num1, num2) {
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

// Пример использования:
opa(10, 2);  5
opa(10, 0); // Ошибка: Второе число не должно быть равно нулю.
