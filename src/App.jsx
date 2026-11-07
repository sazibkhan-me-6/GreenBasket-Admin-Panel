import React, { useState, useEffect, useRef } from "react";
import {
  Package,
  ShoppingBag,
  DollarSign,
  Users,
  Plus,
  X,
  Search,
  Leaf,
  ChartNoAxesCombined,
  Trash2,
  Pencil,
  Menu,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Upload,
  Image as ImageIcon,
  LogOut,
  Lock,
  Mail,
  Eye,
  EyeOff,
  UserCheck,
  ShieldCheck,
  User,
  UserPlus,
  LogIn,
  Briefcase
} from "lucide-react";

const initialProducts = [
  {
    id: 1,
    name: "Organic Avocados",
    category: "Vegetables",
    unit: "500g / pack",
    price: 2.99,
    discount: 2.49,
    tag: "Fresh Harvest",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&auto=format&fit=crop&q=80",
    stock: 32
  },
  {
    id: 2,
    name: "Farm Tomatoes",
    category: "Vegetables",
    unit: "1kg / pack",
    price: 3.49,
    discount: 2.99,
    tag: "Farm Fresh",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&auto=format&fit=crop&q=80",
    stock: 45
  },
  {
    id: 3,
    name: "Red Apples",
    category: "Fruits",
    unit: "1kg / pack",
    price: 4.25,
    discount: 3.75,
    tag: "Sweet & Crisp",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop&q=80",
    stock: 28
  },
  {
    id: 4,
    name: "Fresh Carrots",
    category: "Vegetables",
    unit: "500g / pack",
    price: 1.99,
    discount: 1.69,
    tag: "Organic",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=80",
    stock: 54
  },
  {
    id: 5,
    name: "Strawberries",
    category: "Fruits",
    unit: "250g / box",
    price: 3.99,
    discount: 3.49,
    tag: "Seasonal",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&auto=format&fit=crop&q=80",
    stock: 19
  },
  {
    id: 6,
    name: "Bananas",
    category: "Fruits",
    unit: "1kg / bunch",
    price: 2.49,
    discount: 2.19,
    tag: "Daily Pick",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=80",
    stock: 60
  },
  {
    id: 7,
    name: "Broccoli",
    category: "Vegetables",
    unit: "500g / pack",
    price: 2.79,
    discount: 2.39,
    tag: "Green Goodness",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&auto=format&fit=crop&q=80",
    stock: 24
  },
  {
    id: 8,
    name: "Farm Milk",
    category: "Dairy",
    unit: "1L / bottle",
    price: 2.50,
    discount: 2.25,
    tag: "Farm Fresh",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=80",
    stock: 40
  },
  {
    id: 9,
    name: "Chia Seeds",
    category: "Pantry",
    unit: "200g / pack",
    price: 5.99,
    discount: 5.49,
    tag: "Superfood",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
    stock: 17
  },
  {
    id: 10,
    name: "Lettuce",
    category: "Vegetables",
    unit: "1 piece",
    price: 1.75,
    discount: 1.50,
    tag: "Fresh",
    image: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=500&auto=format&fit=crop&q=80",
    stock: 36
  },
  {
    id: 11,
    name: "Oranges",
    category: "Fruits",
    unit: "1kg / pack",
    price: 3.25,
    discount: 2.85,
    tag: "Vitamin C",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500&auto=format&fit=crop&q=80",
    stock: 22
  },
  {
    id: 12,
    name: "Whole Grain Bread",
    category: "Bakery",
    unit: "1 loaf",
    price: 3.10,
    discount: 2.80,
    tag: "Baked Today",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80",
    stock: 15
  }
];

const initialOrders = [
  { id: "GB-1001", customer: "Sarah Ahmed", items: "Organic Avocados, Farm Milk", total: 24.50, status: "Delivered", date: "Nov 07, 2026" },
  { id: "GB-1002", customer: "Rafiqul Islam", items: "Red Apples, Fresh Carrots, Bananas", total: 18.20, status: "Processing", date: "Nov 07, 2026" },
  { id: "GB-1003", customer: "Tanzina Akter", items: "Whole Grain Bread, Farm Tomatoes", total: 12.80, status: "Shipped", date: "Nov 06, 2026" },
  { id: "GB-1004", customer: "Kamal Hossain", items: "Strawberries, Chia Seeds", total: 31.00, status: "Delivered", date: "Nov 05, 2026" }
];

