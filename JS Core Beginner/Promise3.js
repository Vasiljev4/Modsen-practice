async function fetchMultipleAPIs(urls) {
  try {
    const requests = urls.map(url => fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка при получении данных с URL ${url}: ${response.statusText}`);
      }
      return response.json();
    }));
    
    const results = await Promise.all(requests);
    return results.reduce((acc, result) => {
      return { ...acc, ...result };
    }, {});
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
}

fetchMultipleAPIs(urls)
  .then(result => console.log('Объединенный результат:', result))
  .catch(error => console.error('Ошибка:', error));
