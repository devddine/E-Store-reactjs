<h1 align="center">E-Store React JS</h1>

<div align="center">

[![Wakatime](https://wakatime.com/badge/user/99386bc4-1e8a-4a85-849a-2382efb82b50/project/a33eb78f-7d1c-446c-a4de-ebbe956777d0.svg)](https://wakatime.com/badge/user/99386bc4-1e8a-4a85-849a-2382efb82b50/project/a33eb78f-7d1c-446c-a4de-ebbe956777d0)
[![GitHub Issues](https://img.shields.io/github/issues/devddine/E-Store-reactjs.svg)](https://github.com/devddine/E-Store-reactjs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/devddine/E-Store-reactjs.svg)](https://github.com/devddine/E-Store-reactjs/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">
🛒 A modern, feature-rich e-commerce management system built with React.js.  
Manage products, track sales, monitor stock, and view dashboards—all from one modular and scalable platform.
</p>

---

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🌟 Features](#-features)
- [📐 Preview](#-preview)
- [💭 How it Works](#-how-it-works)
- [🏁 Getting Started](#-getting-started)
- [📁 Folder Structure](#-folder-structure)
- [⛏️ Built Using](#️-built-using)
- [🤝 Contributions](#-contributions)
- [📜 License](#-license)

---

## 🌟 Features

- 📊 **Dashboard Analytics**: Get insights into product performance and sales.
- 🛍 **Product Management**: Add, update, or delete products with ease.
- 💰 **Sales Tracking**: View and manage recent and historical sales.
- 📦 **Stock Management**: Monitor stock levels in real-time.
- 🌍 **Localization Support**: Switch between English and French with i18n.
- ♻️ **Reusable Components**: Shared UI and logic for consistent experience.
- 🔌 **Service-Based Architecture**: Clean separation of API logic.

---

## 📐 Preview

![Preview](./src/assets/images/preview.png)

---

## 💭 How it Works

- **Dashboard**: Visualize stats through charts and cards.
- **Products**: Navigate to products tab to create, edit or delete items.
- **Sales**: Access sales records and revenue insights.
- **Stock**: Keep an eye on inventory levels.
- **Languages**: Switch UI language using the toggle (EN/FR).
- **Architecture**: Modular, scalable structure using React hooks and context.

---

## 🏁 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/e-store-reactjs.git
   ```

2. Navigate into the project directory:

   ```bash
   cd e-store-reactjs
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Visit `http://localhost:1337` in your browser.

---

## 📁 Folder Structure

```yaml
.
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md                     # Project documentation
├── vite.config.js
├── public                        # Public static assets
│   └── locales                  # Localization files
│       ├── en                   # English translations
│       │   └── translation.json
│       └── fr                   # French translations
│           └── translation.json
└── src                          # Source code
    ├── App.jsx                  # Main React app component
    ├── main.jsx                 # Entry point for React app
    ├── api                      # API client and endpoints
    │   ├── Client.js
    │   ├── Endpoints.js
    │   └── test.js
    ├── assets                   # Static assets like images and styles
    │   ├── images               # Image files
    │   └── styles               # CSS styles
    │       ├── App.module.css
    │       └── index.css
    ├── config                   # Configuration files
    │   └── i18n.js              # Internationalization setup
    ├── features                 # Feature modules
    │   ├── dashboard            # Dashboard feature
    │   │   ├── index.jsx        # Dashboard main component
    │   │   ├── components       # Dashboard UI components
    │   │   │   ├── Activity.jsx
    │   │   │   ├── CardStats.jsx
    │   │   │   └── charts       # Chart components
    │   │   │       ├── AreaChart.jsx
    │   │   │       ├── BarChart.jsx
    │   │   │       └── PieChart.jsx
    │   │   └── hooks            # Dashboard hooks
    │   │       ├── useGetData.js
    │   │       ├── useProductsStats.js
    │   │       ├── useRecentActivities.js
    │   │       └── useStockSalesData.js
    │   ├── products             # Products feature
    │   │   ├── index.jsx        # Products main component
    │   │   ├── components       # Products UI components
    │   │   │   └── ProductTable.jsx
    │   │   ├── hooks            # Products hooks
    │   │   │   ├── useAddProduct.js
    │   │   │   ├── useDeleteProduct.js
    │   │   │   ├── useEditProduct.js
    │   │   │   ├── useProductModal.js
    │   │   │   └── useProducts.js
    │   │   └── services         # Products services
    │   │       └── productService.js
    │   ├── sales                # Sales feature
    │   │   ├── index.jsx        # Sales main component
    │   │   ├── components       # Sales UI components
    │   │   │   └── SaleTable.jsx
    │   │   ├── hooks            # Sales hooks
    │   │   │   ├── useAddSale.js
    │   │   │   ├── useDeleteSale.js
    │   │   │   ├── useEditSale.js
    │   │   │   ├── useSale.js
    │   │   │   └── useSaleModal.js
    │   │   └── services         # Sales services
    │   │       └── saleService.js
    │   ├── stock                # Stock feature
    │   │   ├── index.jsx        # Stock main component
    │   │   ├── components       # Stock UI components
    │   │   │   └── StockTable.jsx
    │   │   ├── hooks            # Stock hooks
    │   │   │   ├── useAddStock.js
    │   │   │   ├── useDeleteStock.js
    │   │   │   ├── useEditStock.js
    │   │   │   ├── useStock.js
    │   │   │   └── useStockModal.js
    │   │   └── services         # Stock services
    │   │       └── stockService.js
    ├── layouts                 # Layout components
    │   └── MainLayout.jsx
    ├── pages                   # Page components
    │   └── ErrorPage.jsx
    ├── routes                  # Route definitions
    │   └── index.jsx
    └── shared                  # Shared components and utilities
        ├── components         # Shared UI components
        │   ├── common         # Common reusable components
        │   │   ├── Divider.jsx
        │   │   ├── EntityModal.jsx
        │   │   ├── ListTable.jsx
        │   │   ├── Loading.jsx
        │   │   ├── SelectOptions.jsx
        │   │   └── TableDefault.jsx
        │   ├── Header          # Header components
        │   │   └── Header.jsx
        │   ├── SideBar         # Sidebar components
        │   │   └── SideBar.jsx
        │   └── Toolbar         # Toolbar components
        │       └── Toolbar.jsx
        ├── hooks              # Shared hooks
        │   ├── useModalState.js
        │   ├── useSearch.js
        │   └── modalStates             # Modal state hooks
        │       ├── useArticleList.js
        │       ├── useOperationModalState.js
        │       └── useProductModalState.js
        └── utils              # Utility functions
            ├── dateUtils.js
            └── validators.js

```

---

## ⛏️ Built Using

- **React.js**
- **Vite**
- **React Router**
- **Axios**
- **React Context API**
- **i18next**
- **Chart.js**
- **CSS Modules**

---

## 🤝 Contributions

Your contributions are welcome! Feel free to fork the repo and submit pull requests, open issues, or suggest features.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for details.
