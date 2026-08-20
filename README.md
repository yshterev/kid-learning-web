# Kid Learning Web

A playground for learning modern web development: **HTML** (structure), **CSS** (looks), **JavaScript** (clicks), and at the end **loading live data from the internet**.

Work in **Ask / Chat**, not Agent. Type the code yourself. The tutor will hint, not finish the project for you.

Each project has its own folder under `projects/`. Open **that** folder’s `index.html` in the browser, change something, then refresh.

Save your work with Git — read [GIT.md](GIT.md).

## For parents

- Keep the kid in **Ask / Chat**. Agent is built to edit files for them, which fights Tutor Mode.
- Turn off or avoid auto-run terminal and auto-apply of big edits.
- Sit nearby for the first sessions. New chats pick up the project rules automatically.
- Don’t introduce React, Next.js, TypeScript, Tailwind, or a database until the early projects and JS Gym feel solid.
- Git is a save habit from day one (`GIT.md`). `git push` / GitHub can wait until you set it up.
- For projects 6–7, use a local preview (`http://localhost`) — see [LOCALHOST.md](LOCALHOST.md).
- After project 7, **JS Gym** (`projects/08-js-gym`) is a good next step to strengthen JavaScript with tests.



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

- [x] `index.html` and `styles.css` are in `projects/02-fan-page/`
- [x] CSS file is linked from the HTML
- [x] Page uses at least 2 colors (background, text, or both)
- [x] Title looks different from body text (bigger or different font)
- [x] Spacing makes the page easy to read (not everything stuck together)
- [x] Saved with Git
- [x] You can explain what a CSS rule does (selector + property + value)

**Stretch:** Make the title big and fun. Pick colors that match the topic.

### 3. Card gallery

**Folder:** `projects/03-card-gallery/`

**Build:** 4–6 cards on one page (hobbies, pets, games, or an invitation-style card). Each card has a picture or title, a short text, and a neat box around it.

**You’ll learn:** layout — putting boxes in a row, borders, padding, and making the page look tidy.

**Checkpoints (all required):**

- [x] At least 4 cards on the page
- [x] Each card has a title or image and short text
- [x] Each card has a visible box (border or background)
- [x] Cards sit in a row or neat grid — layout looks tidy
- [x] Saved with Git
- [x] You can explain the difference between padding and margin

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
- [ ] Page runs on `http://localhost` (not a double-clicked `file://` page) — see [LOCALHOST.md](LOCALHOST.md)
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

### 7. 🏰 Discover Plovdiv — Mini Boss

**Folder:** `projects/07-discover-plovdiv/`

This is your first real website. Multiple pages, multiple APIs, one shared style. Use everything you learned in projects 1–6.

Each page is its own HTML file. They are linked together with normal `<a>` links — no special tools needed.

**Folder layout:**

```
projects/07-discover-plovdiv/
  index.html       ← home / landing page
  weather.html
  map.html
  wikipedia.html
  photos.html
  history.html
  styles.css       ← shared styles for all pages
  weather.js
  map.js
  wikipedia.js
  photos.js
  history.js
```

One JS file per page — each one only does the fetch for that page.

---

**Page 1 — Home (`index.html`)**

A landing page that links to all the other pages. Nice layout, Plovdiv title, a background photo or color. No fetch — pure HTML and CSS. It ties the whole site together.

**Page 2 — Weather (`weather.html`)**

