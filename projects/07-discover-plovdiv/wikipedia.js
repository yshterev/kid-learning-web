fetch("https://en.wikipedia.org/api/rest_v1/page/summary/Plovdiv")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("wikipediaContent").textContent = data.extract;
        document.getElementById("wikipediaImage").src = data.thumbnail.source;
        document.getElementById("wikipediaLink").href = data.content_urls.desktop.page;
    })
    .catch(error => {
        console.error("Error:", error);
    });
