'use strict';

function test() {
    {
        
        var varInsideBlock = "varInside";
        let letInsideBlock = "letInside";
        const constInsideBlock = "constInside";

        console.log("Inside block:");
        console.log("varInsideBlock:", varInsideBlock); 
        console.log("letInsideBlock:", letInsideBlock); 
        console.log("constInsideBlock:", constInsideBlock);
    }

    console.log("Outside block:");
    console.log("varInsideBlock:", varInsideBlock);
    // let и const вызовут ошибку, так как переменные letInsideBlock и constInsideBlock не видны за пределами блока
    try {
        console.log("letInsideBlock:", letInsideBlock);
    } catch (e) {
        console.error("letInsideBlock is not defined");
    }

    try {
        console.log("constInsideBlock:", constInsideBlock);
    } catch (e) {
        console.error("constInsideBlock is not defined");
    }
}
test();
