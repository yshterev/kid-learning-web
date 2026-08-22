const wikipediaContent = document.getElementById("wikipediaContent");
const wikipediaImage = document.getElementById("wikipediaImage");
const wikipediaLink = document.getElementById("wikipediaLink");

fetch("https://en.wikipedia.org/api/rest_v1/page/summary/Plovdiv")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        wikipediaContent.textContent = data.extract;
        wikipediaImage.src = data.thumbnail.source;
        wikipediaLink.href = data.content_urls.desktop.page;
    })
    .catch(error => {
        console.error("Error:", error);
    });
