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
  Truck,
  Navigation,
  Send,
  ArrowRight,
  ChevronRight,
  Calendar,
  BadgeCheck,
  Radio,
  Smartphone,
  Share2
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

export const TRACKING_STAGES = [
  { key: "placed", label: "Order Placed", labelBn: "অর্ডার গ্রহণ", step: 1, color: "#2563eb", bg: "#eff6ff" },
  { key: "preparing", label: "Packaging & Quality Check", labelBn: "প্যাকেজিং ও প্রস্তুতি", step: 2, color: "#d97706", bg: "#fffbeb" },
  { key: "picked_up", label: "Handed to Courier", labelBn: "কুরিয়ারে হস্তান্তর", step: 3, color: "#7c3aed", bg: "#f5f3ff" },
  { key: "on_the_way", label: "Out for Delivery", labelBn: "ডেলিভারিতে বের হয়েছে", step: 4, color: "#ea580c", bg: "#fff7ed" },
  { key: "delivered", label: "Delivered", labelBn: "ডেলিভারি সম্পন্ন", step: 5, color: "#16a34a", bg: "#f0fdf4" }
];

const initialOrders = [
  {
    id: "GB-1930",
    customer: "Sazib Ahmed",
    customerPhone: "+880 1712-345678",
    address: "House #24, Road #4, Dhanmondi, Dhaka",
    notes: "Please call before delivery",
    items: "Organic Avocados (1), Farm Milk (1)",
    total: 7.24,
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Pending",
    status: "Shipped",
    date: "Nov 08, 2026 05:14",
    trackingId: "GB-TRK-1930",
    trackingStage: "on_the_way",
    courierName: "GreenBasket Express",
    riderName: "Karim Mia",
    riderPhone: "+880 1798-765432",
    estimatedDelivery: "Today within 35 mins",
    currentCheckpoint: "Out for delivery near Dhanmondi Road #4",
    trackingTimeline: [
      { stage: "placed", title: "Order Confirmed", time: "Nov 08, 05:14 AM", note: "Order placed by customer via website" },
      { stage: "preparing", title: "Packaging & Quality Check", time: "Nov 08, 05:35 AM", note: "Fresh vegetables & milk quality checked and packed in eco-bag #B-19" },
      { stage: "picked_up", title: "Picked Up by Courier", time: "Nov 08, 06:05 AM", note: "Handed over to GreenBasket Express Rider Karim Mia" },
      { stage: "on_the_way", title: "Out for Delivery", time: "Nov 08, 06:20 AM", note: "Rider dispatched from Dhanmondi Sorting Hub. Heading to customer location." }
    ]
  },
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
    date: "Nov 07, 2026 14:30",
    trackingId: "GB-TRK-1001",
    trackingStage: "delivered",
    courierName: "GreenBasket Express",
    riderName: "Tanvir Hasan",
    riderPhone: "+880 1711-223344",
    estimatedDelivery: "Delivered",
    currentCheckpoint: "Delivered to recipient at Dhanmondi",
    trackingTimeline: [
      { stage: "placed", title: "Order Confirmed", time: "Nov 07, 02:30 PM", note: "Online order received" },
      { stage: "preparing", title: "Packed at Central Hub", time: "Nov 07, 02:50 PM", note: "Quality checked" },
      { stage: "picked_up", title: "Picked Up", time: "Nov 07, 03:15 PM", note: "Handed to Rider Tanvir" },
      { stage: "on_the_way", title: "Out for Delivery", time: "Nov 07, 03:30 PM", note: "Heading to Dhanmondi Road 7" },
      { stage: "delivered", title: "Delivered Successfully", time: "Nov 07, 04:10 PM", note: "Handed over to Sarah Ahmed" }
    ]
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
    date: "Nov 07, 2026 16:15",
    trackingId: "GB-TRK-1002",
    trackingStage: "preparing",
    courierName: "GreenBasket Express",
    riderName: "Pending Assignment",
    riderPhone: "+880 1714-703406",
    estimatedDelivery: "Today within 1 hour",
    currentCheckpoint: "Gulshan Sorting Hub - Packing fresh apples & carrots",
    trackingTimeline: [
      { stage: "placed", title: "Order Confirmed", time: "Nov 07, 04:15 PM", note: "Order verified" },
      { stage: "preparing", title: "Packaging in Progress", time: "Nov 07, 04:30 PM", note: "Sorting farm-fresh produce" }
    ]
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
    date: "Nov 06, 2026 11:20",
    trackingId: "GB-TRK-1003",
    trackingStage: "picked_up",
    courierName: "Steadfast Courier",
    riderName: "Sohanur Rahman",
    riderPhone: "+880 1822-445566",
    estimatedDelivery: "Today within 50 mins",
    currentCheckpoint: "Uttara Sector 4 Transit Hub",
    trackingTimeline: [
      { stage: "placed", title: "Order Confirmed", time: "Nov 06, 11:20 AM", note: "Payment confirmed via Card" },
      { stage: "preparing", title: "Packed at Bakery & Farm Hub", time: "Nov 06, 11:45 AM", note: "Sealed fresh" },
      { stage: "picked_up", title: "Handed to Steadfast Courier", time: "Nov 06, 12:10 PM", note: "En route to Sector 4" }
    ]
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
    date: "Nov 05, 2026 18:45",
    trackingId: "GB-TRK-1004",
    trackingStage: "delivered",
    courierName: "Pathao Express",
    riderName: "Kamrul Islam",
    riderPhone: "+880 1933-778899",
    estimatedDelivery: "Delivered",
    currentCheckpoint: "Delivered to Mirpur 10",
    trackingTimeline: [
      { stage: "placed", title: "Order Confirmed", time: "Nov 05, 06:45 PM", note: "Order received" },
      { stage: "preparing", title: "Packed", time: "Nov 05, 07:05 PM", note: "Quality verified" },
      { stage: "picked_up", title: "Picked Up by Pathao Rider", time: "Nov 05, 07:25 PM", note: "Tracking activated" },
      { stage: "on_the_way", title: "Out for Delivery", time: "Nov 05, 07:45 PM", note: "Arrived at Mirpur 10" },
      { stage: "delivered", title: "Delivered Successfully", time: "Nov 05, 08:15 PM", note: "Payment collected & completed" }
    ]
  }
];

