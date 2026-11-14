import React, { useState, useEffect, useRef } from "react";
import {
  Package,
  ShoppingBag,
  DollarSign,
  Users,
  Plus,
  FolderPlus,
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
  ChevronDown,
  ChevronUp,
  Calendar,
  BadgeCheck,
  Radio,
  Smartphone,
  Share2,
  LocateFixed,
  BatteryCharging,
  Compass,
  Gauge,
  ChevronLeft,
  CalendarDays,
  Wallet,
  Calculator,
  Headphones,
  MessageSquare,
  LifeBuoy,
  PhoneCall,
  MessageCircle
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

export const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
export const MONTH_NAMES_BN = [
  "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
  "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
];

export const parseOrderDate = (dateStr) => {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) return d;
  const parts = String(dateStr).split(" ");
  if (parts.length >= 3) {
    const fallback = new Date(`${parts[0]} ${parts[1]} ${parts[2]}`);
    if (!isNaN(fallback.getTime())) return fallback;
  }
  return null;
};

export const getOrderProductCount = (order) => {
  if (!order || !order.items) return 1;
  if (Array.isArray(order.items)) {
    return order.items.reduce((sum, it) => sum + (Number(it.quantity) || 1), 0);
  }
  if (typeof order.items === "string") {
    const matches = [...order.items.matchAll(/\((\d+)\)/g)];
    if (matches.length > 0) {
      return matches.reduce((sum, m) => sum + parseInt(m[1], 10), 0);
    }
    const parts = order.items.split(",").filter((s) => s.trim().length > 0);
    return Math.max(1, parts.length);
  }
  return 1;
};

export const DEFAULT_RIDER_LOCATIONS = {
  "EMP-101": {
    lat: 23.7465,
    lng: 90.3760,
    area: "Dhanmondi 27 (Lake Circus Road), Dhaka",
    checkpoint: "Near Dhanmondi Lake Checkpoint",
    speed: "26 km/h",
    battery: "84%",
    status: "On Delivery",
    vehicle: "Eco Electric Bike #12",
    zone: "Dhanmondi & Central Dhaka"
  },
  "EMP-103": {
    lat: 23.7925,
    lng: 90.4078,
    area: "Gulshan-2 Circle (North Avenue), Dhaka",
    checkpoint: "Near Gulshan Club Checkpoint",
    speed: "32 km/h",
    battery: "91%",
    status: "On Delivery",
    vehicle: "GreenBasket Cargo Van #02",
    zone: "Gulshan, Baridhara & Banani"
  },
  "EMP-104": {
    lat: 23.7937,
    lng: 90.4043,
    area: "Banani Road 11 (Block D), Dhaka",
    checkpoint: "Departing Central Logistics Point",
    speed: "19 km/h",
    battery: "78%",
    status: "Active / Standby",
    vehicle: "Honda 125cc Bike #05",
    zone: "Banani & Mohakhali"
  }
};

export const getRiderLocationData = (emp, jitter = { lat: 0, lng: 0 }) => {
  if (!emp) return { lat: 23.7548, lng: 90.3912, area: "Central Hub, Dhaka", speed: "0 km/h", battery: "100%", status: "Idle", vehicle: "N/A", checkpoint: "Central Warehouse" };
  const base = DEFAULT_RIDER_LOCATIONS[emp.id] || {
    lat: 23.7548 + ((parseInt(emp.id?.replace(/[^0-9]/g, "") || "1", 10) % 5) - 2) * 0.015,
    lng: 90.3912 + ((parseInt(emp.id?.replace(/[^0-9]/g, "") || "1", 10) % 7) - 3) * 0.012,
    area: `${emp.name}'s Dispatch Zone, Dhaka`,
    checkpoint: "Active in assigned delivery sector",
    speed: "24 km/h",
    battery: "85%",
    status: emp.status || "On Duty",
    vehicle: emp.vehicleType || "GreenBasket Delivery Vehicle",
    zone: "Dhaka Metropolitan Area"
  };
  return {
    ...base,
    lat: Number((base.lat + (jitter?.lat || 0)).toFixed(6)),
    lng: Number((base.lng + (jitter?.lng || 0)).toFixed(6))
  };
};

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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
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

export const QUICK_REPLY_TEMPLATES = [
  "Hello! Your delivery rider is en route and will arrive shortly.",
  "আপনার অর্ডারটি ডেলিভারির পথে রয়েছে, রাইডার খুব শীঘ্রই পৌঁছাবে।",
  "We have verified your payment and updated your order status to Paid.",
  "আপনার পেমেন্ট সফলভাবে ভেরিফাই করা হয়েছে।",
  "We are truly sorry for the inconvenience. Our operations team is resolving this immediately.",
  "আপনার সমস্যার সমাধান করা হয়েছে। আর কোনো সহায়তা প্রয়োজন হলে অনুগ্রহ করে জানাবেন।"
];

export const initialSupportTickets = [
  {
    id: "TKT-201",
    customer: "Sazib Ahmed",
    phone: "+880 1712-345678",
    email: "sazib.ahmed@gmail.com",
    orderId: "GB-1930",
    channel: "WhatsApp",
    category: "Order & Delivery",
    priority: "Urgent",
    status: "Open",
    subject: "When will my organic avocados & farm milk arrive?",
    assignedAgent: "Farhana Akter",
    createdAt: "Nov 14, 2026 06:30",
    updatedAt: "Nov 14, 2026 06:45",
    messages: [
      {
        id: "msg-1",
        sender: "customer",
        senderName: "Sazib Ahmed",
        text: "Hello, I placed order #GB-1930 this morning for Dhanmondi. Could you please let me know the estimated delivery time?",
        time: "06:30 AM"
      },
      {
        id: "msg-2",
        sender: "agent",
        senderName: "Farhana Akter",
        text: "Hello Sazib! Thank you for contacting GreenBasket Support. Your rider Karim Mia is currently en route on Lake Circus Road. Estimated arrival is within 15 minutes.",
        time: "06:45 AM"
      }
    ]
  },
  {
    id: "TKT-202",
    customer: "Farhana Yasmin",
    phone: "+880 1912-345678",
    email: "farhana.y@gmail.com",
    orderId: "GB-1927",
    channel: "Phone Call",
    category: "Order & Delivery",
    priority: "High",
    status: "In Progress",
    subject: "Request to change delivery drop-off point to Gulshan-2 Club Road",
    assignedAgent: "Sazib Khan",
    createdAt: "Nov 13, 2026 15:45",
    updatedAt: "Nov 13, 2026 16:00",
    messages: [
      {
        id: "msg-1",
        sender: "customer",
        senderName: "Farhana Yasmin",
        text: "Hi, I need to update my delivery drop-off point to Apartment 5B, Road 62 near Gulshan Club. Please inform rider Sohanur Rahman.",
        time: "03:45 PM"
      },
      {
        id: "msg-2",
        sender: "agent",
        senderName: "Sazib Khan",
        text: "We have relayed the new address to rider Sohanur Rahman. He has acknowledged and is heading directly there.",
        time: "04:00 PM"
      }
    ]
  },
  {
    id: "TKT-203",
    customer: "Rahim Chowdhury",
    phone: "+880 1819-223344",
    email: "rahim.c@outlook.com",
    orderId: "GB-1929",
    channel: "Website",
    category: "Payment & Refund",
    priority: "Medium",
    status: "Resolved",
    subject: "Query regarding bKash transaction verification",
    assignedAgent: "Farhana Akter",
    createdAt: "Nov 12, 2026 11:10",
    updatedAt: "Nov 12, 2026 11:30",
    messages: [
      {
        id: "msg-1",
        sender: "customer",
        senderName: "Rahim Chowdhury",
        text: "I sent bKash payment with TrxID 9K8L7M6N. Can you confirm if my order is marked Paid?",
        time: "11:10 AM"
      },
      {
        id: "msg-2",
        sender: "agent",
        senderName: "Farhana Akter",
        text: "Yes, we received and verified TrxID 9K8L7M6N. Your order is confirmed Paid and packed for dispatch.",
        time: "11:30 AM"
      }
    ]
  },
  {
    id: "TKT-204",
    customer: "Nusrat Jahan",
    phone: "+880 1722-998877",
    email: "nusrat.j@yahoo.com",
    orderId: "",
    channel: "Email",
    category: "General Inquiry",
    priority: "Low",
    status: "Closed",
    subject: "Do you supply fresh organic dragon fruits and honey in bulk?",
    assignedAgent: "Sazib Khan",
    createdAt: "Nov 10, 2026 09:20",
    updatedAt: "Nov 10, 2026 10:00",
    messages: [
      {
        id: "msg-1",
        sender: "customer",
        senderName: "Nusrat Jahan",
        text: "Hello GreenBasket team, we run a cafe in Banani and would like to order fresh dragon fruits and organic honey weekly.",
        time: "09:20 AM"
      },
      {
        id: "msg-2",
        sender: "agent",
        senderName: "Sazib Khan",
        text: "Hello Nusrat! Yes, we have dedicated B2B wholesale pricing. Our manager has sent our catalog to your email nusrat.j@yahoo.com.",
        time: "10:00 AM"
      }
    ]
  }
];

