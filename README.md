# Vault Finance - Frontend Application

Vault Finance is a modern, responsive personal finance and expense management web application built with **React 19**, **Vite**, and **Tailwind CSS**. It provides an intuitive interface for users to track expenses, monitor budgets, analyze spending through interactive charts, export financial reports, and manage their accounts securely.

---

## 📋 Table of Contents

1. [Key Features](#-key-features)
2. [Technology Stack](#-technology-stack)
3. [Project Architecture](#-project-architecture)
4. [Getting Started](#-getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Environment Variables](#environment-variables)
   - [Running the App](#running-the-app)
5. [Core Modules & Pages](#-core-modules--pages)
6. [UI Components & Design System](#-ui-components--design-system)
7. [API Integration](#-api-integration)
8. [Scripts Available](#-scripts-available)

---

## ✨ Key Features

### 🔐 Authentication & Security
- **Multi-Factor Auth**: Email & Password login with OTP verification.
- **Social Login**: Google OAuth2 integration (`/oauth-success`).
- **Password Recovery**: Secure password reset flow via email OTP verification.
- **Protected Routes**: Custom `AuthLayout` wrapper handling authentication guards and role checking.
- **JWT Handling**: Secure access and refresh token storage and automatic header injection via Axios interceptors.

### 📊 Interactive Financial Dashboard
- **Financial Metrics**: Instant overview of total spendings, total budgets, and balance percentage.
- **Spending Breakdown**: Interactive Donut chart displaying category-wise expenses using **Recharts**.
- **Monthly Analytics**: Bar charts visualizing monthly expenditure trends.
- **Recent Transactions**: Quick view of top expenses with category icons and quick navigational links.

### 💸 Expense & Transaction Tracking
- **Data Grid**: Advanced transaction tables built with **TanStack React Table** featuring sorting, filtering, and pagination.
- **Category Support**: Expenses grouped by categories (*Food, Transport, Shopping, Health, Entertainment, Bills, Others*).
- **CRUD Operations**: Modal interfaces for adding, updating, and deleting expenses.
- **Report Export**: Download expense records in Excel (`.xlsx`) format.

### 🎯 Budget Management
- **Budget Allocation**: Set total budget limits and track remaining balance in real-time.
- **Visual Progress Bars**: Color-coded progress indicators (`Emerald`, `Yellow`, `Red`) based on spending percentage.
- **Budget Actions**: Create, modify, or remove budget allocations dynamically.

### 👑 Admin Control Panel
- **User Management**: Searchable, paginated user directory for administrators.
- **Account Actions**: Edit user roles/statuses (`Active`/`Inactive`) or remove user accounts.
- **System Metrics**: Admin widgets for total users, active users, and system-wide transactions.
- **User Export**: Download complete user lists in Excel (`.xlsx`) format.

### 🎨 User Experience & Customization
- **Theme Switcher**: Seamless Dark Mode and Light Mode support with smooth transition effects.
- **Responsive Layout**: Mobile-first sidebar navigation and overlay drawers.
- **Form Validation**: Client-side form handling and schema validation using **React Hook Form**.

---

## 🛠️ Technology Stack

| Category | Technology / Library | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Core Framework** | React | `^19.2.6` | UI Component Library |
| **Build Tool** | Vite | `^8.0.12` | Next-generation Frontend Tooling |
| **Styling** | Tailwind CSS | `^3.4.19` | Utility-first CSS Framework |
| **Icons** | Lucide React | `^1.26.0` | Modern, clean Iconography |
| **Routing** | React Router DOM | `^7.16.0` | Client-side Application Routing |
| **Data Fetching** | Axios | `^1.20.0` | HTTP Client for API communication |
| **Data Tables** | TanStack React Table | `^8.21.3` | Headless Data Grid & Table Engine |
| **Data Visualization**| Recharts | `^3.10.0` | Composability-driven Charting Library |
| **Form Management** | React Hook Form | `^7.86.0` | Performant Form State Management |
| **JWT Utilities** | jwt-decode | `^4.0.0` | Client-side JWT Token Decoding |

---

## 📁 Project Architecture

```
expense-tracker-frontend/
├── src/
│   ├── assets/                # Static assets and images
│   ├── common/                # Shared utilities & helper functions
│   │   ├── constants.js       # Validation regex & app constants
│   │   └── functions.js       # Formatting, calculations & delays
│   ├── components/            # Reusable UI components
│   │   ├── Account/           # Account management sub-components
│   │   ├── Admin/             # Admin control panel widgets & tables
│   │   ├── Budget/            # Budget bars & cards
│   │   ├── Container/         # App container wrapper
│   │   ├── Dashboard/         # Charts (Bar, Donut), Info cards & lists
│   │   ├── Header/            # Navigation Header
│   │   ├── Login/             # Login forms
│   │   ├── Modals/            # Create/Edit/Delete portal modals
│   │   ├── Otp/               # OTP verification components
│   │   ├── Sidebar/           # Navigation sidebar
│   │   ├── Signup/            # Registration component
│   │   └── Transactions/      # Expense table & transaction components
│   ├── config/                # App-wide configurations (Axios instance)
│   │   └── axios.config.js
│   ├── contexts/              # React Context Providers (Theme Context)
│   │   └── theme.js
│   ├── pages/                 # Page route components
│   │   ├── Account.jsx        # Account settings page
│   │   ├── Admin.jsx          # Admin dashboard page
│   │   ├── Budgets.jsx        # Budget overview page
│   │   ├── Dashboard.jsx      # Main financial dashboard
│   │   ├── Email.jsx          # Email input page for OTP
│   │   ├── Login.jsx          # Login page
│   │   ├── OAuthSuccess.jsx   # Google OAuth callback route
│   │   ├── Otp.jsx            # OTP login verification page
│   │   ├── OtpForReset.jsx    # Password reset OTP page
│   │   ├── ResetPassword.jsx  # New password submission page
│   │   ├── Signup.jsx         # User registration page
│   │   └── Transactions.jsx   # Expense transactions page
│   ├── App.jsx                # Router setup & main layout structure
│   ├── AuthLayout.jsx         # Route protection & auth guard component
│   ├── main.jsx               # React DOM entry point
│   └── index.css              # Global CSS & Tailwind directives
├── package.json               # Project dependencies and npm scripts
├── tailwind.config.js         # Tailwind configuration
└── vite.config.js             # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:
- **Node.js**: `v18.0.0` or higher
- **npm** or **pnpm**
- **Backend API**: The [Expense Tracker Backend API](../expense-tracker-backend) should be running (default: `http://localhost:3000`).

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd expense-tracker/expense-tracker-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the `expense-tracker-frontend` root directory if custom API URLs are needed:

```env
VITE_API_BASE_URL=http://localhost:3000
```

### Running the App

Start the development server:
```bash
npm run dev
```
The app will be accessible at `http://localhost:5173`.

---

## 📖 Core Modules & Pages

1. **Dashboard (`/`)**
   - Central hub displaying expense summary, spending limit progress, category breakdown (Donut chart), and expense distribution over time (Bar chart).

2. **Transactions (`/transactions`)**
   - Complete expense list with search bar, pagination controls, sorting columns, inline modal actions for editing/deleting, and XLSX download trigger.

3. **Budgets (`/budgets`)**
   - Budget tracking interface with remaining balance cards and interactive progress bars for allocated budgets.

4. **Account Settings (`/account`)**
   - User profile hub enabling update of name, email address, password change, and account deletion options.

5. **Admin Dashboard (`/admin`)**
   - Privileged view for system administrators to view user metrics, update user activation status, and download user data reports.

6. **Authentication (`/login`, `/signup`, `/email`, `/otp`, `/reset-password`)**
   - Secure onboarding and recovery flows with responsive design and step-by-step OTP validation.

---

## ⚙️ Scripts Available

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Launches Vite local development server with HMR |
| `npm run build` | Builds the application for production deployment |
| `npm run preview` | Runs a local web server to preview production build |
| `npm run lint` | Runs ESLint to check for code quality and formatting |

---

## 📄 License

This project is open source and available under the **ISC License**.

