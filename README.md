# GreenBasket Admin Panel

A modern, responsive React + Vite grocery store admin dashboard with Admin Authentication (Sign In & Sign Up) and Product Photo Upload.

---

## 🌟 Key Features

1. **Admin Authentication System (Sign In & Sign Up)**:
   - **Sign In**: Log in with registered credentials or use the 1-click Demo Credentials (`admin@greenbasket.com` / `admin123`).
   - **Sign Up**: Register new administrators with custom Name, Email, and Roles (*Super Administrator*, *Store Manager*, *Inventory Admin*, *Order Supervisor*).
   - Password confirmation & minimum 6 character validation.
   - Persistence with `localStorage` so sessions stay active on refresh.

2. **Product Catalog with Photo Upload**:
   - Replaced emoji with high-resolution product photos.
   - **Drag & Drop / File Upload**: Upload local images (PNG, JPG, WEBP) directly from your computer with instant Base64 preview.
   - **Image Web URL**: Paste direct image links.
   - Search by product name or category.
   - Quick discount buttons (10%, 15%, 20%, 30%, 50%).
   - Dynamic stock tracking and visual indicators (Red for low stock < 20 units).
   - Create, edit, and delete items with persistent storage in `localStorage`.

3. **Customer Orders**:
   - Order table displaying customer names, items purchased, totals, dates, and order status pills (Delivered, Shipped, Processing).

4. **Analytics Overview**:
   - Product breakdown by category with visual progress bars.
   - Low stock warning alerts list.
   - Order fulfillment metrics and average order value.

5. **Responsive Design**:
   - Fully optimized for desktop, tablet, and mobile screens with collapsible mobile navigation.

---

## 🚀 How to Run Locally

1. Open PowerShell / Command Prompt inside this folder:
   ```bash
   cd c:\Users\Sazib\Desktop\GreenBasket-Admin-Panel
   ```

2. If dependencies are not installed:
   ```bash
   npm install
   # or on Windows PowerShell:
   npm.cmd install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   # or
   npm.cmd run dev
   ```

4. Open in browser: **http://localhost:5173/**

---

## 🔑 Demo Credentials
- **Email:** `admin@greenbasket.com`
- **Password:** `admin123`
*(Or click "Sign Up" to create your own account)*

---

## 📦 Production Build
To create an optimized production build:
```bash
npm run build
```
Built files will be generated in the `dist/` directory ready for deployment.
