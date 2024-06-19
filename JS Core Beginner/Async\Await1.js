async function fetchDataFromRemoteServer(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка при получении данных с URL ${url}: ${response.statusText}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
}

fetchDataFromRemoteServer(apiUrl)
  .then(data => console.log('Полученные данные:', data))
  .catch(error => console.error('Ошибка:', error));
