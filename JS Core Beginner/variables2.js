'use strict';

function test() {
    var x = 10;
    console.log("var x:", x); // 10
    var x = 20;
    console.log("var x после повторного объявления:", x); // 20

    
    let y = 30;
    console.log("let y:", y); // 30
    try {
        let y = 40; // Ошибка: повторное объявление переменной let
    } catch (e) {
        console.error("Ошибка при повторном объявлении let y:", e.message);
    }

   
    const z = 50;
    console.log("const z:", z); // 50
    try {
        const z = 60; // Ошибка: повторное объявление переменной const
    } catch (e) {
        console.error("Ошибка при повторном объявлении const z:", e.message);
    }
}

test();

