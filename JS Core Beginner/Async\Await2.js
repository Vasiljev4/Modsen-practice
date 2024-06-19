async function fetchDataAndUseIt(url1, url2) {
  try {
    const response1 = await fetch(url1);
    if (!response1.ok) {
      throw new Error(`Ошибка при получении данных с URL ${url1}: ${response1.statusText}`);
    }
    const data1 = await response1.json();
    const response2 = await fetch(url2, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data1)
    });

    if (!response2.ok) {
      throw new Error(`Ошибка при выполнении запроса к URL ${url2}: ${response2.statusText}`);
    }
    const data2 = await response2.json();

    return data2; 
  } catch (error) {
    console.error('Ошибка:', error);
    throw error;
  }
}

fetchDataAndUseIt(url1, url2)
  .then(data => console.log('Результат выполнения функции:', data))
  .catch(error => console.error('Ошибка:', error));
