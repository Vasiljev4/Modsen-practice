function callAfterDelay(callback) {
  setTimeout(callback, 2000); 
}

function myCallback() {
  console.log('Функция myCallback была вызвана после задержки в 2 секунды.');
}

callAfterDelay(myCallback);
