# Kid Learning Web

A playground for learning modern web development: **HTML** (structure), **CSS** (looks), **JavaScript** (clicks), and at the end **loading live data from the internet**.

Work in **Ask / Chat**, not Agent. Type the code yourself. The tutor will hint, not finish the project for you.

Each project has its own folder under `projects/`. Open **that** folder’s `index.html` in the browser, change something, then refresh.

Save your work with Git — read [GIT.md](GIT.md).

## For parents

- Keep the kid in **Ask / Chat**. Agent is built to edit files for them, which fights Tutor Mode.
- Turn off or avoid auto-run terminal and auto-apply of big edits.
- Sit nearby for the first sessions. New chats pick up the project rules automatically.
- Don’t introduce React, Next.js, TypeScript, Tailwind, or a database until the six projects are done.
- Git is a save habit from day one (`GIT.md`). `git push` / GitHub can wait until you set it up.
- For project 6, use a local preview (`http://localhost`), not a double-clicked file.



## How to use Cursor

1. Say what you want to build in your own words.
2. Ask *why*, not only *what to type*.
3. Change one thing at a time, then refresh.
4. Don’t paste code you can’t explain.
5. When it works, save with Git (`GIT.md`).



## Starting projects (do them in order)

Each project has a checklist. **Check every box** before you start the next project. Stretch goals are extra — fun, but not required.

When all boxes are checked, save with Git one last time, then move on.

### 1. About Me page

**Folder:** `projects/01-about-me/`

**Build:** A page with your name, a short intro, a list of hobbies, and a link to something you like.

**You’ll learn:** headings, paragraphs, lists, links — the skeleton of a web page.

**Checkpoints (all required):**

- [x] `index.html` is in `projects/01-about-me/`
- [x] Your name is in a heading (`<h1>` or `<h2>`)
- [x] A short intro paragraph about you
- [x] A list of at least 3 hobbies
- [x] A link that opens when you click it
- [x] Page opens in the browser with no broken layout
- [x] Saved with Git (`status` → `add` → `commit`)
- [x] You can explain what a heading, paragraph, list, and link do

**Stretch:** Add a photo of yourself, a pet, or a drawing.

### 2. Fan page

**Folder:** `projects/02-fan-page/`

**Build:** A colorful page about a pet, sport, game, or YouTuber you like.

**You’ll learn:** a CSS file, colors, fonts, and spacing.

**Checkpoints (all required):**

- [ ] `index.html` and `styles.css` are in `projects/02-fan-page/`
- [ ] CSS file is linked from the HTML
- [ ] Page uses at least 2 colors (background, text, or both)
- [ ] Title looks different from body text (bigger or different font)
- [ ] Spacing makes the page easy to read (not everything stuck together)
- [ ] Saved with Git
- [ ] You can explain what a CSS rule does (selector + property + value)

**Stretch:** Make the title big and fun. Pick colors that match the topic.

### 3. Card gallery

**Folder:** `projects/03-card-gallery/`

**Build:** 4–6 cards on one page (hobbies, pets, games, or an invitation-style card). Each card has a picture or title, a short text, and a neat box around it.

**You’ll learn:** layout — putting boxes in a row, borders, padding, and making the page look tidy.

**Checkpoints (all required):**

- [ ] At least 4 cards on the page
- [ ] Each card has a title or image and short text
- [ ] Each card has a visible box (border or background)
- [ ] Cards sit in a row or neat grid — layout looks tidy
- [ ] Saved with Git
- [ ] You can explain the difference between padding and margin

**Stretch:** When you hover a card, give it a colored border or make it slightly bigger.

### 4. Joke / fact button

**Folder:** `projects/04-joke-button/`

**Build:** A button that shows a new joke, fun fact, or compliment each time you click.

**You’ll learn:** JavaScript, buttons, and changing text on the page.

**Checkpoints (all required):**

- [ ] `script.js` is linked from the HTML
- [ ] A button changes text on the page when clicked
- [ ] At least 3 jokes or facts ready to show
- [ ] Clicking again shows a different joke or fact
- [ ] Saved with Git
- [ ] You can explain what happens when you “listen” for a click

**Stretch:** A second button that changes the background color.

### 5. Tiny clicker game

**Folder:** `projects/05-clicker-game/`

**Build:** A score that goes up when you click (pet a cat, catch stars, tap cookies — you pick the theme).

**You’ll learn:** remembering a number, updating the screen, and a little game logic.

**Checkpoints (all required):**

- [ ] Score starts at 0 and is visible on the page
- [ ] Clicking the button adds 1 to the score
- [ ] The number on screen updates every time you click
- [ ] Saved with Git
- [ ] You can explain what a variable is and why the game needs one

**Stretch:** A bonus every 10 clicks, or a reset button.

### 6. Live data from the internet (Pokédex)

**Folder:** `projects/06-pokedex/`

**Build:** A page that talks to a **public API** (a website that shares data). Start with [PokéAPI](https://pokeapi.co/). Show a Pokémon’s **name**, **picture**, and 1–2 facts (type, height, or a stat).

**You’ll learn:** `fetch` (asking the internet for data), waiting for the answer, and showing that data in HTML. This is how real apps load weather, news, scores, and more.

**Start simple:** One button: “Show me Pikachu” (or a random Pokémon).

**Then try:** A text box where you type a name (like `eevee` or `snorlax`) and a “Search” button. If the name is wrong, show a friendly message like “Couldn’t find that Pokémon.”

**Checkpoints (all required):**

- [ ] Data comes from the internet with `fetch` (not typed only in HTML)
- [ ] Pokémon **name** shows on the page
- [ ] Pokémon **picture** shows on the page
- [ ] At least one extra fact shows (type, height, or a stat)
- [ ] Page runs on `http://localhost` (not a double-clicked `file://` page)
- [ ] Typing a wrong name shows a friendly message (not a blank page)
- [ ] Saved with Git
- [ ] You can explain the four steps: ask the API → wait → read the answer → put it on the page

**Other fun APIs** (same skills, different theme):

- Random dog photo: [Dog CEO](https://dog.ceo/dog-api/)
- Random cat photo: [The Cat API](https://thecatapi.com/) (some features need a free key; random photos can work without one)
- Country flag + capital: [REST Countries](https://restcountries.com/)

**Parent note:** Opening the file with a double-click (`file://`) often **blocks** `fetch`. Use a local preview (Live Server, `npx serve`, or Cursor’s simple preview) so the page is served over `http://localhost`.

## Tips

- Finish 1–3 before the JavaScript projects. Do 4–5 before the API project.
- If the page looks wrong, check HTML/CSS. If a click does nothing, check JavaScript. If the API project is empty, check the browser console and that you’re on localhost.
- Never put secret API keys in this project. Stick to public, no-key APIs first.

