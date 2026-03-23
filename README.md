# My Portfolio Website

A personal CV / portfolio site built with pure HTML, CSS, and vanilla JavaScript.
Designed for hosting on **GitHub Pages** — no build tools or frameworks required.

---

## 📁 Project Structure

```
portfolio/
├── index.html        ← Main page
├── style.css         ← All styles
├── script.js         ← Nav, scroll animations, drawer
├── img/              ← Add your photo here (see below)
│   └── photo.jpg
└── README.md
```

---

## 🚀 Hosting on GitHub Pages

1. Create a new GitHub repository named `<your-username>.github.io`
   (e.g. `johndoe.github.io`). This activates GitHub Pages automatically.

2. Push all files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. After a minute, your site is live at `https://<your-username>.github.io` 🎉

> For a normal repo (not `<username>.github.io`), go to **Settings → Pages**
> and set the source to `main` branch / root folder.

---

## ✏️ Personalising the Content

Open `index.html` and replace every placeholder:

| Placeholder | Replace with |
|---|---|
| `Your Name` | Your full name |
| `YN` (nav logo + avatar) | Your initials |
| `Your Job Title / Field` | e.g. *Senior Software Engineer* |
| `you@example.com` | Your email |
| `yourusername` | Your GitHub username |
| `yourprofile` | Your LinkedIn handle |
| Project / experience cards | Your actual work history |
| `publications.html` | Link to your publications page (or remove) |

---

## 🖼️ Adding Your Photo

1. Create an `img/` folder in the project root.
2. Add your photo as `img/photo.jpg` (or any name you like).
3. In `index.html`, replace the `<div class="avatar-placeholder">YN</div>` block with:

```html
<img src="img/photo.jpg" alt="Your Name"
     style="width:100%;height:100%;border-radius:50%;object-fit:cover;" />
```

---

## 📬 Setting Up the Contact Form (Formspree)

The form uses [Formspree](https://formspree.io) — free for up to 50 submissions/month.

1. Sign up at https://formspree.io
2. Create a new form → copy the endpoint URL (looks like `https://formspree.io/f/xabcdefg`)
3. In `index.html`, find the `<form>` tag and replace the `action` attribute:
   ```html
   <form ... action="https://formspree.io/f/xabcdefg" method="POST">
   ```

---

## 🎨 Changing the Accent Colour

Open `style.css` and find the `:root` block near the top. Change `--accent` to any colour:

```css
--accent: #7fffd4;   /* default: aquamarine */
/* Try: #ff6b6b (coral), #ffd93d (yellow), #6bcb77 (green), #4d96ff (blue) */
```

---

## 📄 Adding a Publications Page

Create `publications.html` alongside `index.html` with the same `<nav>` and `<footer>`,
then list your papers inside a `<section>`. The link in index.html already points there.
