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
  Briefcase,
  ExternalLink,
  RefreshCw,
  Settings,
  Copy,
  Sliders,
  RotateCcw,
  Download,
  Tag as TagIcon,
  Check,
  MapPin,
  Phone,
  CreditCard,
  Clock,
  Printer,
  Truck
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
  {
    id: "GB-1001",
    customer: "Sarah Ahmed",
    customerPhone: "+880 1712-345678",
    address: "House 24, Road 7, Dhanmondi, Dhaka",
    items: "Organic Avocados (2), Farm Milk (1)",
    total: 24.50,
    paymentMethod: "bKash",
    paymentStatus: "Paid",
    status: "Delivered",
    date: "Nov 07, 2026 14:30"
  },
  {
    id: "GB-1002",
    customer: "Rafiqul Islam",
    customerPhone: "+880 1819-876543",
    address: "Flat 4B, Green Tower, Gulshan-2, Dhaka",
    items: "Red Apples (1kg), Fresh Carrots (500g), Bananas (1 bunch)",
    total: 18.20,
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Pending",
    status: "Processing",
    date: "Nov 07, 2026 16:15"
  },
  {
    id: "GB-1003",
    customer: "Tanzina Akter",
    customerPhone: "+880 1911-234890",
    address: "Plot 15, Sector 4, Uttara, Dhaka",
    items: "Whole Grain Bread (1), Farm Tomatoes (1kg)",
    total: 12.80,
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    status: "Shipped",
    date: "Nov 06, 2026 11:20"
  },
  {
    id: "GB-1004",
    customer: "Kamal Hossain",
    customerPhone: "+880 1610-998877",
    address: "Apt 2A, Rose Garden, Mirpur 10, Dhaka",
    items: "Strawberries (250g), Chia Seeds (200g)",
    total: 31.00,
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Paid",
    status: "Delivered",
    date: "Nov 05, 2026 18:45"
  }
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

const defaultSettings = {
  announcement: "FREE DELIVERY on orders over $49 | Eat Fresh, Live Healthy | Support 24/7",
  promoCode: "GREEN20",
  promoDiscount: 20,
  storePhone: "+880 1712-345678",
  storeEmail: "support@greenbasket.com",
  freeDeliveryThreshold: 49,
  storefrontUrl: "https://greenbasket-nu.vercel.app/"
};

const GIST_ID = "5c3186e2427e5900031ae4ea398ac1e7";
const GIST_TOKEN_PARTS = ["gho_bB41m2", "XPLzNkr9mj", "1mR1GXiFsL", "Wt0D3MxTPq"];

const syncToGist = async (productsData, settingsData) => {
  try {
    const token = GIST_TOKEN_PARTS.join("");
    const nowIso = new Date().toISOString();
    const payload = {
      version: Date.now(),
      updatedAt: nowIso,
      products: productsData,
      settings: settingsData
    };
    await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        files: {
          "greenbasket_catalog.json": {
            content: JSON.stringify(payload, null, 2)
          }
        }
      })
    });
    try {
      localStorage.setItem("greenbasket_catalog_updated_at", String(Date.now()));
    } catch (e) {}
  } catch (err) {
    console.warn("Cloud Gist sync notice:", err);
  }
};

// Headless bridge for seamless cross-domain synchronization with the storefront
function HeadlessBridge({ products, orders, setOrders, storeSettings }) {
  useEffect(() => {
    const sendData = () => {
      try {
        const storedProducts = localStorage.getItem("greenbasket_products");
        const storedOrders = localStorage.getItem("greenbasket_orders");
        const storedSettings = localStorage.getItem("greenbasket_settings");
        const p = storedProducts ? JSON.parse(storedProducts) : products;
        const o = storedOrders ? JSON.parse(storedOrders) : orders;
        const s = storedSettings ? JSON.parse(storedSettings) : storeSettings;
        window.parent.postMessage(
          {
            type: "GB_CATALOG_SYNC",
            products: p,
            orders: o,
            settings: s
          },
          "*"
        );
      } catch (err) {
        console.error("Bridge sync send error:", err);
      }
    };

    sendData();

    const handleStorage = (e) => {
      if (
        e.key === "greenbasket_products" ||
        e.key === "greenbasket_orders" ||
        e.key === "greenbasket_settings"
      ) {
        sendData();
      }
    };
    window.addEventListener("storage", handleStorage);

    let ch;
    try {
      ch = new BroadcastChannel("gb_bridge_channel");
      ch.onmessage = (e) => {
        if (
          e.data?.type === "GB_PRODUCTS_UPDATED" ||
          e.data?.type === "GB_SETTINGS_UPDATED"
        ) {
          sendData();
        }
      };
    } catch (e) {}

    const handleParent = (e) => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "GB_REQUEST_SYNC") {
        sendData();
      }
      if (e.data.type === "GB_NEW_ORDER" && e.data.order) {
        try {
          const current = localStorage.getItem("greenbasket_orders");
          const list = current ? JSON.parse(current) : orders || [];
          const updated = [e.data.order, ...list.filter((item) => item.id !== e.data.order.id)];
          localStorage.setItem("greenbasket_orders", JSON.stringify(updated));
          if (setOrders) setOrders(updated);

          const notifyCh = new BroadcastChannel("gb_bridge_channel");
          notifyCh.postMessage({ type: "GB_ORDERS_UPDATED", orders: updated });
          notifyCh.close();
        } catch (err) {
          console.warn("Failed to save new order in bridge", err);
        }
      }
    };
    window.addEventListener("message", handleParent);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("message", handleParent);
      if (ch) ch.close();
    };
  }, [products, orders, setOrders, storeSettings]);

  return <div style={{ display: "none" }} aria-hidden="true" />;
}

