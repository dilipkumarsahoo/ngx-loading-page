
# ngx-loading-page

> A modern and customizable loading page component for Angular applications. Supports multiple loader styles, dynamic themes, background customization, and a responsive Bootstrap-based card UI.

[![npm version](https://img.shields.io/npm/v/ngx-loading-page.svg)](https://www.npmjs.com/package/ngx-loading-page)
[![license](https://img.shields.io/npm/l/ngx-loading-page.svg)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/dilipkumarsahoo/ngx-loading-page.svg)](https://github.com/dilipkumarsahoo/ngx-loading-page/issues)

---

## ✨ Features

- 🔄 Multiple loader types (spinner, dots, bars, etc.)
- 🎨 Customizable loader color, background color, and text color
- 🧩 Easy integration with Angular apps
- 📦 Lightweight and optimized
- 💅 Responsive card-based design using Bootstrap

---

## 📦 Installation

```bash
npm install ngx-loading-page
```

Make sure `@angular/core`, `@angular/common`, and `bootstrap` are installed in your project.

---

## 🚀 Usage

### 1. Import the Module

```ts
import { NgxLoadingPageModule } from 'ngx-loading-page';

@NgModule({
  imports: [NgxLoadingPageModule]
})
export class AppModule {}
```

---

### 2. Use the Component in Your Template

```html
<ngx-loading-page
  [loaderType]="'spinner'"
  [text]="'Loading...'"
  [textColor]="'#ffffff'"
  [backgroundColor]="'#000000'"
  [loaderColor]="'#00ffcc'"
  [width]="'300px'"
  [height]="'200px'"
></ngx-loading-page>
```

---

## ⚙️ Inputs

| Input             | Type     | Description                                  |
|------------------|----------|----------------------------------------------|
| `loaderType`      | string   | Type of loader: `'spinner'`, `'dots'`, etc. |
| `text`            | string   | Optional loading text                        |
| `textColor`       | string   | Color of the text                            |
| `loaderColor`     | string   | Color of the loader animation                |
| `backgroundColor` | string   | Background color of the loader container     |
| `width`           | string   | Width of the loader card (e.g., `'300px'`)  |
| `height`          | string   | Height of the loader card (e.g., `'200px'`) |

---

## 🧪 Demo

Check out the [**Live Demo on StackBlitz**](https://stackblitz.com/~/github.com/dilipkumarsahoo/ngx-loading-page?file=src/app/app.module.ts:L5)  
Or clone the [example repo](https://github.com/dilipkumarsahoo/ngx-loading-page) to try it out locally.

---

## 🛠 Development

To build and test locally:

```bash
git clone https://github.com/dilipkumarsahoo/ngx-loading-page.git
cd ngx-loading-page
npm install
npm run build
```

---

## 📄 License

MIT © [Dilip Sahoo](https://github.com/dilipkumarsahoo)

---

## 🙌 Contributions

Contributions, issues, and feature requests are welcome!  
Feel free to check [issues page](https://github.com/dilipkumarsahoo/ngx-loading-page/issues) or open a pull request.
