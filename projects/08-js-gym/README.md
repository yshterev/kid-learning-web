# JS Gym 🏋️

Practice JavaScript like a workout. Write a small function, run the tests, see ✅ or ❌.

This is **not** a website. You edit `.js` files and run them with Node in the Cursor terminal.

## How to start (Windows + Cursor)

1. Open the terminal in Cursor: **Ctrl + `**
2. Go to this folder:

```
cd projects\08-js-gym
```

3. Run all tests:

```
npm test
```

Or:

```
node run-tests.js
```

4. To test **one** exercise (example: exercise 1):

```
npm test -- 1
```

The `--` passes the number to the test runner. Same thing without npm:

```
node run-tests.js 1
```

## What you edit

Only files inside `exercises/`.

Do **not** change files inside `tests/` (those check your work).

## The loop

1. Open one exercise file (start with `01-greet.js`)
2. Read the goal at the top
3. Write your code inside the function
4. Save the file
5. Run `npm test` (or `npm test -- 1` for one exercise)
6. Fix until you see ✅
7. Save with Git (`GIT.md`), then move to the next exercise

## Rules

- Ask the tutor for **hints**, not the full answer
- If a test fails, read the message — it tells you what it expected
- Change one thing, then run the tests again

## Checkpoints

- [ ] You can run `npm test` from `projects\08-js-gym`
- [ ] Exercises 01–04 all show ✅
- [ ] Exercises 05–08 all show ✅
- [ ] You can explain what a **function**, **variable**, **array**, and **if** do in your own words
- [ ] Saved with Git when a group of exercises passes

## After JS Gym

Go back to your websites with stronger JS — or ask a parent about the networking labs and Astro later.
