# lonehoof.com — site files

## Folder structure

```
lonehoof/
  index.html          ← art page (shell — don't edit for content)
  who.html            ← who page
  faqs.html           ← faqs page
  contact.html        ← contact form
  privacy.html        ← privacy policy
  refunds.html        ← refunds & returns
  terms.html          ← terms & conditions
  style.css           ← all visual styling
  data.js             ← ★ THE ONLY FILE YOU NEED TO EDIT for artwork changes
  main.js             ← site logic (grid, overlay, nav) — don't edit
  images/             ← drop image files in here
    README.md         ← list of expected filenames
```

---

## How to add a new piece

1. Export/scan your artwork and save as a JPEG, e.g. `my-new-piece.jpg`
2. Drop it into the `images/` folder
3. Open `data.js` and add a new entry at the end of the list (before `];`):

```js
{
  img:    "my-new-piece.jpg",
  title:  "My new piece",
  price:  "£49",          // or null if not for sale
  size:   "30 x 40 cm",
  medium: "charcoal",
  paper:  "300 gsm",
},
```

4. Save `data.js`, commit and push to GitHub. Done.

---

## How to change a price

Open `data.js`, find the entry, change the `price` value. Save, commit, push.

## How to remove a piece from sale (but keep it in gallery)

Find the entry in `data.js`, change `price: "£49"` to `price: null`. Save, commit, push.

## How to remove a piece entirely

Delete its entry from `data.js` and delete its image file from `images/`.

## How to reorder pieces

Pieces appear on the page in the order they appear in `data.js`. Cut and paste entries to reorder.

---

## How to change your contact email address

The email address appears in two places on the site and is controlled by a single constant in `main.js`.

1. Open `main.js`
2. At the very top, find:
   ```js
   const CONTACT_EMAIL = 'lone_hoof@outlook.com';
   ```
3. Change the address between the quotes
4. Save, commit, push

That's it. The same variable is used by:
- The clickable email address on the contact page
- The mailto: link that opens your email client when the form is submitted
- The enquire-to-order links from the detail overlay


---

## Deploying to GitHub Pages

### First time setup
1. Create a new **public** repository on GitHub (e.g. `lonehoof`)
2. Upload all files maintaining the folder structure (`images/` folder included)
3. Go to repo **Settings → Pages**
4. Source: **Deploy from a branch**, branch: **main**, folder: **/ (root)**
5. Click Save — site goes live at `https://YOUR-USERNAME.github.io/lonehoof/`

### Pointing lonehoof.com to it (when ready)
**In GitHub:** Settings → Pages → Custom domain → enter `www.lonehoof.com`

**In 123reg DNS:**
| Type  | Host | Value                           |
|-------|------|---------------------------------|
| CNAME | www  | YOUR-USERNAME.github.io         |
| A     | @    | 185.199.108.153                 |
| A     | @    | 185.199.109.153                 |
| A     | @    | 185.199.110.153                 |
| A     | @    | 185.199.111.153                 |

### Updating the site after initial deployment
1. Make your changes locally (usually just `data.js` and dropping a file in `images/`)
2. In GitHub, navigate to the file you changed
3. Click the pencil (edit) icon, paste your updated content, click **Commit changes**
4. For new image files: click **Add file → Upload files** in the `images/` folder

Or if you prefer using Git from the terminal (since you already code):
```
git add .
git commit -m "add new piece: my-new-piece"
git push
```
GitHub Pages rebuilds automatically within ~30 seconds.

---

## Social icon images
The header social icons currently load from Wix's CDN (wixstatic.com).
**Before you cancel Wix**, save those three icon images locally and add them to the `images/` folder:
- `images/icon-instagram.png`
- `images/icon-substack.png`
- `images/icon-contact.png`

Then update the three `<img src="...">` lines in `index.html`, `who.html`, `faqs.html`, `contact.html`, `privacy.html`, `refunds.html`, and `terms.html` to point to `images/icon-instagram.png` etc.
(Or ask Claude to do it — just paste this README and say "update social icon paths".)
