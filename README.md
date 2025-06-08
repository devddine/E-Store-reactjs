# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

------------------------------------------------------------------

```yaml
"src" Folder Structure:


src/
├── api/
├── assets/
├── components/
├── features/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── utils/
└── App.js


Final Folder structure:

project-root/
├── public/
│   ├── index.html           # Main HTML file, root div here for React to mount
│   └── favicon.ico          # Site icon
│
├── src/
│
│   ├── api/                 # Shared API logic
│   │   ├── axiosClient.js       # Axios instance (base URL, interceptors)
│   │   ├── endpoints.js         # Central list of endpoint paths
│   │   └── request.js           # Optional wrapper for common request logic (get, post)
│
│   ├── assets/              # Global static files
│   │   ├── styles/
│   │   │   ├── base.css         # Base global styles
│   │   │   └── variables.css    # CSS variables (colors, fonts)
│   │   └── images/
│   │       └── logo.png         # Logo or other global images
│
│   ├── components/          # Global reusable UI components (used across features)
│   │   ├── Button.js            # Reusable button component
│   │   ├── Modal.js             # Reusable modal component
│   │   ├── Table.js             # Generic table component
│   │   └── Input.js             # Reusable input component
│
│   ├── features/            # Feature-based folders (one for each nav section)
│   │
│   │   ├── dashboard/           # Dashboard: stats + chart + logs
│   │   │   ├── components/
│   │   │   │   ├── StatsCard.js     # Widget showing a single stat
│   │   │   │   ├── ActivityLog.js   # List of recent activities
│   │   │   │   └── SalesChart.js    # Chart.js graph for sales
│   │   │   └── DashboardPage.js     # Main page layout (composes the components)
│   │
│   │   ├── products/            # Products CRUD feature
│   │   │   ├── components/
│   │   │   │   ├── ProductForm.js   # Form for creating/editing products
│   │   │   │   └── ProductTable.js  # Displays product list with actions
│   │   │   ├── services/
│   │   │   │   └── productService.js  # All API calls for products
│   │   │   └── ProductsPage.js     # Assembles form and table
│   │
│   │   ├── stock/               # Stock operations
│   │   │   ├── components/
│   │   │   │   ├── StockForm.js
│   │   │   │   └── StockTable.js
│   │   │   ├── services/
│   │   │   │   └── stockService.js
│   │   │   └── StockPage.js
│   │
│   │   └── sales/               # Sales operations
│   │       ├── components/
│   │       │   ├── SalesForm.js
│   │       │   └── SalesTable.js
│   │       ├── services/
│   │       │   └── salesService.js
│   │       └── SalesPage.js
│
│   ├── hooks/               # Custom reusable hooks
│   │   └── useFetch.js          # Example hook for fetching data
│
│   ├── layouts/             # Layout components
│   │   └── AdminLayout.js       # Shared layout with navbar, sidebar, etc.
│
│   ├── pages/               # Top-level route components (optional separation)
│   │   ├── Dashboard.js         # Wrapper to render DashboardPage
│   │   ├── Products.js
│   │   ├── Stock.js
│   │   └── Sales.js
│
│   ├── routes/              # Routing setup
│   │   └── AppRoutes.js         # Defines all routes and their components
│
│   ├── utils/               # General helper functions
│   │   └── formatDate.js        # Formats dates
│
│   ├── App.js               # Root app component with layout & routes
│   └── index.js             # Entry point, renders App into root div in index.html
│
├── .gitignore              # Ignore node_modules, etc.
├── package.json            # Project dependencies and scripts
└── README.md               # Project info

```