**API:** [Open-Meteo](https://open-meteo.com/) — free, no key needed.
Use Plovdiv coordinates: `latitude=42.15&longitude=24.75`

Show: current temperature, weather condition, and an emoji you pick yourself (☀️ 🌧️ ❄️).

**Page 3 — Map (`map.html`)**

**Tool:** Embed an [OpenStreetMap](https://www.openstreetmap.org/) iframe centered on Plovdiv. No fetch needed — just an `<iframe>` tag.

Stretch: use [Nominatim](https://nominatim.openstreetmap.org/) to search for a landmark by name and show its coordinates.

**Page 4 — About Plovdiv (`wikipedia.html`)**

**API:** [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/) — no key needed.
URL: `https://en.wikipedia.org/api/rest_v1/page/summary/Plovdiv`

Show: the opening paragraph, the thumbnail image, and a link to the full Wikipedia page.

**Page 5 — Photos (`photos.html`)**

A photo gallery of Plovdiv. Find 6–8 good photos online, download them into a `photos/` subfolder, and build a grid — just like project 3 (Card gallery) but with real images and captions.

Stretch: use the [Wikimedia Commons API](https://commons.wikimedia.org/w/api.php) to load photos dynamically.

**Page 6 — History and Facts (`history.html`)**

Plovdiv is one of the oldest continuously inhabited cities in Europe. Write 6–8 interesting facts as a JS array and show one randomly each time the page loads (like project 4 — Joke button, but real facts).

Stretch: fetch the Wikipedia summary for a specific landmark (Ancient Theatre, Nebet Tepe, the Old Town) and show it on click.

---

**Checkpoints (all required):**

- [ ] All 6 pages exist and are linked from `index.html`
- [ ] Navigation links work — you can go from any page to any other page
- [ ] `styles.css` is linked in every HTML file and the site looks consistent
- [ ] Weather page fetches live data from Open-Meteo and shows temperature + emoji
- [ ] Wikipedia page fetches and shows the summary paragraph and thumbnail
- [ ] History page shows a random fact on every page load
- [ ] Map page has a working embedded map centered on Plovdiv
- [ ] Photos page has a neat gallery with at least 6 images and captions
- [ ] All JS is split — one `.js` file per page, each file only does its own fetch
- [ ] No secret API keys anywhere in the code
- [ ] Runs on `http://localhost` (not a double-clicked file) — see [LOCALHOST.md](LOCALHOST.md)
- [ ] Saved with Git after each page is finished
- [ ] You can explain what each API returns and how you got the data onto the page

**Stretch:** Add a shared `<nav>` bar that appears on every page with links to all sections.
*(Notice how you have to copy it into every HTML file by hand — remember this feeling for when you learn Astro.)*

### 8. 🏋️ JS Gym

**Folder:** `projects/08-js-gym/`

Practice core JavaScript with short exercises and automated tests. Write a function → run tests → see ✅ or ❌.

This is **not** a web page. You use Node in the Cursor terminal. Full instructions: [projects/08-js-gym/README.md](projects/08-js-gym/README.md)

**You’ll learn:** functions, numbers, `if`, arrays, loops, objects — the building blocks behind your joke button, clicker, and Pokédex.

**How to run (from this folder):**

```
cd projects\08-js-gym
npm test
```

One exercise only:

```
npm test -- 1
```

**Exercises:**

| # | File | Concept |
| --- | --- | --- |
| 1 | `exercises/01-greet.js` | Strings + functions |
| 2 | `exercises/02-add.js` | Numbers |
| 3 | `exercises/03-is-even.js` | Booleans + `if` |
| 4 | `exercises/04-first-item.js` | Arrays |
| 5 | `exercises/05-sum.js` | Loops |
| 6 | `exercises/06-biggest.js` | Loops + comparing |
| 7 | `exercises/07-pokemon-name.js` | Objects |
| 8 | `exercises/08-clicker-bonus.js` | Mini challenge |

**Checkpoints (all required):**

- [ ] You can run `npm test` from `projects\08-js-gym`
- [ ] Exercises 01–04 all show ✅
- [ ] Exercises 05–08 all show ✅
- [ ] You only edited files in `exercises/` (not `tests/`)
- [ ] You can explain what a **function**, **variable**, **array**, and **if** do in your own words
- [ ] Saved with Git when a group of exercises passes

**Rules:** Ask the tutor for hints, not the full answer. Read the test message when something fails.

---

## Tips

- Finish projects 1–7 before JS Gym if you can — Gym makes the JS behind those sites clearer.
- If the page looks wrong, check HTML/CSS. If a click does nothing, check JavaScript. If the API project is empty, check the browser console and that you're on localhost.
- Never put secret API keys anywhere. Stick to public, no-key APIs first.
- Project 7 is big — finish one page at a time. Each page is its own small project.
- In JS Gym: change one exercise, then run the tests again.
