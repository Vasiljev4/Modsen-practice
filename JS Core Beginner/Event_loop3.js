function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1; 
}

function delayWithPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = generateRandomNumber();
    console.log(`Сгенерированное число: ${randomNumber}`);

    setTimeout(() => {
      if (randomNumber >= 1 && randomNumber <= 5) {
        resolve(`Успешно завершен с числом ${randomNumber}`);
      } else {
        reject(`Ошибка: сгенерировано число ${randomNumber}`);
      }
    }, randomNumber * 1000); 
  });
}

delayWithPromise()
  .then(result => console.log(result))
  .catch(error => console.error(error));
