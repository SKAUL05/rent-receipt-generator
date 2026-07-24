# 🧾 Rent Receipt Generator

[![GitHub license](https://img.shields.io/github/license/SKAUL05/rent-receipt-generator?logo=github)](https://github.com/SKAUL05/rent-receipt-generator/blob/master/LICENSE)
![GitHub code size](https://img.shields.io/github/languages/code-size/SKAUL05/rent-receipt-generator?logo=react)
[![GitHub issues](https://img.shields.io/github/issues/SKAUL05/rent-receipt-generator?logo=github)](https://github.com/SKAUL05/rent-receipt-generator/issues)
![GitHub pull requests](https://img.shields.io/github/issues-pr/SKAUL05/rent-receipt-generator?color=blue&logo=github)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://rent-receipt-generator.vercel.app/)

> **Generate professional monthly rent receipts as PDF — free, private, and instant.**
>
> 🔗 **Live demo:** [rent-receipt-generator.vercel.app](https://rent-receipt-generator.vercel.app/)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📄 **PDF Generation** | Generates one receipt per month for the selected date range |
| 👁️ **Live Preview** | Real-time PDF preview updates as you fill the form |
| 🌓 **Dark / Light Mode** | Toggle with persistence via `localStorage` |
| 💱 **Currency Support** | INR (default), USD, EUR, GBP, AED |
| 🏦 **Payment Mode** | Cash, Cheque, UPI, Bank Transfer, NEFT/IMPS |
| 🔢 **Receipt Numbering** | Set a custom start number (e.g. continue from #13) |
| 💾 **Auto-Save** | Form data saved in `localStorage` and restored on reload |
| ✅ **Validation** | Real-time field validation with shake animation and success icons |
| 📱 **Responsive** | Two-column layout on desktop, single column on mobile |
| 📊 **Analytics** | Vercel Analytics integrated for page-view tracking |

---

## 🖼️ Preview

![Rent Receipt Generator UI](https://raw.githubusercontent.com/SKAUL05/rent-receipt-generator/master/assets/rent_image.png)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14+
- npm v6+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/SKAUL05/rent-receipt-generator.git
cd rent-receipt-generator/receipt-generator

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [React 17](https://reactjs.org/) (functional components + hooks) |
| Build Tool | [Create React App](https://create-react-app.dev/) + [CRACO](https://github.com/dilanx/craco) |
| PDF Engine | [@react-pdf/renderer](https://react-pdf.org/) |
| File Download | [file-saver](https://github.com/eligrey/FileSaver.js/) |
| Styling | Vanilla CSS (custom design system — no frameworks) |
| Fonts | [Google Fonts — Inter](https://fonts.google.com/specimen/Inter) |
| Analytics | [@vercel/analytics](https://vercel.com/analytics) |
| Hosting | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```
receipt-generator/
├── public/
│   └── index.html              # App shell with Google Fonts
├── src/
│   ├── index.css               # Full design system (CSS variables, dark mode, animations)
│   ├── App.js                  # Root layout — two-column, dark mode state
│   ├── components/
│   │   ├── Header.js           # Brand header with dark/light mode toggle
│   │   ├── Input.js            # Styled input with validation icons
│   │   ├── TextArea.js         # Styled textarea
│   │   ├── Button.js           # Button with loading spinner
│   │   ├── Select.js           # Styled dropdown
│   │   ├── PreviewPanel.js     # Live PDF preview panel
│   │   ├── GenerateDocument.js # PDF Document wrapper
│   │   └── GenerateTable.js    # PDF receipt layout (one per month)
│   └── containers/
│       └── FormContainer.js    # Form state, validation, localStorage, PDF generation
└── package.json
```

---

## 📄 How the PDF Works

1. User fills in: **tenant name**, **landlord name**, **monthly rent**, **property address**, **date range**, and optional fields (PAN, currency, payment mode, receipt start number).
2. The app calculates the number of months in the range.
3. On submit, `@react-pdf/renderer` generates one styled receipt block per month on an A4 page.
4. The PDF is downloaded via `file-saver` as `<tenant_name>_rent_receipts.pdf`.

### Receipt fields

Each receipt contains:
- Receipt number (e.g. `#001`), month, and year
- Full acknowledgement sentence with tenant name, amount, address, and period
- Amount box with currency symbol and payment mode
- Signature line with landlord name and PAN (if provided)
- "✓ Received" stamp

---

## 🧾 What is HRA?

**House Rent Allowance (HRA)** is a component of an employee's salary in India. Rent receipts are required to claim HRA tax exemption under Section 10(13A) of the Income Tax Act. A receipt is mandatory if annual rent exceeds ₹1,00,000 and the landlord's PAN must be quoted.

> 📖 [Learn more about HRA on ClearTax](https://cleartax.in/s/hra-house-rent-allowance)

---

## 🤝 Contributing

Contributions are welcome! Here's how:

**1.** Fork the repository and clone it locally:

```bash
git clone https://github.com/<your-username>/rent-receipt-generator.git
cd rent-receipt-generator/receipt-generator
npm install --legacy-peer-deps
```

**2.** Create a feature branch:

```bash
git checkout -b feat/your-feature-name
```

**3.** Make your changes, then stage and commit:

```bash
git add .
git commit -m "feat: describe your change"
```

**4.** Sync with upstream before pushing (avoids conflicts):

```bash
git remote add upstream https://github.com/SKAUL05/rent-receipt-generator.git
git fetch upstream
git rebase upstream/main
```

**5.** Push and open a Pull Request:

```bash
git push -u origin feat/your-feature-name
```

Then open a PR against the `main` branch on GitHub.

---

## 📜 License

This project is licensed under the [GPL-3.0 License](LICENSE).

---

## 🙌 Author

Made with ❤️ by [Sarath Kaul](https://github.com/SKAUL05/)

[![Sarath Kaul](https://img.shields.io/badge/Author-@SKAUL05-teal.svg?colorA=grey&colorB=blue&logo=github)](https://github.com/SKAUL05/)

If you found this useful, please ⭐ [star the repository](https://github.com/SKAUL05/rent-receipt-generator) — it really helps!
