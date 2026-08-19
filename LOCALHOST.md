# Running a local server

When you use `fetch` to load data from an API, your browser blocks it if you open the file by double-clicking. You need to serve the page over `http://localhost` instead.

This is a one-time setup. After that, one short command starts it any time.

---

## Step 1 — Install Node.js (one time only, ask a parent)

Go to [nodejs.org](https://nodejs.org/) and download the **LTS** version. Click the big green button. Install it like any normal Windows program — just click Next through the steps.

To check it worked, open the terminal inside Cursor (**Ctrl + `**) and type:

```
node --version
```

You should see a number like `v20.x.x`. If you do, you're ready.

---

## Step 2 — Open the terminal in Cursor

Press **Ctrl + `** (the backtick key, top-left of the keyboard, above Tab).

A terminal panel opens at the bottom of Cursor. This is where you type commands.

---

## Step 3 — Go to your project folder

Type `cd` followed by the path to your project. For project 6:

```
cd projects\06-pokedex
```

For project 7:

```
cd projects\07-discover-plovdiv
```

Press Enter. The terminal prompt should now show you're inside that folder.

---

## Step 4 — Start the local server

Type:

```
npx http-server
```

The **first time** you run this, it will ask:

```
Need to install the following packages: http-server
Ok to proceed? (y)
```

Type `y` and press Enter. It installs once and remembers after that.

You will then see something like:

```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://localhost:8080
```

Open your browser and go to **http://localhost:8080**

Your page is now running on localhost. `fetch` will work.

---

## Step 5 — Stop the server

When you are done, click in the terminal and press **Ctrl + C**.

---

## Tips

- The terminal must stay open while you work. Closing it stops the server.
- You do not need to restart the server when you edit your files — just refresh the browser (F5).
- If port 8080 is already in use, try: `npx http-server -p 3000`
- Make sure you `cd` into the folder that has `index.html` in it — not the root of the whole project.
- If `node --version` says "command not found", Node was not installed correctly. Try the installer again.
