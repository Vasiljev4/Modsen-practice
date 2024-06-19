async function fetchDataFromServers(urls) {
  try {
    const requests = urls.map(async url => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Ошибка при получении данных с URL ${url}: ${response.statusText}`);
      }
      return response.json();
    });
    
    const results = await Promise.all(requests);

    return results;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
}

fetchDataFromServers(urls)
  .then(results => {
    console.log('Результаты загрузки данных:');
    results.forEach((result, index) => {
      console.log(`Данные с URL ${urls[index]}:`, result);
    });
  })
  .catch(error => console.error('Ошибка:', error));
