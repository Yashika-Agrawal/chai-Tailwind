# ☕ brew-tailwind (Chai CSS)

A lightweight, **JavaScript-powered utility-first CSS engine** brewed from scratch.
No CSS files. No build tools. Just runtime magic ✨

It scans your DOM, parses `chai_*` classes, and applies styles dynamically.

[![npm version](https://img.shields.io/npm/v/brew-tailwind.svg)](https://www.npmjs.com/package/brew-tailwind)

---

## 🚀 Installation & Usage

### 🟢 1. For Beginners (Plain HTML / No Build Tools)

If you're just getting started, use it directly via CDN:

```html
<script type="module">
  import { initChai } from "https://unpkg.com/brew-tailwind/src/index.js";

  initChai();
</script>
```

---

### 🔵 2. For Developers (React / Vite / Next.js)

Install via npm:

```bash
npm install brew-tailwind
```

---

#### Vanilla JS / Vite

```js
import { initChai } from "brew-tailwind";

initChai();
```

---

#### React Example

```jsx
import { useEffect } from "react";
import { initChai } from "brew-tailwind";

function App() {
  useEffect(() => {
    initChai();
  }, []);

  return (
    <h1 className="chai_bg-[#964b00] chai_text-white chai_p-4 chai_rounded-lg">
      Hello Chai ☕
    </h1>
  );
}

export default App;
```

---

## ✨ Features

* ⚡ Utility-first class system (`chai_p-4`, `chai_bg-red`)
* 🎨 Built-in + custom color support
* 🧠 Smart runtime parser
* 🔥 Arbitrary values (`chai_bg-[#964b00]`)
* 📦 Zero CSS files required

---

## 🧱 Utility Reference

| Category      | Prefix          | Example             | CSS Equivalent          |
| ------------- | --------------- | ------------------- | ----------------------- |
| Background    | `chai_bg-`      | `chai_bg-red`       | `background-color: red` |
| Text Color    | `chai_text-`    | `chai_text-white`   | `color: white`          |
| Padding       | `chai_p-`       | `chai_p-4`          | `padding: 16px`         |
| Margin        | `chai_m-`       | `chai_m-2`          | `margin: 8px`           |
| Font Size     | `chai_fs-`      | `chai_fs-lg`        | `font-size: 18px`       |
| Flex          | `chai_flex`     | `chai_flex`         | `display: flex`         |
| Alignment     | `chai_items-`   | `chai_items-center` | `align-items: center`   |
| Border Radius | `chai_rounded-` | `chai_rounded-full` | `border-radius: 9999px` |
| Arbitrary     | `chai_*-[ ]`    | `chai_bg-[#964b00]` | Custom value support    |

---

## 🎨 Built-in Colors

Includes basic palette + your signature brew ☕

* `red`, `blue`, `green`, `yellow`
* `black`, `white`, `gray`
* Custom: `chai_bg-[#964b00]`

---

## ⚙️ How It Works

1. 🔍 **Scan** → Finds all `chai_*` classes in the DOM
2. 🧠 **Parse** → Splits into property + value
3. 🔗 **Map** → Converts to actual CSS
4. ⚡ **Apply** → Injects styles dynamically

---

## 📁 Project Structure

```
brew-tailwind/
├── src/
│   ├── index.js        # Core engine
│   ├── chaiConfig.js   # Utility mappings
├── demo/               # Example usage
├── README.md
```

---

## 🚧 Roadmap

* ⏳ Hover / focus variants (`hover:bg-blue`)
* 📱 Responsive utilities (`md:p-4`)
* ⚡ MutationObserver (auto updates)
* 🎨 Theme system
* 🧪 Better parser optimization

---

## 🧠 What This Project Shows

* DOM traversal & manipulation
* Building a utility CSS engine from scratch
* Understanding Tailwind’s internal concepts
* Designing scalable class systems

---

## 💡 Inspiration

Inspired by Tailwind CSS — but built from scratch to deeply understand how it works.

---

## ☕ Final Thought

This isn’t just a project — it’s a step toward building your own frameworks.

If you liked this, drop a ⭐ and keep brewing 🔥

---

### 👩‍💻 Built with ❤️ by Yashika Agrawal
