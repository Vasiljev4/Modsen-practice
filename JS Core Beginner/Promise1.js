function asyncOperation1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Операция 1 выполнена");
            resolve("Результат 1");
        }, 1000);
    });
}

function asyncOperation2(result1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Операция 2 выполнена с результатом:", result1);
            resolve("Результат 2");
        }, 1000);
    });
}

function asyncOperation3(result2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Операция 3 выполнена с результатом:", result2);
            resolve("Результат 3");
        }, 1000);
    });
}

function executeAsyncOperations() {
    asyncOperation1()
        .then(result1 => {
            return asyncOperation2(result1);
        })
        .then(result2 => {
            return asyncOperation3(result2);
        })
        .then(result3 => {
            console.log("Все операции выполнены с результатом:", result3);
        })
        .catch(error => {
            console.error("Ошибка выполнения:", error);
        });
}

executeAsyncOperations();
