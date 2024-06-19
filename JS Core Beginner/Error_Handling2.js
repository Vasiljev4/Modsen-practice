function accessProperty(obj, property) {
    try {
        let value = obj[property];
        console.log(`Значение свойства '${property}':`, value);
    } catch (error) {
        if (error instanceof TypeError) {
            console.error(`Ошибка TypeError: Невозможно получить доступ к свойству '${property}' неопределенного объекта.`);
        } else {
            throw error;
        }
    }
}

let validObject = { name: "Alice" };
let undefinedObject = undefined;
accessProperty(validObject, "name");
accessProperty(undefinedObject, "name"); // Ошибка TypeError: Невозможно получить доступ к свойству 'name' неопределенного объекта.
