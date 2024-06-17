'use strict';

function test() {
    try {
        console.log("var x:", x); // Результат: var x: undefined
    } catch (e) {
        console.error("Ошибка при обращении к var x:", e.message);
    }
    var x = 10;

    try {
        console.log("let y:", y); // Результат: Ошибка при обращении к let y: Cannot access 'y' before initializatio
    } catch (e) {
        console.error("Ошибка при обращении к let y:", e.message);
    }
    let y = 20;

    try {
        console.log("const z:", z); // Результат: Ошибка при обращении к const z: Cannot access 'z' before initializati
    } catch (e) {
        console.error("Ошибка при обращении к const z:", e.message);
    }
    const z = 30;
}

test();
