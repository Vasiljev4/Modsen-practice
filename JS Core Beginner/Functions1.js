function repeatOperation(operation, interval, repetitions) {
    let count = 0;
    const intervalId = setInterval(() => {
        operation();
        count++;
        if (count >= repetitions) {
            clearInterval(intervalId);
        }
    }, interval);
}
function myOperation() {
    console.log("Операция выполнена в", new Date().toLocaleTimeString());
}
//2 sec, 5 times
repeatOperation(myOperation, 2000, 5);
