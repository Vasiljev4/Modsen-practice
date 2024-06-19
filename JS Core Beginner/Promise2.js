function fetchUrls(urls) {
    const promises = urls.map(url => fetch(url).then(response => response.text()));
    return Promise.all(promises)
        .then(results => {
            console.log("Все URL загружены:");
            results.forEach((result, index) => { 
                console.log(`URL ${index + 1}:`, result);
            });
        })
        .catch(error => {
            console.error("Ошибка загрузки URL:", error);
        });
}

fetchUrls(urls);