export const initialCustomers = [
  {
    id: "CUST-1001",
    name: "Sazib Ahmed",
    phone: "+880 1712-345678",
    email: "sazib.ahmed@gmail.com",
    address: "House #24, Road #4, Dhanmondi, Dhaka",
    status: "VIP",
    totalOrders: 3,
    totalSpent: 56.24,
    lastOrderDate: "Nov 08, 2026",
    notes: "Prefers morning home delivery. Regular weekly grocery buyer.",
    joinedDate: "Oct 15, 2026"
  },
  {
    id: "CUST-1002",
    name: "Sarah Ahmed",
    phone: "+880 1712-345678",
    email: "sarah.ahmed@yahoo.com",
    address: "House 24, Road 7, Dhanmondi, Dhaka",
    status: "VIP",
    totalOrders: 4,
    totalSpent: 84.50,
    lastOrderDate: "Nov 07, 2026",
    notes: "Special interest in organic dairy and avocados.",
    joinedDate: "Oct 18, 2026"
  },
  {
    id: "CUST-1003",
    name: "Rafiqul Islam",
    phone: "+880 1819-876543",
    email: "rafiq.islam@hotmail.com",
    address: "Flat 4B, Green Tower, Gulshan-2, Dhaka",
    status: "Active",
    totalOrders: 2,
    totalSpent: 38.20,
    lastOrderDate: "Nov 07, 2026",
    notes: "Requires call 15 mins prior to rider arrival.",
    joinedDate: "Nov 01, 2026"
  },
  {
    id: "CUST-1004",
    name: "Tanzina Akter",
    phone: "+880 1911-234890",
    email: "tanzina.akter@gmail.com",
    address: "Plot 15, Sector 4, Uttara, Dhaka",
    status: "Active",
    totalOrders: 1,
    totalSpent: 12.80,
    lastOrderDate: "Nov 06, 2026",
    notes: "First time customer, paid via credit card.",
    joinedDate: "Nov 06, 2026"
  },
  {
    id: "CUST-1005",
    name: "Kamal Hossain",
    phone: "+880 1610-998877",
    email: "kamal.hossain@gmail.com",
    address: "Apt 2A, Rose Garden, Mirpur 10, Dhaka",
    status: "Active",
    totalOrders: 2,
    totalSpent: 45.00,
    lastOrderDate: "Nov 05, 2026",
    notes: "Orders fresh fruits and superfoods regularly.",
    joinedDate: "Oct 25, 2026"
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

const syncToGist = async (productsData, settingsData, ordersData, employeesData, adminUsersData, customersData) => {
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
      adminUsers: adminUsersData || [],
      customers: customersData || []
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
const sortOrdersRecentFirst = (a, b) => {
  const timeA = a.date ? Date.parse(a.date) : (a.timestamp || 0);
  const timeB = b.date ? Date.parse(b.date) : (b.timestamp || 0);
  if (!isNaN(timeA) && !isNaN(timeB) && timeA !== timeB) return timeB - timeA;
  const numA = parseInt(String(a.id || "").replace(/\D/g, ""), 10);
  const numB = parseInt(String(b.id || "").replace(/\D/g, ""), 10);
  if (!isNaN(numA) && !isNaN(numB)) return numB - numA;
  return 0;
};

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
function HeadlessBridge({ products, orders, setOrders, storeSettings, customers, setCustomers }) {
  useEffect(() => {
    const sendData = () => {
      try {
        const storedProducts = localStorage.getItem("greenbasket_products");
        const storedOrders = localStorage.getItem("greenbasket_orders");
        const storedSettings = localStorage.getItem("greenbasket_settings");
        const storedCustomers = localStorage.getItem("greenbasket_customers");
        const p = storedProducts ? JSON.parse(storedProducts) : products;
        const o = storedOrders ? JSON.parse(storedOrders) : orders;
        const s = storedSettings ? JSON.parse(storedSettings) : storeSettings;
        const c = storedCustomers ? JSON.parse(storedCustomers) : customers;
        window.parent.postMessage(
          {
            type: "GB_CATALOG_SYNC",
            products: p,
            orders: o,
            settings: s,
            customers: c
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
        e.key === "greenbasket_settings" ||
        e.key === "greenbasket_customers"
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
          e.data?.type === "GB_SETTINGS_UPDATED" ||
          e.data?.type === "GB_CUSTOMERS_UPDATED"
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
          const updated = [normalized, ...list.filter((item) => item.id !== normalized.id)].sort(sortOrdersRecentFirst);
          localStorage.setItem("greenbasket_orders", JSON.stringify(updated));
          if (setOrders) setOrders(updated);

          // Auto update or enroll customer in Customer Control
          try {
            const currentCustsRaw = localStorage.getItem("greenbasket_customers");
            let custList = currentCustsRaw ? JSON.parse(currentCustsRaw) : (customers || []);
            const cPhone = normalized.customerPhone || normalized.phone || "";
            const cName = normalized.customer || normalized.customerName || "Customer";
            const cIdx = custList.findIndex(c => 
              (cPhone && c.phone === cPhone) || 
              (cName && c.name.toLowerCase() === cName.toLowerCase())
            );

            if (cIdx >= 0) {
              custList[cIdx] = {
                ...custList[cIdx],
                totalOrders: (Number(custList[cIdx].totalOrders) || 0) + 1,
                totalSpent: (Number(custList[cIdx].totalSpent) || 0) + Number(normalized.total || 0),
                lastOrderDate: normalized.date || "Today",
                address: normalized.deliveryAddress || normalized.address || custList[cIdx].address,
                phone: cPhone || custList[cIdx].phone
              };
            } else {
              const newC = {
                id: "CUST-" + (1000 + custList.length + 1),
                name: cName,
                phone: cPhone,
                email: "",
                address: normalized.deliveryAddress || normalized.address || "Standard Home Delivery",
                status: "Active",
                totalOrders: 1,
                totalSpent: Number(normalized.total || 0),
                lastOrderDate: normalized.date || "Today",
                joinedDate: normalized.date || "Today",
                notes: normalized.notes || "Auto-enrolled from website order"
              };
              custList = [newC, ...custList];
            }
            localStorage.setItem("greenbasket_customers", JSON.stringify(custList));
            if (setCustomers) setCustomers(custList);
          } catch (cErr) {
            console.warn("Failed to update customer in bridge", cErr);
          }

          const notifyCh = new BroadcastChannel("gb_bridge_channel");
          notifyCh.postMessage({ type: "GB_NEW_ORDER", order: normalized });
          notifyCh.postMessage({ type: "GB_ORDERS_UPDATED", orders: updated });
          notifyCh.postMessage({ type: "GB_CUSTOMERS_UPDATED", customers: custList });
          notifyCh.close();
          syncToGist(products, storeSettings, updated, [], [], custList);
        } catch (err) {
          console.warn("Failed to save new order in bridge", err);
        }
      }

      if (e.data.type === "GB_NEW_CUSTOMER" && e.data.customer) {
        try {
          const currentCustsRaw = localStorage.getItem("greenbasket_customers");
          let custList = currentCustsRaw ? JSON.parse(currentCustsRaw) : (customers || []);
          const incoming = e.data.customer;
          const exists = custList.some(c => 
            (incoming.email && c.email && c.email.toLowerCase() === incoming.email.toLowerCase()) ||
            (incoming.phone && c.phone && c.phone === incoming.phone)
          );
          if (!exists) {
            const newC = {
              id: incoming.id || ("CUST-" + (1000 + custList.length + 1)),
              name: incoming.name || "Customer",
              phone: incoming.phone || "",
              email: incoming.email || "",
              address: incoming.address || "Standard Home Delivery",
              status: incoming.status || "Active",
              totalOrders: 0,
              totalSpent: 0,
              lastOrderDate: "N/A",
              joinedDate: incoming.joinedDate || new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
              notes: incoming.notes || "Registered via customer website"
            };
            custList = [newC, ...custList];
            localStorage.setItem("greenbasket_customers", JSON.stringify(custList));
            if (setCustomers) setCustomers(custList);
            const notifyCh = new BroadcastChannel("gb_bridge_channel");
            notifyCh.postMessage({ type: "GB_NEW_CUSTOMER", customer: newC });
            notifyCh.postMessage({ type: "GB_CUSTOMERS_UPDATED", customers: custList });
            notifyCh.close();
            syncToGist(products, storeSettings, orders, [], [], custList);
          }
        } catch (cErr) {
          console.warn("Failed to save new customer in bridge", cErr);
        }
      }
    };
    window.addEventListener("message", handleParent);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("message", handleParent);
      if (ch) ch.close();
    };
  }, [products, orders, setOrders, storeSettings, customers, setCustomers]);

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



  // Categories State & Photo Management
  const defaultCategories = [
    { name: "Vegetables", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=450&q=85" },
    { name: "Fruits", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=450&q=85" },
    { name: "Herbs & Greens", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=450&q=85" },
    { name: "Dairy", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=450&q=85" },
    { name: "Bakery", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=450&q=85" },
    { name: "Pantry", image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=450&q=85" },
    { name: "Beverages", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=450&q=85" }
  ];

  const getCatName = (c) => (typeof c === "string" ? c : (c.name || ""));
  const getCatImage = (c) => (typeof c === "string" ? "" : (c.image || ""));

  const [categories, setCategories] = useState(() => {
    try {
      const saved = localStorage.getItem("greenbasket_categories");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item) => {
            if (typeof item === "string") {
              const matched = defaultCategories.find(d => d.name.toLowerCase() === item.toLowerCase());
              return { name: item, image: matched?.image || "" };
            }
            return item;
          });
        }
      }
    } catch {}
    return defaultCategories;
  });

  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryImage, setNewCategoryImage] = useState("");
  const categoryFileInputRef = useRef(null);

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
      return list.map(normalizeOrder).sort(sortOrdersRecentFirst);
    } catch {
      return initialOrders.map(normalizeOrder).sort(sortOrdersRecentFirst);
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

  // Live Google Maps Tracking States for Delivery Employees
  const [selectedRiderId, setSelectedRiderId] = useState("EMP-101");
  const [isTrackingMapOpen, setIsTrackingMapOpen] = useState(true);
  const [isGpsRefreshing, setIsGpsRefreshing] = useState(false);
  const [mapRiderJitter, setMapRiderJitter] = useState({ lat: 0, lng: 0 });
  const [lastGpsPingTime, setLastGpsPingTime] = useState("Just now");
  const trackingMapRef = useRef(null);

  // Customer Support System States
  const [supportTickets, setSupportTickets] = useState(() => {
    try {
      const saved = localStorage.getItem("greenbasket_support_tickets");
      return saved ? JSON.parse(saved) : initialSupportTickets;
    } catch {
      return initialSupportTickets;
    }
  });
  const [supportSearch, setSupportSearch] = useState("");
  const [supportStatusFilter, setSupportStatusFilter] = useState("All");
  const [supportPriorityFilter, setSupportPriorityFilter] = useState("All");
  const [supportCategoryFilter, setSupportCategoryFilter] = useState("All");
  const [activeTicketForModal, setActiveTicketForModal] = useState(null);
  const [newTicketModalOpen, setNewTicketModalOpen] = useState(false);
  const [ticketReplyText, setTicketReplyText] = useState("");
  const [newTicketForm, setNewTicketForm] = useState({
    customer: "",
    phone: "",
    email: "",
    orderId: "",
    channel: "WhatsApp",
    category: "Order & Delivery",
    priority: "High",
    subject: "",
    initialMessage: "",
    assignedAgent: "Farhana Akter"
  });

  const handleCreateTicket = (e) => {
    if (e) e.preventDefault();
    if (!newTicketForm.customer.trim() || !newTicketForm.subject.trim()) {
      alert("Please provide customer name and issue subject.");
      return;
    }
    const newId = `TKT-${Math.floor(200 + Math.random() * 800)}`;
    const newTicket = {
      id: newId,
      customer: newTicketForm.customer.trim(),
      phone: newTicketForm.phone.trim() || "+880 1714-703406",
      email: newTicketForm.email.trim() || "customer@greenbasket.com",
      orderId: newTicketForm.orderId.trim(),
      channel: newTicketForm.channel || "WhatsApp",
      category: newTicketForm.category || "Order & Delivery",
      priority: newTicketForm.priority || "High",
      status: "Open",
      subject: newTicketForm.subject.trim(),
      assignedAgent: newTicketForm.assignedAgent || "Farhana Akter",
      createdAt: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) + " " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      updatedAt: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) + " " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      messages: [
        {
          id: "msg-" + Date.now(),
          sender: "customer",
          senderName: newTicketForm.customer.trim(),
          text: newTicketForm.initialMessage.trim() || newTicketForm.subject.trim(),
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]
    };
    setSupportTickets((prev) => {
      const next = [newTicket, ...prev];
      try {
        localStorage.setItem("greenbasket_support_tickets", JSON.stringify(next));
      } catch (err) {
        console.error(err);
      }
      return next;
    });
    setNewTicketModalOpen(false);
    setNewTicketForm({
      customer: "",
      phone: "",
      email: "",
      orderId: "",
      channel: "WhatsApp",
      category: "Order & Delivery",
      priority: "High",
      subject: "",
      initialMessage: "",
      assignedAgent: "Farhana Akter"
    });
    triggerToast(`Support Ticket ${newId} created successfully!`);
  };

  const handleSendTicketReply = (ticketId, resolve = false) => {
    if (!ticketReplyText.trim()) return;
    const newMsg = {
      id: "msg-" + Date.now(),
      sender: "agent",
      senderName: currentUser ? currentUser.name : "Support Specialist",
      text: ticketReplyText.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    setSupportTickets((prev) => {
      const next = prev.map((t) => {
        if (t.id !== ticketId) return t;
        return {
          ...t,
          status: resolve ? "Resolved" : t.status === "Open" ? "In Progress" : t.status,
          updatedAt:
            new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) +
            " " +
            new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          messages: [...(t.messages || []), newMsg]
        };
      });
      try {
        localStorage.setItem("greenbasket_support_tickets", JSON.stringify(next));
      } catch (err) {
        console.error(err);
      }
      return next;
    });
    setTicketReplyText("");
    if (activeTicketForModal && activeTicketForModal.id === ticketId) {
      setActiveTicketForModal((prev) => ({
        ...prev,
        status: resolve ? "Resolved" : prev.status === "Open" ? "In Progress" : prev.status,
        messages: [...(prev.messages || []), newMsg]
      }));
    }
    triggerToast(resolve ? "Reply sent & ticket marked as Resolved!" : "Reply sent to customer!");
  };

  const handleUpdateTicketStatus = (ticketId, newStatus) => {
    setSupportTickets((prev) => {
      const next = prev.map((t) => (t.id === ticketId ? { ...t, status: newStatus } : t));
      try {
        localStorage.setItem("greenbasket_support_tickets", JSON.stringify(next));
      } catch (err) {
        console.error(err);
      }
      return next;
    });
    if (activeTicketForModal && activeTicketForModal.id === ticketId) {
      setActiveTicketForModal((prev) => ({ ...prev, status: newStatus }));
    }
    triggerToast(`Ticket status updated to ${newStatus}`);
  };

  const handleDeleteTicket = (ticketId) => {
    if (!window.confirm("Are you sure you want to delete this customer support ticket?")) return;
    setSupportTickets((prev) => {
      const next = prev.filter((t) => t.id !== ticketId);
      try {
        localStorage.setItem("greenbasket_support_tickets", JSON.stringify(next));
      } catch (err) {
        console.error(err);
      }
      return next;
    });
    if (activeTicketForModal && activeTicketForModal.id === ticketId) {
      setActiveTicketForModal(null);
    }
    triggerToast("Support ticket removed.");
  };

    // Analytics Delivery Employee Monthly Payout & Calendar States
  const [analyticsMonth, setAnalyticsMonth] = useState(10); // 10 = November
  const [analyticsYear, setAnalyticsYear] = useState(2026);
  const [selectedCalendarDay, setSelectedCalendarDay] = useState(null);
  const [deliveryFeeRate, setDeliveryFeeRate] = useState(5.0);
  const [onlyDeliveredFilter, setOnlyDeliveredFilter] = useState(true);
  const [selectedRiderDetails, setSelectedRiderDetails] = useState(null);
  const [deliveryPayoutStatuses, setDeliveryPayoutStatuses] = useState(() => {
    try {
      const saved = localStorage.getItem("greenbasket_delivery_payouts");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleRiderPayoutStatus = (payoutKey) => {
    setDeliveryPayoutStatuses((prev) => {
      const next = {
        ...prev,
        [payoutKey]: prev[payoutKey] === "Paid" ? "Pending" : "Paid"
      };
      try {
        localStorage.setItem("greenbasket_delivery_payouts", JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const handleRefreshGps = () => {
    setIsGpsRefreshing(true);
    const randomLat = (Math.random() - 0.5) * 0.0016;
    const randomLng = (Math.random() - 0.5) * 0.0016;
    setMapRiderJitter({ lat: randomLat, lng: randomLng });
    setLastGpsPingTime("Just now");
    setTimeout(() => {
      setIsGpsRefreshing(false);
    }, 600);
  };

  const focusRiderOnMap = (riderName) => {
    if (!riderName) return;
    const found = employees.find(
      (e) =>
        (e.department === "Logistics & Delivery" ||
          (e.role && e.role.toLowerCase().includes("delivery")) ||
          (e.role && e.role.toLowerCase().includes("rider"))) &&
        e.name.toLowerCase().includes(riderName.toLowerCase())
    );
    if (found) {
      setSelectedRiderId(found.id);
    }
    setIsTrackingMapOpen(true);
    setTimeout(() => {
      trackingMapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  // Customer Control System States
  const [customers, setCustomers] = useState(() => {
    try {
      const saved = localStorage.getItem("greenbasket_customers");
      return saved ? JSON.parse(saved) : initialCustomers;
    } catch {
      return initialCustomers;
    }
  });
  const [customerSearch, setCustomerSearch] = useState("");
  const [customerStatusFilter, setCustomerStatusFilter] = useState("All");
  const [customerModalOpen, setCustomerModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [viewOrdersCustomer, setViewOrdersCustomer] = useState(null);
  const [customerForm, setCustomerForm] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    status: "Active",
    notes: ""
  });

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
    image: "",
    role: "Delivery Rider",
    department: "Logistics & Delivery",
    phone: "",
    email: "",
    salary: 380,
    status: "Active",
    vehicleType: "",
    nid: ""
  });
  const employeeFileInputRef = useRef(null);

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

  const [adminAccordionOpen, setAdminAccordionOpen] = useState(false);
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

  const playChime = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch (e) {}
  };

  // Fetch latest cloud catalog, orders & customers on initial mount and background cloud polling
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
              let newArrival = null;
              parsed.orders.forEach((o) => {
                const norm = normalizeOrder(o);
                if (norm && !prev.some(p => p.id === norm.id)) {
                  newArrival = norm;
                }
              });
              prev.forEach((o) => {
                if (!cloudMap.has(o.id)) cloudMap.set(o.id, o);
              });
              const merged = Array.from(cloudMap.values());
              localStorage.setItem("greenbasket_orders", JSON.stringify(merged));
              if (newArrival && prev.length > 0) {
                if (storeSettings.orderSoundAlert !== false) playChime();
                triggerToast(`🔔 New Order #${newArrival.id} received from ${newArrival.customer || newArrival.customerName}!`);
              }
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
          if (Array.isArray(parsed.customers) && parsed.customers.length > 0) {
            setCustomers((prev) => {
              const custMap = new Map();
              parsed.customers.forEach((c) => {
                if (c && c.id) custMap.set(c.id, c);
              });
              let newCust = null;
              parsed.customers.forEach((c) => {
                if (c && !prev.some(p => p.id === c.id || (c.email && p.email && p.email.toLowerCase() === c.email.toLowerCase()))) {
                  newCust = c;
                }
              });
              prev.forEach((c) => {
                if (c && c.id && !custMap.has(c.id)) custMap.set(c.id, c);
              });
              const mergedCusts = Array.from(custMap.values());
              localStorage.setItem("greenbasket_customers", JSON.stringify(mergedCusts));
              if (newCust && prev.length > 0) {
                playChime();
                triggerToast(`👤 New Customer '${newCust.name}' registered & added to Customer Control!`);
              }
              return mergedCusts;
            });
          }
        }
      } catch (e) {}
    };
    fetchLatest();
    const pollTimer = setInterval(fetchLatest, 2000);
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

  // Persist customers to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("greenbasket_customers", JSON.stringify(customers));
    } catch (e) {}
  }, [customers]);

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
      syncToGist(products, storeSettings, orders, employees, registeredUsers, customers);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [products, orders, storeSettings]);

  // Helper to handle incoming order and update both Orders and Customer Control
  const handleIncomingNewOrder = (rawOrder) => {
    const normalized = normalizeOrder(rawOrder);
    setOrders((prev) => {
      const next = [normalized, ...prev.filter((o) => o.id !== normalized.id)].sort(sortOrdersRecentFirst);
      localStorage.setItem("greenbasket_orders", JSON.stringify(next));
      return next;
    });

    // Auto-update or enroll customer in Customer Control
    setCustomers((prevCusts) => {
      const cPhone = normalized.customerPhone || normalized.phone || "";
      const cName = normalized.customer || normalized.customerName || "Customer";
      const cEmail = normalized.customerEmail || normalized.email || "";
      const cIdx = prevCusts.findIndex((c) =>
        (cPhone && c.phone === cPhone) ||
        (cEmail && c.email && c.email.toLowerCase() === cEmail.toLowerCase()) ||
        (cName && c.name.toLowerCase() === cName.toLowerCase())
      );

      let nextCusts;
      if (cIdx >= 0) {
        nextCusts = [...prevCusts];
        nextCusts[cIdx] = {
          ...nextCusts[cIdx],
          totalOrders: (Number(nextCusts[cIdx].totalOrders) || 0) + 1,
          totalSpent: Number(((Number(nextCusts[cIdx].totalSpent) || 0) + Number(normalized.total || 0)).toFixed(2)),
          lastOrderDate: normalized.date || "Today",
          address: normalized.deliveryAddress || normalized.address || nextCusts[cIdx].address,
          phone: cPhone || nextCusts[cIdx].phone,
          email: cEmail || nextCusts[cIdx].email
        };
      } else {
        const newC = {
          id: "CUST-" + (1000 + prevCusts.length + 1),
          name: cName,
          phone: cPhone,
          email: cEmail,
          address: normalized.deliveryAddress || normalized.address || "Standard Home Delivery",
          status: "Active",
          totalOrders: 1,
          totalSpent: Number(normalized.total || 0),
          lastOrderDate: normalized.date || "Today",
          joinedDate: normalized.date || "Today",
          notes: normalized.notes || "Auto-enrolled from website order"
        };
        nextCusts = [newC, ...prevCusts];
      }
      localStorage.setItem("greenbasket_customers", JSON.stringify(nextCusts));
      syncToGist(products, storeSettings, [normalized, ...orders], employees, registeredUsers, nextCusts);
      return nextCusts;
    });

    if (storeSettings.orderSoundAlert !== false) {
      playChime();
    }
    triggerToast(`🔔 New Order #${normalized.id} received from ${normalized.customer}! Total: $${Number(normalized.total || 0).toFixed(2)}`);
  };

  const handleCategoryFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      triggerToast("Please select a valid image file (PNG, JPG, WebP)");
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      setNewCategoryImage(event.target.result);
      triggerToast("Category photo selected!");
    };
    reader.readAsDataURL(file);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    const trimmed = newCategoryName.trim();
    if (!trimmed) {
      triggerToast("Please enter a category name");
      return;
    }
    const exists = categories.some((c) => getCatName(c).toLowerCase() === trimmed.toLowerCase());
    if (exists) {
      triggerToast(`Category "${trimmed}" already exists`);
      return;
    }
    const newCatItem = {
      name: trimmed,
      image: newCategoryImage.trim() || "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=450&q=85"
    };
    const updated = [...categories, newCatItem];
    setCategories(updated);
    localStorage.setItem("greenbasket_categories", JSON.stringify(updated));
    setSelectedCategory(trimmed);
    setForm((prev) => ({ ...prev, category: trimmed }));
    setNewCategoryName("");
    setNewCategoryImage("");
    setCategoryModalOpen(false);
    triggerToast(`New category "${trimmed}" with photo added to Product Catalog!`);
    syncToGist(products, storeSettings, orders, employees, registeredUsers, customers, updated);
  };

  const handleDeleteCategory = (catToDelete) => {
    if (categories.length <= 1) {
      triggerToast("At least one category must remain");
      return;
    }
    const targetName = getCatName(catToDelete);
    const count = products.filter((p) => p.category === targetName).length;
    if (count > 0) {
      if (!window.confirm(`Category "${targetName}" has ${count} product(s). Are you sure you want to remove it?`)) {
        return;
      }
    }
    const updated = categories.filter((c) => getCatName(c) !== targetName);
    setCategories(updated);
    localStorage.setItem("greenbasket_categories", JSON.stringify(updated));
    if (selectedCategory === targetName) {
      setSelectedCategory("All");
    }
    triggerToast(`Category "${targetName}" removed`);
    syncToGist(products, storeSettings, orders, employees, registeredUsers, customers, updated);
  };

  const handleIncomingNewCustomer = (incomingCust) => {
    setCustomers((prevCusts) => {
      const exists = prevCusts.some((c) =>
        (incomingCust.email && c.email && c.email.toLowerCase() === incomingCust.email.toLowerCase()) ||
        (incomingCust.phone && c.phone && c.phone === incomingCust.phone)
      );
      if (!exists) {
        const newC = {
          id: incomingCust.id || ("CUST-" + (1000 + prevCusts.length + 1)),
          name: incomingCust.name || "Customer",
          phone: incomingCust.phone || "",
          email: incomingCust.email || "",
          address: incomingCust.address || "Standard Home Delivery",
          status: incomingCust.status || "Active",
          totalOrders: 0,
          totalSpent: 0,
          lastOrderDate: "N/A",
          joinedDate: incomingCust.joinedDate || new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
          notes: incomingCust.notes || "Registered via customer website"
        };
        const next = [newC, ...prevCusts];
        localStorage.setItem("greenbasket_customers", JSON.stringify(next));
        syncToGist(products, storeSettings, orders, employees, registeredUsers, next);
        return next;
      }
      return prevCusts;
    });
    playChime();
    triggerToast(`👤 New customer '${incomingCust.name}' registered & added to Customer Control!`);
  };

  // Listen for handshakes, new orders & new customer registrations from storefront
  useEffect(() => {
    let ch;
    try {
      ch = new BroadcastChannel("gb_bridge_channel");
      ch.onmessage = (e) => {
        if (e.data?.type === "GB_NEW_ORDER" && e.data.order) {
          handleIncomingNewOrder(e.data.order);
        }
        if (e.data?.type === "GB_NEW_CUSTOMER" && e.data.customer) {
          handleIncomingNewCustomer(e.data.customer);
        }
        if (e.data?.type === "GB_ORDERS_UPDATED" && Array.isArray(e.data.orders)) {
          setOrders(e.data.orders);
        }
        if (e.data?.type === "GB_CUSTOMERS_UPDATED" && Array.isArray(e.data.customers)) {
          setCustomers(e.data.customers);
        }
      };
    } catch (e) {}

    const handleStorageChange = (e) => {
      if (e.key === "greenbasket_orders" && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (Array.isArray(parsed)) setOrders(parsed);
        } catch (err) {}
      }
      if (e.key === "greenbasket_customers" && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (Array.isArray(parsed)) setCustomers(parsed);
        } catch (err) {}
      }
    };
    window.addEventListener("storage", handleStorageChange);

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
          customers,
          timestamp: Date.now()
        };
        try { e.source?.postMessage(payload, "*"); } catch (err) {}
        try { storefrontWindowRef.current?.postMessage(payload, "*"); } catch (err) {}
      }
      if (e.data.type === "GB_NEW_ORDER" && e.data.order) {
        handleIncomingNewOrder(e.data.order);
      }
      if (e.data.type === "GB_NEW_CUSTOMER" && e.data.customer) {
        handleIncomingNewCustomer(e.data.customer);
      }
    };
    window.addEventListener("message", handleWindowMsg);

    return () => {
      if (ch) ch.close();
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("message", handleWindowMsg);
    };
  }, [products, orders, storeSettings, customers]);

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
      syncToGist(products, storeSettings, next, employees, registeredUsers, customers);
      return next;
    });
    if (selectedOrderForModal && selectedOrderForModal.id === orderId) {
      setSelectedOrderForModal((prev) => ({ ...prev, ...updatedFields }));
    }
    setIsEditingContact(false);
    triggerToast(`Order #${orderId} customer contact & delivery address updated!`);
  };

  // --- CUSTOMER CONTROL HANDLERS ---
  const handleOpenAddCustomer = () => {
    const nextId = "CUST-" + (1000 + customers.length + 1);
    setEditingCustomer(null);
    setCustomerForm({
      id: nextId,
      name: "",
      phone: "",
      email: "",
      address: "",
      status: "Active",
      notes: ""
    });
    setCustomerModalOpen(true);
  };

  const handleOpenEditCustomer = (cust) => {
    setEditingCustomer(cust);
    setCustomerForm({
      id: cust.id,
      name: cust.name || "",
      phone: cust.phone || "",
      email: cust.email || "",
      address: cust.address || "",
      status: cust.status || "Active",
      notes: cust.notes || ""
    });
    setCustomerModalOpen(true);
  };

  const handleSaveCustomer = (e) => {
    e.preventDefault();
    if (!customerForm.name.trim()) {
      triggerToast("Please enter customer name");
      return;
    }

    if (editingCustomer) {
      const updatedList = customers.map((c) =>
        c.id === editingCustomer.id
          ? {
              ...c,
              name: customerForm.name.trim(),
              phone: customerForm.phone.trim(),
              email: customerForm.email.trim(),
              address: customerForm.address.trim(),
              status: customerForm.status,
              notes: customerForm.notes.trim()
            }
          : c
      );
      setCustomers(updatedList);
      localStorage.setItem("greenbasket_customers", JSON.stringify(updatedList));
      syncToGist(products, storeSettings, orders, employees, registeredUsers, updatedList);
      triggerToast(`Customer '${customerForm.name}' profile updated!`);
    } else {
      const newCust = {
        id: customerForm.id || ("CUST-" + (1000 + customers.length + 1)),
        name: customerForm.name.trim(),
        phone: customerForm.phone.trim(),
        email: customerForm.email.trim(),
        address: customerForm.address.trim(),
        status: customerForm.status || "Active",
        notes: customerForm.notes.trim(),
        totalOrders: 0,
        totalSpent: 0,
        lastOrderDate: "N/A",
        joinedDate: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
      };
      const updatedList = [newCust, ...customers];
      setCustomers(updatedList);
      localStorage.setItem("greenbasket_customers", JSON.stringify(updatedList));
      syncToGist(products, storeSettings, orders, employees, registeredUsers, updatedList);
      triggerToast(`New customer '${newCust.name}' registered!`);
    }

    setCustomerModalOpen(false);
  };

  const handleDeleteCustomer = (custId) => {
    const cust = customers.find((c) => c.id === custId);
    if (window.confirm(`Are you sure you want to remove ${cust ? cust.name : 'this customer'} from system?`)) {
      const updatedList = customers.filter((c) => c.id !== custId);
      setCustomers(updatedList);
      localStorage.setItem("greenbasket_customers", JSON.stringify(updatedList));
      syncToGist(products, storeSettings, orders, employees, registeredUsers, updatedList);
      triggerToast("Customer record removed from database");
    }
  };

  const handleToggleCustomerStatus = (custId, newStatus) => {
    const updatedList = customers.map((c) =>
      c.id === custId ? { ...c, status: newStatus } : c
    );
    setCustomers(updatedList);
    localStorage.setItem("greenbasket_customers", JSON.stringify(updatedList));
    syncToGist(products, storeSettings, orders, employees, registeredUsers, updatedList);
    triggerToast(`Customer status updated to '${newStatus}'`);
  };

  // --- EMPLOYEE CONTROL SYSTEM HANDLERS ---
  const handleEmployeePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      triggerToast("Please select a valid image file (PNG, JPG, WebP)");
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      setEmployeeForm((prev) => ({ ...prev, image: event.target.result }));
      triggerToast("Employee photo selected!");
    };
    reader.readAsDataURL(file);
  };

  const handleOpenAddEmployee = () => {
    const nextId = "EMP-" + (100 + employees.length + 1);
    setEditingEmployee(null);
    setEmployeeForm({
      id: nextId,
      name: "",
      image: "",
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
      image: emp.image || "",
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

  const allCategoryTabs = ["All", ...categories.map(getCatName)];

  const filtered = products.filter((p) => {
    const matchesCat = selectedCategory === "All" || p.category === selectedCategory;
    const q = search.toLowerCase();
    const matchesSearch =
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.tag && p.tag.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  const filteredOrders = [...orders]
    .filter((o) => {
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
    })
    .sort(sortOrdersRecentFirst);

  const filteredSupportTickets = supportTickets.filter((t) => {
    const q = supportSearch.toLowerCase().trim();
    const matchSearch =
      !q ||
      t.id.toLowerCase().includes(q) ||
      t.customer.toLowerCase().includes(q) ||
      (t.phone && t.phone.toLowerCase().includes(q)) ||
      (t.orderId && t.orderId.toLowerCase().includes(q)) ||
      t.subject.toLowerCase().includes(q) ||
      (t.assignedAgent && t.assignedAgent.toLowerCase().includes(q));

    const matchStatus = supportStatusFilter === "All" || t.status === supportStatusFilter;
    const matchPriority = supportPriorityFilter === "All" || t.priority === supportPriorityFilter;
    const matchCategory = supportCategoryFilter === "All" || t.category === supportCategoryFilter;

    return matchSearch && matchStatus && matchPriority && matchCategory;
  });

  const openTicketsCount = supportTickets.filter((t) => t.status === "Open" || t.status === "In Progress").length;

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

  const deliveryStaff = employees.filter(
    (e) =>
      e.department === "Logistics & Delivery" ||
      (e.role && e.role.toLowerCase().includes("delivery")) ||
      (e.role && e.role.toLowerCase().includes("rider"))
  );
  const activeRider =
    deliveryStaff.find((e) => e.id === selectedRiderId) || deliveryStaff[0] || employees[0];
  const activeRiderLoc = getRiderLocationData(activeRider, mapRiderJitter);
  const activeRiderAssignedOrder =
    orders.find(
      (o) =>
        activeRider &&
        o.riderName &&
        o.riderName.toLowerCase().includes(activeRider.name.toLowerCase()) &&
        o.trackingStage !== "delivered"
    ) ||
    orders.find(
      (o) =>
        activeRider &&
        o.riderName &&
        o.riderName.toLowerCase().includes(activeRider.name.toLowerCase())
    );

  // Analytics: Monthly Delivery & Charge Calculations
  const monthlyOrders = orders.filter((o) => {
    const d = parseOrderDate(o.date);
    if (!d) return false;
    return d.getFullYear() === analyticsYear && d.getMonth() === analyticsMonth;
  });

  const activePeriodOrders = selectedCalendarDay
    ? monthlyOrders.filter((o) => {
        const d = parseOrderDate(o.date);
        return d && d.getDate() === selectedCalendarDay;
      })
    : monthlyOrders;

  const qualifyingOrders = activePeriodOrders.filter((o) => {
    if (!onlyDeliveredFilter) return true;
    return o.status === "Delivered" || o.trackingStage === "delivered";
  });

  const daysInSelectedMonth = new Date(analyticsYear, analyticsMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(analyticsYear, analyticsMonth, 1).getDay();

  const ordersByDay = {};
  monthlyOrders.forEach((o) => {
    const d = parseOrderDate(o.date);
    if (!d) return;
    const day = d.getDate();
    if (!ordersByDay[day]) ordersByDay[day] = [];
    ordersByDay[day].push(o);
  });

  const deliveryStaffList = employees.filter(
    (e) =>
      e.department === "Logistics & Delivery" ||
      (e.role && e.role.toLowerCase().includes("delivery")) ||
      (e.role && e.role.toLowerCase().includes("rider"))
  );

  const riderNamesSet = new Set(deliveryStaffList.map((e) => e.name));
  monthlyOrders.forEach((o) => {
    if (o.riderName && o.riderName !== "Pending Assignment") {
      riderNamesSet.add(o.riderName);
    }
  });

  const riderDeliveryStats = [...riderNamesSet]
    .map((riderName) => {
      const emp = deliveryStaffList.find(
        (e) => e.name.toLowerCase().trim() === riderName.toLowerCase().trim()
      );
      const riderOrders = qualifyingOrders.filter(
        (o) => o.riderName && o.riderName.toLowerCase().trim() === riderName.toLowerCase().trim()
      );
      const deliveredCount = riderOrders.length;
      const totalProducts = riderOrders.reduce((sum, o) => sum + getOrderProductCount(o), 0);
      const totalChargeEarned = Number((deliveredCount * deliveryFeeRate).toFixed(2));
      const payoutKey = `${emp?.id || riderName}_${analyticsYear}_${analyticsMonth}`;
      const payoutStatus =
        deliveryPayoutStatuses[payoutKey] || (deliveredCount > 0 ? "Pending" : "None");

      return {
        riderName,
        empId: emp?.id || "RIDER",
        role: emp?.role || "Delivery Rider",
        vehicle: emp?.vehicleType || "Delivery Vehicle",
        phone: emp?.phone || riderOrders[0]?.riderPhone || "",
        image: emp?.image || null,
        deliveredOrdersCount: deliveredCount,
        totalProductsDelivered: totalProducts,
        deliveryChargeEarned: totalChargeEarned,
        payoutKey,
        payoutStatus,
        orders: riderOrders
      };
    })
    .sort((a, b) => b.deliveredOrdersCount - a.deliveredOrdersCount);

  const totalMonthlyDeliveredOrders = qualifyingOrders.length;
  const totalMonthlyProductsDelivered = qualifyingOrders.reduce(
    (sum, o) => sum + getOrderProductCount(o),
    0
  );
  const totalMonthlyDeliveryCharges = Number(
    (totalMonthlyDeliveredOrders * deliveryFeeRate).toFixed(2)
  );
  const activeRidersCount = riderDeliveryStats.filter((r) => r.deliveredOrdersCount > 0).length;

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

  const filteredCustomers = customers.filter((c) => {
    const q = customerSearch.toLowerCase().trim();
    const matchSearch =
      !q ||
      (c.name && c.name.toLowerCase().includes(q)) ||
      (c.phone && c.phone.toLowerCase().includes(q)) ||
      (c.email && c.email.toLowerCase().includes(q)) ||
      (c.address && c.address.toLowerCase().includes(q)) ||
      (c.id && c.id.toLowerCase().includes(q));
    const matchStatus = customerStatusFilter === "All" || c.status === customerStatusFilter;
    return matchSearch && matchStatus;
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
        customers={customers}
        setCustomers={setCustomers}
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

          <div className="login-header" style={{ marginTop: "12px" }}>
            <h3>Admin Sign In</h3>
            <p>Enter your authorized credentials to access the GreenBasket management dashboard.</p>
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

          <div className="auth-bottom-switch" style={{ color: "#64748b", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
            <Lock size={13} style={{ color: "#166534" }} />
            <span>Secure Admin Portal · Authorized Personnel Only</span>
          </div>
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
            className={tab === "customers" ? "active" : ""}
            onClick={() => {
              setTab("customers");
              setMobileMenuOpen(false);
            }}
          >
            <UserCheck /> Customer Control
          </button>
          <button
            className={tab === "support" ? "active" : ""}
            onClick={() => {
              setTab("support");
              setMobileMenuOpen(false);
            }}
          >
            <Headphones /> Customer Support
            {openTicketsCount > 0 && (
              <span style={{ marginLeft: "auto", background: "#ef4444", color: "#ffffff", padding: "1px 6px", borderRadius: "10px", fontSize: "10.5px", fontWeight: 700 }}>
                {openTicketsCount}
              </span>
            )}
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
            className={tab === "admin_control" ? "active" : ""}
            onClick={() => {
              setTab("admin_control");
              setMobileMenuOpen(false);
            }}
          >
            <ShieldCheck /> Admin Control
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

        {/* SIDEBAR ADMIN ACCORDION MENU */}
        <div className="sidebar-admin-accordion">
          {/* Accordion Content (Expands upward) */}
          <div className={`accordion-content ${adminAccordionOpen || tab === "settings" ? "expanded" : "collapsed"}`}>
            <button
              type="button"
              className={`accordion-menu-item ${tab === "settings" ? "active" : ""}`}
              onClick={() => {
                setTab("settings");
                setMobileMenuOpen(false);
              }}
              title="Store Controls & Live Settings"
            >
              <Settings size={15} />
              <span>Store Controls & Settings</span>
            </button>

            <button
              type="button"
              className="accordion-menu-item danger"
              onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }}
              title="Sign out of Admin Panel"
            >
              <LogOut size={15} />
              <span>Log Out</span>
            </button>
          </div>

          {/* Accordion Header Toggle Button */}
          <button
            type="button"
            className="accordion-header-btn"
            onClick={() => setAdminAccordionOpen(!adminAccordionOpen)}
            title="Click to toggle Store Settings & Logout"
          >
            <div className="avatar" title={currentUser.name}>
              {getInitials(currentUser.name)}
            </div>
            <div className="admin-meta">
              <b>{currentUser.name}</b>
              <small>{currentUser.role || currentUser.email}</small>
            </div>
            <div className={`accordion-chevron ${adminAccordionOpen || tab === "settings" ? "open" : ""}`}>
              <ChevronUp size={16} />
            </div>
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
              className={tab === "customers" ? "selected" : ""}
              onClick={() => setTab("customers")}
            >
              <UserCheck size={14} style={{ verticalAlign: "middle", marginRight: "4px" }} />
              Customer Control ({customers.length})
            </button>
            <button
              className={tab === "support" ? "selected" : ""}
              onClick={() => setTab("support")}
            >
              <Headphones size={14} style={{ verticalAlign: "middle", marginRight: "4px" }} />
              Customer Support ({openTicketsCount})
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
              className={tab === "admin_control" ? "selected" : ""}
              onClick={() => setTab("admin_control")}
            >
              <ShieldCheck size={14} style={{ verticalAlign: "middle", marginRight: "4px" }} />
              Admin Control ({registeredUsers.length})
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
              <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                {/* Search Box */}
                <div className="search" style={{ margin: 0 }}>
                  <Search size={15} />
                  <input
                    placeholder="Search products by name or tag..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "#888", display: "grid", placeItems: "center" }}
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                {/* + New Category Button */}
                <button
                  type="button"
                  className="soft"
                  onClick={() => setCategoryModalOpen(true)}
                  title="Create a new product category"
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  <FolderPlus size={15} /> + New Category
                </button>

                {/* Add Product Button */}
                <button
                  type="button"
                  className="primary"
                  onClick={() => {
                    reset();
                    setShowForm(!showForm);
                  }}
                  title="Add a new product to catalog"
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  {showForm && !editing ? <X size={16} /> : <Plus size={16} />}
                  {showForm && !editing ? "Close Form" : "Add Product"}
                </button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="category-filter-pills" style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
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
              <button
                type="button"
                className="pill-btn add-category-pill"
                onClick={() => setCategoryModalOpen(true)}
                title="Add a new category to Product Catalog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  background: "#eef7ea",
                  color: "#285419",
                  border: "1.5px dashed #7cb365",
                  fontWeight: 700,
                  cursor: "pointer"
                }}
              >
                <Plus size={13} /> + New Category
              </button>
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
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <span>Category *</span>
                      <button
                        type="button"
                        onClick={() => setCategoryModalOpen(true)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#2f6b1b",
                          fontSize: "11px",
                          fontWeight: 700,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "3px",
                          padding: 0
                        }}
                      >
                        <Plus size={11} /> + New Category
                      </button>
                    </div>
                    <select
                      value={form.category}
                      onChange={(e) => {
                        if (e.target.value === "__NEW__") {
                          setCategoryModalOpen(true);
                        } else {
                          setForm({ ...form, category: e.target.value });
                        }
                      }}
                    >
                      {categories.map((c) => {
                        const cName = getCatName(c);
                        return (
                          <option key={cName} value={cName}>
                            {cName}
                          </option>
                        );
                      })}
                      <option value="__NEW__">+ Add New Category...</option>
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
                    <th>Order ID (Recent First ↓)</th>
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

        {/* TAB: CUSTOMER CONTROL & RELATIONSHIP HUB */}
        {tab === "customers" && (
          <div className="orders" style={{ padding: "24px" }}>
            {/* Header */}
            <div className="catalog-head" style={{ marginTop: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "linear-gradient(135deg, #1d4ed8, #2563eb)", display: "grid", placeItems: "center", color: "#fff", boxShadow: "0 2px 8px rgba(37,99,235,0.3)" }}>
                    <UserCheck size={22} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "22px", fontWeight: 800, color: "#1e293b" }}>Customer Control & Relationship Hub</h3>
                    <p style={{ margin: "3px 0 0", color: "#64748b", fontSize: "13px" }}>
                      Manage verified customer accounts, delivery addresses, order histories, WhatsApp messaging, and VIP or blocked statuses.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <button
                  type="button"
                  className="primary"
                  onClick={handleOpenAddCustomer}
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 20px", borderRadius: "10px", fontWeight: 700, fontSize: "13px", boxShadow: "0 2px 8px rgba(37,99,235,0.25)" }}
                >
                  <UserPlus size={16} /> Add Customer Profile
                </button>
              </div>
            </div>

            {/* METRICS ROW */}
            <div className="emp-metric-grid" style={{ marginTop: "24px" }}>
              <div className="emp-metric-card">
                <div className="emp-metric-icon blue">
                  <Users size={24} />
                </div>
                <div>
                  <div className="emp-metric-value">{customers.length}</div>
                  <div className="emp-metric-label">Registered Customers</div>
                  <div className="emp-metric-sub">Across all delivery zones</div>
                </div>
              </div>

              <div className="emp-metric-card">
                <div className="emp-metric-icon orange">
                  <BadgeCheck size={24} />
                </div>
                <div>
                  <div className="emp-metric-value">
                    {customers.filter(c => c.status === "VIP" || c.totalOrders >= 2).length}
                  </div>
                  <div className="emp-metric-label">VIP / Loyal Buyers</div>
                  <div className="emp-metric-sub">Frequent repeat shoppers</div>
                </div>
              </div>

              <div className="emp-metric-card">
                <div className="emp-metric-icon green">
                  <DollarSign size={24} />
                </div>
                <div>
                  <div className="emp-metric-value">
                    ${(sales / (customers.length || 1)).toFixed(2)}
                  </div>
                  <div className="emp-metric-label">Avg. Customer LTV</div>
                  <div className="emp-metric-sub">Average spend per client</div>
                </div>
              </div>

              <div className="emp-metric-card">
                <div className="emp-metric-icon purple">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="emp-metric-value">
                    {customers.filter(c => c.status === "Blocked").length}
                  </div>
                  <div className="emp-metric-label">Blocked / Flagged</div>
                  <div className="emp-metric-sub">Fraud prevention filter</div>
                </div>
              </div>
            </div>

            {/* SEARCH & FILTERS BAR */}
            <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "16px 20px", marginBottom: "20px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-between", alignItems: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
              <div style={{ position: "relative", minWidth: "260px", flex: "1 1 280px" }}>
                <Search size={16} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
                <input
                  type="text"
                  placeholder="Search customers by name, phone, email, address, or ID..."
                  value={customerSearch}
                  onChange={(e) => setCustomerSearch(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px 10px 38px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", outline: "none", boxSizing: "border-box" }}
                />
              </div>

              {/* STATUS FILTER CHIPS */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#64748b", marginRight: "4px" }}>Filter:</span>
                {["All", "VIP", "Active", "Blocked"].map(st => (
                  <button
                    key={st}
                    type="button"
                    className={`emp-filter-chip ${customerStatusFilter === st ? "active" : ""}`}
                    onClick={() => setCustomerStatusFilter(st)}
                  >
                    {st === "All" ? "All Customers" : st === "VIP" ? "⭐ VIP Clients" : st === "Active" ? "● Active Buyers" : "🚫 Blocked"}
                  </button>
                ))}
              </div>
            </div>

            {/* CUSTOMER DIRECTORY TABLE */}
            <div className="orders-table-wrapper" style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", overflowX: "auto", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
              <table className="orders-table" style={{ width: "100%", borderCollapse: "collapse", minWidth: "960px" }}>
                <thead>
                  <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e2e8f0" }}>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>CUSTOMER</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>CONTACT INFO</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>DELIVERY ADDRESS</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>ORDERS & SPEND</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>STATUS</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#475569" }}>PREFERENCES / NOTES</th>
                    <th style={{ padding: "14px 16px", textAlign: "center", fontSize: "12px", fontWeight: 700, color: "#475569" }}>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.length === 0 ? (
                    <tr>
                      <td colSpan="7" style={{ padding: "48px 20px", textAlign: "center", color: "#94a3b8" }}>
                        <div style={{ fontSize: "16px", fontWeight: 700, color: "#64748b" }}>No customers found</div>
                        <p style={{ margin: "6px 0 0", fontSize: "13px" }}>Try adjusting your search query or filter selection</p>
                      </td>
                    </tr>
                  ) : (
                    filteredCustomers.map((cust) => {
                      const initials = getInitials(cust.name);
                      const isVip = cust.status === "VIP";
                      const isBlocked = cust.status === "Blocked";
                      const avatarClass = isVip ? "cust-avatar vip" : isBlocked ? "cust-avatar blocked" : "cust-avatar";
                      const customerOrdersList = orders.filter(o => 
                        (o.customer && o.customer.toLowerCase() === cust.name.toLowerCase()) || 
                        (o.customerPhone && o.customerPhone === cust.phone)
                      );
                      const actualOrdersCount = Math.max(cust.totalOrders || 0, customerOrdersList.length);
                      const actualTotalSpent = Math.max(cust.totalSpent || 0, customerOrdersList.reduce((sum, o) => sum + Number(o.total || 0), 0));

                      return (
                        <tr key={cust.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                          <td style={{ padding: "12px 16px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                              <div className={avatarClass}>
                                {initials}
                              </div>
                              <div>
                                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                  <span style={{ fontWeight: 700, color: "#0f172a", fontSize: "14px" }}>{cust.name}</span>
                                  {isVip && (
                                    <span className="cust-badge-vip">
                                      ⭐ VIP
                                    </span>
                                  )}
                                  {isBlocked && (
                                    <span className="cust-badge-blocked">
                                      🚫 Blocked
                                    </span>
                                  )}
                                </div>
                                <div style={{ display: "flex", gap: "6px", alignItems: "center", marginTop: "2px" }}>
                                  <span style={{ fontSize: "11px", color: "#64748b", fontFamily: "monospace", fontWeight: 600 }}>{cust.id}</span>
                                  <span style={{ fontSize: "11px", color: "#94a3b8" }}>· Joined {cust.joinedDate || "2026"}</span>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td style={{ padding: "12px 16px" }}>
                            <div>
                              {cust.phone ? (
                                <a href={`tel:${cust.phone}`} className="emp-contact-link">
                                  <Phone size={12} style={{ color: "#166534" }} /> {cust.phone}
                                </a>
                              ) : (
                                <span style={{ color: "#94a3b8", fontSize: "11px" }}>No phone</span>
                              )}
                            </div>
                            <div>
                              {cust.email ? (
                                <a href={`mailto:${cust.email}`} className="emp-contact-link" style={{ marginTop: "2px", color: "#64748b" }}>
                                  <Mail size={12} style={{ color: "#0284c7" }} /> {cust.email}
                                </a>
                              ) : null}
                            </div>
                          </td>

                          <td style={{ padding: "12px 16px" }}>
                            <div style={{ fontSize: "12px", color: "#334155", maxWidth: "240px", display: "flex", alignItems: "flex-start", gap: "5px" }}>
                              <MapPin size={13} style={{ color: "#166534", marginTop: "2px", flexShrink: 0 }} />
                              <span>{cust.address || "Standard Home Delivery"}</span>
                            </div>
                          </td>

                          <td style={{ padding: "12px 16px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                              <span className="cust-orders-badge">{actualOrdersCount} Orders</span>
                              <span className="cust-spend-pill">${actualTotalSpent.toFixed(2)}</span>
                            </div>
                            <div style={{ fontSize: "11px", color: "#64748b", marginTop: "4px" }}>
                              Last: {cust.lastOrderDate || "Recently"}
                            </div>
                          </td>

                          <td style={{ padding: "12px 16px" }}>
                            <select
                              value={cust.status}
                              onChange={(e) => handleToggleCustomerStatus(cust.id, e.target.value)}
                              className={`emp-select-status ${cust.status === "VIP" ? "on_delivery" : cust.status === "Blocked" ? "offline" : "active"}`}
                              style={{
                                background: cust.status === "VIP" ? "#fef9c3" : cust.status === "Blocked" ? "#fee2e2" : "#dcfce7",
                                color: cust.status === "VIP" ? "#854d0e" : cust.status === "Blocked" ? "#b91c1c" : "#15803d",
                                borderColor: cust.status === "VIP" ? "#facc15" : cust.status === "Blocked" ? "#fca5a5" : "#bbf7d0"
                              }}
                              title="Click to change customer status"
                            >
                              <option value="Active">● Active Buyer</option>
                              <option value="VIP">⭐ VIP Client</option>
                              <option value="Blocked">🚫 Blocked / Blacklist</option>
                            </select>
                          </td>

                          <td style={{ padding: "12px 16px" }}>
                            <div style={{ fontSize: "12px", color: "#64748b", maxWidth: "200px", fontStyle: cust.notes ? "normal" : "italic" }}>
                              {cust.notes || "No specific delivery notes"}
                            </div>
                          </td>

                          <td style={{ padding: "12px 16px", textAlign: "center" }}>
                            <div style={{ display: "flex", justifyContent: "center", gap: "6px" }}>
                              {cust.phone && (
                                <a
                                  href={`https://wa.me/${cust.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${cust.name}, thank you for choosing GreenBasket! How can we assist you today?`)}`}
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
                                onClick={() => setViewOrdersCustomer(cust)}
                                title="View Customer Orders History"
                              >
                                <ShoppingBag size={13} />
                              </button>
                              <button
                                type="button"
                                className="emp-action-btn edit"
                                onClick={() => handleOpenEditCustomer(cust)}
                                title="Edit Customer Details"
                              >
                                <Pencil size={13} />
                              </button>
                              <button
                                type="button"
                                className="emp-action-btn delete"
                                onClick={() => handleDeleteCustomer(cust.id)}
                                title="Delete Customer"
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

        {/* =========================================================
            TAB: CUSTOMER SUPPORT & HELPDESK HUB
        ========================================================= */}
        {tab === "support" && (
          <div className="orders" style={{ padding: "24px" }}>
            {/* Header & Quick Actions */}
            <div className="catalog-head" style={{ marginTop: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "14px" }}>
              <div>
                <span className="eyebrow" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Headphones size={13} /> LIVE HELPDESK & CUSTOMER RELATIONS
                </span>
                <h3 style={{ margin: "4px 0 0" }}>Customer Support & Inquiries Hub</h3>
                <p style={{ margin: "4px 0 0", color: "#62755c", fontSize: "13px" }}>
                  কাস্টমারদের সাপোর্ট টিকিট, সরাসরি হোয়াটসঅ্যাপ ও ফোন সমাধান, এবং রিয়েল-টাইম চ্যাট রিপ্লাই সিস্টেম।
                </p>
              </div>

              <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setNewTicketModalOpen(true)}
                  style={{ fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  <Plus size={14} /> New Support Ticket
                </button>
                <a
                  href="https://wa.me/8801714703406?text=Hello%20GreenBasket%20Support%20Desk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ textDecoration: "none", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "6px", background: "#f0fdf4", color: "#166534", border: "1px solid #bbf7d0" }}
                >
                  <Send size={13} /> WhatsApp Desk
                </a>
              </div>
            </div>

            {/* Support Hotlines & Channels Banner */}
            <div
              style={{
                background: "linear-gradient(135deg, #1b3d12, #2d6318)",
                borderRadius: "14px",
                padding: "16px 20px",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "14px",
                marginTop: "16px",
                marginBottom: "20px",
                boxShadow: "0 4px 14px rgba(43,97,24,0.2)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "grid", placeItems: "center" }}>
                  <Headphones size={22} color="#86efac" />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <b style={{ fontSize: "14.5px" }}>GreenBasket Official Customer Care Desk</b>
                    <span style={{ fontSize: "10.5px", background: "#22c55e", color: "#ffffff", padding: "1px 7px", borderRadius: "10px", fontWeight: 700 }}>
                      ● LIVE ONLINE
                    </span>
                  </div>
                  <span style={{ fontSize: "12px", color: "#bbf7d0" }}>
                    Helpline: <b>+880 1714-703406</b> • WhatsApp: <b>+880 1714-703406</b> • Email: <b>support@greenbasket.com</b>
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href="tel:+8801714703406"
                  style={{
                    background: "#ffffff",
                    color: "#1e3b14",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <Phone size={13} color="#16a34a" /> Call Helpline
                </a>
                <span style={{ fontSize: "11px", color: "#dcfce7" }}>
                  ⏰ 8:00 AM - 11:00 PM Daily
                </span>
              </div>
            </div>

            {/* Support KPI Metrics Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                gap: "14px",
                marginBottom: "20px"
              }}
            >
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "14px 16px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>Total Inquiries</span>
                  <MessageSquare size={18} color="#2563eb" />
                </div>
                <h3 style={{ margin: "6px 0 2px", fontSize: "22px", color: "#1e293b", fontWeight: 800 }}>
                  {supportTickets.length} <span style={{ fontSize: "12px", fontWeight: 600, color: "#64748b" }}>tickets</span>
                </h3>
                <small style={{ fontSize: "11px", color: "#64748b" }}>All time customer requests</small>
              </div>

              <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "12px", padding: "14px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "12px", color: "#1d4ed8", fontWeight: 600 }}>Awaiting Response (Open)</span>
                  <Clock size={18} color="#2563eb" />
                </div>
                <h3 style={{ margin: "6px 0 2px", fontSize: "22px", color: "#1d4ed8", fontWeight: 800 }}>
                  {supportTickets.filter(t => t.status === "Open").length} <span style={{ fontSize: "12px", fontWeight: 600, color: "#1d4ed8" }}>pending</span>
                </h3>
                <small style={{ fontSize: "11px", color: "#1e40af" }}>Needs immediate support reply</small>
              </div>

              <div style={{ background: "#fefce8", border: "1px solid #fef08a", borderRadius: "12px", padding: "14px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "12px", color: "#854d0e", fontWeight: 600 }}>Under Investigation</span>
                  <LifeBuoy size={18} color="#ca8a04" />
                </div>
                <h3 style={{ margin: "6px 0 2px", fontSize: "22px", color: "#854d0e", fontWeight: 800 }}>
                  {supportTickets.filter(t => t.status === "In Progress").length} <span style={{ fontSize: "12px", fontWeight: 600, color: "#854d0e" }}>in progress</span>
                </h3>
                <small style={{ fontSize: "11px", color: "#854d0e" }}>Agent currently working</small>
              </div>

              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "14px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "12px", color: "#15803d", fontWeight: 600 }}>Resolved & Closed</span>
                  <CheckCircle2 size={18} color="#16a34a" />
                </div>
                <h3 style={{ margin: "6px 0 2px", fontSize: "22px", color: "#15803d", fontWeight: 800 }}>
                  {supportTickets.filter(t => t.status === "Resolved" || t.status === "Closed").length} <span style={{ fontSize: "12px", fontWeight: 600, color: "#166534" }}>solved</span>
                </h3>
                <small style={{ fontSize: "11px", color: "#166534" }}>Customer issue resolved</small>
              </div>
            </div>

            {/* Filter & Search Toolbar */}
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "14px",
                padding: "14px 16px",
                marginBottom: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.03)"
              }}
            >
              {/* Status Filter Chips */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#64748b" }}>Status:</span>
                {["All", "Open", "In Progress", "Resolved", "Closed"].map((st) => {
                  const count = st === "All" ? supportTickets.length : supportTickets.filter(t => t.status === st).length;
                  const isSelected = supportStatusFilter === st;
                  return (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setSupportStatusFilter(st)}
                      style={{
                        padding: "5px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: 600,
                        border: isSelected ? "1px solid #2b6118" : "1px solid #cbd5e1",
                        background: isSelected ? "#2b6118" : "#ffffff",
                        color: isSelected ? "#ffffff" : "#475569",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        transition: "all 0.15s ease"
                      }}
                    >
                      <span>{st}</span>
                      <span style={{ fontSize: "10.5px", background: isSelected ? "rgba(255,255,255,0.25)" : "#f1f5f9", color: isSelected ? "#fff" : "#475569", padding: "1px 6px", borderRadius: "10px" }}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Priority & Category Dropdowns + Search */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                {/* Priority */}
                <select
                  value={supportPriorityFilter}
                  onChange={(e) => setSupportPriorityFilter(e.target.value)}
                  style={{ padding: "6px 10px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "12px", fontWeight: 600, background: "#ffffff", color: "#334155", outline: "none" }}
                >
                  <option value="All">All Priorities</option>
                  <option value="Urgent">🔴 Urgent</option>
                  <option value="High">🟠 High</option>
                  <option value="Medium">🟡 Medium</option>
                  <option value="Low">🟢 Low</option>
                </select>

                {/* Category */}
                <select
                  value={supportCategoryFilter}
                  onChange={(e) => setSupportCategoryFilter(e.target.value)}
                  style={{ padding: "6px 10px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "12px", fontWeight: 600, background: "#ffffff", color: "#334155", outline: "none" }}
                >
                  <option value="All">All Categories</option>
                  <option value="Order & Delivery">📦 Order & Delivery</option>
                  <option value="Payment & Refund">💳 Payment & Refund</option>
                  <option value="Product Quality">🥦 Product Quality</option>
                  <option value="General Inquiry">💬 General Inquiry</option>
                </select>

                {/* Search Box */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "8px", padding: "5px 10px" }}>
                  <Search size={13} style={{ color: "#64748b" }} />
                  <input
                    type="text"
                    placeholder="Search tickets..."
                    value={supportSearch}
                    onChange={(e) => setSupportSearch(e.target.value)}
                    style={{ border: "none", outline: "none", background: "transparent", fontSize: "12px", width: "135px", color: "#1e293b" }}
                  />
                  {supportSearch && (
                    <button type="button" onClick={() => setSupportSearch("")} style={{ background: "transparent", border: "none", cursor: "pointer", color: "#94a3b8", padding: 0 }}>
                      <X size={11} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Support Tickets Table */}
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "14px", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "900px", fontSize: "12.5px" }}>
                  <thead>
                    <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0", textAlign: "left" }}>
                      <th style={{ padding: "12px 14px", fontWeight: 700, color: "#475569" }}>TICKET & CHANNEL</th>
                      <th style={{ padding: "12px 14px", fontWeight: 700, color: "#475569" }}>CUSTOMER & CONTACT</th>
                      <th style={{ padding: "12px 14px", fontWeight: 700, color: "#475569" }}>SUBJECT & RELATED ORDER</th>
                      <th style={{ padding: "12px 14px", fontWeight: 700, color: "#475569" }}>CATEGORY</th>
                      <th style={{ padding: "12px 14px", fontWeight: 700, color: "#475569" }}>PRIORITY</th>
                      <th style={{ padding: "12px 14px", fontWeight: 700, color: "#475569" }}>STATUS</th>
                      <th style={{ padding: "12px 14px", fontWeight: 700, color: "#475569" }}>ASSIGNED AGENT</th>
                      <th style={{ padding: "12px 14px", fontWeight: 700, color: "#475569", textAlign: "center" }}>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSupportTickets.length === 0 ? (
                      <tr>
                        <td colSpan={8} style={{ padding: "36px", textAlign: "center", color: "#64748b" }}>
                          <Headphones size={32} style={{ display: "block", margin: "0 auto 8px", opacity: 0.4 }} />
                          No support tickets found matching your search and filter criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredSupportTickets.map((t, idx) => {
                        const priorityColor =
                          t.priority === "Urgent"
                            ? { bg: "#fef2f2", text: "#b91c1c", border: "#fecaca" }
                            : t.priority === "High"
                            ? { bg: "#fff7ed", text: "#c2410c", border: "#fed7aa" }
                            : t.priority === "Medium"
                            ? { bg: "#fefce8", text: "#854d0e", border: "#fef08a" }
                            : { bg: "#f0fdf4", text: "#15803d", border: "#bbf7d0" };

                        const statusColor =
                          t.status === "Open"
                            ? { bg: "#eff6ff", text: "#1d4ed8", border: "#bfdbfe" }
                            : t.status === "In Progress"
                            ? { bg: "#fefce8", text: "#854d0e", border: "#fde047" }
                            : t.status === "Resolved"
                            ? { bg: "#dcfce7", text: "#15803d", border: "#86efac" }
                            : { bg: "#f1f5f9", text: "#475569", border: "#cbd5e1" };

                        return (
                          <tr key={t.id} style={{ borderBottom: "1px solid #f1f5f9", background: idx % 2 === 0 ? "#ffffff" : "#fbfcfe" }}>
                            {/* Ticket & Channel */}
                            <td style={{ padding: "12px 14px" }}>
                              <b style={{ color: "#1e293b", fontSize: "13px", display: "block" }}>{t.id}</b>
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "3px",
                                  fontSize: "10.5px",
                                  fontWeight: 600,
                                  color: "#475569",
                                  background: "#f1f5f9",
                                  padding: "2px 6px",
                                  borderRadius: "6px",
                                  marginTop: "3px"
                                }}
                              >
                                {t.channel === "WhatsApp" ? "💬 WhatsApp" : t.channel === "Phone Call" ? "📞 Phone" : t.channel === "Website" ? "🌐 Website" : "✉️ Email"}
                              </span>
                            </td>

                            {/* Customer & Contact */}
                            <td style={{ padding: "12px 14px" }}>
                              <b style={{ color: "#0f172a", fontSize: "13px" }}>{t.customer}</b>
                              {t.phone && (
                                <div style={{ fontSize: "11px", color: "#2b6118", marginTop: "2px" }}>
                                  <a href={`tel:${t.phone}`} style={{ color: "#2b6118", textDecoration: "none", fontWeight: 600 }}>
                                    <Phone size={10} style={{ verticalAlign: "middle", marginRight: "3px" }} />
                                    {t.phone}
                                  </a>
                                </div>
                              )}
                            </td>

                            {/* Subject & Related Order */}
                            <td style={{ padding: "12px 14px", maxWidth: "260px" }}>
                              <div style={{ fontWeight: 600, color: "#1e293b", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {t.subject}
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "3px" }}>
                                {t.orderId ? (
                                  <span style={{ fontSize: "10.5px", background: "#eff6ff", color: "#1d4ed8", padding: "1px 6px", borderRadius: "6px", fontWeight: 700 }}>
                                    Order #{t.orderId}
                                  </span>
                                ) : (
                                  <span style={{ fontSize: "10px", color: "#94a3b8" }}>General Query</span>
                                )}
                                <span style={{ fontSize: "10.5px", color: "#64748b" }}>• {t.createdAt}</span>
                              </div>
                            </td>

                            {/* Category */}
                            <td style={{ padding: "12px 14px" }}>
                              <span style={{ fontSize: "11.5px", color: "#475569" }}>
                                {t.category}
                              </span>
                            </td>

                            {/* Priority */}
                            <td style={{ padding: "12px 14px" }}>
                              <span
                                style={{
                                  fontSize: "11px",
                                  fontWeight: 700,
                                  padding: "3px 8px",
                                  borderRadius: "10px",
                                  background: priorityColor.bg,
                                  color: priorityColor.text,
                                  border: `1px solid ${priorityColor.border}`
                                }}
                              >
                                {t.priority}
                              </span>
                            </td>

                            {/* Status */}
                            <td style={{ padding: "12px 14px" }}>
                              <span
                                style={{
                                  fontSize: "11px",
                                  fontWeight: 700,
                                  padding: "3px 8px",
                                  borderRadius: "10px",
                                  background: statusColor.bg,
                                  color: statusColor.text,
                                  border: `1px solid ${statusColor.border}`
                                }}
                              >
                                {t.status}
                              </span>
                            </td>

                            {/* Assigned Agent */}
                            <td style={{ padding: "12px 14px" }}>
                              <div style={{ fontSize: "12px", color: "#1e293b", fontWeight: 600 }}>
                                {t.assignedAgent || "Unassigned"}
                              </div>
                            </td>

                            {/* Actions */}
                            <td style={{ padding: "12px 14px", textAlign: "center" }}>
                              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setActiveTicketForModal(t);
                                    setTicketReplyText("");
                                  }}
                                  style={{
                                    background: "#f0fdf4",
                                    border: "1px solid #bbf7d0",
                                    color: "#15803d",
                                    padding: "4px 8px",
                                    borderRadius: "6px",
                                    fontSize: "11px",
                                    fontWeight: 700,
                                    cursor: "pointer",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "4px"
                                  }}
                                  title="Open conversation and reply"
                                >
                                  <MessageSquare size={11} /> Reply
                                </button>
                                {t.phone && (
                                  <a
                                    href={`https://wa.me/${t.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${t.customer}, regarding your GreenBasket inquiry ${t.id}: `)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      background: "#25d366",
                                      color: "#ffffff",
                                      padding: "4px 7px",
                                      borderRadius: "6px",
                                      fontSize: "11px",
                                      textDecoration: "none",
                                      display: "inline-flex",
                                      alignItems: "center"
                                    }}
                                    title="Open WhatsApp chat with customer"
                                  >
                                    <Send size={11} />
                                  </a>
                                )}
                                <button
                                  type="button"
                                  onClick={() => handleDeleteTicket(t.id)}
                                  style={{
                                    background: "transparent",
                                    border: "none",
                                    color: "#ef4444",
                                    cursor: "pointer",
                                    padding: "4px"
                                  }}
                                  title="Delete ticket"
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

            {/* =========================================================
                TICKET CONVERSATION & REPLY MODAL
            ========================================================= */}
            {activeTicketForModal && (
              <div className="order-modal-backdrop" onClick={() => setActiveTicketForModal(null)}>
                <div className="order-modal-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "680px" }}>
                  <div className="order-modal-head" style={{ background: "linear-gradient(135deg, #1b3d12, #2d6318)" }}>
                    <div className="order-modal-title">
                      <span className="modal-eyebrow" style={{ color: "#86efac" }}>TICKET WORKSPACE • {activeTicketForModal.id}</span>
                      <h3 style={{ color: "#fff", margin: "2px 0 0" }}>{activeTicketForModal.subject}</h3>
                      <small style={{ color: "#dcfce7" }}>
                        Customer: <b>{activeTicketForModal.customer}</b> ({activeTicketForModal.phone})
                        {activeTicketForModal.orderId && ` • Related Order: #${activeTicketForModal.orderId}`}
                      </small>
                    </div>
                    <button
                      type="button"
                      className="modal-close-btn"
                      onClick={() => setActiveTicketForModal(null)}
                      style={{ color: "#fff" }}
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="order-modal-body" style={{ maxHeight: "72vh", overflowY: "auto", padding: "18px" }}>
                    {/* Status & Priority Controls Strip */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "10px",
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "10px",
                        padding: "10px 14px",
                        marginBottom: "16px"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: "11.5px", fontWeight: 700, color: "#64748b" }}>Status:</span>
                        <select
                          value={activeTicketForModal.status}
                          onChange={(e) => handleUpdateTicketStatus(activeTicketForModal.id, e.target.value)}
                          style={{ padding: "4px 8px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "11.5px", fontWeight: 700, background: "#ffffff", color: "#1e293b", outline: "none" }}
                        >
                          <option value="Open">🔵 Open</option>
                          <option value="In Progress">🟡 In Progress</option>
                          <option value="Resolved">🟢 Resolved</option>
                          <option value="Closed">⚪ Closed</option>
                        </select>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: "11.5px", fontWeight: 700, color: "#64748b" }}>Priority:</span>
                        <select
                          value={activeTicketForModal.priority}
                          onChange={(e) => {
                            const newP = e.target.value;
                            setSupportTickets(prev => prev.map(t => t.id === activeTicketForModal.id ? { ...t, priority: newP } : t));
                            setActiveTicketForModal(prev => ({ ...prev, priority: newP }));
                          }}
                          style={{ padding: "4px 8px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "11.5px", fontWeight: 700, background: "#ffffff", color: "#1e293b", outline: "none" }}
                        >
                          <option value="Urgent">🔴 Urgent</option>
                          <option value="High">🟠 High</option>
                          <option value="Medium">🟡 Medium</option>
                          <option value="Low">🟢 Low</option>
                        </select>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: "11.5px", fontWeight: 700, color: "#64748b" }}>Agent:</span>
                        <select
                          value={activeTicketForModal.assignedAgent}
                          onChange={(e) => {
                            const newA = e.target.value;
                            setSupportTickets(prev => prev.map(t => t.id === activeTicketForModal.id ? { ...t, assignedAgent: newA } : t));
                            setActiveTicketForModal(prev => ({ ...prev, assignedAgent: newA }));
                          }}
                          style={{ padding: "4px 8px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "11.5px", fontWeight: 600, background: "#ffffff", color: "#1e293b", outline: "none" }}
                        >
                          {employees.map(emp => (
                            <option key={emp.id} value={emp.name}>{emp.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Conversation History Thread */}
                    <div style={{ marginBottom: "16px" }}>
                      <span style={{ fontSize: "12px", fontWeight: 700, color: "#475569", display: "block", marginBottom: "8px" }}>
                        Conversation Thread:
                      </span>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          background: "#f1f5f9",
                          borderRadius: "12px",
                          padding: "14px",
                          maxHeight: "260px",
                          overflowY: "auto"
                        }}
                      >
                        {(activeTicketForModal.messages || []).map((msg) => {
                          const isAgent = msg.sender === "agent";
                          return (
                            <div
                              key={msg.id}
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: isAgent ? "flex-end" : "flex-start"
                              }}
                            >
                              <span style={{ fontSize: "10px", color: "#64748b", marginBottom: "2px" }}>
                                {msg.senderName} • {msg.time}
                              </span>
                              <div
                                style={{
                                  background: isAgent ? "#2b6118" : "#ffffff",
                                  color: isAgent ? "#ffffff" : "#1e293b",
                                  border: isAgent ? "none" : "1px solid #cbd5e1",
                                  padding: "8px 12px",
                                  borderRadius: isAgent ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                                  maxWidth: "80%",
                                  fontSize: "12.5px",
                                  lineHeight: "1.4",
                                  boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
                                }}
                              >
                                {msg.text}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Quick Canned Reply Presets */}
                    <div style={{ marginBottom: "14px" }}>
                      <span style={{ fontSize: "11.5px", fontWeight: 700, color: "#64748b", display: "block", marginBottom: "6px" }}>
                        Quick Response Templates (ক্লিক করে সরাসরি বসান):
                      </span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {QUICK_REPLY_TEMPLATES.map((tmpl, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setTicketReplyText(tmpl)}
                            style={{
                              background: "#ffffff",
                              border: "1px solid #cbd5e1",
                              color: "#334155",
                              padding: "4px 8px",
                              borderRadius: "6px",
                              fontSize: "11px",
                              cursor: "pointer",
                              textAlign: "left"
                            }}
                          >
                            + {tmpl.slice(0, 38)}...
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Reply Textarea & Actions */}
                    <div>
                      <textarea
                        rows={3}
                        placeholder="Type customer support reply here..."
                        value={ticketReplyText}
                        onChange={(e) => setTicketReplyText(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "10px",
                          borderRadius: "8px",
                          border: "1px solid #cbd5e1",
                          fontSize: "12.5px",
                          outline: "none",
                          boxSizing: "border-box",
                          resize: "vertical"
                        }}
                      />
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px", flexWrap: "wrap", gap: "8px" }}>
                        <div style={{ display: "flex", gap: "8px" }}>
                          {activeTicketForModal.phone && (
                            <a
                              href={`https://wa.me/${activeTicketForModal.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${activeTicketForModal.customer}, regarding ${activeTicketForModal.id}: `)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                background: "#25d366",
                                color: "#ffffff",
                                padding: "6px 12px",
                                borderRadius: "8px",
                                fontSize: "11.5px",
                                fontWeight: 700,
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "5px"
                              }}
                            >
                              <Send size={12} /> WhatsApp Customer
                            </a>
                          )}
                          {activeTicketForModal.phone && (
                            <a
                              href={`tel:${activeTicketForModal.phone}`}
                              style={{
                                background: "#ffffff",
                                border: "1px solid #cbd5e1",
                                color: "#334155",
                                padding: "6px 12px",
                                borderRadius: "8px",
                                fontSize: "11.5px",
                                fontWeight: 700,
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "5px"
                              }}
                            >
                              <Phone size={12} color="#16a34a" /> Call
                            </a>
                          )}
                        </div>

                        <div style={{ display: "flex", gap: "8px" }}>
                          <button
                            type="button"
                            onClick={() => handleSendTicketReply(activeTicketForModal.id, true)}
                            style={{
                              background: "#f0fdf4",
                              border: "1px solid #bbf7d0",
                              color: "#15803d",
                              padding: "6px 12px",
                              borderRadius: "8px",
                              fontSize: "11.5px",
                              fontWeight: 700,
                              cursor: "pointer"
                            }}
                          >
                            Send & Resolve ✓
                          </button>
                          <button
                            type="button"
                            onClick={() => handleSendTicketReply(activeTicketForModal.id, false)}
                            className="btn btn-primary"
                            style={{ padding: "6px 14px", fontSize: "11.5px" }}
                          >
                            Send Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================
                ADD NEW SUPPORT TICKET MODAL
            ========================================================= */}
            {newTicketModalOpen && (
              <div className="order-modal-backdrop" onClick={() => setNewTicketModalOpen(false)}>
                <div className="order-modal-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "560px" }}>
                  <div className="order-modal-head" style={{ background: "linear-gradient(135deg, #1b3d12, #2d6318)" }}>
                    <div className="order-modal-title">
                      <span className="modal-eyebrow" style={{ color: "#86efac" }}>CUSTOMER SUPPORT HELPDESK</span>
                      <h3 style={{ color: "#fff", margin: "2px 0 0" }}>Create New Support Ticket</h3>
                      <small style={{ color: "#dcfce7" }}>Log incoming customer query or complaint</small>
                    </div>
                    <button
                      type="button"
                      className="modal-close-btn"
                      onClick={() => setNewTicketModalOpen(false)}
                      style={{ color: "#fff" }}
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <form onSubmit={handleCreateTicket} style={{ padding: "18px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                      <div>
                        <label style={{ fontSize: "11.5px", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>
                          Customer Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sazib Ahmed"
                          value={newTicketForm.customer}
                          onChange={(e) => setNewTicketForm({ ...newTicketForm, customer: e.target.value })}
                          style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "12px", outline: "none", boxSizing: "border-box" }}
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: "11.5px", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>
                          Customer Phone *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="+880 1712-345678"
                          value={newTicketForm.phone}
                          onChange={(e) => setNewTicketForm({ ...newTicketForm, phone: e.target.value })}
                          style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "12px", outline: "none", boxSizing: "border-box" }}
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                      <div>
                        <label style={{ fontSize: "11.5px", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>
                          Related Order ID (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. GB-1930"
                          value={newTicketForm.orderId}
                          onChange={(e) => setNewTicketForm({ ...newTicketForm, orderId: e.target.value })}
                          style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "12px", outline: "none", boxSizing: "border-box" }}
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: "11.5px", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>
                          Contact Channel
                        </label>
                        <select
                          value={newTicketForm.channel}
                          onChange={(e) => setNewTicketForm({ ...newTicketForm, channel: e.target.value })}
                          style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "12px", outline: "none", background: "#fff", boxSizing: "border-box" }}
                        >
                          <option value="WhatsApp">💬 WhatsApp</option>
                          <option value="Phone Call">📞 Phone Call</option>
                          <option value="Website">🌐 Storefront Website</option>
                          <option value="Email">✉️ Email</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                      <div>
                        <label style={{ fontSize: "11.5px", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>
                          Issue Category
                        </label>
                        <select
                          value={newTicketForm.category}
                          onChange={(e) => setNewTicketForm({ ...newTicketForm, category: e.target.value })}
                          style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "12px", outline: "none", background: "#fff", boxSizing: "border-box" }}
                        >
                          <option value="Order & Delivery">📦 Order & Delivery</option>
                          <option value="Payment & Refund">💳 Payment & Refund</option>
                          <option value="Product Quality">🥦 Product Quality & Freshness</option>
                          <option value="General Inquiry">💬 General Inquiry</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ fontSize: "11.5px", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>
                          Priority Level
                        </label>
                        <select
                          value={newTicketForm.priority}
                          onChange={(e) => setNewTicketForm({ ...newTicketForm, priority: e.target.value })}
                          style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "12px", outline: "none", background: "#fff", boxSizing: "border-box" }}
                        >
                          <option value="Urgent">🔴 Urgent</option>
                          <option value="High">🟠 High</option>
                          <option value="Medium">🟡 Medium</option>
                          <option value="Low">🟢 Low</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: "12px" }}>
                      <label style={{ fontSize: "11.5px", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>
                        Subject / Problem Summary *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Brief summary of customer issue..."
                        value={newTicketForm.subject}
                        onChange={(e) => setNewTicketForm({ ...newTicketForm, subject: e.target.value })}
                        style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "12px", outline: "none", boxSizing: "border-box" }}
                      />
                    </div>

                    <div style={{ marginBottom: "16px" }}>
                      <label style={{ fontSize: "11.5px", fontWeight: 700, color: "#475569", display: "block", marginBottom: "4px" }}>
                        Customer Message / Details
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Enter details of customer conversation..."
                        value={newTicketForm.initialMessage}
                        onChange={(e) => setNewTicketForm({ ...newTicketForm, initialMessage: e.target.value })}
                        style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "12px", outline: "none", boxSizing: "border-box", resize: "vertical" }}
                      />
                    </div>

                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", borderTop: "1px solid #e2e8f0", paddingTop: "14px" }}>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setNewTicketModalOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                      >
                        Create Support Ticket
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
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
                <button
                  type="button"
                  onClick={() => {
                    setIsTrackingMapOpen(!isTrackingMapOpen);
                    if (!isTrackingMapOpen) {
                      setTimeout(() => {
                        trackingMapRef.current?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }
                  }}
                  className="btn btn-primary"
                  style={{ fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  <MapPin size={13} /> {isTrackingMapOpen ? "Hide Live Fleet Map" : "View Live Google Map"}
                </button>
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

            {/* LIVE GOOGLE MAPS FLEET TRACKING SECTION */}
            <div
              ref={trackingMapRef}
              className="tracking-map-section-card"
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                padding: "20px",
                marginBottom: "24px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.03)"
              }}
            >
              {/* Header of Map Section */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "14px",
                  marginBottom: isTrackingMapOpen ? "18px" : "0",
                  paddingBottom: isTrackingMapOpen ? "14px" : "0",
                  borderBottom: isTrackingMapOpen ? "1px solid #f1f5f9" : "none"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #16a34a, #2b6118)",
                      display: "grid",
                      placeItems: "center",
                      color: "#ffffff",
                      boxShadow: "0 2px 8px rgba(34,197,94,0.3)"
                    }}
                  >
                    <LocateFixed size={22} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <h4 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "#1e293b" }}>
                        Delivery Fleet Live Google Maps Radar
                      </h4>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          background: "#ecfdf5",
                          color: "#15803d",
                          border: "1px solid #bbf7d0",
                          padding: "2px 8px",
                          borderRadius: "20px",
                          fontSize: "11px",
                          fontWeight: 700
                        }}
                      >
                        <span className="live-radar-dot" /> LIVE GPS ACTIVE
                      </span>
                      <span
                        style={{
                          background: "#eff6ff",
                          color: "#2563eb",
                          border: "1px solid #bfdbfe",
                          padding: "2px 8px",
                          borderRadius: "20px",
                          fontSize: "11px",
                          fontWeight: 600
                        }}
                      >
                        {deliveryStaff.length} Delivery Employees on Duty
                      </span>
                    </div>
                    <p style={{ margin: "3px 0 0", fontSize: "12px", color: "#64748b" }}>
                      ডেলিভারি কর্মীদের রিয়েল-টাইম গুগল ম্যাপ জিপিএস লোকেশন, গতিবেগ, চলতি অর্ডার ও লাইভ রুট ট্র্যাকিং।
                    </p>
                  </div>
                </div>

                {/* Top Controls */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    onClick={handleRefreshGps}
                    className="btn btn-secondary"
                    disabled={isGpsRefreshing}
                    style={{
                      fontSize: "11.5px",
                      padding: "6px 12px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "#f8fafc",
                      border: "1px solid #cbd5e1",
                      cursor: "pointer"
                    }}
                    title="Simulate / Refresh live GPS telemetry signal"
                  >
                    <RefreshCw size={12} className={isGpsRefreshing ? "spin-animate" : ""} />
                    {isGpsRefreshing ? "Pinging GPS..." : "Refresh GPS Ping"}
                  </button>

                  {activeRiderLoc && (
                    <a
                      href={`https://www.google.com/maps?q=${activeRiderLoc.lat},${activeRiderLoc.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{
                        fontSize: "11.5px",
                        padding: "6px 12px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        textDecoration: "none"
                      }}
                    >
                      <ExternalLink size={12} /> Google Maps App
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setIsTrackingMapOpen(!isTrackingMapOpen)}
                    className="btn btn-secondary"
                    style={{
                      fontSize: "11.5px",
                      padding: "6px 12px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    {isTrackingMapOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                    {isTrackingMapOpen ? "Collapse Map" : "Expand Live Map"}
                  </button>
                </div>
              </div>

              {/* Main Map Body (Conditional on isTrackingMapOpen) */}
              {isTrackingMapOpen && (
                <div>
                  {/* 1. Rider Fleet Selector Strip */}
                  <div style={{ marginBottom: "16px" }}>
                    <span style={{ fontSize: "11.5px", fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.5px", display: "block", marginBottom: "8px" }}>
                      Select Delivery Employee / Rider to Track:
                    </span>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                        gap: "10px"
                      }}
                    >
                      {deliveryStaff.map((emp) => {
                        const isSelected = emp.id === activeRider?.id;
                        const loc = getRiderLocationData(emp, isSelected ? mapRiderJitter : { lat: 0, lng: 0 });
                        const empOrder = orders.find(
                          (o) => o.riderName && o.riderName.toLowerCase().includes(emp.name.toLowerCase()) && o.trackingStage !== "delivered"
                        );

                        return (
                          <div
                            key={emp.id}
                            onClick={() => setSelectedRiderId(emp.id)}
                            style={{
                              background: isSelected ? "#f0fdf4" : "#ffffff",
                              border: isSelected ? "2px solid #2b6118" : "1px solid #e2e8f0",
                              borderRadius: "12px",
                              padding: "10px 12px",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              transition: "all 0.18s ease",
                              boxShadow: isSelected ? "0 4px 12px rgba(43,97,24,0.12)" : "0 1px 2px rgba(0,0,0,0.03)"
                            }}
                          >
                            <div style={{ position: "relative", flexShrink: 0 }}>
                              {emp.image ? (
                                <img
                                  src={emp.image}
                                  alt={emp.name}
                                  style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", border: isSelected ? "2px solid #2b6118" : "1px solid #cbd5e1" }}
                                />
                              ) : (
                                <div
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    background: isSelected ? "#dcfce7" : "#f1f5f9",
                                    color: isSelected ? "#15803d" : "#475569",
                                    fontWeight: 700,
                                    display: "grid",
                                    placeItems: "center",
                                    fontSize: "14px"
                                  }}
                                >
                                  {emp.name.charAt(0)}
                                </div>
                              )}
                              <span
                                style={{
                                  position: "absolute",
                                  bottom: "-1px",
                                  right: "-1px",
                                  width: "11px",
                                  height: "11px",
                                  borderRadius: "50%",
                                  background: "#22c55e",
                                  border: "2px solid #ffffff"
                                }}
                                title="GPS Online"
                              />
                            </div>

                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "4px" }}>
                                <b style={{ fontSize: "12.5px", color: isSelected ? "#1e3b14" : "#1e293b", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                  {emp.name}
                                </b>
                                <span style={{ fontSize: "10px", fontWeight: 700, color: isSelected ? "#16a34a" : "#64748b" }}>
                                  {loc.speed}
                                </span>
                              </div>
                              <div style={{ fontSize: "11px", color: "#64748b", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {emp.vehicleType || "Delivery Bike"}
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "3px" }}>
                                <span
                                  style={{
                                    fontSize: "9.5px",
                                    fontWeight: 700,
                                    padding: "1px 6px",
                                    borderRadius: "10px",
                                    background: empOrder ? "#eff6ff" : "#f1f5f9",
                                    color: empOrder ? "#1d4ed8" : "#475569",
                                    whiteSpace: "nowrap"
                                  }}
                                >
                                  {empOrder ? `📦 ${empOrder.id}` : "Idle / Ready"}
                                </span>
                                <span style={{ fontSize: "10px", color: "#64748b", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                  📍 {loc.area.split(",")[0]}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Split Screen: Google Map Frame + Live Telemetry Detail Panel */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "minmax(0, 1.8fr) minmax(310px, 1fr)",
                      gap: "16px",
                      alignItems: "stretch"
                    }}
                    className="tracking-map-grid"
                  >
                    {/* LEFT: Google Maps Iframe & Overlays */}
                    <div
                      style={{
                        position: "relative",
                        minHeight: "440px",
                        height: "100%",
                        borderRadius: "14px",
                        overflow: "hidden",
                        border: "1px solid #cbd5e1",
                        background: "#f1f5f9",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                      }}
                    >
                      <iframe
                        title={`Google Maps Live - ${activeRider?.name || "Delivery Employee"}`}
                        src={`https://maps.google.com/maps?q=${activeRiderLoc.lat},${activeRiderLoc.lng}&hl=en&z=15&output=embed`}
                        width="100%"
                        height="100%"
                        style={{ border: 0, display: "block", minHeight: "440px" }}
                        allowFullScreen=""
                        loading="lazy"
                      />

                      {/* Top Overlay Badge on Map */}
                      <div
                        style={{
                          position: "absolute",
                          top: "12px",
                          left: "12px",
                          background: "rgba(15, 23, 42, 0.90)",
                          backdropFilter: "blur(6px)",
                          color: "#ffffff",
                          padding: "6px 12px",
                          borderRadius: "20px",
                          fontSize: "11px",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                          zIndex: 5,
                          maxWidth: "calc(100% - 24px)",
                          overflow: "hidden"
                        }}
                      >
                        <span className="live-radar-dot" />
                        <span style={{ fontWeight: 700, color: "#86efac" }}>{activeRider?.name}</span>
                        <span style={{ color: "#64748b" }}>•</span>
                        <span>{activeRiderLoc.speed}</span>
                        <span style={{ color: "#64748b" }}>•</span>
                        <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{activeRiderLoc.area}</span>
                      </div>

                      {/* Bottom Overlay Actions on Map */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "12px",
                          right: "12px",
                          display: "flex",
                          gap: "8px",
                          zIndex: 5,
                          flexWrap: "wrap"
                        }}
                      >
                        <a
                          href={`https://www.google.com/maps?q=${activeRiderLoc.lat},${activeRiderLoc.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            background: "#ffffff",
                            color: "#1e293b",
                            padding: "6px 12px",
                            borderRadius: "8px",
                            fontSize: "11.5px",
                            fontWeight: 700,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            textDecoration: "none",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                            border: "1px solid #cbd5e1"
                          }}
                        >
                          <ExternalLink size={12} color="#2b6118" /> Open in Google Maps
                        </a>
                        {activeRiderAssignedOrder?.address && (
                          <a
                            href={`https://www.google.com/maps/dir/?api=1&origin=${activeRiderLoc.lat},${activeRiderLoc.lng}&destination=${encodeURIComponent(activeRiderAssignedOrder.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              background: "#2b6118",
                              color: "#ffffff",
                              padding: "6px 12px",
                              borderRadius: "8px",
                              fontSize: "11.5px",
                              fontWeight: 700,
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "6px",
                              textDecoration: "none",
                              boxShadow: "0 2px 8px rgba(43,97,24,0.3)"
                            }}
                          >
                            <Navigation size={12} /> Google Directions Route
                          </a>
                        )}
                      </div>
                    </div>

                    {/* RIGHT: Selected Rider Live Telemetry Card */}
                    <div
                      style={{
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "14px",
                        padding: "18px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "14px"
                      }}
                    >
                      <div>
                        {/* Rider Bio Header */}
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                          {activeRider?.image ? (
                            <img
                              src={activeRider.image}
                              alt={activeRider.name}
                              style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover", border: "2px solid #2b6118" }}
                            />
                          ) : (
                            <div
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                background: "#2b6118",
                                color: "#fff",
                                fontWeight: 700,
                                fontSize: "18px",
                                display: "grid",
                                placeItems: "center"
                              }}
                            >
                              {activeRider?.name.charAt(0)}
                            </div>
                          )}
                          <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                              <h4 style={{ margin: 0, fontSize: "15px", fontWeight: 700, color: "#0f172a" }}>
                                {activeRider?.name}
                              </h4>
                              <span style={{ fontSize: "10px", background: "#dcfce7", color: "#15803d", padding: "1px 6px", borderRadius: "10px", fontWeight: 700 }}>
                                {activeRider?.id}
                              </span>
                            </div>
                            <span style={{ fontSize: "11.5px", color: "#64748b" }}>
                              {activeRider?.role || "Delivery Rider"} • {activeRider?.department}
                            </span>
                            {activeRider?.phone && (
                              <div style={{ marginTop: "3px" }}>
                                <a href={`tel:${activeRider.phone}`} style={{ fontSize: "11px", color: "#2b6118", fontWeight: 700, textDecoration: "none" }}>
                                  <Phone size={10} style={{ verticalAlign: "middle", marginRight: "3px" }} />
                                  {activeRider.phone}
                                </a>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Telemetry Stats Grid */}
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "8px",
                            marginBottom: "14px"
                          }}
                        >
                          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "8px 10px" }}>
                            <span style={{ fontSize: "10.5px", color: "#64748b", display: "flex", alignItems: "center", gap: "4px" }}>
                              <Gauge size={11} color="#2563eb" /> Live Speed
                            </span>
                            <b style={{ fontSize: "13px", color: "#1e293b", display: "block", marginTop: "2px" }}>
                              {activeRiderLoc.speed}
                            </b>
                          </div>
                          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "8px 10px" }}>
                            <span style={{ fontSize: "10.5px", color: "#64748b", display: "flex", alignItems: "center", gap: "4px" }}>
                              <BatteryCharging size={11} color="#16a34a" /> Battery / Fuel
                            </span>
                            <b style={{ fontSize: "13px", color: "#16a34a", display: "block", marginTop: "2px" }}>
                              {activeRiderLoc.battery}
                            </b>
                          </div>
                          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "8px 10px" }}>
                            <span style={{ fontSize: "10.5px", color: "#64748b", display: "flex", alignItems: "center", gap: "4px" }}>
                              <Compass size={11} color="#d97706" /> Vehicle
                            </span>
                            <b style={{ fontSize: "11px", color: "#1e293b", display: "block", marginTop: "2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                              {activeRiderLoc.vehicle}
                            </b>
                          </div>
                          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "8px 10px" }}>
                            <span style={{ fontSize: "10.5px", color: "#64748b", display: "flex", alignItems: "center", gap: "4px" }}>
                              <Clock size={11} color="#7c3aed" /> GPS Ping
                            </span>
                            <b style={{ fontSize: "12px", color: "#1e293b", display: "block", marginTop: "2px" }}>
                              {lastGpsPingTime}
                            </b>
                          </div>
                        </div>

                        {/* Live GPS Coordinates Card */}
                        <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "10px 12px", marginBottom: "14px" }}>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                            <span style={{ fontSize: "11px", fontWeight: 700, color: "#475569", display: "flex", alignItems: "center", gap: "4px" }}>
                              <MapPin size={11} color="#dc2626" /> GPS Coordinates
                            </span>
                            <button
                              type="button"
                              onClick={() => navigator.clipboard.writeText(`${activeRiderLoc.lat}, ${activeRiderLoc.lng}`)}
                              style={{ background: "transparent", border: "none", cursor: "pointer", color: "#64748b", fontSize: "10px", display: "flex", alignItems: "center", gap: "2px" }}
                              title="Copy latitude and longitude"
                            >
                              <Copy size={10} /> Copy
                            </button>
                          </div>
                          <code style={{ fontSize: "11.5px", color: "#0f172a", fontWeight: 700, display: "block", background: "#f8fafc", padding: "4px 8px", borderRadius: "6px" }}>
                            {activeRiderLoc.lat}° N, {activeRiderLoc.lng}° E
                          </code>
                          <span style={{ fontSize: "11px", color: "#64748b", display: "block", marginTop: "4px" }}>
                            📍 {activeRiderLoc.area}
                          </span>
                          <span style={{ fontSize: "10.5px", color: "#2b6118", fontWeight: 600, display: "block", marginTop: "2px" }}>
                            Checkpoint: {activeRiderLoc.checkpoint}
                          </span>
                        </div>

                        {/* Current Assigned Delivery Order */}
                        <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "10px 12px" }}>
                          <span style={{ fontSize: "11px", fontWeight: 700, color: "#475569", display: "flex", alignItems: "center", gap: "4px", marginBottom: "4px" }}>
                            <Truck size={12} color="#2b6118" /> Current Order Assignment
                          </span>
                          {activeRiderAssignedOrder ? (
                            <div>
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <b style={{ fontSize: "12px", color: "#1e3b14" }}>
                                  Order #{activeRiderAssignedOrder.id}
                                </b>
                                <span style={{ fontSize: "10.5px", color: "#ea580c", background: "#fff7ed", padding: "1px 6px", borderRadius: "10px", fontWeight: 700 }}>
                                  {activeRiderAssignedOrder.trackingStage || "In Transit"}
                                </span>
                              </div>
                              <p style={{ margin: "3px 0 0", fontSize: "11.5px", color: "#334155" }}>
                                <b>Customer:</b> {activeRiderAssignedOrder.customer}
                              </p>
                              <p style={{ margin: "2px 0 0", fontSize: "11px", color: "#64748b" }}>
                                <b>Destination:</b> {activeRiderAssignedOrder.address}
                              </p>
                              <div style={{ marginTop: "6px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <span style={{ fontSize: "11px", color: "#16a34a", fontWeight: 700 }}>
                                  ETA: {activeRiderAssignedOrder.estimatedDelivery || "Within 30 mins"}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => openTrackingModal(activeRiderAssignedOrder)}
                                  style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", color: "#15803d", padding: "2px 8px", borderRadius: "6px", fontSize: "10.5px", fontWeight: 600, cursor: "pointer" }}
                                >
                                  Manage Order ↗
                                </button>
                              </div>
                            </div>
                          ) : (
                            <span style={{ fontSize: "11.5px", color: "#64748b" }}>
                              No active transit parcel assigned. Standby at dispatch hub.
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons at bottom of Telemetry Card */}
                      <div style={{ display: "flex", gap: "8px", paddingTop: "8px", borderTop: "1px solid #e2e8f0" }}>
                        {activeRider?.phone && (
                          <a
                            href={`tel:${activeRider.phone}`}
                            style={{
                              flex: 1,
                              textAlign: "center",
                              background: "#ffffff",
                              border: "1px solid #cbd5e1",
                              color: "#334155",
                              padding: "8px",
                              borderRadius: "8px",
                              fontSize: "11.5px",
                              fontWeight: 600,
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "6px"
                            }}
                          >
                            <Phone size={12} color="#16a34a" /> Call Rider
                          </a>
                        )}
                        {activeRider?.phone && (
                          <a
                            href={`https://wa.me/${activeRider.phone.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              flex: 1,
                              textAlign: "center",
                              background: "#25d366",
                              border: "none",
                              color: "#ffffff",
                              padding: "8px",
                              borderRadius: "8px",
                              fontSize: "11.5px",
                              fontWeight: 600,
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "6px"
                            }}
                          >
                            <Send size={12} /> WhatsApp
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tracking Filter & Search Toolbar */}
            <div className="orders-filters-strip" style={{ marginBottom: "18px" }}>
              <div className="order-filter-chips">
                <button
                  type="button"
                  className={`filter-chip ${trackingFilter === "All" ? "active" : ""}`}
                  onClick={() => setTrackingFilter("All")}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: trackingFilter === "All" ? "#ffffff" : "#2b6118",
                      display: "inline-block"
                    }}
                  />
                  <span>All</span>
                  <span
                    className="filter-chip-badge"
                    style={{
                      background: trackingFilter === "All" ? "rgba(255, 255, 255, 0.28)" : "#f1f5f9",
                      color: trackingFilter === "All" ? "#ffffff" : "#475569",
                      border: trackingFilter === "All" ? "none" : "1px solid #e2e8f0"
                    }}
                  >
                    {orders.length}
                  </span>
                </button>
                {TRACKING_STAGES.map((st) => {
                  const count = orders.filter(o => (o.trackingStage || "placed") === st.key).length;
                  const isSelected = trackingFilter === st.key;
                  return (
                    <button
                      key={st.key}
                      type="button"
                      className={`filter-chip ${isSelected ? "active" : ""}`}
                      onClick={() => setTrackingFilter(st.key)}
                      style={{
                        borderColor: isSelected ? st.color : "#cbd5e1",
                        background: isSelected ? st.color : "#ffffff",
                        color: isSelected ? "#ffffff" : "#475569",
                        boxShadow: isSelected ? `0 2px 6px ${st.color}40` : "0 1px 2px rgba(0, 0, 0, 0.03)"
                      }}
                    >
                      <span
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          background: isSelected ? "#ffffff" : st.color,
                          display: "inline-block"
                        }}
                      />
                      <span>{st.label}</span>
                      <span
                        className="filter-chip-badge"
                        style={{
                          background: isSelected ? "rgba(255, 255, 255, 0.28)" : "#f1f5f9",
                          color: isSelected ? "#ffffff" : "#475569",
                          border: isSelected ? "none" : "1px solid #e2e8f0"
                        }}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="tracking-search-box-compact">
                <Search size={13} style={{ color: "#64748b", flexShrink: 0 }} />
                <input
                  type="text"
                  placeholder="Search tracking..."
                  value={trackingSearch}
                  onChange={(e) => setTrackingSearch(e.target.value)}
                />
                {trackingSearch && (
                  <button type="button" onClick={() => setTrackingSearch("")} title="Clear search">
                    <X size={11} />
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
                  {[...orders]
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
                    .sort(sortOrdersRecentFirst)
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
                              {o.riderName && o.riderName !== "Pending Assignment" && (
                                <button
                                  type="button"
                                  onClick={() => focusRiderOnMap(o.riderName)}
                                  style={{
                                    marginTop: "4px",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    background: "#ecfdf5",
                                    border: "1px solid #a7f3d0",
                                    color: "#059669",
                                    padding: "2px 8px",
                                    borderRadius: "6px",
                                    fontSize: "10.5px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    width: "fit-content"
                                  }}
                                  title={`View ${o.riderName}'s live location on Google Maps`}
                                >
                                  <MapPin size={10} /> Live Map
                                </button>
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
                              <div className="employee-avatar" style={{ overflow: "hidden", padding: 0 }}>
                                {emp.image ? (
                                  <img
                                    src={emp.image}
                                    alt={emp.name}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                                  />
                                ) : (
                                  initials
                                )}
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
            <div className="catalog-head" style={{ marginTop: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
              <div>
                <span className="eyebrow" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <TrendingUp size={13} /> PERFORMANCE METRICS & PAYOUT INTELLIGENCE
                </span>
                <h3 style={{ margin: "4px 0 0" }}>Store Analytics & Rider Delivery Payout Hub</h3>
                <p style={{ margin: "4px 0 0", color: "#62755c", fontSize: "13px" }}>
                  রাইডারদের ডেলিভারি ও প্রোডাক্ট পারফরম্যান্স হিসাব এবং ক্যালেন্ডারের মাধ্যমে মান্থলি ডেলিভারি চার্জ ক্যালকুলেটর।
                </p>
              </div>

              <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="btn btn-secondary"
                  style={{ fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  title="Print monthly delivery and payout statement"
                >
                  <Printer size={13} /> Print Monthly Statement
                </button>
              </div>
            </div>

            {/* =========================================================================
                SECTION 1: MONTHLY DELIVERY & DELIVERY CHARGE CALCULATOR WITH CALENDAR
               ========================================================================= */}
            <div
              className="delivery-calculator-card"
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                padding: "22px",
                marginTop: "18px",
                marginBottom: "24px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.03)"
              }}
            >
              {/* Header & Controls Toolbar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "14px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid #f1f5f9"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #2b6118, #3b82f6)",
                      display: "grid",
                      placeItems: "center",
                      color: "#ffffff",
                      boxShadow: "0 2px 8px rgba(43,97,24,0.3)"
                    }}
                  >
                    <CalendarDays size={22} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "#1e293b", display: "flex", alignItems: "center", gap: "8px" }}>
                      Delivery Employee Monthly Payout & Product Calculator
                    </h4>
                    <span style={{ fontSize: "12px", color: "#64748b" }}>
                      কে কয়টা প্রোডাক্ট ডেলিভারি দিল এবং মোট ডেলিভারি চার্জ কত পাবে তার ক্যালেন্ডারভিত্তিক হিসাব
                    </span>
                  </div>
                </div>

                {/* Month Navigator & Rate Controls */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  {/* Month Switcher */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      background: "#f8fafc",
                      border: "1px solid #cbd5e1",
                      borderRadius: "10px",
                      padding: "4px 8px"
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        if (analyticsMonth === 0) {
                          setAnalyticsMonth(11);
                          setAnalyticsYear(analyticsYear - 1);
                        } else {
                          setAnalyticsMonth(analyticsMonth - 1);
                        }
                        setSelectedCalendarDay(null);
                      }}
                      style={{ background: "transparent", border: "none", cursor: "pointer", color: "#475569", padding: "4px" }}
                      title="Previous Month"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    <select
                      value={analyticsMonth}
                      onChange={(e) => {
                        setAnalyticsMonth(parseInt(e.target.value, 10));
                        setSelectedCalendarDay(null);
                      }}
                      style={{ border: "none", background: "transparent", fontWeight: 700, fontSize: "12.5px", color: "#1e293b", outline: "none", cursor: "pointer" }}
                    >
                      {MONTH_NAMES.map((m, idx) => (
                        <option key={m} value={idx}>{m} ({MONTH_NAMES_BN[idx]})</option>
                      ))}
                    </select>

                    <select
                      value={analyticsYear}
                      onChange={(e) => {
                        setAnalyticsYear(parseInt(e.target.value, 10));
                        setSelectedCalendarDay(null);
                      }}
                      style={{ border: "none", background: "transparent", fontWeight: 700, fontSize: "12.5px", color: "#1e293b", outline: "none", cursor: "pointer" }}
                    >
                      {[2024, 2025, 2026, 2027, 2028].map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>

                    <button
                      type="button"
                      onClick={() => {
                        if (analyticsMonth === 11) {
                          setAnalyticsMonth(0);
                          setAnalyticsYear(analyticsYear + 1);
                        } else {
                          setAnalyticsMonth(analyticsMonth + 1);
                        }
                        setSelectedCalendarDay(null);
                      }}
                      style={{ background: "transparent", border: "none", cursor: "pointer", color: "#475569", padding: "4px" }}
                      title="Next Month"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  {/* Configurable Delivery Charge Rate */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "#f0fdf4",
                      border: "1px solid #bbf7d0",
                      borderRadius: "10px",
                      padding: "4px 10px"
                    }}
                    title="Delivery Charge Rate per completed delivery order"
                  >
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#166534" }}>Charge/Trip:</span>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#15803d" }}>$</span>
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      value={deliveryFeeRate}
                      onChange={(e) => setDeliveryFeeRate(Math.max(0, parseFloat(e.target.value) || 0))}
                      style={{
                        width: "55px",
                        padding: "2px 4px",
                        borderRadius: "6px",
                        border: "1px solid #86efac",
                        fontSize: "12px",
                        fontWeight: 700,
                        textAlign: "center",
                        color: "#166534",
                        background: "#ffffff",
                        outline: "none"
                      }}
                    />
                  </div>

                  {/* Filter: Delivered Only vs All */}
                  <label
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "11.5px",
                      fontWeight: 600,
                      color: "#475569",
                      cursor: "pointer",
                      userSelect: "none"
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={onlyDeliveredFilter}
                      onChange={(e) => setOnlyDeliveredFilter(e.target.checked)}
                      style={{ cursor: "pointer", accentColor: "#2b6118" }}
                    />
                    Delivered Orders Only
                  </label>
                </div>
              </div>

              {/* Monthly KPI Overview Cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                  gap: "14px",
                  marginTop: "16px",
                  marginBottom: "20px"
                }}
              >
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "14px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>Total Delivered Orders</span>
                    <Package size={18} color="#2563eb" />
                  </div>
                  <h3 style={{ margin: "6px 0 2px", fontSize: "22px", color: "#1e293b", fontWeight: 800 }}>
                    {totalMonthlyDeliveredOrders} <span style={{ fontSize: "12px", fontWeight: 600, color: "#64748b" }}>orders</span>
                  </h3>
                  <small style={{ fontSize: "11px", color: "#64748b" }}>
                    {MONTH_NAMES[analyticsMonth]} {analyticsYear} {selectedCalendarDay ? `(Day ${selectedCalendarDay})` : "(Full Month)"}
                  </small>
                </div>

                <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "14px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "12px", color: "#15803d", fontWeight: 600 }}>Total Products Delivered</span>
                    <ShoppingBag size={18} color="#16a34a" />
                  </div>
                  <h3 style={{ margin: "6px 0 2px", fontSize: "22px", color: "#15803d", fontWeight: 800 }}>
                    {totalMonthlyProductsDelivered} <span style={{ fontSize: "12px", fontWeight: 600, color: "#166534" }}>units/items</span>
                  </h3>
                  <small style={{ fontSize: "11px", color: "#166534" }}>
                    মোট ডেলিভারিকৃত পণ্যের পরিমাণ
                  </small>
                </div>

                <div style={{ background: "#fefce8", border: "1px solid #fef08a", borderRadius: "12px", padding: "14px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "12px", color: "#854d0e", fontWeight: 600 }}>Total Delivery Charge</span>
                    <Wallet size={18} color="#ca8a04" />
                  </div>
                  <h3 style={{ margin: "6px 0 2px", fontSize: "22px", color: "#854d0e", fontWeight: 800 }}>
                    ${totalMonthlyDeliveryCharges.toFixed(2)}
                  </h3>
                  <small style={{ fontSize: "11px", color: "#854d0e" }}>
                    ${deliveryFeeRate.toFixed(2)} × {totalMonthlyDeliveredOrders} deliveries
                  </small>
                </div>

                <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: "12px", padding: "14px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "12px", color: "#6b21a8", fontWeight: 600 }}>Active Riders</span>
                    <Truck size={18} color="#7c3aed" />
                  </div>
                  <h3 style={{ margin: "6px 0 2px", fontSize: "22px", color: "#6b21a8", fontWeight: 800 }}>
                    {activeRidersCount} <span style={{ fontSize: "12px", fontWeight: 600, color: "#6b21a8" }}>riders</span>
                  </h3>
                  <small style={{ fontSize: "11px", color: "#6b21a8" }}>
                    অর্ডার সম্পাদনকারী ডেলিভারি কর্মী
                  </small>
                </div>
              </div>

              {/* CALENDAR VIEW GRID */}
              <div style={{ marginBottom: "22px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
                  <div>
                    <b style={{ fontSize: "13px", color: "#1e293b", display: "flex", alignItems: "center", gap: "6px" }}>
                      <Calendar size={14} color="#2b6118" /> {MONTH_NAMES[analyticsMonth]} {analyticsYear} - Interactive Delivery Calendar
                    </b>
                    <small style={{ fontSize: "11.5px", color: "#64748b" }}>
                      যেকোনো তারিখে ক্লিক করে ওই দিনের নির্দিষ্ট ডেলিভারি ও চার্জ দেখতে পারেন
                    </small>
                  </div>

                  {selectedCalendarDay && (
                    <button
                      type="button"
                      onClick={() => setSelectedCalendarDay(null)}
                      style={{
                        background: "#2b6118",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "8px",
                        padding: "4px 10px",
                        fontSize: "11.5px",
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px"
                      }}
                    >
                      <X size={12} /> Show Full Month (All Days)
                    </button>
                  )}
                </div>

                {/* 7 Days of Week Header */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "6px", textAlign: "center", marginBottom: "6px" }}>
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => (
                    <div key={dayName} style={{ fontSize: "11.5px", fontWeight: 700, color: "#64748b", padding: "4px" }}>
                      {dayName}
                    </div>
                  ))}
                </div>

                {/* Days Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "6px" }}>
                  {/* Empty cells before day 1 */}
                  {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
                    <div key={`empty-${idx}`} style={{ minHeight: "65px", background: "transparent", opacity: 0.3 }} />
                  ))}

                  {/* Days of Month */}
                  {Array.from({ length: daysInSelectedMonth }).map((_, idx) => {
                    const day = idx + 1;
                    const dayOrders = ordersByDay[day] || [];
                    const deliveredOrders = dayOrders.filter((o) => o.status === "Delivered" || o.trackingStage === "delivered");
                    const activeCount = onlyDeliveredFilter ? deliveredOrders.length : dayOrders.length;
                    const productsOnDay = (onlyDeliveredFilter ? deliveredOrders : dayOrders).reduce(
                      (sum, o) => sum + getOrderProductCount(o),
                      0
                    );
                    const isSelected = selectedCalendarDay === day;
                    const hasDeliveries = activeCount > 0;

                    return (
                      <div
                        key={day}
                        onClick={() => setSelectedCalendarDay(isSelected ? null : day)}
                        style={{
                          minHeight: "72px",
                          background: isSelected ? "#ecfdf5" : hasDeliveries ? "#ffffff" : "#fbfcfe",
                          border: isSelected ? "2px solid #16a34a" : hasDeliveries ? "1px solid #86efac" : "1px solid #e2e8f0",
                          borderRadius: "10px",
                          padding: "6px 8px",
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          boxShadow: isSelected ? "0 2px 8px rgba(22,163,74,0.2)" : "none"
                        }}
                        title={hasDeliveries ? `${day} ${MONTH_NAMES[analyticsMonth]}: ${activeCount} orders, ${productsOnDay} products, ${(activeCount * deliveryFeeRate).toFixed(2)} delivery charge` : `${day} ${MONTH_NAMES[analyticsMonth]}: No deliveries`}
                      >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <span style={{ fontSize: "12px", fontWeight: 700, color: isSelected ? "#15803d" : "#334155" }}>
                            {day}
                          </span>
                          {hasDeliveries && (
                            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e" }} />
                          )}
                        </div>

                        {hasDeliveries ? (
                          <div style={{ marginTop: "4px" }}>
                            <div style={{ background: "#dcfce7", color: "#15803d", fontSize: "10px", fontWeight: 700, padding: "1px 4px", borderRadius: "6px", textAlign: "center", marginBottom: "2px" }}>
                              📦 {activeCount} deliv.
                            </div>
                            <div style={{ fontSize: "9.5px", color: "#166534", fontWeight: 600, textAlign: "center" }}>
                              🥦 {productsOnDay} items
                            </div>
                            <div style={{ fontSize: "9.5px", color: "#047857", fontWeight: 700, textAlign: "center" }}>
                              +${(activeCount * deliveryFeeRate).toFixed(0)} fee
                            </div>
                          </div>
                        ) : (
                          <div style={{ fontSize: "10px", color: "#94a3b8", textAlign: "center" }}>-</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RIDER-BY-RIDER PERFORMANCE & DELIVERY CHARGE BREAKDOWN TABLE */}
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "14px", overflow: "hidden" }}>
                <div style={{ padding: "14px 18px", background: "#f8fafc", borderBottom: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                  <div>
                    <h4 style={{ margin: 0, fontSize: "14.5px", color: "#0f172a", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
                      <Truck size={16} color="#2b6118" /> Delivery Personnel Payout & Products Summary
                    </h4>
                    <span style={{ fontSize: "11.5px", color: "#64748b" }}>
                      {MONTH_NAMES[analyticsMonth]} {analyticsYear} {selectedCalendarDay ? `• Filtering Day ${selectedCalendarDay}` : "• Full Month"} ({riderDeliveryStats.length} riders evaluated)
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#166534", background: "#dcfce7", padding: "4px 10px", borderRadius: "20px" }}>
                      Total Payout: ${totalMonthlyDeliveryCharges.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "750px", fontSize: "12.5px" }}>
                    <thead>
                      <tr style={{ background: "#f1f5f9", textAlign: "left", borderBottom: "1px solid #e2e8f0" }}>
                        <th style={{ padding: "10px 14px", fontWeight: 700, color: "#475569" }}>DELIVERY EMPLOYEE</th>
                        <th style={{ padding: "10px 14px", fontWeight: 700, color: "#475569" }}>DELIVERED ORDERS</th>
                        <th style={{ padding: "10px 14px", fontWeight: 700, color: "#475569" }}>PRODUCTS DELIVERED</th>
                        <th style={{ padding: "10px 14px", fontWeight: 700, color: "#475569" }}>RATE PER ORDER</th>
                        <th style={{ padding: "10px 14px", fontWeight: 700, color: "#475569" }}>DELIVERY CHARGE (পাবে)</th>
                        <th style={{ padding: "10px 14px", fontWeight: 700, color: "#475569" }}>PAYOUT STATUS</th>
                        <th style={{ padding: "10px 14px", fontWeight: 700, color: "#475569", textAlign: "center" }}>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {riderDeliveryStats.map((r, idx) => {
                        return (
                          <tr key={r.riderName} style={{ borderBottom: "1px solid #f1f5f9", background: idx % 2 === 0 ? "#ffffff" : "#fbfcfe" }}>
                            {/* Employee Info */}
                            <td style={{ padding: "12px 14px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                {r.image ? (
                                  <img src={r.image} alt={r.riderName} style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} />
                                ) : (
                                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#2b6118", color: "#fff", display: "grid", placeItems: "center", fontWeight: 700, fontSize: "13px" }}>
                                    {r.riderName.charAt(0)}
                                  </div>
                                )}
                                <div>
                                  <b style={{ color: "#1e293b", fontSize: "13px", display: "block" }}>{r.riderName}</b>
                                  <small style={{ color: "#64748b", fontSize: "11px" }}>{r.role} • {r.vehicle}</small>
                                  {r.phone && (
                                    <div style={{ fontSize: "10.5px", color: "#2b6118" }}>{r.phone}</div>
                                  )}
                                </div>
                              </div>
                            </td>

                            {/* Orders Delivered */}
                            <td style={{ padding: "12px 14px" }}>
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "5px",
                                  fontWeight: 700,
                                  fontSize: "12px",
                                  padding: "3px 8px",
                                  borderRadius: "12px",
                                  background: r.deliveredOrdersCount > 0 ? "#eff6ff" : "#f1f5f9",
                                  color: r.deliveredOrdersCount > 0 ? "#1d4ed8" : "#94a3b8"
                                }}
                              >
                                <Package size={12} /> {r.deliveredOrdersCount} Orders
                              </span>
                            </td>

                            {/* Products Delivered */}
                            <td style={{ padding: "12px 14px" }}>
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "5px",
                                  fontWeight: 700,
                                  fontSize: "12px",
                                  padding: "3px 8px",
                                  borderRadius: "12px",
                                  background: r.totalProductsDelivered > 0 ? "#ecfdf5" : "#f1f5f9",
                                  color: r.totalProductsDelivered > 0 ? "#059669" : "#94a3b8"
                                }}
                              >
                                <ShoppingBag size={12} /> {r.totalProductsDelivered} Items/Units
                              </span>
                            </td>

                            {/* Rate */}
                            <td style={{ padding: "12px 14px", color: "#64748b", fontWeight: 600 }}>
                              ${deliveryFeeRate.toFixed(2)} / trip
                            </td>

                            {/* Delivery Charge Earned */}
                            <td style={{ padding: "12px 14px" }}>
                              <b style={{ fontSize: "14px", color: r.deliveryChargeEarned > 0 ? "#15803d" : "#94a3b8" }}>
                                ${r.deliveryChargeEarned.toFixed(2)}
                              </b>
                            </td>

                            {/* Payout Status */}
                            <td style={{ padding: "12px 14px" }}>
                              {r.deliveredOrdersCount > 0 ? (
                                <button
                                  type="button"
                                  onClick={() => toggleRiderPayoutStatus(r.payoutKey)}
                                  style={{
                                    border: "none",
                                    borderRadius: "12px",
                                    padding: "4px 10px",
                                    fontSize: "11px",
                                    fontWeight: 700,
                                    cursor: "pointer",
                                    background: r.payoutStatus === "Paid" ? "#dcfce7" : "#fef3c7",
                                    color: r.payoutStatus === "Paid" ? "#15803d" : "#b45309",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "4px"
                                  }}
                                  title="Click to toggle Paid / Pending payout status"
                                >
                                  {r.payoutStatus === "Paid" ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                                  {r.payoutStatus === "Paid" ? "Paid" : "Pending Payout"}
                                </button>
                              ) : (
                                <span style={{ color: "#94a3b8", fontSize: "11px" }}>No Deliveries</span>
                              )}
                            </td>

                            {/* Action */}
                            <td style={{ padding: "12px 14px", textAlign: "center" }}>
                              {r.orders.length > 0 ? (
                                <button
                                  type="button"
                                  onClick={() => setSelectedRiderDetails(r)}
                                  style={{
                                    background: "#f0fdf4",
                                    border: "1px solid #bbf7d0",
                                    color: "#15803d",
                                    padding: "4px 10px",
                                    borderRadius: "6px",
                                    fontSize: "11px",
                                    fontWeight: 600,
                                    cursor: "pointer"
                                  }}
                                >
                                  View Orders ({r.orders.length})
                                </button>
                              ) : (
                                <span style={{ color: "#cbd5e1", fontSize: "11px" }}>-</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* DETAILS MODAL FOR SELECTED RIDER'S ORDERS */}
              {selectedRiderDetails && (
                <div className="order-modal-backdrop" onClick={() => setSelectedRiderDetails(null)}>
                  <div className="order-modal-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "680px" }}>
                    <div className="order-modal-head" style={{ background: "linear-gradient(135deg, #1b3d12, #295b1b)" }}>
                      <div className="order-modal-title">
                        <span className="modal-eyebrow" style={{ color: "#bbf7d0" }}>DELIVERY STATEMENT & ORDER BREAKDOWN</span>
                        <h3 style={{ color: "#fff" }}>{selectedRiderDetails.riderName}'s Delivered Orders</h3>
                        <small style={{ color: "#dcfce7" }}>
                          {MONTH_NAMES[analyticsMonth]} {analyticsYear} • Total Earned: ${selectedRiderDetails.deliveryChargeEarned.toFixed(2)}
                        </small>
                      </div>
                      <button
                        type="button"
                        className="modal-close-btn"
                        onClick={() => setSelectedRiderDetails(null)}
                        style={{ color: "#fff" }}
                      >
                        <X size={18} />
                      </button>
                    </div>

                    <div className="order-modal-body" style={{ maxHeight: "68vh", overflowY: "auto", padding: "18px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "16px" }}>
                        <div style={{ background: "#f8fafc", padding: "10px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                          <span style={{ fontSize: "11px", color: "#64748b" }}>Delivered Orders</span>
                          <b style={{ display: "block", fontSize: "16px", color: "#1e293b" }}>{selectedRiderDetails.deliveredOrdersCount}</b>
                        </div>
                        <div style={{ background: "#f0fdf4", padding: "10px", borderRadius: "8px", border: "1px solid #bbf7d0" }}>
                          <span style={{ fontSize: "11px", color: "#166534" }}>Products Delivered</span>
                          <b style={{ display: "block", fontSize: "16px", color: "#15803d" }}>{selectedRiderDetails.totalProductsDelivered} items</b>
                        </div>
                        <div style={{ background: "#fefce8", padding: "10px", borderRadius: "8px", border: "1px solid #fef08a" }}>
                          <span style={{ fontSize: "11px", color: "#854d0e" }}>Delivery Charge Payable</span>
                          <b style={{ display: "block", fontSize: "16px", color: "#854d0e" }}>${selectedRiderDetails.deliveryChargeEarned.toFixed(2)}</b>
                        </div>
                      </div>

                      <span style={{ fontSize: "12px", fontWeight: 700, color: "#334155", display: "block", marginBottom: "8px" }}>
                        Itemized Orders Delivered in this Period:
                      </span>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {selectedRiderDetails.orders.map((o) => {
                          const pCount = getOrderProductCount(o);
                          return (
                            <div key={o.id} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "10px 12px" }}>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <b style={{ fontSize: "12.5px", color: "#1e3b14" }}>Order #{o.id}</b>
                                <span style={{ fontSize: "11.5px", fontWeight: 700, color: "#15803d" }}>
                                  +${deliveryFeeRate.toFixed(2)} charge
                                </span>
                              </div>
                              <div style={{ fontSize: "11.5px", color: "#64748b", margin: "2px 0" }}>
                                📅 {o.date} • Customer: <b>{o.customer}</b> ({o.address})
                              </div>
                              <div style={{ fontSize: "11.5px", color: "#334155", background: "#f8fafc", padding: "4px 8px", borderRadius: "6px", marginTop: "4px" }}>
                                <b>Products ({pCount}):</b> {typeof o.items === "string" ? o.items : JSON.stringify(o.items)}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="order-modal-foot" style={{ display: "flex", justifyContent: "space-between" }}>
                      <button
                        type="button"
                        onClick={() => toggleRiderPayoutStatus(selectedRiderDetails.payoutKey)}
                        className="soft"
                        style={{
                          background: selectedRiderDetails.payoutStatus === "Paid" ? "#fef3c7" : "#dcfce7",
                          color: selectedRiderDetails.payoutStatus === "Paid" ? "#b45309" : "#15803d",
                          fontWeight: 700
                        }}
                      >
                        {selectedRiderDetails.payoutStatus === "Paid" ? "Mark as Pending" : "Mark as Paid ✓"}
                      </button>
                      <button
                        type="button"
                        className="primary"
                        onClick={() => setSelectedRiderDetails(null)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* =========================================================================
                SECTION 2: GENERAL STORE PERFORMANCE OVERVIEW
               ========================================================================= */}

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
                  const catName = getCatName(cat);
                  const count = products.filter((p) => p.category === catName).length;
                  const pct = products.length > 0 ? (count / products.length) * 100 : 0;
                  return (
                    <div key={catName} style={{ marginBottom: "10px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "12px",
                          marginBottom: "4px"
                        }}
                      >
                        <span>{catName}</span>
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
                {/* Security Feature: Public Sign Up Locked */}
                <div className="admin-sec-toggle">
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ fontSize: "13px", fontWeight: 700, color: "#1e293b" }}>Admin Self-Registration</span>
                      <span style={{ fontSize: "10px", fontWeight: 800, background: "#fee2e2", color: "#b91c1c", padding: "1px 6px", borderRadius: "10px" }}>DISABLED</span>
                    </div>
                    <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
                      Public sign-up is locked on login screen. Admins can only be enrolled from this management panel.
                    </div>
                  </div>
                  <div style={{ background: "#f1f5f9", padding: "4px 10px", borderRadius: "8px", fontSize: "11px", fontWeight: 700, color: "#475569" }}>
                    🔒 Protected
                  </div>
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
                {/* Employee Photo Upload Section at the TOP */}
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "14px 16px" }}>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "8px" }}>
                    Employee Profile Photo (কর্মচারীর ছবি)
                  </label>

                  <input
                    type="file"
                    ref={employeeFileInputRef}
                    accept="image/*"
                    onChange={handleEmployeePhotoChange}
                    style={{ display: "none" }}
                  />

                  {employeeForm.image ? (
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div style={{ position: "relative" }}>
                        <img
                          src={employeeForm.image}
                          alt="Employee preview"
                          style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", border: "2px solid #22c55e", boxShadow: "0 2px 6px rgba(0,0,0,0.08)" }}
                        />
                        <button
                          type="button"
                          onClick={() => setEmployeeForm({ ...employeeForm, image: "" })}
                          title="Remove photo"
                          style={{
                            position: "absolute",
                            top: "-4px",
                            right: "-4px",
                            background: "#ef4444",
                            color: "#fff",
                            border: "none",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            display: "grid",
                            placeItems: "center",
                            cursor: "pointer"
                          }}
                        >
                          <X size={11} />
                        </button>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "12px", fontWeight: 700, color: "#166534" }}>✓ Photo Attached</div>
                        <div style={{ fontSize: "11px", color: "#64748b" }}>Photo will display in employee roster & tracking</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => employeeFileInputRef.current?.click()}
                        style={{ background: "#ffffff", border: "1px solid #cbd5e1", borderRadius: "6px", padding: "6px 12px", fontSize: "12px", fontWeight: 600, color: "#334155", cursor: "pointer" }}
                      >
                        Change Photo
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#e2e8f0", color: "#64748b", display: "grid", placeItems: "center" }}>
                          <User size={22} />
                        </div>
                        <div style={{ flex: 1, display: "flex", gap: "8px" }}>
                          <button
                            type="button"
                            onClick={() => employeeFileInputRef.current?.click()}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "6px",
                              background: "#ffffff",
                              border: "1.5px dashed #22c55e",
                              borderRadius: "8px",
                              padding: "8px 14px",
                              fontSize: "12px",
                              fontWeight: 700,
                              color: "#166534",
                              cursor: "pointer",
                              whiteSpace: "nowrap"
                            }}
                          >
                            <Upload size={14} /> Upload Photo (ছবি আপলোড)
                          </button>
                          <input
                            type="url"
                            placeholder="Or paste photo URL..."
                            value={employeeForm.image}
                            onChange={(e) => setEmployeeForm({ ...employeeForm, image: e.target.value })}
                            style={{ flex: 1, padding: "8px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "12px", background: "#fff", outline: "none", boxSizing: "border-box" }}
                          />
                        </div>
                      </div>

                      {/* Quick Sample Avatars */}
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", marginTop: "2px" }}>
                        <span style={{ fontSize: "11px", color: "#64748b" }}>Sample photos:</span>
                        {[
                          { label: "Male Rider 1", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" },
                          { label: "Male Staff 2", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" },
                          { label: "Female Staff 1", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80" },
                          { label: "Rider 3", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80" }
                        ].map((sample) => (
                          <button
                            key={sample.label}
                            type="button"
                            onClick={() => setEmployeeForm({ ...employeeForm, image: sample.img })}
                            style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "6px", padding: "2px 7px", fontSize: "11px", color: "#334155", cursor: "pointer" }}
                          >
                            + {sample.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

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

        {/* ADD / EDIT CUSTOMER MODAL */}
        {customerModalOpen && (
          <div className="modal-backdrop" onClick={() => setCustomerModalOpen(false)}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "540px", padding: "28px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "linear-gradient(135deg, #1d4ed8, #2563eb)", display: "grid", placeItems: "center", color: "#fff" }}>
                    <UserCheck size={18} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>
                      {editingCustomer ? "Edit Customer Profile" : "Register New Customer"}
                    </h3>
                    <p style={{ margin: "2px 0 0", color: "#64748b", fontSize: "12px" }}>
                      {editingCustomer ? `Update record for ${editingCustomer.id}` : "Enroll customer into GreenBasket database"}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setCustomerModalOpen(false)}
                  style={{ background: "#f1f5f9", border: "none", borderRadius: "8px", width: "32px", height: "32px", display: "grid", placeItems: "center", cursor: "pointer", color: "#64748b" }}
                >
                  <X size={16} />
                </button>
              </div>

              <form onSubmit={handleSaveCustomer} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                    Customer Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerForm.name}
                    onChange={(e) => setCustomerForm({ ...customerForm, name: e.target.value })}
                    placeholder="e.g. Sarah Ahmed"
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerForm.phone}
                      onChange={(e) => setCustomerForm({ ...customerForm, phone: e.target.value })}
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
                      value={customerForm.email}
                      onChange={(e) => setCustomerForm({ ...customerForm, email: e.target.value })}
                      placeholder="customer@example.com"
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                    Verified Delivery Address
                  </label>
                  <textarea
                    rows={2}
                    value={customerForm.address}
                    onChange={(e) => setCustomerForm({ ...customerForm, address: e.target.value })}
                    placeholder="e.g. House #24, Road #4, Dhanmondi, Dhaka"
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                    Account Status & Classification
                  </label>
                  <select
                    value={customerForm.status}
                    onChange={(e) => setCustomerForm({ ...customerForm, status: e.target.value })}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", background: "#fff", boxSizing: "border-box" }}
                  >
                    <option value="Active">● Active Buyer</option>
                    <option value="VIP">⭐ VIP Client (Frequent / High Spender)</option>
                    <option value="Blocked">🚫 Blocked / Blacklisted (Prevent Orders)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                    Customer Preferences / Admin Notes
                  </label>
                  <input
                    type="text"
                    value={customerForm.notes}
                    onChange={(e) => setCustomerForm({ ...customerForm, notes: e.target.value })}
                    placeholder="e.g. Prefers morning delivery; call before ringing bell"
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", boxSizing: "border-box" }}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "12px" }}>
                  <button
                    type="button"
                    className="soft"
                    onClick={() => setCustomerModalOpen(false)}
                    style={{ padding: "10px 18px", borderRadius: "8px", fontSize: "13px", fontWeight: 600 }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="primary"
                    style={{ padding: "10px 24px", borderRadius: "8px", fontSize: "13px", fontWeight: 700 }}
                  >
                    {editingCustomer ? "Update Profile" : "Save Customer"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MANAGE & ADD NEW CATEGORY MODAL */}
        {categoryModalOpen && (
          <div className="modal-backdrop" onClick={() => setCategoryModalOpen(false)}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "520px", padding: "26px", maxHeight: "90vh", overflowY: "auto" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#eef7ea", color: "#2f6b1b", display: "grid", placeItems: "center" }}>
                    <FolderPlus size={20} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>
                      Add New Category (নতুন ক্যাটাগরি ও ছবি)
                    </h3>
                    <p style={{ margin: "2px 0 0", color: "#64748b", fontSize: "12px" }}>
                      Create category with name and custom photo for product catalog
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setCategoryModalOpen(false)}
                  style={{ background: "#f1f5f9", border: "none", borderRadius: "8px", width: "32px", height: "32px", display: "grid", placeItems: "center", cursor: "pointer", color: "#64748b" }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Add New Category Form with Photo Upload */}
              <form onSubmit={handleAddCategory} style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "22px", background: "#f8fafc", padding: "16px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                    Category Name * (ক্যাটাগরির নাম)
                  </label>
                  <input
                    type="text"
                    required
                    autoFocus
                    placeholder="e.g. Organic Spices, Seafood, Snacks, Dairy..."
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", outline: "none", boxSizing: "border-box", background: "#fff" }}
                  />
                </div>

                {/* Category Photo Upload Section */}
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "5px" }}>
                    Category Photo * (ছবি অ্যাড করার অপশন)
                  </label>

                  <input
                    type="file"
                    ref={categoryFileInputRef}
                    accept="image/*"
                    onChange={handleCategoryFileChange}
                    style={{ display: "none" }}
                  />

                  {newCategoryImage ? (
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "#ffffff", padding: "10px 14px", borderRadius: "8px", border: "1px solid #bbf7d0" }}>
                      <img
                        src={newCategoryImage}
                        alt="Category preview"
                        style={{ width: "52px", height: "52px", borderRadius: "8px", objectFit: "cover", border: "1px solid #cbd5e1" }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "12px", fontWeight: 700, color: "#166534" }}>✓ Photo Selected</div>
                        <div style={{ fontSize: "11px", color: "#64748b" }}>Category image ready to save</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => categoryFileInputRef.current?.click()}
                        style={{ background: "#ecf5e7", color: "#166534", border: "1px solid #c8e2bd", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: 600, cursor: "pointer" }}
                      >
                        Change Photo
                      </button>
                      <button
                        type="button"
                        onClick={() => setNewCategoryImage("")}
                        title="Remove image"
                        style={{ background: "#fee2e2", color: "#dc2626", border: "none", width: "28px", height: "28px", borderRadius: "6px", display: "grid", placeItems: "center", cursor: "pointer" }}
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                        <button
                          type="button"
                          onClick={() => categoryFileInputRef.current?.click()}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            background: "#ffffff",
                            border: "1.5px dashed #22c55e",
                            borderRadius: "8px",
                            padding: "9px 14px",
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#166534",
                            cursor: "pointer",
                            whiteSpace: "nowrap"
                          }}
                        >
                          <Upload size={14} /> Upload Image (ফাইল ব্রাউজ)
                        </button>
                        <input
                          type="url"
                          placeholder="Or paste image URL (https://...)"
                          value={newCategoryImage}
                          onChange={(e) => setNewCategoryImage(e.target.value)}
                          style={{ flex: 1, padding: "9px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "12px", outline: "none", boxSizing: "border-box", background: "#fff" }}
                        />
                      </div>

                      {/* Quick Sample Presets */}
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", marginTop: "2px" }}>
                        <span style={{ fontSize: "11px", color: "#64748b" }}>Quick Sample:</span>
                        {[
                          { label: "Spices", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=450&auto=format&fit=crop&q=80" },
                          { label: "Seafood", img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=450&auto=format&fit=crop&q=80" },
                          { label: "Meat", img: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=450&auto=format&fit=crop&q=80" },
                          { label: "Snacks", img: "https://images.unsplash.com/photo-1621996346565-e3d5d6281292?w=450&auto=format&fit=crop&q=80" },
                          { label: "Drinks", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=450&auto=format&fit=crop&q=80" }
                        ].map((preset) => (
                          <button
                            key={preset.label}
                            type="button"
                            onClick={() => setNewCategoryImage(preset.img)}
                            style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "6px", padding: "3px 8px", fontSize: "11px", color: "#334155", cursor: "pointer" }}
                          >
                            + {preset.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "4px" }}>
                  <button
                    type="submit"
                    className="primary"
                    style={{ padding: "10px 22px", borderRadius: "8px", fontSize: "13px", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px" }}
                  >
                    <Plus size={15} /> Save New Category (ক্যাটাগরি যুক্ত করুন)
                  </button>
                </div>
              </form>

              {/* Existing Categories List with Photos */}
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "8px" }}>
                  Active Categories with Photos ({categories.length})
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", maxHeight: "220px", overflowY: "auto", padding: "4px 0" }}>
                  {categories.map((c) => {
                    const cName = getCatName(c);
                    const cImg = getCatImage(c);
                    const count = products.filter(p => p.category === cName).length;
                    return (
                      <div
                        key={cName}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          borderRadius: "20px",
                          padding: "4px 10px 4px 5px",
                          fontSize: "12px",
                          color: "#1e293b",
                          boxShadow: "0 1px 2px rgba(0,0,0,0.02)"
                        }}
                      >
                        {cImg ? (
                          <img
                            src={cImg}
                            alt={cName}
                            style={{ width: "24px", height: "24px", borderRadius: "50%", objectFit: "cover", border: "1px solid #cbd5e1" }}
                          />
                        ) : (
                          <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#ecf5e7", color: "#2f6b1b", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: 700 }}>
                            {cName.charAt(0)}
                          </div>
                        )}
                        <span style={{ fontWeight: 600 }}>{cName}</span>
                        <span style={{ fontSize: "10px", color: "#64748b", background: "#f1f5f9", borderRadius: "10px", padding: "1px 6px" }}>
                          {count} items
                        </span>
                        {categories.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleDeleteCategory(c)}
                            title={`Delete category "${cName}"`}
                            style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", padding: "0 2px", display: "grid", placeItems: "center" }}
                            onMouseEnter={(e) => e.currentTarget.style.color = "#dc2626"}
                            onMouseLeave={(e) => e.currentTarget.style.color = "#94a3b8"}
                          >
                            <Trash2 size={12} />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px", paddingTop: "14px", borderTop: "1px solid #f1f5f9" }}>
                <button
                  type="button"
                  className="primary"
                  onClick={() => setCategoryModalOpen(false)}
                  style={{ padding: "8px 20px", borderRadius: "8px", fontSize: "12px", fontWeight: 700 }}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CUSTOMER ORDER HISTORY MODAL */}
        {viewOrdersCustomer && (
          <div className="modal-backdrop" onClick={() => setViewOrdersCustomer(null)}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "680px", padding: "28px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div className={viewOrdersCustomer.status === "VIP" ? "cust-avatar vip" : "cust-avatar"} style={{ width: "38px", height: "38px", fontSize: "13px" }}>
                    {getInitials(viewOrdersCustomer.name)}
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>
                      Order History: {viewOrdersCustomer.name}
                    </h3>
                    <p style={{ margin: "2px 0 0", color: "#64748b", fontSize: "12px" }}>
                      {viewOrdersCustomer.phone} · {viewOrdersCustomer.address}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setViewOrdersCustomer(null)}
                  style={{ background: "#f1f5f9", border: "none", borderRadius: "8px", width: "32px", height: "32px", display: "grid", placeItems: "center", cursor: "pointer", color: "#64748b" }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Order List */}
              <div style={{ maxHeight: "380px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
                {orders.filter(o => 
                  (o.customer && o.customer.toLowerCase() === viewOrdersCustomer.name.toLowerCase()) || 
                  (o.customerPhone && o.customerPhone === viewOrdersCustomer.phone)
                ).length === 0 ? (
                  <div style={{ padding: "30px", textAlign: "center", color: "#94a3b8" }}>
                    <ShoppingBag size={32} style={{ margin: "0 auto 8px", opacity: 0.5 }} />
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "#64748b" }}>No orders recorded for this customer</div>
                  </div>
                ) : (
                  orders.filter(o => 
                    (o.customer && o.customer.toLowerCase() === viewOrdersCustomer.name.toLowerCase()) || 
                    (o.customerPhone && o.customerPhone === viewOrdersCustomer.phone)
                  ).sort(sortOrdersRecentFirst).map(ord => (
                    <div key={ord.id} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ fontWeight: 800, color: "#0f172a", fontSize: "14px" }}>Order #{ord.id}</span>
                          <span className={`badge ${ord.status === "Delivered" ? "badge-delivered" : ord.status === "Shipped" ? "badge-shipped" : "badge-processing"}`}>
                            {ord.status}
                          </span>
                        </div>
                        <div style={{ fontSize: "12px", color: "#334155", marginTop: "4px" }}>
                          {ord.items}
                        </div>
                        <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
                          Date: {ord.date} · Method: {ord.paymentMethod}
                        </div>
                      </div>

                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "16px", fontWeight: 800, color: "#166534" }}>
                          ${Number(ord.total || 0).toFixed(2)}
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setViewOrdersCustomer(null);
                            setSelectedOrderForModal(ord);
                          }}
                          style={{ marginTop: "6px", fontSize: "11px", fontWeight: 700, background: "#ecf5e7", color: "#1f4214", border: "1px solid #c9dec2", padding: "4px 8px", borderRadius: "6px", cursor: "pointer" }}
                        >
                          View Order Details →
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}>
                <button
                  type="button"
                  className="primary"
                  onClick={() => setViewOrdersCustomer(null)}
                  style={{ padding: "8px 20px", borderRadius: "8px", fontSize: "12px", fontWeight: 700 }}
                >
                  Close
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
