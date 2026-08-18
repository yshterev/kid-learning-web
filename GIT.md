# Saving your work (Git)

Git is like **save points in a game**. After something works, you make a save so you can always go back.

You type these in the **Terminal**. Ask the tutor what they mean — don’t let it run them for you.

## Your folders

Put each project in its own folder inside `projects/`:

- `projects/01-about-me/`
- `projects/02-fan-page/`
- `projects/03-card-gallery/`
- `projects/04-joke-button/`
- `projects/05-clicker-game/`
- `projects/06-pokedex/`

When you start a project:

1. Open that folder.
2. Put `index.html` in it (later `styles.css`, then `script.js`).
3. Open **that** `index.html` in the browser.

## The 3 commands you need

Do this when a page looks good, or when you stop for the day.

### 1. What’s new?

```
git status
```

This lists files you changed. If you see a file you edited, Git has not saved it yet.

### 2. Choose what to save

One project’s files:

```
git add projects/01-about-me
```

(Change the folder name to match the project you just worked on.)

Or everything you changed:

```
git add .
```

### 3. Make the save point

```
git commit -m "Add my About Me heading and hobby list"
```

The message is a short sentence about **what you did**, not “asdf” or “fix”.

## What to do (checklist)

1. Change the code. Refresh the browser. Check it works.
2. `git status` — do you see the files you edited?
3. `git add` those files.
4. `git commit -m "..."` with a real sentence.
5. That’s it. Next time you code, start from step 1.

## Later (ask a parent)

- `git log --oneline` — list your save points
- `git push` — copy saves to GitHub (only after a parent sets this up)
- Branches, merge, and “force push” — skip these for now

## Don’t

- Don’t commit if the page is broken (fix it first, or say so in the message).
- Don’t put passwords or API keys in files.
- Don’t use `--force` or rewrite old commits.