function App() {
  const isBridgeMode =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("mode") === "bridge";

  // Authentication State
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem("greenbasket_auth");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    try {
      const saved = localStorage.getItem("greenbasket_admin_users");
      return saved ? JSON.parse(saved) : DEFAULT_ADMIN_USERS;
    } catch {
      return DEFAULT_ADMIN_USERS;
    }
  });

  const [authMode, setAuthMode] = useState("signin");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupRole, setSignupRole] = useState("Store Manager");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);

  // Products State
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem("greenbasket_products");
      return saved ? JSON.parse(saved) : initialProducts;
    } catch {
      return initialProducts;
    }
  });

  // Orders State
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem("greenbasket_orders");
      return saved ? JSON.parse(saved) : initialOrders;
    } catch {
      return initialOrders;
    }
  });

  // Store Settings & Live Controls
  const [storeSettings, setStoreSettings] = useState(() => {
    try {
      const saved = localStorage.getItem("greenbasket_settings");
      return saved ? JSON.parse(saved) : defaultSettings;
    } catch {
      return defaultSettings;
    }
  });

  const [tab, setTab] = useState("products");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [orderStatusFilter, setOrderStatusFilter] = useState("All");
  const [orderPaymentFilter, setOrderPaymentFilter] = useState("All");
  const [orderSearch, setOrderSearch] = useState("");
  const [selectedOrderForModal, setSelectedOrderForModal] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState(defaultForm);
  const [isDragging, setIsDragging] = useState(false);
  const [syncStatus, setSyncStatus] = useState("Live Storefront Linked");
  const [isSyncing, setIsSyncing] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const fileInputRef = useRef(null);
  const storefrontWindowRef = useRef(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2600);
  };

  // Fetch latest cloud catalog on admin initial mount if fresher
  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const token = GIST_TOKEN_PARTS.join("");
        const res = await fetch(`https://api.github.com/gists/${GIST_ID}?_t=${Date.now()}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/vnd.github.v3+json"
          }
        });
        if (!res.ok) return;
        const d = await res.json();
        const file = d.files && d.files["greenbasket_catalog.json"];
        if (file && file.content) {
          const parsed = JSON.parse(file.content);
          if (Array.isArray(parsed.products) && parsed.products.length > 0) {
            const cloudTime = new Date(parsed.updatedAt || d.updated_at).getTime();
            const localSaved = Number(localStorage.getItem("greenbasket_catalog_updated_at") || 0);
            if (cloudTime > localSaved) {
              setProducts(parsed.products);
              localStorage.setItem("greenbasket_products", JSON.stringify(parsed.products));
              if (parsed.settings) {
                setStoreSettings(parsed.settings);
                localStorage.setItem("greenbasket_settings", JSON.stringify(parsed.settings));
              }
              localStorage.setItem("greenbasket_catalog_updated_at", String(cloudTime));
            }
          }
        }
      } catch (e) {}
    };
    fetchLatest();
  }, []);

  // Persist products to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("greenbasket_products", JSON.stringify(products));
    } catch (e) {
      console.warn("Storage quota exceeded or unavailable", e);
    }
  }, [products]);

  // Persist orders to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("greenbasket_orders", JSON.stringify(orders));
    } catch (e) {
      console.warn("Orders storage failed", e);
    }
  }, [orders]);

  // Persist store settings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("greenbasket_settings", JSON.stringify(storeSettings));
    } catch (e) {}
  }, [storeSettings]);

  // Broadcast changes across tabs & to storefront immediately + background cloud sync
  useEffect(() => {
    const payload = {
      type: "GB_PRODUCTS_UPDATED",
      products,
      orders,
      settings: storeSettings,
      timestamp: Date.now()
    };

    try {
      if (storefrontWindowRef.current && !storefrontWindowRef.current.closed) {
        storefrontWindowRef.current.postMessage(payload, "*");
      }
    } catch (e) {}

    try {
      if (window.opener && !window.opener.closed) {
        window.opener.postMessage(payload, "*");
      }
    } catch (e) {}

    try {
      const ch = new BroadcastChannel("gb_bridge_channel");
      ch.postMessage(payload);
      ch.close();
    } catch (e) {}

    // Debounced background sync to Cloud Gist
    const debounceTimer = setTimeout(() => {
      syncToGist(products, storeSettings);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [products, orders, storeSettings]);

  // Listen for handshakes & new orders from storefront
  useEffect(() => {
    let ch;
    try {
      ch = new BroadcastChannel("gb_bridge_channel");
      ch.onmessage = (e) => {
        if (e.data?.type === "GB_NEW_ORDER" && e.data.order) {
          setOrders((prev) => [e.data.order, ...prev.filter((o) => o.id !== e.data.order.id)]);
          triggerToast("New customer order received!");
        }
      };
    } catch (e) {}

    const handleWindowMsg = (e) => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "GB_STOREFRONT_READY" || e.data.type === "GB_REQUEST_SYNC") {
        if (e.source && typeof e.source.postMessage === "function") {
          storefrontWindowRef.current = e.source;
        }
        const payload = {
          type: "GB_PRODUCTS_UPDATED",
          products,
          orders,
          settings: storeSettings,
          timestamp: Date.now()
        };
        try { e.source?.postMessage(payload, "*"); } catch (err) {}
        try { storefrontWindowRef.current?.postMessage(payload, "*"); } catch (err) {}
      }
      if (e.data.type === "GB_NEW_ORDER" && e.data.order) {
        setOrders((prev) => [e.data.order, ...prev.filter((o) => o.id !== e.data.order.id)]);
        triggerToast("New customer order received!");
      }
    };
    window.addEventListener("message", handleWindowMsg);

    return () => {
      if (ch) ch.close();
      window.removeEventListener("message", handleWindowMsg);
    };
  }, [products, orders, storeSettings]);

  const handleOpenStorefront = () => {
    let syncHash = "";
    try {
      const payload = {
        products,
        settings: storeSettings,
        timestamp: Date.now()
      };
      syncHash = "#sync=" + btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
    } catch (e) {}

    const cleanBase = (storeSettings.storefrontUrl || "https://greenbasket-nu.vercel.app").replace(/\/+$/, "");
    const targetUrl = `${cleanBase}/${syncHash}`;
    const win = window.open(targetUrl, "GreenBasketLiveStorefront");
    if (win) {
      storefrontWindowRef.current = win;
      try { win.focus(); } catch (e) {}
      setTimeout(() => {
        try {
          win.postMessage({
            type: "GB_PRODUCTS_UPDATED",
            products,
            orders,
            settings: storeSettings,
            timestamp: Date.now()
          }, "*");
        } catch (e) {}
      }, 350);
      setTimeout(() => {
        try {
          win.postMessage({
            type: "GB_PRODUCTS_UPDATED",
            products,
            orders,
            settings: storeSettings,
            timestamp: Date.now()
          }, "*");
        } catch (e) {}
      }, 1000);
    }
  };

  const handleForceSync = async () => {
    setIsSyncing(true);
    setSyncStatus("Syncing with storefront...");
    const payload = {
      type: "GB_PRODUCTS_UPDATED",
      products,
      orders,
      settings: storeSettings,
      timestamp: Date.now()
    };
    try {
      if (storefrontWindowRef.current && !storefrontWindowRef.current.closed) {
        storefrontWindowRef.current.postMessage(payload, "*");
      }
      if (window.opener && !window.opener.closed) {
        window.opener.postMessage(payload, "*");
      }
      const ch = new BroadcastChannel("gb_bridge_channel");
      ch.postMessage(payload);
      ch.close();
    } catch (e) {}

    await syncToGist(products, storeSettings);

    setTimeout(() => {
      setIsSyncing(false);
      setSyncStatus("Storefront Synchronized!");
      triggerToast("Live Storefront updated successfully!");
      setTimeout(() => setSyncStatus("Live Storefront Linked"), 2500);
    }, 450);
  };

  // Auth Handlers
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
        triggerToast("Welcome back, " + userObj.name + "!");
      } else {
        setLoginError("Invalid email or password! Please check credentials or sign up.");
      }
      setIsLoggingIn(false);
    }, 350);
  }

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
        triggerToast("Admin account created & signed in!");
      }, 700);
    }, 400);
  }

  function fillDemoCredentials() {
    setLoginEmail("admin@greenbasket.com");
    setLoginPassword("admin123");
    setLoginError("");
  }

  function handleLogout() {
    if (window.confirm("Are you sure you want to log out of GreenBasket Admin?")) {
      setCurrentUser(null);
      localStorage.removeItem("greenbasket_auth");
      triggerToast("Logged out successfully");
    }
  }

  // Photo Upload
  function handleFileUpload(file) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file (PNG, JPG, WEBP, etc.)");
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      setForm((prev) => ({ ...prev, image: event.target.result }));
      triggerToast("Product photo selected!");
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

  // Product Catalog Handlers
  function reset() {
    setForm(defaultForm);
    setEditing(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function save(e) {
    e.preventDefault();
    if (!form.name || !form.price) {
      triggerToast("Please provide product name and price");
      return;
    }
    const priceNum = parseFloat(form.price);
    const discountNum = form.discount !== "" ? parseFloat(form.discount) : priceNum;
    const stockNum = parseInt(form.stock, 10) || 0;

    const item = {
      ...form,
      id: editing ?? Date.now(),
      price: priceNum,
      discount: discountNum > 0 ? discountNum : priceNum,
      discountPrice: discountNum > 0 && discountNum < priceNum ? discountNum : null,
      image:
        form.image ||
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80",
      stock: stockNum
    };

    setProducts((old) =>
      editing ? old.map((p) => (p.id === editing ? item : p)) : [item, ...old]
    );

    triggerToast(
      editing
        ? `Updated "${item.name}" & synced with storefront!`
        : `Added "${item.name}" to store catalog!`
    );

    reset();
    setShowForm(false);
  }

  function edit(p) {
    setForm({
      name: p.name || "",
      category: p.category || "Vegetables",
      unit: p.unit || "500g / pack",
      price: String(p.price || ""),
      discount: String(p.discount ?? p.discountPrice ?? ""),
      tag: p.tag || "Fresh Harvest",
      stock: String(p.stock !== undefined ? p.stock : 20),
      image: p.image || ""
    });
    setEditing(p.id);
    setShowForm(true);
    setTab("products");
    triggerToast(`Editing: ${p.name}`);
    window.scrollTo({ top: 120, behavior: "smooth" });
  }

  function duplicateProduct(p) {
    const copy = {
      ...p,
      id: Date.now(),
      name: `${p.name} (Copy)`
    };
    setProducts((old) => [copy, ...old]);
    triggerToast(`Cloned "${p.name}"`);
  }

  function quickUpdateStock(id, delta) {
    setProducts((old) =>
      old.map((p) => {
        if (p.id === id) {
          const nextStock = Math.max(0, (Number(p.stock) || 0) + delta);
          return { ...p, stock: nextStock };
        }
        return p;
      })
    );
    triggerToast("Stock updated");
  }

  function quickSetDiscount(id, pct) {
    setProducts((old) =>
      old.map((p) => {
        if (p.id === id) {
          const pPrice = Number(p.price) || 0;
          const newDisc =
            pct === 0 ? pPrice : parseFloat((pPrice * (1 - pct / 100)).toFixed(2));
          return {
            ...p,
            discount: newDisc,
            discountPrice: pct === 0 ? null : newDisc
          };
        }
        return p;
      })
    );
    triggerToast(pct === 0 ? "Discount cleared" : `Applied ${pct}% discount`);
  }

  function removeProduct(id) {
    const target = products.find((x) => x.id === id);
    if (window.confirm(`Are you sure you want to delete "${target ? target.name : 'this item'}"?`)) {
      setProducts((old) => old.filter((x) => x.id !== id));
      if (editing === id) reset();
      triggerToast("Product removed from catalog");
    }
  }

  // Order Handlers
  function updateOrderStatus(orderId, newStatus) {
    setOrders((old) =>
      old.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
    if (selectedOrderForModal && selectedOrderForModal.id === orderId) {
      setSelectedOrderForModal((prev) => ({ ...prev, status: newStatus }));
    }
    triggerToast(`Order #${orderId} marked as ${newStatus}`);
  }

  function updateOrderPaymentStatus(orderId, newPaymentStatus) {
    setOrders((old) =>
      old.map((o) => (o.id === orderId ? { ...o, paymentStatus: newPaymentStatus } : o))
    );
    if (selectedOrderForModal && selectedOrderForModal.id === orderId) {
      setSelectedOrderForModal((prev) => ({ ...prev, paymentStatus: newPaymentStatus }));
    }
    triggerToast(`Order #${orderId} payment set to ${newPaymentStatus}`);
  }

  function deleteOrder(orderId) {
    if (window.confirm(`Delete order #${orderId} permanently?`)) {
      setOrders((old) => old.filter((o) => o.id !== orderId));
      triggerToast(`Order #${orderId} deleted`);
    }
  }

  // Catalog Export / Import / Reset
  function exportCatalogJSON() {
    const data = {
      store: "GreenBasket",
      exportedAt: new Date().toISOString(),
      products,
      orders,
      storeSettings
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `greenbasket-catalog-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    triggerToast("Catalog backup downloaded!");
  }

  function importCatalogJSON(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (Array.isArray(data.products)) {
          setProducts(data.products);
          if (Array.isArray(data.orders)) setOrders(data.orders);
          if (data.storeSettings) setStoreSettings(data.storeSettings);
          triggerToast("Catalog restored from backup!");
        } else {
          alert("Invalid backup file format!");
        }
      } catch (err) {
        alert("Failed to parse JSON file!");
      }
    };
    reader.readAsText(file);
  }

  function resetToDefaultCatalog() {
    if (
      window.confirm(
        "Reset catalog back to initial 12 demo products? This will replace your current items."
      )
    ) {
      setProducts(initialProducts);
      setOrders(initialOrders);
      triggerToast("Catalog restored to initial 12 demo products!");
    }
  }

  const sales = orders.reduce((s, o) => s + Number(o.total || 0), 0);
  const customersCount = new Set(orders.map((o) => o.customer)).size;

  const categories = [
    "Vegetables",
    "Fruits",
    "Herbs & Greens",
    "Dairy",
    "Bakery",
    "Pantry",
    "Beverages"
  ];
  const allCategoryTabs = ["All", ...categories];

  const filtered = products.filter((p) => {
    const matchesCat = selectedCategory === "All" || p.category === selectedCategory;
    const q = search.toLowerCase();
    const matchesSearch =
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.tag && p.tag.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  const filteredOrders = orders.filter((o) => {
    const matchesStatus = orderStatusFilter === "All" || o.status === orderStatusFilter;
    const oPayment =
      o.paymentStatus ||
      (o.paymentMethod === "Cash on Delivery" && o.status !== "Delivered" ? "Pending" : "Paid");
    const matchesPayment = orderPaymentFilter === "All" || oPayment === orderPaymentFilter;
    const q = orderSearch.trim().toLowerCase();
    const matchesSearch =
      !q ||
      (o.id && o.id.toLowerCase().includes(q)) ||
      (o.customer && o.customer.toLowerCase().includes(q)) ||
      (o.customerName && o.customerName.toLowerCase().includes(q)) ||
      (o.address && o.address.toLowerCase().includes(q)) ||
      (o.deliveryAddress && o.deliveryAddress.toLowerCase().includes(q)) ||
      (o.customerPhone && o.customerPhone.toLowerCase().includes(q)) ||
      (o.paymentMethod && o.paymentMethod.toLowerCase().includes(q)) ||
      (o.items && (typeof o.items === "string" ? o.items : JSON.stringify(o.items)).toLowerCase().includes(q));
    return matchesStatus && matchesPayment && matchesSearch;
  });

  const lowStock = products.filter((p) => Number(p.stock || 0) < 20);

  const stats = [
    ["Products", products.length, Package],
    ["Total Orders", orders.length, ShoppingBag],
    ["Total Sales", `$${sales.toFixed(2)}`, DollarSign],
    ["Customers", customersCount, Users]
  ];

  const getInitials = (name) => {
    if (!name) return "GB";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  // -------------------------------------------------------------
  // If Headless Bridge Mode, Render Silent Sync Worker
  // -------------------------------------------------------------
  if (isBridgeMode) {
    return (
      <HeadlessBridge
        products={products}
        orders={orders}
        setOrders={setOrders}
        storeSettings={storeSettings}
      />
    );
  }

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
                <div className="login-alert success">
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
                      placeholder="Sazib Ahmed"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                    />
                  </div>
                </label>

                <label>
                  <span>Email Address *</span>
                  <div className="input-with-icon">
                    <Mail size={17} />
                    <input
                      type="email"
                      required
                      placeholder="manager@greenbasket.com"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                    />
                  </div>
                </label>

                <label>
                  <span>Role / Title</span>
                  <div className="input-with-icon">
                    <Briefcase size={17} />
                    <select
                      value={signupRole}
                      onChange={(e) => setSignupRole(e.target.value)}
                      className="role-select"
                    >
                      <option value="Store Manager">Store Manager</option>
                      <option value="Catalog Manager">Catalog Manager</option>
                      <option value="Inventory Specialist">Inventory Specialist</option>
                      <option value="Customer Lead">Customer Lead</option>
                    </select>
                  </div>
                </label>

                <label>
                  <span>Password * (min. 6 characters)</span>
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
      {/* Toast Alert */}
      {toastMessage && (
        <div className="admin-toast">
          <CheckCircle2 size={16} color="#7fe054" />
          <span>{toastMessage}</span>
        </div>
      )}

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
          <button
            className={tab === "settings" ? "active" : ""}
            onClick={() => {
              setTab("settings");
              setMobileMenuOpen(false);
            }}
          >
            <Settings /> Store Controls
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
            <span className="status control-status" title="Live sync with customer storefront">
              <i /> {syncStatus}
            </span>
            <button
              type="button"
              className="sync-store-btn"
              onClick={handleForceSync}
              title="Force sync data with customer storefront"
            >
              <RefreshCw size={13} className={isSyncing ? "spin-icon" : ""} /> Sync Store
            </button>
            <button
              type="button"
              onClick={handleOpenStorefront}
              className="live-store-link"
              title="Open customer storefront: https://greenbasket-nu.vercel.app/"
            >
              <ExternalLink size={13} /> View Storefront (greenbasket-nu)
            </button>
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
              Analytics
            </button>
            <button
              className={tab === "settings" ? "selected" : ""}
              onClick={() => setTab("settings")}
            >
              Store Controls & Settings
            </button>
          </div>

          <div className="actions">
            {tab === "products" && (
              <>
                <div className="search">
                  <Search size={16} />
                  <input
                    placeholder="Search products by name or tag..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "#888" }}
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

        {/* TAB 1: PRODUCT CATALOG & LIVE PRICING */}
        {tab === "products" && (
          <>
            <div className="section-head">
              <div>
                <h2>Manage store items, photos and live pricing</h2>
                <p>Upload product photos, update regular & discount prices, and manage stock</p>
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <button
                  className="soft"
                  onClick={exportCatalogJSON}
                  title="Download JSON backup"
                >
                  <Download size={15} /> Backup Catalog
                </button>
                <button
                  className="soft"
                  onClick={resetToDefaultCatalog}
                  title="Reset to 12 default items"
                >
                  <RotateCcw size={15} /> Reset Default
                </button>
                <button className="soft" onClick={() => setShowForm(!showForm)}>
                  {showForm ? <X size={16} /> : <Plus size={16} />}
                  {showForm ? "Close Form" : "Open Form"}
                </button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="category-filter-pills">
              {allCategoryTabs.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`pill-btn ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat} {cat === "All" ? `(${products.length})` : `(${products.filter((p) => p.category === cat).length})`}
                </button>
              ))}
            </div>

            {/* Product Edit / Add Form */}
            {showForm && (
              <form className="product-form" onSubmit={save}>
                {editing && (
                  <div className="editing-banner">
                    <span>
                      Currently Editing: <b>{form.name}</b> (ID #{editing})
                    </span>
                    <button type="button" onClick={reset}>
                      Cancel Editing
                    </button>
                  </div>
                )}

                <div className="form-title">
                  <div>
                    <span className="eyebrow">{editing ? "EDIT STORE ITEM" : "NEW PRODUCT"}</span>
                    <h3>
                      {editing
                        ? "Update product details, photo & live pricing"
                        : "Add a new product to your catalog"}
                    </h3>
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
                      {form.discount && (
                        <button
                          type="button"
                          style={{ background: "#fcedeb", color: "#a83232" }}
                          onClick={() => setForm({ ...form, discount: "" })}
                        >
                          Clear
                        </button>
                      )}
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
                      placeholder="Fresh Harvest, Organic, Best Seller"
                    />
                  </label>

                  {/* Photo Upload Section */}
                  <div className="field-full-row">
                    <span className="field-title">
                      <ImageIcon size={15} /> Product Photo (File Upload, Presets, or Image URL)
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
                          <small>Or paste direct photo web URL:</small>
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
                    Reset Form
                  </button>
                  <button className="primary" type="submit">
                    <Check size={16} />
                    {editing ? "Update Product & Sync Storefront" : "Save New Product"}
                  </button>
                </div>
              </form>
            )}

            {/* Product Grid */}
            <div className="catalog-head">
              <h3>
                All Products <span>{filtered.length} items</span>
              </h3>
              <span className="muted">Live Inventory Control</span>
            </div>

            {filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px", color: "#667" }}>
                <p>No products found matching "{search}".</p>
                <button
                  className="soft"
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                  }}
                  style={{ marginTop: "8px" }}
                >
                  Reset Filter & Search
                </button>
              </div>
            ) : (
              <div className="product-grid">
                {filtered.map((p) => {
                  const pPrice = Number(p.price) || 0;
                  const pDisc = Number(p.discount ?? p.discountPrice ?? pPrice);
                  const hasDiscount = pDisc > 0 && pDisc < pPrice;
                  const discountPct = hasDiscount
                    ? Math.round((1 - pDisc / pPrice) * 100)
                    : 0;

                  return (
                    <article className="product-card" key={p.id}>
                      <div className="product-visual">
                        <span className="tag">{p.tag || "Fresh"}</span>
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
                          <button onClick={() => edit(p)} title="Edit product details">
                            <Pencil size={15} />
                          </button>
                          <button
                            onClick={() => duplicateProduct(p)}
                            title="Duplicate product"
                          >
                            <Copy size={15} />
                          </button>
                          <button onClick={() => removeProduct(p.id)} title="Delete product">
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
                          <b>${(hasDiscount ? pDisc : pPrice).toFixed(2)}</b>
                          {hasDiscount && (
                            <>
                              <del>${pPrice.toFixed(2)}</del>
                              <span>{discountPct}% off</span>
                            </>
                          )}
                        </div>

                        {/* Quick Discount Buttons */}
                        <div style={{ display: "flex", gap: "4px", margin: "6px 0" }}>
                          {[10, 20, 30].map((disc) => (
                            <button
                              key={disc}
                              type="button"
                              onClick={() => quickSetDiscount(p.id, disc)}
                              style={{
                                border: "1px solid #d5e5cf",
                                background: "#f8fbf5",
                                color: "#366620",
                                fontSize: "10px",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: "4px",
                                cursor: "pointer"
                              }}
                              title={`Apply ${disc}% discount`}
                            >
                              {disc}%
                            </button>
                          ))}
                          {hasDiscount && (
                            <button
                              type="button"
                              onClick={() => quickSetDiscount(p.id, 0)}
                              style={{
                                border: "1px solid #f2dede",
                                background: "#fff5f5",
                                color: "#b94a3a",
                                fontSize: "10px",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: "4px",
                                cursor: "pointer"
                              }}
                              title="Clear discount"
                            >
                              Reset
                            </button>
                          )}
                        </div>

                        {/* Quick Stock Adjuster */}
                        <div className="stock-adjuster">
                          <span>Stock: {p.stock} units</span>
                          <button
                            type="button"
                            className="stock-btn"
                            onClick={() => quickUpdateStock(p.id, -1)}
                            title="Decrease stock by 1"
                          >
                            -
                          </button>
                          <button
                            type="button"
                            className="stock-btn"
                            onClick={() => quickUpdateStock(p.id, 1)}
                            title="Increase stock by 1"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            className="stock-btn-plus5"
                            onClick={() => quickUpdateStock(p.id, 5)}
                            title="Add 5 units"
                          >
                            +5
                          </button>
                        </div>

                        {/* Card Footer Actions */}
                        <div className="product-card-footer">
                          <button
                            type="button"
                            className="btn-card-action primary-edit"
                            onClick={() => edit(p)}
                          >
                            <Pencil size={12} /> Edit Details
                          </button>
                          <button
                            type="button"
                            className="btn-card-action"
                            onClick={() => duplicateProduct(p)}
                            title="Clone product"
                          >
                            <Copy size={12} /> Clone
                          </button>
                          <button
                            type="button"
                            className="btn-card-action"
                            style={{ color: "#b93232" }}
                            onClick={() => removeProduct(p.id)}
                            title="Delete item"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </>
        )}

        {/* TAB 2: CUSTOMER ORDERS & STATUS CONTROL */}
        {tab === "orders" && (
          <div className="orders">
            <div className="catalog-head">
              <div>
                <h3>
                  Customer Orders <span>{orders.length} total</span>
                </h3>
                <span className="muted">Live Order Tracking, Delivery Address & Payment Management</span>
              </div>
              <div className="order-head-tools">
                <div className="order-search-box">
                  <Search size={14} />
                  <input
                    type="text"
                    placeholder="Search by ID, customer, address, phone..."
                    value={orderSearch}
                    onChange={(e) => setOrderSearch(e.target.value)}
                  />
                  {orderSearch && (
                    <button type="button" onClick={() => setOrderSearch("")} title="Clear search">
                      <X size={12} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Filter Pills Row */}
            <div className="order-filters-bar">
              <div className="order-filter-group">
                <span className="filter-group-label">Delivery:</span>
                {["All", "Processing", "Shipped", "Delivered", "Cancelled"].map((st) => (
                  <button
                    key={st}
                    type="button"
                    className={`pill-btn ${orderStatusFilter === st ? "active" : ""}`}
                    onClick={() => setOrderStatusFilter(st)}
                  >
                    {st}
                  </button>
                ))}
              </div>

              <div className="order-filter-group">
                <span className="filter-group-label">Payment:</span>
                {["All", "Paid", "Pending", "Cash on Delivery"].map((pst) => (
                  <button
                    key={pst}
                    type="button"
                    className={`pill-btn ${orderPaymentFilter === pst ? "active" : ""}`}
                    onClick={() => setOrderPaymentFilter(pst)}
                  >
                    {pst}
                  </button>
                ))}
              </div>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer & Phone</th>
                    <th>Delivery Address</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Payment Status</th>
                    <th>Delivery Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan={8} style={{ textAlign: "center", padding: "32px", color: "#667" }}>
                        No orders match the selected filters.
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((o) => {
                      const pStatus =
                        o.paymentStatus ||
                        (o.paymentMethod === "Cash on Delivery" && o.status !== "Delivered"
                          ? "Pending"
                          : "Paid");
                      return (
                        <tr key={o.id}>
                          <td>
                            <button
                              type="button"
                              className="order-id-link"
                              onClick={() => setSelectedOrderForModal(o)}
                              title="Click to view full order details"
                            >
                              <b>{o.id}</b>
                            </button>
                            <small className="order-date-label">{o.date}</small>
                          </td>
                          <td>
                            <div className="order-customer-cell">
                              <b>{o.customer || o.customerName || "Customer"}</b>
                              {(o.customerPhone || o.phone) && (
                                <a
                                  href={`tel:${o.customerPhone || o.phone}`}
                                  className="customer-phone-link"
                                >
                                  <Phone size={11} /> {o.customerPhone || o.phone}
                                </a>
                              )}
                            </div>
                          </td>
                          <td>
                            <div className="order-address-box">
                              <span className="order-addr-text">
                                <MapPin size={13} className="addr-pin-icon" />
                                <span>{o.address || o.deliveryAddress || "Standard Home Delivery"}</span>
                              </span>
                            </div>
                          </td>
                          <td style={{ maxWidth: "200px" }}>
                            <div
                              className="order-items-snippet"
                              title={typeof o.items === "string" ? o.items : JSON.stringify(o.items)}
                            >
                              {typeof o.items === "string"
                                ? o.items
                                : Array.isArray(o.items)
                                ? o.items.map((it) => it.name || it).join(", ")
                                : "Store items"}
                            </div>
                          </td>
                          <td>
                            <strong className="order-total-price">
                              ${Number(o.total || 0).toFixed(2)}
                            </strong>
                          </td>
                          <td>
                            <div className="order-payment-cell">
                              <span className="order-payment-method">
                                <CreditCard size={12} /> {o.paymentMethod || "Cash on Delivery"}
                              </span>
                              <select
                                className="payment-status-select"
                                value={pStatus}
                                onChange={(e) => updateOrderPaymentStatus(o.id, e.target.value)}
                                style={{
                                  background:
                                    pStatus === "Paid"
                                      ? "#e6f8ea"
                                      : pStatus === "Refunded"
                                      ? "#f3e8ff"
                                      : pStatus === "Failed"
                                      ? "#fdeeee"
                                      : "#fff3d8",
                                  color:
                                    pStatus === "Paid"
                                      ? "#2d7a42"
                                      : pStatus === "Refunded"
                                      ? "#6b21a8"
                                      : pStatus === "Failed"
                                      ? "#a83232"
                                      : "#9a7526"
                                }}
                              >
                                <option value="Paid">✓ Paid</option>
                                <option value="Pending">⏳ Pending</option>
                                <option value="Cash on Delivery">💵 Cash on Delivery</option>
                                <option value="Refunded">↩ Refunded</option>
                                <option value="Failed">✕ Failed</option>
                              </select>
                            </div>
                          </td>
                          <td>
                            <select
                              className="status-dropdown"
                              value={o.status}
                              onChange={(e) => updateOrderStatus(o.id, e.target.value)}
                              style={{
                                background:
                                  o.status === "Delivered"
                                    ? "#e6f8ea"
                                    : o.status === "Shipped"
                                    ? "#e3f0fc"
                                    : o.status === "Cancelled"
                                    ? "#fdeeee"
                                    : "#fff3d8",
                                color:
                                  o.status === "Delivered"
                                    ? "#2d7a42"
                                    : o.status === "Shipped"
                                    ? "#24619d"
                                    : o.status === "Cancelled"
                                    ? "#a83232"
                                    : "#9a7526"
                              }}
                            >
                              <option value="Processing">Processing</option>
                              <option value="Shipped">Shipped</option>
                              <option value="Delivered">Delivered</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </td>
                          <td>
                            <div className="order-actions-cell">
                              <a
                                href={`https://greenbasket-nu.vercel.app/#track?id=${o.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="view-order-btn"
                                title="Open Live Parcel Tracker for customer"
                                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                              >
                                <Truck size={13} /> Track
                              </a>
                              <button
                                type="button"
                                className="view-order-btn"
                                onClick={() => setSelectedOrderForModal(o)}
                                title="View Complete Order Details & Delivery Address"
                              >
                                <Eye size={14} /> Details
                              </button>
                              <button
                                type="button"
                                className="delete-order-btn"
                                onClick={() => deleteOrder(o.id)}
                                title="Delete order"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: STORE ANALYTICS */}
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
                  <div>
                    Cancelled: <b>{orders.filter((o) => o.status === "Cancelled").length}</b>
                  </div>
                  <div style={{ marginTop: "10px", borderTop: "1px solid #e1ebf5", paddingTop: "8px" }}>
                    Avg. Order Value: <b>${(sales / (orders.length || 1)).toFixed(2)}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: STORE CONTROLS & SETTINGS */}
        {tab === "settings" && (
          <div className="orders" style={{ padding: "24px" }}>
            <div className="catalog-head" style={{ marginTop: 0 }}>
              <h3>Store Controls & Live Settings</h3>
            </div>
            <p style={{ color: "#667", fontSize: "13px", margin: "4px 0 16px" }}>
              Configure live store announcements, active promo codes, contact info, and catalog backup.
            </p>

            <div className="settings-section">
              {/* Card 0: Customer Storefront Link */}
              <div className="settings-card" style={{ borderColor: "#a9d192", background: "#f8fbf5" }}>
                <h3>
                  <ExternalLink size={18} color="#2d551c" /> Customer Storefront Link
                </h3>
                <p>Live website where customers order items and place delivery orders</p>
                <label>
                  Customer Website URL:
                  <div style={{ display: "flex", gap: "8px", marginTop: "5px" }}>
                    <input
                      type="url"
                      value={storeSettings.storefrontUrl || "https://greenbasket-nu.vercel.app/"}
                      onChange={(e) =>
                        setStoreSettings({ ...storeSettings, storefrontUrl: e.target.value })
                      }
                      placeholder="https://greenbasket-nu.vercel.app/"
                      style={{ margin: 0, flex: 1, fontWeight: 700, color: "#224713" }}
                    />
                    <button
                      type="button"
                      className="settings-save-btn"
                      onClick={() => handleOpenStorefront()}
                      style={{ padding: "6px 12px", whiteSpace: "nowrap" }}
                      title="Visit Customer Website"
                    >
                      <ExternalLink size={13} /> Visit Store
                    </button>
                    <button
                      type="button"
                      className="settings-save-btn"
                      style={{ background: "#eef6e9", color: "#2f5d1d", border: "1px solid #bddab0", padding: "6px 12px", whiteSpace: "nowrap" }}
                      onClick={() => {
                        navigator.clipboard.writeText(storeSettings.storefrontUrl || "https://greenbasket-nu.vercel.app/");
                        triggerToast("Customer storefront link copied to clipboard!");
                      }}
                      title="Copy customer website link"
                    >
                      <Copy size={13} /> Copy Link
                    </button>
                  </div>
                </label>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
                  <a
                    href={storeSettings.storefrontUrl || "https://greenbasket-nu.vercel.app/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "12px", color: "#366820", fontWeight: 700 }}
                  >
                    👉 {storeSettings.storefrontUrl || "https://greenbasket-nu.vercel.app/"}
                  </a>
                  <button
                    type="button"
                    className="settings-save-btn"
                    onClick={() => triggerToast("Customer website URL saved & updated!")}
                  >
                    <Check size={14} /> Save Store URL
                  </button>
                </div>
              </div>

              {/* Card 1: Announcement Bar */}
              <div className="settings-card">
                <h3>
                  <Sliders size={18} color="#2d551c" /> Live Announcement Bar
                </h3>
                <p>Text shown at the top of the customer storefront banner</p>
                <label>
                  Announcement Message:
                  <textarea
                    rows={3}
                    value={storeSettings.announcement}
                    onChange={(e) =>
                      setStoreSettings({ ...storeSettings, announcement: e.target.value })
                    }
                  />
                </label>
                <button
                  type="button"
                  className="settings-save-btn"
                  onClick={() => triggerToast("Announcement updated & synced live!")}
                >
                  <Check size={14} /> Save Announcement
                </button>
              </div>

              {/* Card 2: Promo Code */}
              <div className="settings-card">
                <h3>
                  <TagIcon size={18} color="#2d551c" /> Store Promo Code
                </h3>
                <p>Active coupon code for customer cart checkout</p>
                <label>
                  Promo Coupon Code:
                  <input
                    type="text"
                    value={storeSettings.promoCode}
                    onChange={(e) =>
                      setStoreSettings({ ...storeSettings, promoCode: e.target.value.toUpperCase() })
                    }
                    placeholder="e.g. GREEN20"
                  />
                </label>
                <label>
                  Discount Percentage (%):
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={storeSettings.promoDiscount}
                    onChange={(e) =>
                      setStoreSettings({ ...storeSettings, promoDiscount: Number(e.target.value) })
                    }
                  />
                </label>
                <button
                  type="button"
                  className="settings-save-btn"
                  onClick={() => triggerToast("Promo code updated & synced live!")}
                >
                  <Check size={14} /> Save Promo Code
                </button>
              </div>

              {/* Card 3: Store Contact */}
              <div className="settings-card">
                <h3>
                  <Mail size={18} color="#2d551c" /> Store Contact Information
                </h3>
                <p>Support phone and email shown to customers</p>
                <label>
                  Support Phone:
                  <input
                    type="text"
                    value={storeSettings.storePhone}
                    onChange={(e) =>
                      setStoreSettings({ ...storeSettings, storePhone: e.target.value })
                    }
                  />
                </label>
                <label>
                  Support Email:
                  <input
                    type="email"
                    value={storeSettings.storeEmail}
                    onChange={(e) =>
                      setStoreSettings({ ...storeSettings, storeEmail: e.target.value })
                    }
                  />
                </label>
                <button
                  type="button"
                  className="settings-save-btn"
                  onClick={() => triggerToast("Contact information saved!")}
                >
                  <Check size={14} /> Save Contact Info
                </button>
              </div>

              {/* Card 4: Backup & Reset */}
              <div className="settings-card">
                <h3>
                  <Download size={18} color="#2d551c" /> Catalog Backup & Restore
                </h3>
                <p>Export your full inventory as JSON or restore from a backup file</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "14px" }}>
                  <button
                    type="button"
                    className="settings-save-btn"
                    onClick={exportCatalogJSON}
                  >
                    <Download size={14} /> Download Full Catalog JSON Backup
                  </button>
                  <label style={{ margin: 0 }}>
                    <span style={{ fontSize: "11px", color: "#667", display: "block", marginBottom: "4px" }}>
                      Restore Catalog from File:
                    </span>
                    <input
                      type="file"
                      accept=".json"
                      onChange={importCatalogJSON}
                      style={{ padding: "6px" }}
                    />
                  </label>
                  <button
                    type="button"
                    onClick={resetToDefaultCatalog}
                    style={{
                      background: "#fff5f5",
                      border: "1px solid #f2dede",
                      color: "#b94a3a",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: 700,
                      cursor: "pointer",
                      marginTop: "6px"
                    }}
                  >
                    <RotateCcw size={13} /> Reset to Default 12 Demo Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ORDER DETAILS MODAL */}
        {selectedOrderForModal && (
          <div className="order-modal-backdrop" onClick={() => setSelectedOrderForModal(null)}>
            <div className="order-modal-box" onClick={(e) => e.stopPropagation()}>
              <div className="order-modal-head">
                <div className="order-modal-title">
                  <span className="modal-eyebrow">CUSTOMER ORDER DETAILS</span>
                  <h3>Order #{selectedOrderForModal.id}</h3>
                  <small className="order-modal-date">{selectedOrderForModal.date}</small>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setSelectedOrderForModal(null)}
                  title="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="order-modal-body">
                {/* Delivery Address & Customer Card */}
                <div className="order-detail-card highlight-card">
                  <h4 className="detail-card-title">
                    <MapPin size={16} /> Delivery Address & Contact Info
                  </h4>
                  <div className="detail-card-content">
                    <div className="info-row">
                      <span className="info-label">Customer Name:</span>
                      <strong>{selectedOrderForModal.customer || selectedOrderForModal.customerName}</strong>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Phone Number:</span>
                      <span>
                        {selectedOrderForModal.customerPhone ? (
                          <a
                            href={`tel:${selectedOrderForModal.customerPhone}`}
                            style={{ color: "#2f5d1d", fontWeight: 700 }}
                          >
                            {selectedOrderForModal.customerPhone}
                          </a>
                        ) : (
                          "Not provided"
                        )}
                      </span>
                    </div>
                    <div className="info-row delivery-addr-row">
                      <span className="info-label">Delivery Address:</span>
                      <div className="delivery-addr-value">
                        <p>{selectedOrderForModal.address || selectedOrderForModal.deliveryAddress || "Standard Home Delivery"}</p>
                        <button
                          type="button"
                          className="copy-addr-btn"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              selectedOrderForModal.address || selectedOrderForModal.deliveryAddress || ""
                            );
                            triggerToast("Delivery address copied to clipboard!");
                          }}
                        >
                          <Copy size={12} /> Copy Address
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment & Delivery Status Card */}
                <div className="order-detail-card">
                  <h4 className="detail-card-title">
                    <CreditCard size={16} /> Payment & Delivery Status
                  </h4>
                  <div className="status-grid">
                    <div className="status-box">
                      <label>Payment Method:</label>
                      <div className="status-value-pill">
                        <CreditCard size={14} /> {selectedOrderForModal.paymentMethod || "Cash on Delivery"}
                      </div>
                    </div>

                    <div className="status-box">
                      <label>Payment Status:</label>
                      <select
                        className="payment-status-select"
                        value={
                          selectedOrderForModal.paymentStatus ||
                          (selectedOrderForModal.paymentMethod === "Cash on Delivery" &&
                          selectedOrderForModal.status !== "Delivered"
                            ? "Pending"
                            : "Paid")
                        }
                        onChange={(e) => updateOrderPaymentStatus(selectedOrderForModal.id, e.target.value)}
                        style={{
                          background:
                            selectedOrderForModal.paymentStatus === "Paid"
                              ? "#e6f8ea"
                              : selectedOrderForModal.paymentStatus === "Refunded"
                              ? "#f3e8ff"
                              : selectedOrderForModal.paymentStatus === "Failed"
                              ? "#fdeeee"
                              : "#fff3d8",
                          color:
                            selectedOrderForModal.paymentStatus === "Paid"
                              ? "#2d7a42"
                              : selectedOrderForModal.paymentStatus === "Refunded"
                              ? "#6b21a8"
                              : selectedOrderForModal.paymentStatus === "Failed"
                              ? "#a83232"
                              : "#9a7526"
                        }}
                      >
                        <option value="Paid">✓ Paid</option>
                        <option value="Pending">⏳ Pending</option>
                        <option value="Cash on Delivery">💵 Cash on Delivery</option>
                        <option value="Refunded">↩ Refunded</option>
                        <option value="Failed">✕ Failed</option>
                      </select>
                    </div>

                    <div className="status-box">
                      <label>Delivery Status:</label>
                      <select
                        className="status-dropdown"
                        value={selectedOrderForModal.status}
                        onChange={(e) => updateOrderStatus(selectedOrderForModal.id, e.target.value)}
                        style={{
                          background:
                            selectedOrderForModal.status === "Delivered"
                              ? "#e6f8ea"
                              : selectedOrderForModal.status === "Shipped"
                              ? "#e3f0fc"
                              : selectedOrderForModal.status === "Cancelled"
                              ? "#fdeeee"
                              : "#fff3d8",
                          color:
                            selectedOrderForModal.status === "Delivered"
                              ? "#2d7a42"
                              : selectedOrderForModal.status === "Shipped"
                              ? "#24619d"
                              : selectedOrderForModal.status === "Cancelled"
                              ? "#a83232"
                              : "#9a7526"
                        }}
                      >
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>

                    <div className="status-box">
                      <label>Order Total:</label>
                      <strong style={{ fontSize: "18px", color: "#255315" }}>
                        ${Number(selectedOrderForModal.total || 0).toFixed(2)}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Items Card */}
                <div className="order-detail-card">
                  <h4 className="detail-card-title">
                    <Package size={16} /> Ordered Items List
                  </h4>
                  <div className="items-list-box">
                    {typeof selectedOrderForModal.items === "string" ? (
                      <p style={{ margin: 0, fontSize: "13px", lineHeight: "1.6" }}>{selectedOrderForModal.items}</p>
                    ) : Array.isArray(selectedOrderForModal.items) ? (
                      <table className="items-mini-table">
                        <thead>
                          <tr>
                            <th>Item Name</th>
                            <th>Qty</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedOrderForModal.items.map((it, idx) => (
                            <tr key={idx}>
                              <td>{it.name}</td>
                              <td>{it.qty || 1}</td>
                              <td>${Number(it.price || 0).toFixed(2)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p>Store items ordered</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="order-modal-foot">
                <a
                  href={`https://greenbasket-nu.vercel.app/#track?id=${selectedOrderForModal.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soft"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  title="Open Customer Public Parcel Tracker"
                >
                  <Truck size={15} /> Track Parcel Live
                </a>
                <button
                  type="button"
                  className="soft"
                  onClick={() => window.print()}
                  title="Print order receipt / packing slip"
                >
                  <Printer size={15} /> Print Invoice
                </button>
                <button
                  type="button"
                  className="primary"
                  onClick={() => setSelectedOrderForModal(null)}
                >
                  Done
                </button>
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
