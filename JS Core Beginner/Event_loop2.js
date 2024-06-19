async function fetchDataWithTimeout(url, timeout) {
  const controller = new AbortController();
  const signal = controller.signal;

  const timeoutId = setTimeout(() => {
    controller.abort(); 
  }, timeout);

  try {
    const response = await fetch(url, { signal });
    if (!response.ok) {
      throw new Error(`Ошибка при получении данных с URL ${url}: ${response.statusText}`);
    }

    const data = await response.json();

    return data; 
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Запрос был отменен из-за превышения таймаута:', error);
    } else {
      console.error('Ошибка при получении данных:', error);
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

fetchDataWithTimeout(apiUrl, timeout)
  .then(data => console.log('Полученные данные:', data))
  .catch(error => console.error('Ошибка:', error));
