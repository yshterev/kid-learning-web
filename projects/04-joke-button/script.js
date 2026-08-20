const button = document.getElementById("jokeButton");
const jokeText = document.getElementById("joke");

button.addEventListener("click", function () {
    console.log("Joke button clicked");
    alert("Get ready for a joke!");
    const jokes = [
        "I said to the gym instructor.Can you teach me to do the splits? He said.How flexible are you? I said.I can't make Tuesdays",
        "Why did the Minecraft player bring a ladder to school? Because he wanted to go to high school!",
        "What do you call a Creeper at a party? A real blast!",
    ];
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeText.textContent = jokes[randomIndex];
});
