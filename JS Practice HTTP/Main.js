//Main code
// Инициализация коллекционного объекта для хранения кодов состояния, если он еще не существует
if (!pm.collectionVariables.has("responseStatuses")) {
    pm.collectionVariables.set("responseStatuses", JSON.stringify({}));
}

// Получение текущих статусов
let responseStatuses = JSON.parse(pm.collectionVariables.get("responseStatuses"));

// Получение текущего кода состояния
let statusCode = pm.response.code;

// Добавление кода состояния в объект, если его там еще нет
if (!responseStatuses[statusCode]) {
    responseStatuses[statusCode] = true;
}

// Сохранение обновленного объекта статусов
pm.collectionVariables.set("responseStatuses", JSON.stringify(responseStatuses));

// Логирование текущего состояния
console.log("Код состояния:", statusCode);

/* URL для необходимых статусов
1) Со статусом 1хх были траблы, поэтому он не получен
2) Статус 2хх: https://jsonplaceholder.typicode.com/posts/1 (200)
3) Статус 3хх: https://httpstat.us/304 (304)
4) Статус 4хх: https://jsonplaceholder.typicode.com/invalid-url (404)
5) Статус 5хх: https://httpstat.us/500 (500)
Пруфы получения статусов прикреплены скрином в папке JS Practice HTTP
*/