export const initialEmployees = [
  {
    id: "EMP-101",
    name: "Karim Mia",
    role: "Senior Delivery Rider",
    department: "Logistics & Delivery",
    phone: "+880 1798-765432",
    email: "karim.rider@greenbasket.com",
    salary: 380,
    status: "On Delivery",
    activeDeliveries: 2,
    completedDeliveries: 148,
    rating: 4.95,
    joinDate: "Jan 12, 2026",
    vehicleType: "Eco Electric Bike #12",
    nid: "1994269123456"
  },
  {
    id: "EMP-102",
    name: "Rahim Ahmed",
    role: "Warehouse Operations Lead",
    department: "Warehouse & Inventory",
    phone: "+880 1812-987654",
    email: "rahim.wh@greenbasket.com",
    salary: 450,
    status: "Active",
    activeDeliveries: 0,
    completedDeliveries: 0,
    rating: 4.90,
    joinDate: "Feb 01, 2026",
    vehicleType: "N/A",
    nid: "1992269654321"
  },
  {
    id: "EMP-103",
    name: "Sohanur Rahman",
    role: "Express Delivery Agent",
    department: "Logistics & Delivery",
    phone: "+880 1822-445566",
    email: "sohan.delivery@greenbasket.com",
    salary: 360,
    status: "Active",
    activeDeliveries: 1,
    completedDeliveries: 112,
    rating: 4.88,
    joinDate: "Mar 10, 2026",
    vehicleType: "GreenBasket Cargo Van #02",
    nid: "1996269789012"
  },
  {
    id: "EMP-104",
    name: "Tanvir Hasan",
    role: "City Express Rider",
    department: "Logistics & Delivery",
    phone: "+880 1711-223344",
    email: "tanvir.rider@greenbasket.com",
    salary: 360,
    status: "Active",
    activeDeliveries: 0,
    completedDeliveries: 230,
    rating: 5.0,
    joinDate: "Jan 20, 2026",
    vehicleType: "Honda 125cc Bike #05",
    nid: "1995269345678"
  },
  {
    id: "EMP-105",
    name: "Farhana Akter",
    role: "Quality Inspection & Packaging",
    department: "Packaging & Quality",
    phone: "+880 1912-334455",
    email: "farhana.qc@greenbasket.com",
    salary: 400,
    status: "Active",
    activeDeliveries: 0,
    completedDeliveries: 0,
    rating: 4.92,
    joinDate: "Feb 15, 2026",
    vehicleType: "N/A",
    nid: "1997269567890"
  },
  {
    id: "EMP-106",
    name: "Sazib Khan",
    role: "Operations & Store Manager",
    department: "Management",
    phone: "+880 1714-703406",
    email: "sazib.manager@greenbasket.com",
    salary: 650,
    status: "Active",
    activeDeliveries: 0,
    completedDeliveries: 0,
    rating: 5.0,
    joinDate: "Jan 01, 2026",
    vehicleType: "Company Vehicle",
    nid: "1991269112233"
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

export const ADMIN_ROLES = [
  {
    role: "Chief Administrator",
    badgeClass: "admin-role-chief",
    description: "Unrestricted master access: Full privileges over products, orders, tracking, staff, and admin security controls",
    permissions: ["All Modules", "Admin Security", "Financial Controls", "System Toggles"]
  },
  {
    role: "Super Admin",
    badgeClass: "admin-role-chief",
    description: "Executive control: Access to catalog, customer orders, live tracking, staff directory, and store settings",
    permissions: ["Catalog", "Orders", "Tracking", "Staff", "Settings", "Analytics"]
  },
  {
    role: "Store Operations Manager",
    badgeClass: "admin-role-manager",
    description: "Daily operations: Manage products, process orders, oversee delivery dispatch, and monitor analytics",
    permissions: ["Catalog", "Orders", "Tracking", "Staff Roster", "Analytics"]
  },
  {
    role: "Delivery & Order Dispatcher",
    badgeClass: "admin-role-dispatcher",
    description: "Fulfillment hub: Order statuses, assign delivery riders, coordinate shipments, and update checkpoints",
    permissions: ["Orders", "Delivery Tracking", "Rider Dispatch"]
  },
  {
    role: "Inventory & Catalog Specialist",
    badgeClass: "admin-role-specialist",
    description: "Stock & catalog management: Add, edit, remove products, set regular & promo pricing, and adjust stock",
    permissions: ["Product Catalog", "Stock Inventory", "Pricing"]
  },
  {
    role: "Customer Support Agent",
    badgeClass: "admin-role-support",
    description: "Customer service: View customer orders, lookup delivery addresses, track packages, and print invoices",
    permissions: ["Orders (Read)", "Tracking Lookup", "Invoice Print"]
  }
];

const DEFAULT_ADMIN_USERS = [
  {
    id: "ADM-001",
    name: "Store Admin",
    email: "admin@greenbasket.com",
    password: "admin123",
    role: "Chief Administrator",
    status: "Active",
    createdAt: "Nov 01, 2026",
    lastLogin: "Active Now",
    permissions: ["All Modules", "Admin Security", "Financial Controls", "System Toggles"]
  },
  {
    id: "ADM-002",
    name: "Sazib Khan",
    email: "sazib@greenbasket.com",
    password: "admin123",
    role: "Super Admin",
    status: "Active",
    createdAt: "Nov 05, 2026",
    lastLogin: "Today",
    permissions: ["Catalog", "Orders", "Tracking", "Staff", "Settings", "Analytics"]
  },
  {
    id: "ADM-003",
    name: "Operations Lead",
    email: "manager@greenbasket.com",
    password: "admin123",
    role: "Store Operations Manager",
    status: "Active",
    createdAt: "Nov 07, 2026",
    lastLogin: "Yesterday",
    permissions: ["Catalog", "Orders", "Tracking", "Staff Roster", "Analytics"]
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

const syncToGist = async (productsData, settingsData, ordersData, employeesData, adminUsersData) => {
  try {
    const token = GIST_TOKEN_PARTS.join("");
    const nowIso = new Date().toISOString();
    const payload = {
      version: Date.now(),
      updatedAt: nowIso,
      products: productsData,
      settings: settingsData,
      orders: ordersData || [],
      employees: employeesData || [],
      adminUsers: adminUsersData || []
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

// Helper to guarantee rich tracking and contact details on every order
const normalizeOrder = (raw) => {
  if (!raw) return null;
  const rawId = raw.id || "GB-" + Math.floor(1000 + Math.random() * 9000);
  const numericId = String(rawId).replace(/[^0-9]/g, "") || "1000";
  const custName = typeof raw.customer === "string" ? raw.customer : (raw.customerName || raw.customer?.name || "Customer");
  let phone = raw.customerPhone || raw.phone || (raw.customer && typeof raw.customer === "object" ? raw.customer.phone : "") || "";
  let addr = raw.address || raw.deliveryAddress || (raw.customer && typeof raw.customer === "object" ? raw.customer.address : "") || "";

  if (rawId === "GB-1930" || custName === "Sazib Ahmed") {
    if (!phone || phone === "Not provided" || phone === "N/A") phone = "+880 1712-345678";
    if (!addr || addr === "Standard Home Delivery" || addr === "Standard Delivery") addr = "House #24, Road #4, Dhanmondi, Dhaka";
  }

  let stage = raw.trackingStage;
  if (!stage) {
    if (raw.status === "Delivered") stage = "delivered";
    else if (raw.status === "Shipped") stage = "on_the_way";
    else if (raw.status === "Processing") stage = "preparing";
    else stage = "placed";
  }

  const defaultTimelines = {
    placed: [{ stage: "placed", title: "Order Confirmed", time: raw.date || "Just now", note: "Order placed by customer" }],
    preparing: [
      { stage: "placed", title: "Order Confirmed", time: raw.date || "Just now", note: "Order placed by customer" },
      { stage: "preparing", title: "Packaging & Quality Check", time: "In Progress", note: "Items being packed at warehouse" }
    ],
    picked_up: [
      { stage: "placed", title: "Order Confirmed", time: raw.date || "Just now", note: "Order placed by customer" },
      { stage: "preparing", title: "Packaging Completed", time: "Earlier", note: "Packed & sealed" },
      { stage: "picked_up", title: "Handed to Courier", time: "Just now", note: "Package handed to delivery partner" }
    ],
    on_the_way: [
      { stage: "placed", title: "Order Confirmed", time: raw.date || "Just now", note: "Order placed by customer" },
      { stage: "preparing", title: "Packaging Completed", time: "Earlier", note: "Packed & sealed" },
      { stage: "picked_up", title: "Handed to Courier", time: "Earlier", note: "Handed to rider" },
      { stage: "on_the_way", title: "Out for Delivery", time: "Active", note: "Rider is heading to customer location" }
    ],
    delivered: [
      { stage: "placed", title: "Order Confirmed", time: raw.date || "Just now", note: "Order placed by customer" },
      { stage: "preparing", title: "Packaging Completed", time: "Earlier", note: "Packed & sealed" },
      { stage: "picked_up", title: "Handed to Courier", time: "Earlier", note: "Handed to rider" },
      { stage: "on_the_way", title: "Out for Delivery", time: "Earlier", note: "Out with rider" },
      { stage: "delivered", title: "Delivered Successfully", time: raw.date || "Completed", note: "Handed over to customer" }
    ]
  };

  return {
    ...raw,
    id: rawId,
    customer: custName,
    customerName: custName,
    customerPhone: phone,
    phone: phone,
    address: addr || "Standard Home Delivery",
    deliveryAddress: addr || "Standard Home Delivery",
    notes: raw.notes || (raw.customer && typeof raw.customer === "object" ? raw.customer.notes : "") || "",
    paymentMethod: raw.paymentMethod || "Cash on Delivery",
    paymentStatus: raw.paymentStatus || (raw.paymentMethod === "Cash on Delivery" ? "Pending" : "Paid"),
    status: raw.status || (stage === "delivered" ? "Delivered" : (stage === "on_the_way" ? "Shipped" : "Processing")),
    date: raw.date || new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
    total: Number(raw.total) || 0,
    items: raw.items || "Fresh Grocery Pack",

    // Tracking & Logistics fields
    trackingId: raw.trackingId || `GB-TRK-${numericId}`,
    trackingStage: stage,
    courierName: raw.courierName || "GreenBasket Express",
    riderName: raw.riderName || (stage === "placed" ? "Pending Assignment" : "Karim Mia"),
    riderPhone: raw.riderPhone || "+880 1798-765432",
    estimatedDelivery: raw.estimatedDelivery || (stage === "delivered" ? "Delivered" : "Within 45 mins"),
    currentCheckpoint: raw.currentCheckpoint || (stage === "delivered" ? "Delivered to destination" : (stage === "on_the_way" ? "Out for delivery near recipient address" : "Processing at Central Warehouse")),
    trackingTimeline: Array.isArray(raw.trackingTimeline) && raw.trackingTimeline.length > 0 ? raw.trackingTimeline : (defaultTimelines[stage] || defaultTimelines.placed)
  };
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
          const normalized = normalizeOrder(e.data.order);
          const current = localStorage.getItem("greenbasket_orders");
          const list = current ? JSON.parse(current).map(normalizeOrder) : orders || [];
          const updated = [normalized, ...list.filter((item) => item.id !== normalized.id)];
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

  // Orders State with Tracking Normalization
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem("greenbasket_orders");
      const list = saved ? JSON.parse(saved) : initialOrders;
      return list.map(normalizeOrder);
    } catch {
      return initialOrders.map(normalizeOrder);
    }
  });

  // Tracking Tab & Logistics States
  const [trackingFilter, setTrackingFilter] = useState("All");
  const [trackingSearch, setTrackingSearch] = useState("");
  const [trackingModalOrder, setTrackingModalOrder] = useState(null);
  const [isEditingTracking, setIsEditingTracking] = useState(false);
  const [trackingFormData, setTrackingFormData] = useState({
    trackingId: "",
    trackingStage: "placed",
    courierName: "GreenBasket Express",
    riderName: "",
    riderPhone: "",
    estimatedDelivery: "",
    currentCheckpoint: "",
    customNote: ""
  });
  const [shareNoticeOrder, setShareNoticeOrder] = useState(null);
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [editCustomerName, setEditCustomerName] = useState("");
  const [editCustomerPhone, setEditCustomerPhone] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editNotes, setEditNotes] = useState("");

  // Employee Control System States
  const [employees, setEmployees] = useState(() => {
    try {
      const saved = localStorage.getItem("greenbasket_employees");
      return saved ? JSON.parse(saved) : initialEmployees;
    } catch {
      return initialEmployees;
    }
  });
  const [employeeSearch, setEmployeeSearch] = useState("");
  const [employeeDeptFilter, setEmployeeDeptFilter] = useState("All");
  const [employeeStatusFilter, setEmployeeStatusFilter] = useState("All");
  const [employeeModalOpen, setEmployeeModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [employeeForm, setEmployeeForm] = useState({
    name: "",
    role: "Delivery Rider",
    department: "Logistics & Delivery",
    phone: "",
    email: "",
    salary: 380,
    status: "Active",
    vehicleType: "",
    nid: ""
  });

  // Admin Control Management States
  const [adminSearch, setAdminSearch] = useState("");
  const [adminRoleFilter, setAdminRoleFilter] = useState("All");
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [adminForm, setAdminForm] = useState({
    id: "",
    name: "",
    email: "",
    role: "Store Operations Manager",
    password: "",
    confirmPassword: "",
    status: "Active"
  });

  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [profileForm, setProfileForm] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: ""
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

  // Fetch latest cloud catalog & orders on initial mount and background cloud polling
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
          if (Array.isArray(parsed.orders) && parsed.orders.length > 0) {
            setOrders((prev) => {
              const cloudMap = new Map();
              parsed.orders.forEach((o) => {
                const norm = normalizeOrder(o);
                if (norm) cloudMap.set(norm.id, norm);
              });
              prev.forEach((o) => {
                if (!cloudMap.has(o.id)) cloudMap.set(o.id, o);
              });
              const merged = Array.from(cloudMap.values());
              localStorage.setItem("greenbasket_orders", JSON.stringify(merged));
              return merged;
            });
          }
          if (Array.isArray(parsed.employees) && parsed.employees.length > 0) {
            setEmployees(parsed.employees);
            localStorage.setItem("greenbasket_employees", JSON.stringify(parsed.employees));
          }
          if (Array.isArray(parsed.adminUsers) && parsed.adminUsers.length > 0) {
            setRegisteredUsers(parsed.adminUsers);
            localStorage.setItem("greenbasket_admin_users", JSON.stringify(parsed.adminUsers));
          }
        }
      } catch (e) {}
    };
    fetchLatest();
    const pollTimer = setInterval(fetchLatest, 3500);
    return () => clearInterval(pollTimer);
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

  // Persist employees to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("greenbasket_employees", JSON.stringify(employees));
    } catch (e) {}
  }, [employees]);

  // Persist admin users to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("greenbasket_admin_users", JSON.stringify(registeredUsers));
    } catch (e) {}
  }, [registeredUsers]);

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
      syncToGist(products, storeSettings, orders, employees, registeredUsers);
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
          const normalized = normalizeOrder(e.data.order);
          setOrders((prev) => [normalized, ...prev.filter((o) => o.id !== normalized.id)]);
          triggerToast(`New Order #${normalized.id} received from ${normalized.customer}!`);
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
        const normalized = normalizeOrder(e.data.order);
        setOrders((prev) => [normalized, ...prev.filter((o) => o.id !== normalized.id)]);
        triggerToast(`New Order #${normalized.id} received from ${normalized.customer}!`);
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

  // --- DELIVERY TRACKING & RIDER HANDLERS ---
  const advanceTrackingStage = (orderId) => {
    const stageKeys = ["placed", "preparing", "picked_up", "on_the_way", "delivered"];
    let nextStageObj = null;

    setOrders((prev) => {
      const next = prev.map((o) => {
        if (o.id !== orderId) return o;
        const currentIdx = stageKeys.indexOf(o.trackingStage || "placed");
        if (currentIdx >= stageKeys.length - 1) return o;
        const nextStageKey = stageKeys[currentIdx + 1];
        nextStageObj = TRACKING_STAGES.find((s) => s.key === nextStageKey);
        const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        let newStatus = o.status;
        let newPaymentStatus = o.paymentStatus;
        let newCheckpoint = o.currentCheckpoint;

        if (nextStageKey === "preparing") {
          newStatus = "Processing";
          newCheckpoint = "Packaging & Freshness inspection in progress at Hub";
        } else if (nextStageKey === "picked_up") {
          newStatus = "Processing";
          newCheckpoint = `Handed over to ${o.courierName || 'Courier Rider'} for transit`;
        } else if (nextStageKey === "on_the_way") {
          newStatus = "Shipped";
          newCheckpoint = `Rider ${o.riderName || ''} is out for delivery to ${o.address || 'destination'}`;
        } else if (nextStageKey === "delivered") {
          newStatus = "Delivered";
          newPaymentStatus = "Paid";
          newCheckpoint = "Order successfully delivered to customer";
        }

        const newEvent = {
          stage: nextStageKey,
          title: nextStageObj?.label || nextStageKey,
          time: timestamp,
          note: `Milestone updated to ${nextStageObj?.label || nextStageKey} by Store Admin`
        };

        const updatedOrder = {
          ...o,
          trackingStage: nextStageKey,
          status: newStatus,
          paymentStatus: newPaymentStatus,
          currentCheckpoint: newCheckpoint,
          trackingTimeline: [...(o.trackingTimeline || []), newEvent]
        };

        if (selectedOrderForModal && selectedOrderForModal.id === orderId) {
          setSelectedOrderForModal(updatedOrder);
        }
        if (trackingModalOrder && trackingModalOrder.id === orderId) {
          setTrackingModalOrder(updatedOrder);
        }

        return updatedOrder;
      });

      localStorage.setItem("greenbasket_orders", JSON.stringify(next));
      syncToGist(products, storeSettings, next);
      return next;
    });

    if (nextStageObj) {
      triggerToast(`Order #${orderId} tracking milestone set to '${nextStageObj.label}'!`);
    }
  };

  const updateTrackingStage = (orderId, newStage, customNote = "") => {
    const stageObj = TRACKING_STAGES.find((s) => s.key === newStage);
    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const noteText = customNote.trim() || `Milestone set to ${stageObj?.label || newStage}`;

    setOrders((prev) => {
      const next = prev.map((o) => {
        if (o.id !== orderId) return o;
        let newStatus = o.status;
        let newPaymentStatus = o.paymentStatus;
        if (newStage === "delivered") {
          newStatus = "Delivered";
          newPaymentStatus = "Paid";
        } else if (newStage === "on_the_way") {
          newStatus = "Shipped";
        } else if (newStage === "cancelled") {
          newStatus = "Cancelled";
        } else {
          newStatus = "Processing";
        }

        const newEvent = {
          stage: newStage,
          title: stageObj?.label || newStage,
          time: timestamp,
          note: noteText
        };

        const updatedOrder = {
          ...o,
          trackingStage: newStage,
          status: newStatus,
          paymentStatus: newPaymentStatus,
          trackingTimeline: [...(o.trackingTimeline || []), newEvent]
        };

        if (selectedOrderForModal && selectedOrderForModal.id === orderId) {
          setSelectedOrderForModal(updatedOrder);
        }
        if (trackingModalOrder && trackingModalOrder.id === orderId) {
          setTrackingModalOrder(updatedOrder);
        }

        return updatedOrder;
      });

      localStorage.setItem("greenbasket_orders", JSON.stringify(next));
      syncToGist(products, storeSettings, next);
      return next;
    });

    triggerToast(`Order #${orderId} milestone set to '${stageObj?.label || newStage}'`);
  };

  const openTrackingModal = (order) => {
    const populated = normalizeOrder(order);
    setTrackingModalOrder(populated);
    setTrackingFormData({
      trackingId: populated.trackingId || `GB-TRK-${populated.id.replace(/[^0-9]/g, '')}`,
      trackingStage: populated.trackingStage || 'placed',
      courierName: populated.courierName || 'GreenBasket Express',
      riderName: populated.riderName || 'Karim Mia',
      riderPhone: populated.riderPhone || '+880 1798-765432',
      estimatedDelivery: populated.estimatedDelivery || 'Within 45 mins',
      currentCheckpoint: populated.currentCheckpoint || 'Processing at Central Warehouse',
      customNote: ''
    });
    setIsEditingTracking(false);
  };

  const handleSaveTrackingModal = (e) => {
    if (e) e.preventDefault();
    if (!trackingModalOrder) return;

    const orderId = trackingModalOrder.id;
    const stageObj = TRACKING_STAGES.find((s) => s.key === trackingFormData.trackingStage);

    setOrders((prev) => {
      const next = prev.map((o) => {
        if (o.id !== orderId) return o;
        const timeline = [...(o.trackingTimeline || [])];
        if (trackingFormData.customNote && trackingFormData.customNote.trim()) {
          timeline.push({
            stage: trackingFormData.trackingStage,
            title: trackingFormData.currentCheckpoint || stageObj?.label || "Checkpoint Update",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            note: trackingFormData.customNote.trim()
          });
        }

        let newStatus = o.status;
        let newPaymentStatus = o.paymentStatus;
        if (trackingFormData.trackingStage === "delivered") {
          newStatus = "Delivered";
          newPaymentStatus = "Paid";
        } else if (trackingFormData.trackingStage === "on_the_way") {
          newStatus = "Shipped";
        } else if (trackingFormData.trackingStage === "cancelled") {
          newStatus = "Cancelled";
        }

        const updatedOrder = {
          ...o,
          trackingId: trackingFormData.trackingId,
          trackingStage: trackingFormData.trackingStage,
          courierName: trackingFormData.courierName,
          riderName: trackingFormData.riderName,
          riderPhone: trackingFormData.riderPhone,
          estimatedDelivery: trackingFormData.estimatedDelivery,
          currentCheckpoint: trackingFormData.currentCheckpoint,
          status: newStatus,
          paymentStatus: newPaymentStatus,
          trackingTimeline: timeline
        };

        if (selectedOrderForModal && selectedOrderForModal.id === orderId) {
          setSelectedOrderForModal(updatedOrder);
        }

        return updatedOrder;
      });

      localStorage.setItem("greenbasket_orders", JSON.stringify(next));
      syncToGist(products, storeSettings, next);
      return next;
    });

    setTrackingModalOrder(null);
    triggerToast(`Order #${orderId} tracking details updated successfully!`);
  };

  const openShareNoticeModal = (order) => {
    setShareNoticeOrder(normalizeOrder(order));
  };

  const openOrderModal = (order) => {
    const populated = normalizeOrder(order);
    setSelectedOrderForModal(populated);
    setEditCustomerName(populated.customer);
    setEditCustomerPhone(populated.customerPhone || "");
    setEditAddress(populated.address || "");
    setEditNotes(populated.notes || "");
    setIsEditingContact(false);
  };

  const handleSaveOrderContact = (orderId) => {
    const updatedFields = {
      customer: editCustomerName.trim() || "Customer",
      customerName: editCustomerName.trim() || "Customer",
      customerPhone: editCustomerPhone.trim(),
      phone: editCustomerPhone.trim(),
      address: editAddress.trim() || "Standard Home Delivery",
      deliveryAddress: editAddress.trim() || "Standard Home Delivery",
      notes: editNotes.trim()
    };
    setOrders((old) => {
      const next = old.map((o) => (o.id === orderId ? { ...o, ...updatedFields } : o));
      localStorage.setItem("greenbasket_orders", JSON.stringify(next));
      syncToGist(products, storeSettings, next, employees);
      return next;
    });
    if (selectedOrderForModal && selectedOrderForModal.id === orderId) {
      setSelectedOrderForModal((prev) => ({ ...prev, ...updatedFields }));
    }
    setIsEditingContact(false);
    triggerToast(`Order #${orderId} customer contact & delivery address updated!`);
  };

  // --- EMPLOYEE CONTROL SYSTEM HANDLERS ---
  const handleOpenAddEmployee = () => {
    const nextId = "EMP-" + (100 + employees.length + 1);
    setEditingEmployee(null);
    setEmployeeForm({
      id: nextId,
      name: "",
      role: "Delivery Rider",
      department: "Logistics & Delivery",
      phone: "",
      email: "",
      salary: 380,
      status: "Active",
      vehicleType: "Eco Electric Bike",
      nid: ""
    });
    setEmployeeModalOpen(true);
  };

  const handleOpenEditEmployee = (emp) => {
    setEditingEmployee(emp);
    setEmployeeForm({
      id: emp.id,
      name: emp.name || "",
      role: emp.role || "Delivery Rider",
      department: emp.department || "Logistics & Delivery",
      phone: emp.phone || "",
      email: emp.email || "",
      salary: emp.salary || 350,
      status: emp.status || "Active",
      vehicleType: emp.vehicleType || "",
      nid: emp.nid || ""
    });
    setEmployeeModalOpen(true);
  };

  const handleSaveEmployee = (e) => {
    e.preventDefault();
    if (!employeeForm.name.trim()) {
      triggerToast("Please enter employee name");
      return;
    }

    if (editingEmployee) {
      // Update existing
      const updatedList = employees.map((emp) =>
        emp.id === editingEmployee.id
          ? {
              ...emp,
              ...employeeForm,
              salary: Number(employeeForm.salary) || 0
            }
          : emp
      );
      setEmployees(updatedList);
      localStorage.setItem("greenbasket_employees", JSON.stringify(updatedList));
      syncToGist(products, storeSettings, orders, updatedList);
      triggerToast(`Employee '${employeeForm.name}' updated successfully!`);
    } else {
      // Create new
      const newEmp = {
        ...employeeForm,
        id: employeeForm.id || ("EMP-" + (100 + employees.length + 1)),
        salary: Number(employeeForm.salary) || 0,
        activeDeliveries: 0,
        completedDeliveries: 0,
        rating: 5.0,
        joinDate: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
      };
      const updatedList = [newEmp, ...employees];
      setEmployees(updatedList);
      localStorage.setItem("greenbasket_employees", JSON.stringify(updatedList));
      syncToGist(products, storeSettings, orders, updatedList);
      triggerToast(`New employee '${newEmp.name}' added to roster!`);
    }

    setEmployeeModalOpen(false);
  };

  const handleDeleteEmployee = (empId) => {
    const emp = employees.find((e) => e.id === empId);
    if (window.confirm(`Are you sure you want to remove ${emp ? emp.name : 'this employee'} from system?`)) {
      const updatedList = employees.filter((e) => e.id !== empId);
      setEmployees(updatedList);
      localStorage.setItem("greenbasket_employees", JSON.stringify(updatedList));
      syncToGist(products, storeSettings, orders, updatedList);
      triggerToast("Employee removed from staff records");
    }
  };

  const handleQuickStatusToggle = (empId, newStatus) => {
    const updatedList = employees.map((e) =>
      e.id === empId ? { ...e, status: newStatus } : e
    );
    setEmployees(updatedList);
    localStorage.setItem("greenbasket_employees", JSON.stringify(updatedList));
    syncToGist(products, storeSettings, orders, updatedList, registeredUsers);
    triggerToast(`Duty status set to '${newStatus}'`);
  };

  // --- ADMIN CONTROL MANAGEMENT HANDLERS ---
  const handleOpenAddAdmin = () => {
    const nextId = "ADM-" + String(registeredUsers.length + 1).padStart(3, "0");
    setEditingAdmin(null);
    setAdminForm({
      id: nextId,
      name: "",
      email: "",
      role: "Store Operations Manager",
      password: "",
      confirmPassword: "",
      status: "Active"
    });
    setAdminModalOpen(true);
  };

  const handleOpenEditAdmin = (adminUser) => {
    setEditingAdmin(adminUser);
    setAdminForm({
      id: adminUser.id || ("ADM-" + Math.floor(100 + Math.random() * 900)),
      name: adminUser.name || "",
      email: adminUser.email || "",
      role: adminUser.role || "Store Operations Manager",
      password: "",
      confirmPassword: "",
      status: adminUser.status || "Active"
    });
    setAdminModalOpen(true);
  };

  const handleSaveAdmin = (e) => {
    e.preventDefault();
    const cleanEmail = adminForm.email.trim().toLowerCase();
    const cleanName = adminForm.name.trim();

    if (!cleanName) {
      triggerToast("Please enter an admin name");
      return;
    }
    if (!cleanEmail || !cleanEmail.includes("@")) {
      triggerToast("Please enter a valid email address");
      return;
    }

    if (editingAdmin) {
      // Editing existing admin
      const emailConflict = registeredUsers.find(
        (u) => u.email.toLowerCase() === cleanEmail && u.email.toLowerCase() !== editingAdmin.email.toLowerCase()
      );
      if (emailConflict) {
        triggerToast("Another admin already uses this email!");
        return;
      }

      if (adminForm.password && adminForm.password.length < 6) {
        triggerToast("New password must be at least 6 characters");
        return;
      }
      if (adminForm.password && adminForm.password !== adminForm.confirmPassword) {
        triggerToast("Passwords do not match!");
        return;
      }

      const roleObj = ADMIN_ROLES.find(r => r.role === adminForm.role);
      const perms = roleObj ? roleObj.permissions : ["Catalog", "Orders"];

      const updated = registeredUsers.map((u) => {
        if (u.email.toLowerCase() === editingAdmin.email.toLowerCase()) {
          return {
            ...u,
            name: cleanName,
            email: cleanEmail,
            role: adminForm.role,
            status: adminForm.status,
            permissions: perms,
            password: adminForm.password ? adminForm.password : u.password
          };
        }
        return u;
      });

      setRegisteredUsers(updated);
      localStorage.setItem("greenbasket_admin_users", JSON.stringify(updated));
      syncToGist(products, storeSettings, orders, employees, updated);

      // If updating currently logged in user, refresh session
      if (currentUser && currentUser.email.toLowerCase() === editingAdmin.email.toLowerCase()) {
        const refreshedUser = {
          ...currentUser,
          name: cleanName,
          email: cleanEmail,
          role: adminForm.role
        };
        setCurrentUser(refreshedUser);
        localStorage.setItem("greenbasket_auth", JSON.stringify(refreshedUser));
      }

      setAdminModalOpen(false);
      triggerToast(`Admin '${cleanName}' updated successfully!`);
    } else {
      // Adding new admin
      const existing = registeredUsers.find((u) => u.email.toLowerCase() === cleanEmail);
      if (existing) {
        triggerToast("An admin with this email already exists!");
        return;
      }

      if (!adminForm.password || adminForm.password.length < 6) {
        triggerToast("Password must be at least 6 characters");
        return;
      }
      if (adminForm.password !== adminForm.confirmPassword) {
        triggerToast("Passwords do not match!");
        return;
      }

      const roleObj = ADMIN_ROLES.find(r => r.role === adminForm.role);
      const perms = roleObj ? roleObj.permissions : ["Catalog", "Orders"];

      const newAdmin = {
        id: adminForm.id || ("ADM-" + String(registeredUsers.length + 1).padStart(3, "0")),
        name: cleanName,
        email: cleanEmail,
        password: adminForm.password,
        role: adminForm.role,
        status: adminForm.status || "Active",
        createdAt: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
        lastLogin: "Never",
        permissions: perms
      };

      const updated = [...registeredUsers, newAdmin];
      setRegisteredUsers(updated);
      localStorage.setItem("greenbasket_admin_users", JSON.stringify(updated));
      syncToGist(products, storeSettings, orders, employees, updated);

      setAdminModalOpen(false);
      triggerToast(`Admin '${cleanName}' enrolled into system!`);
    }
  };

  const handleDeleteAdmin = (adminUser) => {
    if (currentUser && adminUser.email.toLowerCase() === currentUser.email.toLowerCase()) {
      alert("Security Constraint: You cannot delete your own logged-in admin account!");
      return;
    }
    if (adminUser.email.toLowerCase() === "admin@greenbasket.com") {
      alert("Security Constraint: The primary Chief Administrator account cannot be deleted.");
      return;
    }
    if (window.confirm(`Are you sure you want to revoke admin access for '${adminUser.name}' (${adminUser.email})?`)) {
      const updated = registeredUsers.filter(u => u.email.toLowerCase() !== adminUser.email.toLowerCase());
      setRegisteredUsers(updated);
      localStorage.setItem("greenbasket_admin_users", JSON.stringify(updated));
      syncToGist(products, storeSettings, orders, employees, updated);
      triggerToast(`Admin account '${adminUser.name}' removed.`);
    }
  };

  const handleToggleAdminStatus = (adminUser) => {
    if (currentUser && adminUser.email.toLowerCase() === currentUser.email.toLowerCase()) {
      triggerToast("Cannot suspend your own active admin session");
      return;
    }
    const nextStatus = adminUser.status === "Active" ? "Suspended" : "Active";
    const updated = registeredUsers.map(u =>
      u.email.toLowerCase() === adminUser.email.toLowerCase() ? { ...u, status: nextStatus } : u
    );
    setRegisteredUsers(updated);
    localStorage.setItem("greenbasket_admin_users", JSON.stringify(updated));
    syncToGist(products, storeSettings, orders, employees, updated);
    triggerToast(`Admin ${adminUser.name} status: ${nextStatus}`);
  };

  const handleOpenProfileModal = () => {
    if (!currentUser) return;
    setProfileForm({
      name: currentUser.name || "",
      email: currentUser.email || "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: ""
    });
    setProfileModalOpen(true);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    if (!profileForm.name.trim()) {
      triggerToast("Please enter your display name");
      return;
    }

    if (profileForm.newPassword) {
      if (profileForm.newPassword.length < 6) {
        triggerToast("New password must be at least 6 characters");
        return;
      }
      if (profileForm.newPassword !== profileForm.confirmNewPassword) {
        triggerToast("New passwords do not match!");
        return;
      }
    }

    const updated = registeredUsers.map((u) => {
      if (currentUser && u.email.toLowerCase() === currentUser.email.toLowerCase()) {
        return {
          ...u,
          name: profileForm.name.trim(),
          password: profileForm.newPassword ? profileForm.newPassword : u.password
        };
      }
      return u;
    });

    const refreshedSession = {
      ...currentUser,
      name: profileForm.name.trim()
    };

    setRegisteredUsers(updated);
    setCurrentUser(refreshedSession);
    localStorage.setItem("greenbasket_admin_users", JSON.stringify(updated));
    localStorage.setItem("greenbasket_auth", JSON.stringify(refreshedSession));
    syncToGist(products, storeSettings, orders, employees, updated);

    setProfileModalOpen(false);
    triggerToast("Your admin profile & credentials updated!");
  };

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

  const filteredEmployees = employees.filter((emp) => {
    const q = employeeSearch.toLowerCase().trim();
    const matchSearch =
      !q ||
      (emp.name && emp.name.toLowerCase().includes(q)) ||
      (emp.phone && emp.phone.toLowerCase().includes(q)) ||
      (emp.email && emp.email.toLowerCase().includes(q)) ||
      (emp.id && emp.id.toLowerCase().includes(q)) ||
      (emp.vehicleType && emp.vehicleType.toLowerCase().includes(q)) ||
      (emp.role && emp.role.toLowerCase().includes(q));
    const matchDept = employeeDeptFilter === "All" || emp.department === employeeDeptFilter;
    const matchStatus = employeeStatusFilter === "All" || emp.status === employeeStatusFilter;
    return matchSearch && matchDept && matchStatus;
  });

  const filteredAdmins = registeredUsers.map((u, idx) => ({
    id: u.id || ("ADM-" + String(idx + 1).padStart(3, "0")),
    name: u.name || "Admin",
    email: u.email || "",
    role: u.role || "Store Operations Manager",
    status: u.status || "Active",
    createdAt: u.createdAt || "Nov 2026",
    lastLogin: u.lastLogin || "Recently",
    password: u.password || "admin123",
    permissions: u.permissions || (u.role === "Chief Administrator" || u.role === "Super Admin" ? ["All Modules", "Admin Security", "Financial Controls"] : ["Catalog", "Orders", "Tracking"])
  })).filter((adm) => {
    const q = adminSearch.toLowerCase().trim();
    const matchSearch =
      !q ||
      (adm.name && adm.name.toLowerCase().includes(q)) ||
      (adm.email && adm.email.toLowerCase().includes(q)) ||
      (adm.role && adm.role.toLowerCase().includes(q)) ||
      (adm.id && adm.id.toLowerCase().includes(q));
    const matchRole = adminRoleFilter === "All" || adm.role === adminRoleFilter;
    return matchSearch && matchRole;
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
            className={tab === "tracking" ? "active" : ""}
            onClick={() => {
              setTab("tracking");
              setMobileMenuOpen(false);
            }}
          >
            <Truck /> Delivery Tracking
          </button>
          <button
            className={tab === "employees" ? "active" : ""}
            onClick={() => {
              setTab("employees");
              setMobileMenuOpen(false);
            }}
          >
            <Users /> Employee Control
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
          <button
            className={tab === "admin_control" ? "active" : ""}
            onClick={() => {
              setTab("admin_control");
              setMobileMenuOpen(false);
            }}
          >
            <ShieldCheck /> Admin Control
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
              className={tab === "tracking" ? "selected" : ""}
              onClick={() => setTab("tracking")}
            >
              <Truck size={14} style={{ verticalAlign: "middle", marginRight: "4px" }} />
              Delivery Tracking ({orders.filter(o => o.trackingStage !== 'delivered' && o.status !== 'Delivered').length})
            </button>
            <button
              className={tab === "employees" ? "selected" : ""}
              onClick={() => setTab("employees")}
            >
              <Users size={14} style={{ verticalAlign: "middle", marginRight: "4px" }} />
              Employee Control ({employees.length})
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
            <button
              className={tab === "admin_control" ? "selected" : ""}
              onClick={() => setTab("admin_control")}
            >
              <ShieldCheck size={14} style={{ verticalAlign: "middle", marginRight: "4px" }} />
              Admin Control ({registeredUsers.length})
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
                            style={{ color: "#b93232", flex: "0 0 36px" }}
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
                    <th>Tracking Milestone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan={9} style={{ textAlign: "center", padding: "32px", color: "#667" }}>
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
                              onClick={() => openOrderModal(o)}
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
                            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                              <span className={`tracking-badge stage-${o.trackingStage || 'placed'}`}>
                                <Truck size={11} /> {TRACKING_STAGES.find((s) => s.key === (o.trackingStage || 'placed'))?.label || o.trackingStage || 'Placed'}
                              </span>
                              <small style={{ fontSize: "10px", color: "#62755b", fontWeight: 600 }}>
                                {o.riderName && o.riderName !== "Pending Assignment" ? `Rider: ${o.riderName}` : (o.currentCheckpoint || '')}
                              </small>
                            </div>
                          </td>
                          <td>
                            <div className="order-actions-cell">
                              <button
                                type="button"
                                className="tracking-control-btn"
                                onClick={() => openTrackingModal(o)}
                                title="Live Delivery Tracking & Rider Controls"
                              >
                                <Truck size={13} /> Track
                              </button>
                              <button
                                type="button"
                                className="view-order-btn"
                                onClick={() => openOrderModal(o)}
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

        {/* TAB: DELIVERY TRACKING & RIDER CONTROL HUB */}
        {tab === "tracking" && (
          <div className="orders" style={{ padding: "24px" }}>
            <div className="catalog-head" style={{ marginTop: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
              <div>
                <span className="eyebrow" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Truck size={13} /> LIVE DISPATCH & DELIVERY LOGISTICS
                </span>
                <h3 style={{ margin: "4px 0 0" }}>Delivery Tracking & Rider Control Hub</h3>
                <p style={{ margin: "4px 0 0", color: "#62755c", fontSize: "13px" }}>
                  Real-time parcel tracking control. Assign riders, update checkpoints, and broadcast live milestones to customers.
                </p>
              </div>

              <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                <a
                  href="https://greenbasket-nu.vercel.app/#track"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ textDecoration: "none", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  <ExternalLink size={13} /> Open Customer Tracker
                </a>
              </div>
            </div>

            {/* Tracking Top Stats KPI Grid */}
            <div className="tracking-kpi-grid">
              <div className="tracking-kpi-card">
                <div className="tracking-kpi-icon" style={{ background: "#ffedd5", color: "#ea580c" }}>
                  <Truck size={24} />
                </div>
                <div className="tracking-kpi-info">
                  <h4>{orders.filter(o => o.trackingStage === "on_the_way").length}</h4>
                  <span>Out for Delivery (On The Way)</span>
                </div>
              </div>

              <div className="tracking-kpi-card">
                <div className="tracking-kpi-icon" style={{ background: "#fef9c3", color: "#d97706" }}>
                  <Package size={24} />
                </div>
                <div className="tracking-kpi-info">
                  <h4>{orders.filter(o => o.trackingStage === "preparing").length}</h4>
                  <span>Packing & Quality Inspection</span>
                </div>
              </div>

              <div className="tracking-kpi-card">
                <div className="tracking-kpi-icon" style={{ background: "#f3e8ff", color: "#7c3aed" }}>
                  <Navigation size={24} />
                </div>
                <div className="tracking-kpi-info">
                  <h4>{orders.filter(o => o.trackingStage === "picked_up").length}</h4>
                  <span>Handed to Courier Rider</span>
                </div>
              </div>

              <div className="tracking-kpi-card">
                <div className="tracking-kpi-icon" style={{ background: "#dcfce7", color: "#16a34a" }}>
                  <CheckCircle2 size={24} />
                </div>
                <div className="tracking-kpi-info">
                  <h4>{orders.filter(o => o.trackingStage === "delivered").length}</h4>
                  <span>Delivered Successfully</span>
                </div>
              </div>
            </div>

            {/* Tracking Filter & Search Toolbar */}
            <div className="orders-filters-strip" style={{ marginBottom: "18px" }}>
              <div className="order-filter-chips">
                <button
                  type="button"
                  className={`filter-chip ${trackingFilter === "All" ? "active" : ""}`}
                  onClick={() => setTrackingFilter("All")}
                >
                  All ({orders.length})
                </button>
                {TRACKING_STAGES.map((st) => {
                  const count = orders.filter(o => (o.trackingStage || "placed") === st.key).length;
                  return (
                    <button
                      key={st.key}
                      type="button"
                      className={`filter-chip ${trackingFilter === st.key ? "active" : ""}`}
                      onClick={() => setTrackingFilter(st.key)}
                      style={{
                        borderColor: trackingFilter === st.key ? st.color : undefined,
                        color: trackingFilter === st.key ? st.color : undefined
                      }}
                    >
                      {st.label} ({count})
                    </button>
                  );
                })}
              </div>

              <div className="order-search-box">
                <Search size={15} />
                <input
                  type="text"
                  placeholder="Search order ID, rider, customer, checkpoint..."
                  value={trackingSearch}
                  onChange={(e) => setTrackingSearch(e.target.value)}
                />
                {trackingSearch && (
                  <button type="button" onClick={() => setTrackingSearch("")} className="clear-btn">
                    <X size={12} />
                  </button>
                )}
              </div>
            </div>

            {/* Tracking Management Table */}
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Order & Tracking ID</th>
                    <th>Customer & Destination</th>
                    <th>Tracking Milestone</th>
                    <th>Assigned Courier & Rider</th>
                    <th>Current Checkpoint</th>
                    <th>Estimated Delivery</th>
                    <th>Quick Stage Control</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders
                    .filter((o) => {
                      const matchesStage = trackingFilter === "All" || (o.trackingStage || "placed") === trackingFilter;
                      const q = trackingSearch.toLowerCase().trim();
                      const matchesSearch = !q ||
                        o.id.toLowerCase().includes(q) ||
                        (o.trackingId && o.trackingId.toLowerCase().includes(q)) ||
                        (o.customer && o.customer.toLowerCase().includes(q)) ||
                        (o.address && o.address.toLowerCase().includes(q)) ||
                        (o.riderName && o.riderName.toLowerCase().includes(q)) ||
                        (o.currentCheckpoint && o.currentCheckpoint.toLowerCase().includes(q));
                      return matchesStage && matchesSearch;
                    })
                    .map((o) => {
                      const stageObj = TRACKING_STAGES.find(s => s.key === (o.trackingStage || "placed")) || TRACKING_STAGES[0];
                      const stepIndex = TRACKING_STAGES.findIndex(s => s.key === (o.trackingStage || "placed"));
                      const progressPct = Math.round(((stepIndex + 1) / TRACKING_STAGES.length) * 100);

                      return (
                        <tr key={o.id}>
                          <td>
                            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                              <b style={{ color: "#244b14" }}>{o.id}</b>
                              <span style={{ fontSize: "11px", color: "#627757", fontFamily: "monospace", fontWeight: 700 }}>
                                {o.trackingId || `GB-TRK-${o.id.replace(/[^0-9]/g, '')}`}
                              </span>
                              <button
                                type="button"
                                className="copy-addr-btn"
                                style={{ marginTop: "4px", padding: "2px 7px", fontSize: "10px" }}
                                onClick={() => {
                                  const trackLink = `https://greenbasket-nu.vercel.app/#track=${o.id}`;
                                  navigator.clipboard.writeText(trackLink);
                                  triggerToast(`Customer tracking link copied for #${o.id}!`);
                                }}
                                title="Copy public tracking link for customer"
                              >
                                <Copy size={10} /> Copy Link
                              </button>
                            </div>
                          </td>

                          <td style={{ minWidth: "170px" }}>
                            <div className="order-customer-cell">
                              <b>{o.customer || o.customerName || "Customer"}</b>
                              {(o.customerPhone || o.phone) && (
                                <a href={`tel:${o.customerPhone || o.phone}`} className="customer-phone-link">
                                  <Phone size={11} /> {o.customerPhone || o.phone}
                                </a>
                              )}
                              <small style={{ color: "#4f6547", marginTop: "3px", lineHeight: "1.3" }}>
                                <MapPin size={11} style={{ verticalAlign: "middle", marginRight: "3px" }} />
                                {o.address || "Standard Home Delivery"}
                              </small>
                            </div>
                          </td>

                          <td style={{ minWidth: "160px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                              <span className={`tracking-badge stage-${o.trackingStage || 'placed'}`}>
                                <Truck size={11} /> {stageObj.label} ({progressPct}%)
                              </span>
                              <div style={{ height: "5px", background: "#e5ece0", borderRadius: "10px", overflow: "hidden", width: "100%" }}>
                                <div style={{ height: "100%", width: `${progressPct}%`, background: stageObj.color, transition: "width 0.3s" }} />
                              </div>
                              <span style={{ fontSize: "10px", color: "#788a72" }}>
                                {stageObj.labelBn}
                              </span>
                            </div>
                          </td>

                          <td style={{ minWidth: "160px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <b style={{ fontSize: "12px", color: "#1f3b14" }}>
                                {o.riderName || "Pending Assignment"}
                              </b>
                              <small style={{ color: "#5a7051", fontSize: "11px" }}>
                                {o.courierName || "GreenBasket Express"}
                              </small>
                              {o.riderPhone && (
                                <a href={`tel:${o.riderPhone}`} style={{ fontSize: "11px", color: "#2d6318", fontWeight: 700, textDecoration: "none" }}>
                                  <Phone size={10} style={{ verticalAlign: "middle", marginRight: "3px" }} />
                                  {o.riderPhone}
                                </a>
                              )}
                            </div>
                          </td>

                          <td style={{ minWidth: "170px" }}>
                            <div style={{ fontSize: "12px", color: "#254419", lineHeight: "1.4" }}>
                              <span style={{ display: "inline-block", width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", marginRight: "5px" }} />
                              {o.currentCheckpoint || "Warehouse processing"}
                            </div>
                          </td>

                          <td style={{ whiteSpace: "nowrap" }}>
                            <span style={{ fontSize: "12px", fontWeight: 700, color: "#1e4710" }}>
                              <Clock size={12} style={{ verticalAlign: "middle", marginRight: "4px" }} />
                              {o.estimatedDelivery || "Within 45 mins"}
                            </span>
                          </td>

                          <td>
                            {o.trackingStage !== "delivered" ? (
                              <button
                                type="button"
                                className="advance-btn"
                                onClick={() => advanceTrackingStage(o.id)}
                                title="Advance to next delivery milestone"
                              >
                                Advance Stage <ArrowRight size={12} />
                              </button>
                            ) : (
                              <span style={{ fontSize: "11px", fontWeight: 700, color: "#16a34a", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                                <CheckCircle2 size={13} /> Completed
                              </span>
                            )}
                          </td>

                          <td>
                            <div className="order-actions-cell">
                              <button
                                type="button"
                                className="tracking-control-btn"
                                onClick={() => openTrackingModal(o)}
                                title="Open Full Tracking & Rider Controls"
                              >
                                <Settings size={12} /> Manage
                              </button>
                              <button
                                type="button"
                                className="share-notice-btn"
                                onClick={() => openShareNoticeModal(o)}
                                title="Share WhatsApp & SMS Tracking Notice to Customer"
                              >
                                <Send size={12} /> Share
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB: EMPLOYEE & STAFF CONTROL SYSTEM */}
        {tab === "employees" && (
          <div className="orders" style={{ padding: "24px" }}>
            <div className="catalog-head" style={{ marginTop: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "linear-gradient(135deg, #2b6118, #48892a)", display: "grid", placeItems: "center", color: "#fff", boxShadow: "0 2px 8px rgba(43,97,24,0.3)" }}>
                    <Users size={22} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "22px", fontWeight: 800, color: "#1e293b" }}>Employee & Staff Control Center</h3>
                    <p style={{ margin: "3px 0 0", color: "#64748b", fontSize: "13px" }}>
                      Manage delivery fleet riders, warehouse personnel, live duty status, and monthly payroll budget.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <button
                  type="button"
                  className="primary"
                  onClick={handleOpenAddEmployee}
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 20px", borderRadius: "10px", fontWeight: 700, fontSize: "13px", boxShadow: "0 2px 8px rgba(43,97,24,0.25)" }}
                >
                  <UserPlus size={16} /> Add New Employee
                </button>
              </div>
            </div>

            {/* METRICS ROW */}
            <div className="emp-metric-grid" style={{ marginTop: "24px" }}>
              <div className="emp-metric-card">
                <div className="emp-metric-icon green">
                  <Users size={24} />
                </div>
                <div>
                  <div className="emp-metric-value">{employees.length}</div>
                  <div className="emp-metric-label">Total Staff Roster</div>
                  <div className="emp-metric-sub">Across all store operations</div>
                </div>
              </div>

              <div className="emp-metric-card">
                <div className="emp-metric-icon orange">
                  <Truck size={24} />
                </div>
                <div>
                  <div className="emp-metric-value">
                    {employees.filter(e => (e.role && e.role.toLowerCase().includes("rider")) || (e.department && e.department.toLowerCase().includes("delivery"))).length}
                  </div>
                  <div className="emp-metric-label">Delivery Fleet Riders</div>
                  <div className="emp-metric-sub">
                    {employees.filter(e => ((e.role && e.role.toLowerCase().includes("rider")) || (e.department && e.department.toLowerCase().includes("delivery"))) && (e.status === "Active" || e.status === "On Delivery")).length} active on the road
                  </div>
                </div>
              </div>

              <div className="emp-metric-card">
                <div className="emp-metric-icon blue">
                  <Briefcase size={24} />
                </div>
                <div>
                  <div className="emp-metric-value">
                    {employees.filter(e => !((e.role && e.role.toLowerCase().includes("rider")) || (e.department && e.department.toLowerCase().includes("delivery")))).length}
                  </div>
                  <div className="emp-metric-label">Warehouse & Operations</div>
                  <div className="emp-metric-sub">Packaging, QC & Management</div>
                </div>
              </div>

              <div className="emp-metric-card">
                <div className="emp-metric-icon purple">
                  <DollarSign size={24} />
                </div>
                <div>
                  <div className="emp-metric-value">
                    ${employees.reduce((acc, curr) => acc + (Number(curr.salary) || 0), 0).toLocaleString()}
                  </div>
                  <div className="emp-metric-label">Monthly Payroll</div>
                  <div className="emp-metric-sub">Total staff salary budget</div>
                </div>
              </div>
            </div>

            {/* SEARCH & FILTERS BAR */}
            <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "16px 20px", marginBottom: "20px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-between", alignItems: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
              <div style={{ position: "relative", minWidth: "260px", flex: "1 1 280px" }}>
                <Search size={16} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
                <input
                  type="text"
                  placeholder="Search staff by name, phone, ID, or vehicle..."
                  value={employeeSearch}
                  onChange={(e) => setEmployeeSearch(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px 10px 38px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", outline: "none", boxSizing: "border-box" }}
                />
              </div>

              {/* DEPARTMENT FILTER */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#64748b", marginRight: "4px" }}>Dept:</span>
                {["All", "Logistics & Delivery", "Warehouse & Inventory", "Packaging & Quality", "Management"].map(dept => (
                  <button
                    key={dept}
                    type="button"
                    className={`emp-filter-chip ${employeeDeptFilter === dept ? "active" : ""}`}
                    onClick={() => setEmployeeDeptFilter(dept)}
                  >
                    {dept === "Logistics & Delivery" ? "Logistics" : dept === "Warehouse & Inventory" ? "Warehouse" : dept === "Packaging & Quality" ? "Packaging" : dept}
                  </button>
                ))}
              </div>

              {/* STATUS FILTER */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#64748b", marginRight: "4px" }}>Duty:</span>
                <select
                  value={employeeStatusFilter}
                  onChange={(e) => setEmployeeStatusFilter(e.target.value)}
                  style={{ padding: "8px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "12px", fontWeight: 600, background: "#ffffff", color: "#334155" }}
                >
                  <option value="All">All Statuses</option>
                  <option value="Active">● Active / On Duty</option>
                  <option value="On Delivery">⚡ On Delivery</option>
                  <option value="On Leave">⛱ On Leave</option>
                  <option value="Offline">○ Offline</option>
                </select>
              </div>
            </div>

            {/* EMPLOYEE DIRECTORY TABLE */}
            <div className="orders-table-wrapper" style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", overflowX: "auto", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
              <table className="orders-table" style={{ width: "100%", borderCollapse: "collapse", minWidth: "920px" }}>
                <thead>
                  <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e2e8f0" }}>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>EMPLOYEE</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>ROLE & DEPT</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>DUTY STATUS</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>CONTACT</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>ASSIGNED VEHICLE</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>PERFORMANCE</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>SALARY</th>
                    <th style={{ padding: "14px 16px", textAlign: "center", fontSize: "12px", fontWeight: 700, color: "#475569" }}>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.length === 0 ? (
                    <tr>
                      <td colSpan="8" style={{ padding: "48px 20px", textAlign: "center", color: "#94a3b8" }}>
                        <div style={{ fontSize: "16px", fontWeight: 700, color: "#64748b" }}>No staff members found</div>
                        <p style={{ margin: "6px 0 0", fontSize: "13px" }}>Try adjusting your search keywords or active filters</p>
                      </td>
                    </tr>
                  ) : (
                    filteredEmployees.map((emp) => {
                      const initials = (emp.name || "GB").split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
                      const statusClass = emp.status === "Active" ? "active" : emp.status === "On Delivery" ? "on_delivery" : emp.status === "On Leave" ? "on_leave" : "offline";
                      return (
                        <tr key={emp.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                          <td style={{ padding: "12px 16px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                              <div className="employee-avatar">
                                {initials}
                              </div>
                              <div>
                                <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "14px" }}>{emp.name}</div>
                                <div style={{ display: "flex", gap: "6px", alignItems: "center", marginTop: "2px" }}>
                                  <span style={{ fontSize: "11px", color: "#64748b", fontFamily: "monospace", fontWeight: 600 }}>{emp.id}</span>
                                  {emp.nid && (
                                    <span style={{ fontSize: "10px", color: "#94a3b8", background: "#f1f5f9", padding: "1px 5px", borderRadius: "4px" }}>
                                      NID: {emp.nid}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td style={{ padding: "12px 16px" }}>
                            <div style={{ fontSize: "12px", fontWeight: 600, color: "#334155" }}>{emp.department}</div>
                            <div className="emp-role-badge">{emp.role}</div>
                          </td>
                          <td style={{ padding: "12px 16px" }}>
                            <select
                              className={`emp-select-status ${statusClass}`}
                              value={emp.status}
                              onChange={(e) => handleQuickStatusToggle(emp.id, e.target.value)}
                              title="Click to toggle live duty status"
                            >
                              <option value="Active">● Active / On Duty</option>
                              <option value="On Delivery">⚡ On Delivery</option>
                              <option value="On Leave">⛱ On Leave</option>
                              <option value="Offline">○ Offline</option>
                            </select>
                          </td>
                          <td style={{ padding: "12px 16px" }}>
                            <div>
                              {emp.phone && (
                                <a href={`tel:${emp.phone}`} className="emp-contact-link">
                                  <Phone size={12} style={{ color: "#166534" }} /> {emp.phone}
                                </a>
                              )}
                            </div>
                            <div>
                              {emp.email && (
                                <a href={`mailto:${emp.email}`} className="emp-contact-link" style={{ marginTop: "2px", color: "#64748b" }}>
                                  <Mail size={12} style={{ color: "#0284c7" }} /> {emp.email}
                                </a>
                              )}
                            </div>
                          </td>
                          <td style={{ padding: "12px 16px" }}>
                            {emp.vehicleType && emp.vehicleType !== "N/A" ? (
                              <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "12px", color: "#1e293b", background: "#f8fafc", padding: "4px 8px", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                                <Truck size={12} style={{ color: "#2b6118" }} /> {emp.vehicleType}
                              </span>
                            ) : (
                              <span style={{ fontSize: "12px", color: "#94a3b8" }}>N/A (Stationary)</span>
                            )}
                          </td>
                          <td style={{ padding: "12px 16px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: 700, color: "#eab308" }}>
                              ★ {emp.rating || "5.0"}
                            </div>
                            <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
                              {emp.completedDeliveries > 0 ? `${emp.completedDeliveries} completed` : `Joined ${emp.joinDate || "2026"}`}
                            </div>
                          </td>
                          <td style={{ padding: "12px 16px" }}>
                            <div className="emp-salary-pill">${Number(emp.salary || 0).toLocaleString()} /mo</div>
                          </td>
                          <td style={{ padding: "12px 16px", textAlign: "center" }}>
                            <div style={{ display: "flex", justifyContent: "center", gap: "6px" }}>
                              {emp.phone && (
                                <a
                                  href={`https://wa.me/${emp.phone.replace(/[^0-9]/g, "")}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="emp-action-btn whatsapp"
                                  title="Chat on WhatsApp"
                                >
                                  <Send size={13} />
                                </a>
                              )}
                              <button
                                type="button"
                                className="emp-action-btn edit"
                                onClick={() => handleOpenEditEmployee(emp)}
                                title="Edit Staff Member"
                              >
                                <Pencil size={13} />
                              </button>
                              <button
                                type="button"
                                className="emp-action-btn delete"
                                onClick={() => handleDeleteEmployee(emp.id)}
                                title="Delete Staff Member"
                              >
                                <Trash2 size={13} />
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

        {/* TAB: ADMIN CONTROL & PRIVILEGE MANAGEMENT */}
        {tab === "admin_control" && (
          <div className="orders" style={{ padding: "24px" }}>
            {/* Header */}
            <div className="catalog-head" style={{ marginTop: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "linear-gradient(135deg, #15803d, #166534)", display: "grid", placeItems: "center", color: "#fff", boxShadow: "0 2px 8px rgba(22,101,52,0.3)" }}>
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "22px", fontWeight: 800, color: "#1e293b" }}>Admin Control & Team Management</h3>
                    <p style={{ margin: "3px 0 0", color: "#64748b", fontSize: "13px" }}>
                      Manage administrator accounts, roles, access permissions, security settings, and store control privileges.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <button
                  type="button"
                  className="primary"
                  onClick={handleOpenAddAdmin}
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 20px", borderRadius: "10px", fontWeight: 700, fontSize: "13px", boxShadow: "0 2px 8px rgba(22,101,52,0.25)" }}
                >
                  <UserPlus size={16} /> Add Admin User
                </button>
              </div>
            </div>

            {/* Current Active Admin Profile Banner */}
            <div className="admin-profile-box" style={{ marginTop: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div className="admin-profile-avatar">
                  {currentUser ? getInitials(currentUser.name) : "GB"}
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "18px", fontWeight: 800 }}>{currentUser?.name || "Store Administrator"}</span>
                    <span style={{ background: "rgba(255,255,255,0.25)", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "12px" }}>
                      YOU (Current Session)
                    </span>
                  </div>
                  <div style={{ fontSize: "13px", opacity: 0.9, marginTop: "2px" }}>
                    {currentUser?.email} · Role: <b>{currentUser?.role || "Administrator"}</b>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <button
                  type="button"
                  onClick={handleOpenProfileModal}
                  style={{ background: "#ffffff", color: "#1f4314", border: "none", padding: "8px 16px", borderRadius: "8px", fontWeight: 700, fontSize: "12px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px", boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }}
                >
                  <Lock size={13} /> Update My Profile / Password
                </button>
              </div>
            </div>

            {/* METRICS ROW */}
            <div className="admin-card-grid">
              <div className="admin-card">
                <div className="emp-metric-icon green">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="emp-metric-value">{registeredUsers.length}</div>
                  <div className="emp-metric-label">Admin Accounts</div>
                  <div className="emp-metric-sub">Registered management team</div>
                </div>
              </div>

              <div className="admin-card">
                <div className="emp-metric-icon orange">
                  <UserCheck size={24} />
                </div>
                <div>
                  <div className="emp-metric-value">
                    {registeredUsers.filter(u => u.status !== "Suspended").length}
                  </div>
                  <div className="emp-metric-label">Active Administrators</div>
                  <div className="emp-metric-sub">Ready with live credentials</div>
                </div>
              </div>

              <div className="admin-card">
                <div className="emp-metric-icon blue">
                  <Lock size={24} />
                </div>
                <div>
                  <div className="emp-metric-value">RBAC</div>
                  <div className="emp-metric-label">Role-Based Access</div>
                  <div className="emp-metric-sub">6 Distinct privilege tiers</div>
                </div>
              </div>

              <div className="admin-card">
                <div className="emp-metric-icon purple">
                  <RefreshCw size={24} />
                </div>
                <div>
                  <div className="emp-metric-value">Cloud</div>
                  <div className="emp-metric-label">Encrypted Gist Sync</div>
                  <div className="emp-metric-sub">Multi-device real-time sync</div>
                </div>
              </div>
            </div>

            {/* SYSTEM PRIVILEGES & SECURITY TOGGLES */}
            <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "20px", marginBottom: "24px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <Lock size={18} style={{ color: "#166534" }} />
                <h4 style={{ margin: 0, fontSize: "15px", fontWeight: 800, color: "#0f172a" }}>System Privilege Controls & Security Settings</h4>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
                {/* Toggle 1: Allow Public Registration */}
                <div className="admin-sec-toggle">
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#1e293b" }}>Allow Public Admin Registration</div>
                    <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
                      When enabled, new users can sign up from the login screen.
                    </div>
                  </div>
                  <label className="admin-switch" title="Toggle public self-registration">
                    <input
                      type="checkbox"
                      checked={storeSettings.allowPublicSignup ?? true}
                      onChange={(e) => {
                        const updated = { ...storeSettings, allowPublicSignup: e.target.checked };
                        setStoreSettings(updated);
                        syncToGist(products, updated, orders, employees, registeredUsers);
                        triggerToast(`Public admin registration ${e.target.checked ? "enabled" : "disabled"}`);
                      }}
                    />
                    <span className="admin-slider" />
                  </label>
                </div>

                {/* Toggle 2: Order Audio Alert */}
                <div className="admin-sec-toggle">
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#1e293b" }}>New Order Audio Alert Sound</div>
                    <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
                      Play an audible chime when new customer orders arrive.
                    </div>
                  </div>
                  <label className="admin-switch" title="Toggle new order audio chime">
                    <input
                      type="checkbox"
                      checked={storeSettings.orderSoundAlert ?? true}
                      onChange={(e) => {
                        const updated = { ...storeSettings, orderSoundAlert: e.target.checked };
                        setStoreSettings(updated);
                        syncToGist(products, updated, orders, employees, registeredUsers);
                        triggerToast(`New order audio chime ${e.target.checked ? "enabled" : "disabled"}`);
                      }}
                    />
                    <span className="admin-slider" />
                  </label>
                </div>

                {/* Toggle 3: Maintenance Mode */}
                <div className="admin-sec-toggle">
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#1e293b" }}>Store Maintenance Mode Banner</div>
                    <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
                      Broadcasts a live maintenance notice on storefront.
                    </div>
                  </div>
                  <label className="admin-switch" title="Toggle store maintenance mode">
                    <input
                      type="checkbox"
                      checked={storeSettings.maintenanceMode ?? false}
                      onChange={(e) => {
                        const updated = { ...storeSettings, maintenanceMode: e.target.checked };
                        setStoreSettings(updated);
                        syncToGist(products, updated, orders, employees, registeredUsers);
                        triggerToast(`Store maintenance notice ${e.target.checked ? "activated" : "deactivated"}`);
                      }}
                    />
                    <span className="admin-slider" />
                  </label>
                </div>

                {/* Force Manual Sync Button */}
                <div className="admin-sec-toggle">
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#1e293b" }}>Cloud Database Force Sync</div>
                    <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
                      Push current products, orders & admin roster to Gist now.
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      syncToGist(products, storeSettings, orders, employees, registeredUsers);
                      triggerToast("⚡ Cloud database manual force sync complete!");
                    }}
                    style={{ background: "#2b6118", color: "#ffffff", border: "none", padding: "6px 14px", borderRadius: "8px", fontWeight: 700, fontSize: "12px", cursor: "pointer", whiteSpace: "nowrap" }}
                  >
                    Sync Now
                  </button>
                </div>
              </div>
            </div>

            {/* SEARCH & FILTERS BAR */}
            <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "16px 20px", marginBottom: "20px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-between", alignItems: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
              <div style={{ position: "relative", minWidth: "260px", flex: "1 1 280px" }}>
                <Search size={16} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
                <input
                  type="text"
                  placeholder="Search admin users by name, email, or role..."
                  value={adminSearch}
                  onChange={(e) => setAdminSearch(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px 10px 38px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", outline: "none", boxSizing: "border-box" }}
                />
              </div>

              {/* ROLE FILTER CHIPS */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#64748b", marginRight: "4px" }}>Role:</span>
                {["All", "Chief Administrator", "Super Admin", "Store Operations Manager", "Delivery & Order Dispatcher", "Inventory & Catalog Specialist"].map(r => (
                  <button
                    key={r}
                    type="button"
                    className={`emp-filter-chip ${adminRoleFilter === r ? "active" : ""}`}
                    onClick={() => setAdminRoleFilter(r)}
                  >
                    {r === "Chief Administrator" ? "Chief Admin" : r === "Store Operations Manager" ? "Manager" : r === "Delivery & Order Dispatcher" ? "Dispatcher" : r === "Inventory & Catalog Specialist" ? "Specialist" : r}
                  </button>
                ))}
              </div>
            </div>

            {/* ADMIN DIRECTORY TABLE */}
            <div className="orders-table-wrapper" style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", overflowX: "auto", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
              <table className="orders-table" style={{ width: "100%", borderCollapse: "collapse", minWidth: "920px" }}>
                <thead>
                  <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e2e8f0" }}>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>ADMINISTRATOR</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>EMAIL</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>ASSIGNED ROLE</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>STATUS</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>PERMISSIONS</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>CREATED</th>
                    <th style={{ padding: "14px 16px", textAlign: "center", fontSize: "12px", fontWeight: 700, color: "#475569" }}>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAdmins.length === 0 ? (
                    <tr>
                      <td colSpan="7" style={{ padding: "48px 20px", textAlign: "center", color: "#94a3b8" }}>
                        <div style={{ fontSize: "16px", fontWeight: 700, color: "#64748b" }}>No administrators found</div>
                        <p style={{ margin: "6px 0 0", fontSize: "13px" }}>Try adjusting your search keywords or role filter</p>
                      </td>
                    </tr>
                  ) : (
                    filteredAdmins.map((adm) => {
                      const isMe = currentUser && currentUser.email.toLowerCase() === adm.email.toLowerCase();
                      const roleConfig = ADMIN_ROLES.find(r => r.role === adm.role) || ADMIN_ROLES[2];
                      const initials = getInitials(adm.name);
                      return (
                        <tr key={adm.email} style={{ borderBottom: "1px solid #f1f5f9" }}>
                          <td style={{ padding: "12px 16px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                              <div className="employee-avatar" style={{ background: isMe ? "linear-gradient(135deg, #15803d, #166534)" : "linear-gradient(135deg, #334155, #475569)" }}>
                                {initials}
                              </div>
                              <div>
                                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                  <span style={{ fontWeight: 700, color: "#0f172a", fontSize: "14px" }}>{adm.name}</span>
                                  {isMe && (
                                    <span style={{ background: "#dcfce7", color: "#15803d", fontSize: "10px", fontWeight: 800, padding: "1px 6px", borderRadius: "10px", border: "1px solid #bbf7d0" }}>
                                      YOU
                                    </span>
                                  )}
                                </div>
                                <span style={{ fontSize: "11px", color: "#64748b", fontFamily: "monospace", fontWeight: 600 }}>{adm.id}</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ padding: "12px 16px" }}>
                            <a href={`mailto:${adm.email}`} className="emp-contact-link" style={{ color: "#0284c7" }}>
                              <Mail size={12} /> {adm.email}
                            </a>
                          </td>
                          <td style={{ padding: "12px 16px" }}>
                            <span className={`admin-role-pill ${roleConfig.badgeClass}`}>
                              {adm.role}
                            </span>
                          </td>
                          <td style={{ padding: "12px 16px" }}>
                            <button
                              type="button"
                              onClick={() => handleToggleAdminStatus(adm)}
                              style={{
                                border: "none",
                                background: adm.status === "Active" ? "#dcfce7" : "#fee2e2",
                                color: adm.status === "Active" ? "#15803d" : "#b91c1c",
                                fontSize: "11px",
                                fontWeight: 700,
                                padding: "3px 9px",
                                borderRadius: "12px",
                                cursor: isMe ? "default" : "pointer"
                              }}
                              title={isMe ? "Your active account" : "Click to toggle Active / Suspended"}
                            >
                              ● {adm.status || "Active"}
                            </button>
                          </td>
                          <td style={{ padding: "12px 16px" }}>
                            <div style={{ maxWidth: "240px", display: "flex", flexWrap: "wrap" }}>
                              {(adm.permissions || roleConfig.permissions).map(p => (
                                <span key={p} className={`admin-perm-pill ${p === "All Modules" ? "admin-perm-all" : ""}`}>
                                  {p}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td style={{ padding: "12px 16px", fontSize: "12px", color: "#64748b" }}>
                            {adm.createdAt || "Nov 2026"}
                          </td>
                          <td style={{ padding: "12px 16px", textAlign: "center" }}>
                            <div style={{ display: "flex", justifyContent: "center", gap: "6px" }}>
                              <button
                                type="button"
                                className="emp-action-btn edit"
                                onClick={() => handleOpenEditAdmin(adm)}
                                title="Edit Admin Role & Credentials"
                              >
                                <Pencil size={13} />
                              </button>
                              <button
                                type="button"
                                className="emp-action-btn delete"
                                onClick={() => handleDeleteAdmin(adm)}
                                disabled={isMe || adm.email.toLowerCase() === "admin@greenbasket.com"}
                                style={{ opacity: isMe || adm.email.toLowerCase() === "admin@greenbasket.com" ? 0.35 : 1, cursor: isMe || adm.email.toLowerCase() === "admin@greenbasket.com" ? "not-allowed" : "pointer" }}
                                title={isMe ? "Cannot delete yourself" : adm.email.toLowerCase() === "admin@greenbasket.com" ? "Primary admin cannot be deleted" : "Delete Admin User"}
                              >
                                <Trash2 size={13} />
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

            {/* ROLE PERMISSION MATRIX REFERENCE */}
            <div style={{ marginTop: "24px", background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "20px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <Briefcase size={18} style={{ color: "#166534" }} />
                <h4 style={{ margin: 0, fontSize: "15px", fontWeight: 800, color: "#0f172a" }}>Role Permissions Reference Matrix</h4>
              </div>
              <p style={{ fontSize: "12px", color: "#64748b", margin: "0 0 16px" }}>
                Each assigned role grants specific operational capabilities across the store admin panel.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px" }}>
                {ADMIN_ROLES.map(r => (
                  <div key={r.role} style={{ background: "#f8fafc", padding: "14px 16px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span className={`admin-role-pill ${r.badgeClass}`}>{r.role}</span>
                      <span style={{ fontSize: "11px", color: "#64748b", fontWeight: 600 }}>{r.permissions.length} Modules</span>
                    </div>
                    <p style={{ margin: "8px 0 10px", fontSize: "12px", color: "#334155" }}>{r.description}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                      {r.permissions.map(p => (
                        <span key={p} className={`admin-perm-pill ${p === "All Modules" ? "admin-perm-all" : ""}`}>{p}</span>
                      ))}
                    </div>
                  </div>
                ))}
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
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <h4 className="detail-card-title" style={{ margin: 0 }}>
                      <MapPin size={16} /> Delivery Address & Contact Info
                    </h4>
                    <button
                      type="button"
                      className="copy-addr-btn"
                      onClick={() => {
                        if (!isEditingContact) {
                          setEditCustomerName(selectedOrderForModal.customer || selectedOrderForModal.customerName || "");
                          setEditCustomerPhone(selectedOrderForModal.customerPhone || selectedOrderForModal.phone || "");
                          setEditAddress(selectedOrderForModal.address || selectedOrderForModal.deliveryAddress || "");
                          setEditNotes(selectedOrderForModal.notes || "");
                        }
                        setIsEditingContact(!isEditingContact);
                      }}
                      style={{ background: isEditingContact ? "#edf2e8" : "#fff" }}
                      title="Edit Customer Name, Phone & Address"
                    >
                      {isEditingContact ? "Cancel Edit" : <><Pencil size={11} /> Edit Contact Info</>}
                    </button>
                  </div>

                  {isEditingContact ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSaveOrderContact(selectedOrderForModal.id);
                      }}
                      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
                    >
                      <div>
                        <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#44593c", marginBottom: "4px" }}>
                          Customer Name:
                        </label>
                        <input
                          type="text"
                          value={editCustomerName}
                          onChange={(e) => setEditCustomerName(e.target.value)}
                          required
                          style={{ width: "100%", padding: "7px 10px", borderRadius: "8px", border: "1px solid #c2d5ba", fontSize: "13px" }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#44593c", marginBottom: "4px" }}>
                          Phone Number:
                        </label>
                        <input
                          type="text"
                          value={editCustomerPhone}
                          onChange={(e) => setEditCustomerPhone(e.target.value)}
                          placeholder="+880 1712-345678"
                          required
                          style={{ width: "100%", padding: "7px 10px", borderRadius: "8px", border: "1px solid #c2d5ba", fontSize: "13px" }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#44593c", marginBottom: "4px" }}>
                          Delivery Address:
                        </label>
                        <textarea
                          rows={2}
                          value={editAddress}
                          onChange={(e) => setEditAddress(e.target.value)}
                          placeholder="House/Street, Area, City"
                          required
                          style={{ width: "100%", padding: "7px 10px", borderRadius: "8px", border: "1px solid #c2d5ba", fontSize: "13px", resize: "vertical" }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#44593c", marginBottom: "4px" }}>
                          Delivery Notes / Instructions:
                        </label>
                        <input
                          type="text"
                          value={editNotes}
                          onChange={(e) => setEditNotes(e.target.value)}
                          placeholder="e.g. Please call before delivery"
                          style={{ width: "100%", padding: "7px 10px", borderRadius: "8px", border: "1px solid #c2d5ba", fontSize: "13px" }}
                        />
                      </div>

                      <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                        <button
                          type="submit"
                          className="primary"
                          style={{ padding: "6px 14px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "5px" }}
                        >
                          <CheckCircle2 size={13} /> Save Changes
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => setIsEditingContact(false)}
                          style={{ padding: "6px 12px", fontSize: "12px" }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="detail-card-content">
                      <div className="info-row">
                        <span className="info-label">Customer Name:</span>
                        <strong>{selectedOrderForModal.customer || selectedOrderForModal.customerName}</strong>
                      </div>
                      <div className="info-row">
                        <span className="info-label">Phone Number:</span>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          {selectedOrderForModal.customerPhone || selectedOrderForModal.phone ? (
                            <>
                              <a
                                href={`tel:${selectedOrderForModal.customerPhone || selectedOrderForModal.phone}`}
                                style={{ color: "#2f5d1d", fontWeight: 700, textDecoration: "none" }}
                              >
                                {selectedOrderForModal.customerPhone || selectedOrderForModal.phone}
                              </a>
                              <button
                                type="button"
                                className="copy-addr-btn"
                                onClick={() => {
                                  navigator.clipboard.writeText(selectedOrderForModal.customerPhone || selectedOrderForModal.phone || "");
                                  triggerToast("Phone number copied!");
                                }}
                              >
                                <Copy size={11} /> Copy
                              </button>
                            </>
                          ) : (
                            <span style={{ color: "#8a9684" }}>Not provided</span>
                          )}
                        </div>
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
                      {selectedOrderForModal.notes && (
                        <div className="info-row">
                          <span className="info-label">Delivery Notes:</span>
                          <span style={{ fontStyle: "italic", color: "#3e5238" }}>
                            {selectedOrderForModal.notes}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Live Delivery Tracking Stepper & Logistics Card */}
                <div className="order-detail-card" style={{ border: "1px solid #bfdbfe", background: "#f8faff" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
                    <h4 className="detail-card-title" style={{ margin: 0, color: "#1e40af" }}>
                      <Truck size={16} /> Live Delivery Tracking & Milestone Control
                    </h4>
                    <div style={{ display: "flex", gap: "6px" }}>
                      <button
                        type="button"
                        className="tracking-control-btn"
                        onClick={() => openTrackingModal(selectedOrderForModal)}
                        style={{ background: "#eff6ff", borderColor: "#bfdbfe", color: "#1d4ed8" }}
                      >
                        <Settings size={12} /> Manage Logistics
                      </button>
                      <button
                        type="button"
                        className="share-notice-btn"
                        onClick={() => openShareNoticeModal(selectedOrderForModal)}
                      >
                        <Send size={12} /> Share Notice
                      </button>
                    </div>
                  </div>

                  {/* 5-Step Milestone Stepper */}
                  <div style={{ margin: "16px 0 20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
                      {TRACKING_STAGES.map((st, idx) => {
                        const currentStageIdx = TRACKING_STAGES.findIndex(s => s.key === (selectedOrderForModal.trackingStage || "placed"));
                        const isCompleted = idx < currentStageIdx;
                        const isCurrent = idx === currentStageIdx;

                        return (
                          <div
                            key={st.key}
                            onClick={() => updateTrackingStage(selectedOrderForModal.id, st.key)}
                            style={{
                              padding: "10px 8px",
                              borderRadius: "10px",
                              textAlign: "center",
                              cursor: "pointer",
                              border: isCurrent ? `2px solid ${st.color}` : (isCompleted ? "1px solid #86efac" : "1px solid #e2e8f0"),
                              background: isCurrent ? st.bg : (isCompleted ? "#f0fdf4" : "#ffffff"),
                              boxShadow: isCurrent ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                              transition: "all 0.15s"
                            }}
                            title={`Click to set status to ${st.label}`}
                          >
                            <div style={{
                              width: "22px",
                              height: "22px",
                              borderRadius: "50%",
                              margin: "0 auto 4px",
                              display: "grid",
                              placeItems: "center",
                              fontSize: "10px",
                              fontWeight: 800,
                              background: isCurrent ? st.color : (isCompleted ? "#16a34a" : "#cbd5e1"),
                              color: "#fff"
                            }}>
                              {isCompleted ? "✓" : idx + 1}
                            </div>
                            <strong style={{ display: "block", fontSize: "11px", color: isCurrent ? st.color : "#334155" }}>
                              {st.label}
                            </strong>
                            <small style={{ display: "block", fontSize: "9px", color: "#64748b", marginTop: "2px" }}>
                              {st.labelBn}
                            </small>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Logistics Summary Details */}
                  <div style={{ background: "#ffffff", borderRadius: "10px", padding: "12px", border: "1px solid #e2e8f0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "12px" }}>
                    <div>
                      <span style={{ color: "#64748b", display: "block", fontSize: "10px", fontWeight: 700 }}>TRACKING NUMBER</span>
                      <b style={{ color: "#1e3a8a", fontFamily: "monospace", fontSize: "13px" }}>
                        {selectedOrderForModal.trackingId || `GB-TRK-${selectedOrderForModal.id.replace(/[^0-9]/g, '')}`}
                      </b>
                    </div>
                    <div>
                      <span style={{ color: "#64748b", display: "block", fontSize: "10px", fontWeight: 700 }}>ESTIMATED DELIVERY</span>
                      <b style={{ color: "#166534" }}>
                        <Clock size={11} style={{ verticalAlign: "middle", marginRight: "3px" }} />
                        {selectedOrderForModal.estimatedDelivery || "Within 45 mins"}
                      </b>
                    </div>
                    <div>
                      <span style={{ color: "#64748b", display: "block", fontSize: "10px", fontWeight: 700 }}>ASSIGNED RIDER</span>
                      <b style={{ color: "#0f172a" }}>{selectedOrderForModal.riderName || "Pending Assignment"}</b>
                      {selectedOrderForModal.riderPhone && (
                        <a href={`tel:${selectedOrderForModal.riderPhone}`} style={{ display: "block", color: "#15803d", fontSize: "11px", fontWeight: 600 }}>
                          {selectedOrderForModal.riderPhone}
                        </a>
                      )}
                    </div>
                    <div>
                      <span style={{ color: "#64748b", display: "block", fontSize: "10px", fontWeight: 700 }}>CURRENT CHECKPOINT</span>
                      <span style={{ color: "#334155", fontWeight: 600 }}>
                        {selectedOrderForModal.currentCheckpoint || "Processing at Central Warehouse"}
                      </span>
                    </div>
                  </div>

                  {selectedOrderForModal.trackingStage !== "delivered" && (
                    <div style={{ marginTop: "12px", display: "flex", justifyContent: "flex-end" }}>
                      <button
                        type="button"
                        className="advance-btn"
                        onClick={() => advanceTrackingStage(selectedOrderForModal.id)}
                      >
                        Advance to Next Milestone <ArrowRight size={13} />
                      </button>
                    </div>
                  )}
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

        {/* DEDICATED TRACKING & LOGISTICS MANAGEMENT MODAL */}
        {trackingModalOrder && (
          <div className="order-modal-backdrop" onClick={() => setTrackingModalOrder(null)}>
            <div className="order-modal-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "620px" }}>
              <div className="order-modal-head" style={{ background: "linear-gradient(135deg, #1b3d12, #295b1b)" }}>
                <div className="order-modal-title">
                  <span className="modal-eyebrow" style={{ color: "#bbf7d0" }}>LIVE DELIVERY LOGISTICS CONTROL</span>
                  <h3 style={{ color: "#fff" }}>Tracking Manager: #{trackingModalOrder.id}</h3>
                  <small style={{ color: "#dcfce7" }}>Customer: {trackingModalOrder.customer}</small>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setTrackingModalOrder(null)}
                  style={{ color: "#fff" }}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="order-modal-body" style={{ maxHeight: "78vh", overflowY: "auto" }}>
                {/* 5-Step Stage Selector */}
                <div className="tracking-stepper-container">
                  <span className="tracking-stepper-title">
                    <span>Select Milestone Stage</span>
                    <small style={{ color: "#64748b", fontWeight: 600 }}>Click to set immediate status</small>
                  </span>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
                    {TRACKING_STAGES.map((st, idx) => {
                      const isCurrent = trackingFormData.trackingStage === st.key;
                      return (
                        <div
                          key={st.key}
                          onClick={() => setTrackingFormData({ ...trackingFormData, trackingStage: st.key })}
                          style={{
                            padding: "10px 6px",
                            borderRadius: "10px",
                            textAlign: "center",
                            cursor: "pointer",
                            border: isCurrent ? `2px solid ${st.color}` : "1px solid #cbd5e1",
                            background: isCurrent ? st.bg : "#ffffff",
                            boxShadow: isCurrent ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                            transition: "all 0.15s"
                          }}
                        >
                          <div style={{
                            width: "22px",
                            height: "22px",
                            borderRadius: "50%",
                            margin: "0 auto 4px",
                            display: "grid",
                            placeItems: "center",
                            fontSize: "10px",
                            fontWeight: 800,
                            background: isCurrent ? st.color : "#94a3b8",
                            color: "#fff"
                          }}>
                            {idx + 1}
                          </div>
                          <b style={{ display: "block", fontSize: "11px", color: isCurrent ? st.color : "#334155" }}>
                            {st.label}
                          </b>
                          <small style={{ fontSize: "9px", color: "#64748b" }}>{st.labelBn}</small>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Logistics Configuration Form */}
                <form onSubmit={handleSaveTrackingModal} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                        Tracking Number / Waybill ID:
                      </label>
                      <input
                        type="text"
                        value={trackingFormData.trackingId}
                        onChange={(e) => setTrackingFormData({ ...trackingFormData, trackingId: e.target.value })}
                        required
                        style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", fontFamily: "monospace", fontWeight: 700 }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                        Delivery Partner / Courier:
                      </label>
                      <select
                        value={trackingFormData.courierName}
                        onChange={(e) => setTrackingFormData({ ...trackingFormData, courierName: e.target.value })}
                        style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px" }}
                      >
                        <option value="GreenBasket Express">GreenBasket Express (Own Fleet)</option>
                        <option value="Pathao Express">Pathao Express</option>
                        <option value="Steadfast Courier">Steadfast Courier</option>
                        <option value="RedX Logistics">RedX Logistics</option>
                        <option value="Paperfly">Paperfly</option>
                        <option value="In-house Delivery Rider">In-house Delivery Rider</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                        <label style={{ fontSize: "11px", fontWeight: 700, color: "#334155" }}>
                          Assigned Rider Name:
                        </label>
                        {employees.some(e => (e.role && e.role.toLowerCase().includes("rider")) || (e.department && e.department.toLowerCase().includes("delivery"))) && (
                          <select
                            style={{ fontSize: "10px", padding: "2px 6px", borderRadius: "4px", border: "1px solid #cbd5e1", background: "#f8fafc", color: "#166534", fontWeight: 600, cursor: "pointer" }}
                            onChange={(e) => {
                              const sel = employees.find(emp => emp.name === e.target.value);
                              if (sel) {
                                setTrackingFormData(prev => ({
                                  ...prev,
                                  riderName: sel.name,
                                  riderPhone: sel.phone || prev.riderPhone
                                }));
                              }
                            }}
                          >
                            <option value="">⚡ Select Staff Rider</option>
                            {employees
                              .filter(e => (e.role && e.role.toLowerCase().includes("rider")) || (e.department && e.department.toLowerCase().includes("delivery")))
                              .map(r => (
                                <option key={r.id} value={r.name}>
                                  {r.name} ({r.status})
                                </option>
                              ))}
                          </select>
                        )}
                      </div>
                      <input
                        type="text"
                        value={trackingFormData.riderName}
                        onChange={(e) => setTrackingFormData({ ...trackingFormData, riderName: e.target.value })}
                        placeholder="e.g. Karim Mia"
                        required
                        style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                        Rider Contact Phone:
                      </label>
                      <input
                        type="text"
                        value={trackingFormData.riderPhone}
                        onChange={(e) => setTrackingFormData({ ...trackingFormData, riderPhone: e.target.value })}
                        placeholder="+880 1798-765432"
                        required
                        style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px" }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                        Estimated Delivery Time:
                      </label>
                      <input
                        type="text"
                        value={trackingFormData.estimatedDelivery}
                        onChange={(e) => setTrackingFormData({ ...trackingFormData, estimatedDelivery: e.target.value })}
                        placeholder="e.g. Today within 45 mins"
                        required
                        style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                        Current Checkpoint Location:
                      </label>
                      <input
                        type="text"
                        value={trackingFormData.currentCheckpoint}
                        onChange={(e) => setTrackingFormData({ ...trackingFormData, currentCheckpoint: e.target.value })}
                        placeholder="e.g. Dhanmondi Hub - Out with rider"
                        required
                        style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                      Add Checkpoint Note to Customer Timeline (Optional):
                    </label>
                    <input
                      type="text"
                      value={trackingFormData.customNote}
                      onChange={(e) => setTrackingFormData({ ...trackingFormData, customNote: e.target.value })}
                      placeholder="e.g. Rider arrived at customer premises"
                      style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px" }}
                    />
                  </div>

                  {/* Tracking Timeline Log */}
                  <div style={{ marginTop: "4px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#475569", display: "block", marginBottom: "6px" }}>
                      Live Activity Checkpoints ({trackingModalOrder.trackingTimeline?.length || 0})
                    </span>
                    <div className="tracking-timeline-box">
                      {(trackingModalOrder.trackingTimeline || []).map((ev, i) => (
                        <div key={i} className="timeline-event">
                          <div className="timeline-bullet">
                            <CheckCircle2 size={13} />
                          </div>
                          <div className="timeline-content">
                            <div className="timeline-title-row">
                              <span className="timeline-event-title">{ev.title}</span>
                              <span className="timeline-event-time">{ev.time}</span>
                            </div>
                            <p className="timeline-event-note">{ev.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                    <button
                      type="button"
                      className="copy-addr-btn"
                      onClick={() => {
                        const trackLink = `https://greenbasket-nu.vercel.app/#track=${trackingModalOrder.id}`;
                        navigator.clipboard.writeText(trackLink);
                        triggerToast("Customer tracking link copied to clipboard!");
                      }}
                    >
                      <Copy size={12} /> Copy Customer Tracking Link
                    </button>

                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setTrackingModalOrder(null)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="primary"
                        style={{ padding: "8px 18px", display: "inline-flex", alignItems: "center", gap: "6px" }}
                      >
                        <CheckCircle2 size={14} /> Save & Broadcast Updates
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* SHARE NOTIFICATION MODAL (WHATSAPP / SMS) */}
        {shareNoticeOrder && (
          <div className="order-modal-backdrop" onClick={() => setShareNoticeOrder(null)}>
            <div className="order-modal-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "520px" }}>
              <div className="order-modal-head" style={{ background: "#15803d" }}>
                <div className="order-modal-title">
                  <span className="modal-eyebrow" style={{ color: "#dcfce7" }}>CUSTOMER NOTIFICATION SHARE</span>
                  <h3 style={{ color: "#fff" }}>Send Tracking Notice: #{shareNoticeOrder.id}</h3>
                  <small style={{ color: "#f0fdf4" }}>Recipient: {shareNoticeOrder.customer} ({shareNoticeOrder.customerPhone || shareNoticeOrder.phone})</small>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setShareNoticeOrder(null)}
                  style={{ color: "#fff" }}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="order-modal-body">
                <p style={{ margin: "0 0 12px", fontSize: "13px", color: "#334155", lineHeight: "1.5" }}>
                  Notify the customer directly via WhatsApp or SMS with their real-time parcel tracking link and delivery status.
                </p>

                <div style={{ background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "10px", padding: "14px", marginBottom: "16px", fontSize: "13px", lineHeight: "1.6", color: "#1e293b", fontFamily: "sans-serif" }}>
                  <b>GreenBasket Order Update:</b><br />
                  Hello {shareNoticeOrder.customer}, your fresh grocery order #{shareNoticeOrder.id} is currently <b>{TRACKING_STAGES.find(s => s.key === shareNoticeOrder.trackingStage)?.label || shareNoticeOrder.status}</b> ({shareNoticeOrder.currentCheckpoint || 'In transit'}).<br />
                  Estimated Delivery: {shareNoticeOrder.estimatedDelivery || 'Soon'}.<br />
                  Rider: {shareNoticeOrder.riderName || 'GreenBasket Fleet'} ({shareNoticeOrder.riderPhone || 'In transit'}).<br />
                  👉 Track your delivery live: https://greenbasket-nu.vercel.app/#track={shareNoticeOrder.id}
                </div>

                <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                  <button
                    type="button"
                    className="copy-addr-btn"
                    onClick={() => {
                      const msg = `GreenBasket Order Update:\nHello ${shareNoticeOrder.customer}, your fresh grocery order #${shareNoticeOrder.id} is currently ${TRACKING_STAGES.find(s => s.key === shareNoticeOrder.trackingStage)?.label || shareNoticeOrder.status} (${shareNoticeOrder.currentCheckpoint || 'In transit'}).\nEstimated Delivery: ${shareNoticeOrder.estimatedDelivery || 'Soon'}.\n👉 Track live: https://greenbasket-nu.vercel.app/#track=${shareNoticeOrder.id}`;
                      navigator.clipboard.writeText(msg);
                      triggerToast("Notice text copied to clipboard!");
                    }}
                  >
                    <Copy size={13} /> Copy Message
                  </button>

                  <a
                    href={`https://wa.me/${(shareNoticeOrder.customerPhone || shareNoticeOrder.phone || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`GreenBasket Order Update:\nHello ${shareNoticeOrder.customer}, your fresh grocery order #${shareNoticeOrder.id} is currently ${TRACKING_STAGES.find(s => s.key === shareNoticeOrder.trackingStage)?.label || shareNoticeOrder.status} (${shareNoticeOrder.currentCheckpoint || 'In transit'}).\nEstimated Delivery: ${shareNoticeOrder.estimatedDelivery || 'Soon'}.\n👉 Track live: https://greenbasket-nu.vercel.app/#track=${shareNoticeOrder.id}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-notice-btn"
                    style={{ textDecoration: "none", padding: "8px 16px", fontSize: "12px" }}
                  >
                    <Send size={13} /> Open WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EMPLOYEE ADD / EDIT MODAL */}
        {employeeModalOpen && (
          <div className="modal-backdrop" onClick={() => setEmployeeModalOpen(false)}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "560px", padding: "28px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "linear-gradient(135deg, #2b6118, #48892a)", display: "grid", placeItems: "center", color: "#fff" }}>
                    <Users size={18} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>
                      {editingEmployee ? "Edit Employee Profile" : "Add New Employee"}
                    </h3>
                    <p style={{ margin: "2px 0 0", color: "#64748b", fontSize: "12px" }}>
                      {editingEmployee ? `Update staff record for ${editingEmployee.id}` : "Enroll new team member into GreenBasket staff roster"}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setEmployeeModalOpen(false)}
                  style={{ background: "#f1f5f9", border: "none", borderRadius: "8px", width: "32px", height: "32px", display: "grid", placeItems: "center", cursor: "pointer", color: "#64748b" }}
                >
                  <X size={16} />
                </button>
              </div>

              <form onSubmit={handleSaveEmployee} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={employeeForm.name}
                    onChange={(e) => setEmployeeForm({ ...employeeForm, name: e.target.value })}
                    placeholder="e.g. Karim Mia"
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                      Job Designation / Role *
                    </label>
                    <input
                      type="text"
                      required
                      value={employeeForm.role}
                      onChange={(e) => setEmployeeForm({ ...employeeForm, role: e.target.value })}
                      placeholder="e.g. Delivery Rider"
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                      Department *
                    </label>
                    <select
                      value={employeeForm.department}
                      onChange={(e) => setEmployeeForm({ ...employeeForm, department: e.target.value })}
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", background: "#fff", boxSizing: "border-box" }}
                    >
                      <option value="Logistics & Delivery">Logistics & Delivery</option>
                      <option value="Warehouse & Inventory">Warehouse & Inventory</option>
                      <option value="Packaging & Quality">Packaging & Quality</option>
                      <option value="Management">Management</option>
                      <option value="Customer Support">Customer Support</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={employeeForm.phone}
                      onChange={(e) => setEmployeeForm({ ...employeeForm, phone: e.target.value })}
                      placeholder="+880 1712-345678"
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={employeeForm.email}
                      onChange={(e) => setEmployeeForm({ ...employeeForm, email: e.target.value })}
                      placeholder="employee@greenbasket.com"
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                      Monthly Salary ($ USD)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={employeeForm.salary}
                      onChange={(e) => setEmployeeForm({ ...employeeForm, salary: e.target.value })}
                      placeholder="380"
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                      Duty Status
                    </label>
                    <select
                      value={employeeForm.status}
                      onChange={(e) => setEmployeeForm({ ...employeeForm, status: e.target.value })}
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", background: "#fff", boxSizing: "border-box" }}
                    >
                      <option value="Active">● Active / On Duty</option>
                      <option value="On Delivery">⚡ On Delivery</option>
                      <option value="On Leave">⛱ On Leave</option>
                      <option value="Offline">○ Offline</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                      Assigned Vehicle / Asset
                    </label>
                    <input
                      type="text"
                      value={employeeForm.vehicleType}
                      onChange={(e) => setEmployeeForm({ ...employeeForm, vehicleType: e.target.value })}
                      placeholder="e.g. Eco Electric Bike #12"
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                      National ID (NID)
                    </label>
                    <input
                      type="text"
                      value={employeeForm.nid}
                      onChange={(e) => setEmployeeForm({ ...employeeForm, nid: e.target.value })}
                      placeholder="1994269123456"
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                    />
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "12px" }}>
                  <button
                    type="button"
                    className="soft"
                    onClick={() => setEmployeeModalOpen(false)}
                    style={{ padding: "10px 18px", borderRadius: "8px", fontSize: "13px", fontWeight: 600 }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="primary"
                    style={{ padding: "10px 24px", borderRadius: "8px", fontSize: "13px", fontWeight: 700 }}
                  >
                    {editingEmployee ? "Update Employee Profile" : "Save to Roster"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ADD / EDIT ADMIN USER MODAL */}
        {adminModalOpen && (
          <div className="modal-backdrop" onClick={() => setAdminModalOpen(false)}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "540px", padding: "28px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "linear-gradient(135deg, #15803d, #166534)", display: "grid", placeItems: "center", color: "#fff" }}>
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>
                      {editingAdmin ? "Edit Administrator Access" : "Add New Administrator"}
                    </h3>
                    <p style={{ margin: "2px 0 0", color: "#64748b", fontSize: "12px" }}>
                      {editingAdmin ? `Update credentials & permissions for ${editingAdmin.name}` : "Grant store management privileges to a new administrator"}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setAdminModalOpen(false)}
                  style={{ background: "#f1f5f9", border: "none", borderRadius: "8px", width: "32px", height: "32px", display: "grid", placeItems: "center", cursor: "pointer", color: "#64748b" }}
                >
                  <X size={16} />
                </button>
              </div>

              <form onSubmit={handleSaveAdmin} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={adminForm.name}
                    onChange={(e) => setAdminForm({ ...adminForm, name: e.target.value })}
                    placeholder="e.g. Sazib Khan"
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                    Official Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={adminForm.email}
                    onChange={(e) => setAdminForm({ ...adminForm, email: e.target.value })}
                    placeholder="manager@greenbasket.com"
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                      Assigned Role *
                    </label>
                    <select
                      value={adminForm.role}
                      onChange={(e) => setAdminForm({ ...adminForm, role: e.target.value })}
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", background: "#fff", boxSizing: "border-box" }}
                    >
                      {ADMIN_ROLES.map(r => (
                        <option key={r.role} value={r.role}>{r.role}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                      Account Status
                    </label>
                    <select
                      value={adminForm.status}
                      onChange={(e) => setAdminForm({ ...adminForm, status: e.target.value })}
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", background: "#fff", boxSizing: "border-box" }}
                    >
                      <option value="Active">Active (Permitted)</option>
                      <option value="Suspended">Suspended (Blocked)</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                      {editingAdmin ? "New Password (Leave blank to keep)" : "Password *"}
                    </label>
                    <input
                      type="password"
                      required={!editingAdmin}
                      value={adminForm.password}
                      onChange={(e) => setAdminForm({ ...adminForm, password: e.target.value })}
                      placeholder="Min. 6 chars"
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                      Confirm Password {editingAdmin ? "" : "*"}
                    </label>
                    <input
                      type="password"
                      required={!editingAdmin || !!adminForm.password}
                      value={adminForm.confirmPassword}
                      onChange={(e) => setAdminForm({ ...adminForm, confirmPassword: e.target.value })}
                      placeholder="Repeat password"
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                    />
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "12px" }}>
                  <button
                    type="button"
                    className="soft"
                    onClick={() => setAdminModalOpen(false)}
                    style={{ padding: "10px 18px", borderRadius: "8px", fontSize: "13px", fontWeight: 600 }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="primary"
                    style={{ padding: "10px 24px", borderRadius: "8px", fontSize: "13px", fontWeight: 700 }}
                  >
                    {editingAdmin ? "Update Admin Privileges" : "Create Admin Account"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MY PROFILE & PASSWORD UPDATE MODAL */}
        {profileModalOpen && (
          <div className="modal-backdrop" onClick={() => setProfileModalOpen(false)}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "480px", padding: "28px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "linear-gradient(135deg, #15803d, #166534)", display: "grid", placeItems: "center", color: "#fff" }}>
                    <Lock size={18} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>
                      Update My Profile & Credentials
                    </h3>
                    <p style={{ margin: "2px 0 0", color: "#64748b", fontSize: "12px" }}>
                      Logged in as {currentUser?.email}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setProfileModalOpen(false)}
                  style={{ background: "#f1f5f9", border: "none", borderRadius: "8px", width: "32px", height: "32px", display: "grid", placeItems: "center", cursor: "pointer", color: "#64748b" }}
                >
                  <X size={16} />
                </button>
              </div>

              <form onSubmit={handleSaveProfile} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                    Display Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                    New Password (Leave blank to keep existing)
                  </label>
                  <input
                    type="password"
                    value={profileForm.newPassword}
                    onChange={(e) => setProfileForm({ ...profileForm, newPassword: e.target.value })}
                    placeholder="Min. 6 characters"
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={profileForm.confirmNewPassword}
                    onChange={(e) => setProfileForm({ ...profileForm, confirmNewPassword: e.target.value })}
                    placeholder="Repeat new password"
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "12px" }}>
                  <button
                    type="button"
                    className="soft"
                    onClick={() => setProfileModalOpen(false)}
                    style={{ padding: "10px 18px", borderRadius: "8px", fontSize: "13px", fontWeight: 600 }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="primary"
                    style={{ padding: "10px 24px", borderRadius: "8px", fontSize: "13px", fontWeight: 700 }}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
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