const defaultForm = {
  name: "",
  category: "Vegetables",
  unit: "500g / pack",
  price: "",
  discount: "",
  tag: "Fresh Harvest",
  image: "",
  stock: "20"
};

const DEFAULT_ADMIN_USERS = [
  {
    name: "Store Admin",
    email: "admin@greenbasket.com",
    password: "admin123",
    role: "Chief Administrator"
  }
];

function App() {
  // Authentication State
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem("greenbasket_auth");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Registered Admin Accounts in LocalStorage
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    try {
      const saved = localStorage.getItem("greenbasket_admin_users");
      return saved ? JSON.parse(saved) : DEFAULT_ADMIN_USERS;
    } catch {
      return DEFAULT_ADMIN_USERS;
    }
  });

  // Auth Mode: "signin" | "signup"
  const [authMode, setAuthMode] = useState("signin");

  // Sign In State
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Sign Up State
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupRole, setSignupRole] = useState("Store Manager");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);

  // Products & Dashboard State
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem("greenbasket_products");
      return saved ? JSON.parse(saved) : initialProducts;
    } catch {
      return initialProducts;
    }
  });

  const [orders] = useState(initialOrders);
  const [tab, setTab] = useState("products");
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState(defaultForm);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef(null);

  // Persist products to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("greenbasket_products", JSON.stringify(products));
    } catch (e) {
      console.warn("Storage quota exceeded or unavailable", e);
    }
  }, [products]);

  // Persist registered admin accounts
  useEffect(() => {
    try {
      localStorage.setItem("greenbasket_admin_users", JSON.stringify(registeredUsers));
    } catch (e) {
      console.warn("Storage quota exceeded", e);
    }
  }, [registeredUsers]);

  // Handle Sign In
  function handleLogin(e) {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);

    setTimeout(() => {
      const emailClean = loginEmail.trim().toLowerCase();
      const matched = registeredUsers.find(
        (u) => u.email.toLowerCase() === emailClean && u.password === loginPassword
      );

      if (matched) {
        const userObj = {
          name: matched.name,
          email: matched.email,
          role: matched.role || "Store Administrator"
        };
        setCurrentUser(userObj);
        localStorage.setItem("greenbasket_auth", JSON.stringify(userObj));
        setLoginError("");
      } else {
        setLoginError("Invalid email or password! Please check credentials or sign up.");
      }
      setIsLoggingIn(false);
    }, 350);
  }

  // Handle Sign Up (Register New Admin)
  function handleSignUp(e) {
    e.preventDefault();
    setSignupError("");
    setSignupSuccess("");

    if (!signupName.trim() || !signupEmail.trim() || !signupPassword) {
      setSignupError("Please fill in all required fields.");
      return;
    }

    if (signupPassword.length < 6) {
      setSignupError("Password must be at least 6 characters long.");
      return;
    }

    if (signupPassword !== signupConfirmPassword) {
      setSignupError("Passwords do not match! Please check again.");
      return;
    }

    const emailClean = signupEmail.trim().toLowerCase();
    const existing = registeredUsers.find((u) => u.email.toLowerCase() === emailClean);
    if (existing) {
      setSignupError("An admin account with this email already exists! Please sign in.");
      return;
    }

    setIsSigningUp(true);

    setTimeout(() => {
      const newUser = {
        name: signupName.trim(),
        email: emailClean,
        password: signupPassword,
        role: signupRole || "Store Manager"
      };

      const updated = [...registeredUsers, newUser];
      setRegisteredUsers(updated);

      const userSession = {
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      };

      setSignupSuccess("Admin account created successfully! Redirecting...");

      setTimeout(() => {
        setCurrentUser(userSession);
        localStorage.setItem("greenbasket_auth", JSON.stringify(userSession));
        setIsSigningUp(false);
      }, 700);
    }, 400);
  }

  // Quick fill demo credentials
  function fillDemoCredentials() {
    setLoginEmail("admin@greenbasket.com");
    setLoginPassword("admin123");
    setLoginError("");
  }

  // Handle Logout
  function handleLogout() {
    if (window.confirm("Are you sure you want to log out of GreenBasket Admin?")) {
      setCurrentUser(null);
      localStorage.removeItem("greenbasket_auth");
    }
  }

  // Handle Photo File Upload
  function handleFileUpload(file) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file (PNG, JPG, WEBP, etc.)");
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      setForm((prev) => ({ ...prev, image: event.target.result }));
    };
    reader.readAsDataURL(file);
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (file) handleFileUpload(file);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFileUpload(file);
  }

  const sales = orders.reduce((s, o) => s + o.total, 0);
  const customersCount = new Set(orders.map((o) => o.customer)).size;

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  function reset() {
    setForm(defaultForm);
    setEditing(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function save(e) {
    e.preventDefault();
    if (!form.name || !form.price) return;
    const priceNum = parseFloat(form.price);
    const discountNum = form.discount !== "" ? parseFloat(form.discount) : priceNum;
    const stockNum = parseInt(form.stock, 10) || 0;

    const item = {
      ...form,
      id: editing ?? Date.now(),
      price: priceNum,
      discount: discountNum > 0 ? discountNum : priceNum,
      image:
        form.image ||
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80",
      stock: stockNum
    };

    setProducts((old) => (editing ? old.map((p) => (p.id === editing ? item : p)) : [item, ...old]));
    reset();
    setShowForm(false);
  }

  function edit(p) {
    setForm({
      ...p,
      price: String(p.price),
      discount: String(p.discount),
      stock: String(p.stock),
      image: p.image || ""
    });
    setEditing(p.id);
    setShowForm(true);
    setTab("products");
    window.scrollTo({ top: 180, behavior: "smooth" });
  }

  function removeProduct(id) {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts((old) => old.filter((x) => x.id !== id));
      if (editing === id) reset();
    }
  }

  const stats = [
    ["Products", products.length, Package],
    ["Total Orders", orders.length, ShoppingBag],
    ["Total Sales", `$${sales.toFixed(2)}`, DollarSign],
    ["Customers", customersCount, Users]
  ];

  const categories = ["Vegetables", "Fruits", "Dairy", "Bakery", "Pantry", "Beverages"];
  const lowStock = products.filter((p) => p.stock < 20);

  // Get Admin initials for avatar
  const getInitials = (name) => {
    if (!name) return "GB";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  // -------------------------------------------------------------
  // If NOT Logged In, Render Sign In & Sign Up Screen
  // -------------------------------------------------------------
  if (!currentUser) {
    return (
      <div className="login-page">
        <div className="login-card">
          <div className="login-brand">
            <span className="brand-icon">
              <Leaf />
            </span>
            <div>
              <h2>GreenBasket</h2>
              <small>SECURE ADMIN PORTAL</small>
            </div>
          </div>

          {/* Auth Mode Switcher (Sign In vs Sign Up Tabs) */}
          <div className="auth-tab-switch">
            <button
              type="button"
              className={authMode === "signin" ? "active" : ""}
              onClick={() => {
                setAuthMode("signin");
                setLoginError("");
                setSignupError("");
                setSignupSuccess("");
              }}
            >
              <LogIn size={15} /> Sign In
            </button>
            <button
              type="button"
              className={authMode === "signup" ? "active" : ""}
              onClick={() => {
                setAuthMode("signup");
                setLoginError("");
                setSignupError("");
                setSignupSuccess("");
              }}
            >
              <UserPlus size={15} /> Sign Up
            </button>
          </div>

          {/* ================= SIGN IN TAB ================= */}
          {authMode === "signin" && (
            <>
              <div className="login-header">
                <h3>Admin Sign In</h3>
                <p>Enter your credentials to access the store management dashboard.</p>
              </div>

              {loginError && (
                <div className="login-alert">
                  <AlertTriangle size={18} />
                  <span>{loginError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="login-form">
                <label>
                  <span>Email Address</span>
                  <div className="input-with-icon">
                    <Mail size={17} />
                    <input
                      type="email"
                      required
                      placeholder="admin@greenbasket.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                  </div>
                </label>

                <label>
                  <span>Password</span>
                  <div className="input-with-icon">
                    <Lock size={17} />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="eye-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </label>

                <button type="submit" className="login-submit-btn" disabled={isLoggingIn}>
                  {isLoggingIn ? "Authenticating..." : "Sign In to Admin Panel"}
                </button>
              </form>

              {/* Demo Credentials Box */}
              <div className="demo-credentials-box">
                <div className="demo-head">
                  <ShieldCheck size={16} />
                  <span>Demo Admin Login:</span>
                </div>
                <div className="demo-details">
                  <div>Email: <b>admin@greenbasket.com</b></div>
                  <div>Password: <b>admin123</b></div>
                </div>
                <button type="button" className="demo-fill-btn" onClick={fillDemoCredentials}>
                  <UserCheck size={14} /> Auto-fill Demo Credentials
                </button>
              </div>

              <div className="auth-bottom-switch">
                <span>Don't have an admin account?</span>
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode("signup");
                    setLoginError("");
                  }}
                >
                  Create one now (Sign Up)
                </button>
              </div>
            </>
          )}

          {/* ================= SIGN UP TAB ================= */}
          {authMode === "signup" && (
            <>
              <div className="login-header">
                <h3>Create Admin Account</h3>
                <p>Register as a new store administrator to manage GreenBasket.</p>
              </div>

              {signupError && (
                <div className="login-alert">
                  <AlertTriangle size={18} />
                  <span>{signupError}</span>
                </div>
              )}

              {signupSuccess && (
                <div className="login-success">
                  <CheckCircle2 size={18} />
                  <span>{signupSuccess}</span>
                </div>
              )}

              <form onSubmit={handleSignUp} className="login-form">
                <label>
                  <span>Full Name *</span>
                  <div className="input-with-icon">
                    <User size={17} />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sazib Ahmed"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                    />
                  </div>
                </label>

                <label>
                  <span>Admin Email *</span>
                  <div className="input-with-icon">
                    <Mail size={17} />
                    <input
                      type="email"
                      required
                      placeholder="e.g. sazib@greenbasket.com"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                    />
                  </div>
                </label>

                <label>
                  <span>Admin Role</span>
                  <div className="input-with-icon">
                    <Briefcase size={17} />
                    <select
                      value={signupRole}
                      onChange={(e) => setSignupRole(e.target.value)}
                      className="auth-select"
                    >
                      <option value="Super Administrator">Super Administrator</option>
                      <option value="Store Manager">Store Manager</option>
                      <option value="Inventory Admin">Inventory Admin</option>
                      <option value="Order Supervisor">Order Supervisor</option>
                    </select>
                  </div>
                </label>

                <label>
                  <span>Password * (Min. 6 chars)</span>
                  <div className="input-with-icon">
                    <Lock size={17} />
                    <input
                      type={showSignupPassword ? "text" : "password"}
                      required
                      minLength={6}
                      placeholder="••••••••"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="eye-toggle"
                      onClick={() => setShowSignupPassword(!showSignupPassword)}
                      aria-label="Toggle password visibility"
                    >
                      {showSignupPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </label>

                <label>
                  <span>Confirm Password *</span>
                  <div className="input-with-icon">
                    <Lock size={17} />
                    <input
                      type={showSignupPassword ? "text" : "password"}
                      required
                      minLength={6}
                      placeholder="••••••••"
                      value={signupConfirmPassword}
                      onChange={(e) => setSignupConfirmPassword(e.target.value)}
                    />
                  </div>
                </label>

                <button type="submit" className="login-submit-btn" disabled={isSigningUp}>
                  {isSigningUp ? "Creating Admin Account..." : "Sign Up & Access Dashboard"}
                </button>
              </form>

              <div className="auth-bottom-switch">
                <span>Already have an admin account?</span>
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode("signin");
                    setSignupError("");
                    setSignupSuccess("");
                  }}
                >
                  Sign In here
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // If Logged In, Render Full Admin Dashboard
  // -------------------------------------------------------------
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className={`sidebar ${mobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="brand">
          <span className="brand-icon">
            <Leaf />
          </span>
          <span>
            GreenBasket
            <small>STORE MANAGEMENT</small>
          </span>
        </div>

        <nav>
          <button
            className={tab === "products" ? "active" : ""}
            onClick={() => {
              setTab("products");
              setMobileMenuOpen(false);
            }}
          >
            <Package /> Product Catalog
          </button>
          <button
            className={tab === "orders" ? "active" : ""}
            onClick={() => {
              setTab("orders");
              setMobileMenuOpen(false);
            }}
          >
            <ShoppingBag /> Customer Orders
          </button>
          <button
            className={tab === "analytics" ? "active" : ""}
            onClick={() => {
              setTab("analytics");
              setMobileMenuOpen(false);
            }}
          >
            <ChartNoAxesCombined /> Analytics
          </button>
        </nav>

        <div className="side-bottom">
          <div className="avatar" title={currentUser.name}>
            {getInitials(currentUser.name)}
          </div>
          <div className="admin-meta">
            <b>{currentUser.name}</b>
            <small>{currentUser.role || currentUser.email}</small>
          </div>
          <button className="logout-icon-btn" onClick={handleLogout} title="Log Out">
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main">
        <header className="topbar">
          <button
            className="mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
          <div>
            <small>STORE MANAGEMENT</small>
            <h1>GreenBasket Admin Control Panel</h1>
          </div>

          <div className="topbar-right">
            <span className="status">
              <i /> Store is live
            </span>
            <div className="user-pill">
              <span className="user-pill-avatar">{getInitials(currentUser.name)}</span>
              <span className="user-pill-name">{currentUser.name}</span>
            </div>
            <button className="top-logout-btn" onClick={handleLogout} title="Logout">
              <LogOut size={15} /> Logout
            </button>
          </div>
        </header>

        {/* Stats Row */}
        <section className="stats">
          {stats.map(([label, value, Icon]) => (
            <div className="stat" key={label}>
              <span className="stat-icon">
                <Icon />
              </span>
              <div>
                <small>{label}</small>
                <strong>{value}</strong>
              </div>
            </div>
          ))}
        </section>

        {/* Toolbar */}
        <div className="toolbar">
          <div className="tabs">
            <button
              className={tab === "products" ? "selected" : ""}
              onClick={() => setTab("products")}
            >
              Product Catalog ({products.length})
            </button>
            <button
              className={tab === "orders" ? "selected" : ""}
              onClick={() => setTab("orders")}
            >
              Customer Orders ({orders.length})
            </button>
            <button
              className={tab === "analytics" ? "selected" : ""}
              onClick={() => setTab("analytics")}
            >
              Analytics Overview
            </button>
          </div>

          <div className="actions">
            {tab === "products" && (
              <>
                <div className="search">
                  <Search />
                  <input
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  {search && (
                    <button
                      type="button"
                      className="icon-btn"
                      onClick={() => setSearch("")}
                      title="Clear search"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
                <button
                  className="primary"
                  onClick={() => {
                    reset();
                    setShowForm(!showForm);
                  }}
                >
                  <Plus size={17} /> Add Product
                </button>
              </>
            )}
          </div>
        </div>

        {/* Tab 1: Products */}
        {tab === "products" && (
          <>
            <div className="section-head">
              <div>
                <h2>Manage store items, photos and live pricing</h2>
                <p>Upload product photos, update regular & discount prices, and manage stock</p>
              </div>
              <button className="soft" onClick={() => setShowForm(!showForm)}>
                {showForm ? <X size={16} /> : <Plus size={16} />}
                {showForm ? "Close Form" : "Open Form"}
              </button>
            </div>

            {showForm && (
              <form className="product-form" onSubmit={save}>
                <div className="form-title">
                  <div>
                    <span className="eyebrow">{editing ? "EDIT PRODUCT" : "NEW PRODUCT"}</span>
                    <h3>{editing ? "Update product details & photo" : "Add a product to your catalog"}</h3>
                  </div>
                  <button
                    type="button"
                    className="icon-btn"
                    onClick={() => {
                      setShowForm(false);
                      reset();
                    }}
                  >
                    <X />
                  </button>
                </div>

                <div className="fields">
                  <label>
                    Item Name *
                    <input
                      required
                      placeholder="e.g. Organic Avocados"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </label>

                  <label>
                    Category
                    <select
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                    >
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Unit / Packing
                    <input
                      value={form.unit}
                      onChange={(e) => setForm({ ...form, unit: e.target.value })}
                      placeholder="500g / pack"
                    />
                  </label>

                  <label>
                    Regular Price ($) *
                    <input
                      required
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="e.g. 2.99"
                      value={form.price}
                      onChange={(e) => setForm({ ...form, price: e.target.value })}
                    />
                  </label>

                  <label>
                    Discount Price ($) <small>(Optional)</small>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="e.g. 2.49"
                      value={form.discount}
                      onChange={(e) => setForm({ ...form, discount: e.target.value })}
                    />
                    <div className="discounts">
                      {[10, 15, 20, 30, 50].map((n) => (
                        <button
                          key={n}
                          type="button"
                          onClick={() => {
                            const p = Number(form.price || 0);
                            if (p > 0) {
                              setForm({
                                ...form,
                                discount: (p * (1 - n / 100)).toFixed(2)
                              });
                            }
                          }}
                        >
                          {n}% OFF
                        </button>
                      ))}
                    </div>
                  </label>

                  <label>
                    Stock Quantity
                    <input
                      type="number"
                      min="0"
                      value={form.stock}
                      onChange={(e) => setForm({ ...form, stock: e.target.value })}
                    />
                  </label>

                  <label>
                    Tag / Badge
                    <input
                      value={form.tag}
                      onChange={(e) => setForm({ ...form, tag: e.target.value })}
                      placeholder="Fresh Harvest"
                    />
                  </label>

                  {/* Photo Upload Section */}
                  <div className="field-full-row">
                    <span className="field-title">
                      <ImageIcon size={15} /> Product Photo (File Upload or Image URL)
                    </span>

                    <div className="photo-upload-wrapper">
                      {/* Drag & Drop Upload Zone */}
                      <div
                        className={`dropzone ${isDragging ? "dragging" : ""}`}
                        onDragOver={(e) => {
                          e.preventDefault();
                          setIsDragging(true);
                        }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                        <Upload size={24} className="dropzone-icon" />
                        <div>
                          <strong>Click to upload product photo</strong> or drag and drop
                        </div>
                        <small>PNG, JPG, WEBP, or SVG</small>
                      </div>

                      {/* Image Preview & URL Option */}
                      <div className="photo-preview-box">
                        {form.image ? (
                          <div className="preview-container">
                            <img src={form.image} alt="Preview" className="preview-img" />
                            <button
                              type="button"
                              className="remove-photo-btn"
                              onClick={() => {
                                setForm((prev) => ({ ...prev, image: "" }));
                                if (fileInputRef.current) fileInputRef.current.value = "";
                              }}
                              title="Remove photo"
                            >
                              <X size={14} /> Remove
                            </button>
                          </div>
                        ) : (
                          <div className="preview-placeholder">
                            <ImageIcon size={32} />
                            <span>No photo selected</span>
                          </div>
                        )}

                        <div className="url-input-wrap">
                          <small>Or paste an image web link:</small>
                          <input
                            type="url"
                            placeholder="https://images.unsplash.com/..."
                            value={form.image}
                            onChange={(e) => setForm({ ...form, image: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-footer">
                  <button type="button" className="soft" onClick={reset}>
                    Reset
                  </button>
                  <button className="primary" type="submit">
                    <Plus size={16} />
                    {editing ? "Save Changes" : "Add Product"}
                  </button>
                </div>
              </form>
            )}

            <div className="catalog-head">
              <h3>
                All Products <span>{filtered.length} items</span>
              </h3>
              <span className="muted">Inventory overview</span>
            </div>

            {filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px", color: "#667" }}>
                <p>No products found matching "{search}".</p>
                <button className="soft" onClick={() => setSearch("")} style={{ marginTop: "8px" }}>
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="product-grid">
                {filtered.map((p) => {
                  const hasDiscount = p.discount < p.price;
                  const discountPct = hasDiscount
                    ? Math.round((1 - p.discount / p.price) * 100)
                    : 0;

                  return (
                    <article className="product-card" key={p.id}>
                      <div className="product-visual">
                        <span className="tag">{p.tag}</span>
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={p.name}
                            className="product-img"
                            onError={(e) => {
                              e.target.style.display = "none";
                              const fallback = e.target.nextElementSibling;
                              if (fallback) fallback.style.display = "flex";
                            }}
                          />
                        ) : null}
                        <div
                          className="product-img-fallback"
                          style={{ display: p.image ? "none" : "flex" }}
                        >
                          <ImageIcon size={32} />
                        </div>
                        <div className="card-actions">
                          <button onClick={() => edit(p)} title="Edit">
                            <Pencil size={15} />
                          </button>
                          <button onClick={() => removeProduct(p.id)} title="Delete">
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>

                      <div className="product-info">
                        <small>
                          {p.category} · {p.unit}
                        </small>
                        <h4>{p.name}</h4>
                        <div className="price">
                          <b>${(hasDiscount ? p.discount : p.price).toFixed(2)}</b>
                          {hasDiscount && (
                            <>
                              <del>${p.price.toFixed(2)}</del>
                              <span>{discountPct}% off</span>
                            </>
                          )}
                        </div>
                        <div className="stock">
                          <span>Stock</span>
                          <b>{p.stock} units</b>
                        </div>
                        <div className="stock-bar">
                          <i
                            style={{
                              width: `${(Math.min(p.stock, 60) / 60) * 100}%`,
                              background: p.stock < 20 ? "#e06c53" : "#88bb5e"
                            }}
                          />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </>
        )}

        {/* Tab 2: Orders */}
        {tab === "orders" && (
          <div className="orders">
            <div className="catalog-head">
              <h3>
                Customer Orders <span>{orders.length} orders</span>
              </h3>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Items</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id}>
                      <td>
                        <b>{o.id}</b>
                      </td>
                      <td>{o.customer}</td>
                      <td>{o.items}</td>
                      <td>{o.date}</td>
                      <td>
                        <b>${o.total.toFixed(2)}</b>
                      </td>
                      <td>
                        <span
                          className="order-status"
                          style={{
                            background:
                              o.status === "Delivered"
                                ? "#e6f8ea"
                                : o.status === "Shipped"
                                ? "#e3f0fc"
                                : "#fff3d8",
                            color:
                              o.status === "Delivered"
                                ? "#2d7a42"
                                : o.status === "Shipped"
                                ? "#24619d"
                                : "#9a7526"
                          }}
                        >
                          {o.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Analytics */}
        {tab === "analytics" && (
          <div className="orders" style={{ padding: "24px" }}>
            <div className="catalog-head" style={{ marginTop: 0 }}>
              <h3>Store Analytics & Performance Overview</h3>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                marginTop: "16px"
              }}
            >
              <div
                style={{
                  background: "#f9fcf7",
                  border: "1px solid #e1ecda",
                  padding: "18px",
                  borderRadius: "12px"
                }}
              >
                <h4
                  style={{
                    margin: "0 0 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#2f5d1d"
                  }}
                >
                  <TrendingUp size={18} /> Category Breakdown
                </h4>
                {categories.map((cat) => {
                  const count = products.filter((p) => p.category === cat).length;
                  const pct = products.length > 0 ? (count / products.length) * 100 : 0;
                  return (
                    <div key={cat} style={{ marginBottom: "10px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "12px",
                          marginBottom: "4px"
                        }}
                      >
                        <span>{cat}</span>
                        <b>
                          {count} items ({Math.round(pct)}%)
                        </b>
                      </div>
                      <div
                        style={{
                          height: "6px",
                          background: "#e8ede4",
                          borderRadius: "3px",
                          overflow: "hidden"
                        }}
                      >
                        <div
                          style={{
                            width: `${pct}%`,
                            height: "100%",
                            background: "#5e9b38"
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                style={{
                  background: "#fdf8f7",
                  border: "1px solid #f2dede",
                  padding: "18px",
                  borderRadius: "12px"
                }}
              >
                <h4
                  style={{
                    margin: "0 0 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#b94a3a"
                  }}
                >
                  <AlertTriangle size={18} /> Low Stock Alerts (&lt; 20 units)
                </h4>
                {lowStock.length === 0 ? (
                  <p style={{ fontSize: "12px", color: "#667" }}>All products have sufficient stock.</p>
                ) : (
                  <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "12px", color: "#444" }}>
                    {lowStock.map((p) => (
                      <li key={p.id} style={{ marginBottom: "6px" }}>
                        <b>{p.name}</b>: Only {p.stock} units left!
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div
                style={{
                  background: "#f6f9fc",
                  border: "1px solid #dce8f5",
                  padding: "18px",
                  borderRadius: "12px"
                }}
              >
                <h4
                  style={{
                    margin: "0 0 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#235c94"
                  }}
                >
                  <CheckCircle2 size={18} /> Order Fulfillment Summary
                </h4>
                <div style={{ fontSize: "13px", lineHeight: "1.8", color: "#405469" }}>
                  <div>
                    Total Orders: <b>{orders.length}</b>
                  </div>
                  <div>
                    Delivered: <b>{orders.filter((o) => o.status === "Delivered").length}</b>
                  </div>
                  <div>
                    Processing: <b>{orders.filter((o) => o.status === "Processing").length}</b>
                  </div>
                  <div>
                    Shipped: <b>{orders.filter((o) => o.status === "Shipped").length}</b>
                  </div>
                  <div style={{ marginTop: "10px", borderTop: "1px solid #e1ebf5", paddingTop: "8px" }}>
                    Avg. Order Value: <b>${(sales / (orders.length || 1)).toFixed(2)}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <footer>
          © 2026 GreenBasket Admin · Freshness managed with care <Leaf size={14} />
        </footer>
      </main>
    </div>
  );
}

export default App;
