# ☕ Chai CSS

A lightweight **utility-first CSS engine** built from scratch using JavaScript.
Inspired by Tailwind, but brewed your way.

---

## 🚀 Why Chai CSS?

Ever wondered how Tailwind works under the hood?

Chai CSS is a learning-first implementation of a utility CSS engine that lets you:

* Apply styles directly using class names
* Build clean UIs without writing CSS files
* Understand how utility-first frameworks actually work internally

---

## ✨ Features

* 🎯 Utility-first class system (`chai_p-4`, `chai_bg-blue`)
* 🎨 Built-in color palette + custom color support
* 🧠 Smart parser for dynamic class handling
* ⚡ Arbitrary values support (like Tailwind)
* 📦 Zero CSS file — everything powered by JS

---

## 🔥 Example Usage

```html
<div class="chai_p-4 chai_bg-blue chai_text-white chai_rounded-lg chai_shadow-md">
  Hello Chai ☕
</div>
```

---

## 🎨 Custom Values (Power Feature)

Use any custom value like this:

```html
<div class="chai_bg-[#6f4e37] chai_text-[#fff] chai_p-[20px]">
  Custom Styled Box
</div>
```

---

## 🧱 Available Utilities

### 📦 Spacing

* `chai_p-4`, `chai_m-2`, `chai_gap-md`

### 🎨 Colors

* `chai_bg-red`, `chai_text-blue`
* Custom: `chai_bg-[#ff5733]`

### 🔤 Typography

* `chai_fs-sm`, `chai_fs-lg`, `chai_fw-bold`

### 📐 Layout

* `chai_flex`, `chai_flexwrap-wrap`
* `chai_justify-center`, `chai_items-center`

### 🎭 Effects

* `chai_shadow-sm`, `chai_shadow-md`, `chai_shadow-lg`

### 🔲 Borders

* `chai_border-thin`, `chai_borderc-red`
* `chai_rounded-lg`, `chai_rounded-full`

---

## ⚙️ How It Works

1. Scans DOM for classes starting with `chai_`
2. Parses class into:

   * property (`bg`, `p`, `fs`)
   * value (`blue`, `4`, `lg`)
3. Maps it using config (`chaiConfig.js`)
4. Applies styles dynamically via JS

---

## 🧠 Project Structure

```
📁 project
 ├── index.html
 ├── main.js        // core engine
 ├── chaiConfig.js  // utility mappings
```

---

## 🛠️ Run Locally

```bash
git clone <your-repo>
cd project
open index.html
```

Or use Live Server.

---

## 🚧 Future Improvements

* ⏳ Hover/focus variants (`hover:bg-blue`)
* 📱 Responsive utilities (`md:p-4`)
* ⚡ JIT-like dynamic updates
* 🎯 Better class parsing engine
* 🎨 Theme customization support

---

## 🤯 What I Learned

* DOM traversal & manipulation
* Building a CSS parser from scratch
* Utility-first design thinking
* How frameworks like Tailwind work internally

---

## 💡 Inspiration

Inspired by Tailwind CSS — but built from scratch to learn deeply.

---

## ☕ Final Thought

This isn’t just a project — it’s a step toward understanding how real-world frameworks are built.

---

If you like this, give it a ⭐ and maybe brew your own framework next 😉
