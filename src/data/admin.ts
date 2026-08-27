export const adminCredentials = {
  email: "admin@chandokbaghouse.com",
  password: "Admin@123",
};

export type OrderStatus = "Pending" | "Confirmed" | "Packed" | "Shipped" | "Delivered" | "Cancelled";

export type AdminOrder = {
  id: string;
  customer: string;
  date: string;
  items: string;
  amount: number;
  payment: string;
  status: OrderStatus;
};

export const adminOrders: AdminOrder[] = [
  { id: "CBH-24081", customer: "Rohit Deshmukh", date: "2026-08-24", items: "Premium Laptop Backpack x1", amount: 1799, payment: "UPI", status: "Shipped" },
  { id: "CBH-24080", customer: "Sneha Kulkarni", date: "2026-08-24", items: "Classic School Backpack x2", amount: 1798, payment: "COD", status: "Pending" },
  { id: "CBH-24079", customer: "Ashok Institute", date: "2026-08-23", items: "Institutional School Bag x120", amount: 131880, payment: "Net Banking", status: "Confirmed" },
  { id: "CBH-24078", customer: "Meera Joshi", date: "2026-08-22", items: "Premium Cabin Trolley x1", amount: 3599, payment: "Card", status: "Delivered" },
  { id: "CBH-24077", customer: "Zenith Softech", date: "2026-08-21", items: "Corporate Laptop Bag x60", amount: 95940, payment: "Net Banking", status: "Packed" },
  { id: "CBH-24076", customer: "Imran Shaikh", date: "2026-08-20", items: "Large Travel Duffel x1", amount: 2899, payment: "UPI", status: "Delivered" },
  { id: "CBH-24075", customer: "Priya Nair", date: "2026-08-19", items: "Executive Messenger Bag x1", amount: 2799, payment: "Card", status: "Cancelled" },
  { id: "CBH-24074", customer: "Sagar Pawar", date: "2026-08-18", items: "Urban College Backpack x1", amount: 1299, payment: "COD", status: "Delivered" },
];

export type AdminCustomer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  orders: number;
  spend: number;
  status: "Active" | "Inactive";
};

export const adminCustomers: AdminCustomer[] = [
  { id: "CU-101", name: "Rohit Deshmukh", phone: "+91 98220 11223", email: "rohit.d@example.com", city: "Pune", orders: 6, spend: 18400, status: "Active" },
  { id: "CU-102", name: "Sneha Kulkarni", phone: "+91 99700 55412", email: "sneha.k@example.com", city: "Pimpri", orders: 3, spend: 6250, status: "Active" },
  { id: "CU-103", name: "Ashok Institute", phone: "+91 20 2745 8890", email: "purchase@ashokinst.example", city: "Nashik", orders: 4, spend: 412300, status: "Active" },
  { id: "CU-104", name: "Meera Joshi", phone: "+91 90280 34110", email: "meera.j@example.com", city: "Mumbai", orders: 2, spend: 7198, status: "Active" },
  { id: "CU-105", name: "Zenith Softech", phone: "+91 20 6677 1200", email: "admin@zenithsoftech.example", city: "Hinjewadi", orders: 5, spend: 289500, status: "Active" },
  { id: "CU-106", name: "Imran Shaikh", phone: "+91 87880 99001", email: "imran.s@example.com", city: "Chinchwad", orders: 1, spend: 2899, status: "Inactive" },
];

export type EnquiryStatus = "New" | "Contacted" | "In Progress" | "Converted" | "Closed";

export type Enquiry = {
  id: string;
  name: string;
  phone: string;
  email: string;
  type: string;
  product: string;
  quantity: string;
  message: string;
  date: string;
  status: EnquiryStatus;
};

export const adminEnquiries: Enquiry[] = [
  { id: "EN-501", name: "Kavita Rane", phone: "+91 98901 22334", email: "kavita.r@example.com", type: "Product", product: "Premium Cabin Trolley", quantity: "1", message: "Is the teal colour in stock at the Old Sangvi shop?", date: "2026-08-24", status: "New" },
  { id: "EN-502", name: "Nilesh Patil", phone: "+91 97640 88220", email: "nilesh.p@example.com", type: "Custom Branding", product: "Custom Logo Backpack", quantity: "150", message: "Need embroidered logo for our cricket academy.", date: "2026-08-23", status: "Contacted" },
  { id: "EN-503", name: "St. Xavier School", phone: "+91 20 2712 4455", email: "office@stxavier.example", type: "Institutional", product: "Institutional School Bag", quantity: "400", message: "Requesting quote and sample for next academic year.", date: "2026-08-22", status: "In Progress" },
  { id: "EN-504", name: "Ganesh Traders", phone: "+91 93720 76512", email: "ganesh.traders@example.com", type: "Bulk", product: "Promotional Drawstring Backpack", quantity: "1000", message: "Ganpati festival giveaway bags, single colour print.", date: "2026-08-20", status: "Converted" },
  { id: "EN-505", name: "Anita Verma", phone: "+91 90110 34567", email: "anita.v@example.com", type: "After Sales", product: "Hard Shell Suitcase", quantity: "1", message: "Wheel replacement required, purchased last year.", date: "2026-08-18", status: "Closed" },
];

export type BulkEnquiry = {
  id: string;
  company: string;
  contact: string;
  phone: string;
  email: string;
  bagType: string;
  quantity: string;
  branding: string;
  deliveryDate: string;
  budget: string;
  status: EnquiryStatus;
};

export const adminBulkEnquiries: BulkEnquiry[] = [
  { id: "BE-201", company: "Zenith Softech", contact: "Rahul Menon", phone: "+91 20 6677 1200", email: "admin@zenithsoftech.example", bagType: "Corporate Laptop Bags", quantity: "250", branding: "Embroidered logo", deliveryDate: "2026-09-20", budget: "₹3–5 Lakh", status: "In Progress" },
  { id: "BE-202", company: "Ashok Institute", contact: "Dr. S. Kale", phone: "+91 20 2745 8890", email: "purchase@ashokinst.example", bagType: "Institutional School Bags", quantity: "400", branding: "Screen print crest", deliveryDate: "2026-10-05", budget: "₹4–6 Lakh", status: "Contacted" },
  { id: "BE-203", company: "Pune Marathon Trust", contact: "Vivek Sathe", phone: "+91 88880 45120", email: "ops@punemarathon.example", bagType: "Promotional Drawstring Bags", quantity: "2500", branding: "2-colour print", deliveryDate: "2026-11-12", budget: "₹5–8 Lakh", status: "New" },
  { id: "BE-204", company: "Sunrise Hospitals", contact: "Neha Bhosale", phone: "+91 20 4004 7788", email: "hr@sunrisehosp.example", bagType: "Employee Kit Bags", quantity: "180", branding: "Embossed logo patch", deliveryDate: "2026-09-30", budget: "₹2–3 Lakh", status: "Converted" },
];

export const demoAccount = {
  name: "Rohit Deshmukh",
  email: "rohit.d@example.com",
  phone: "+91 98220 11223",
  address: "Flat 302, Shreeji Residency, Aundh Road, Khadki, Pune, Maharashtra 411020",
  member: "Member since 2023",
  orders: [
    { id: "CBH-24081", date: "2026-08-24", items: "Premium Laptop Backpack x1", amount: 1799, status: "Shipped" },
    { id: "CBH-23992", date: "2026-05-11", items: "Urban College Backpack x1", amount: 1299, status: "Delivered" },
    { id: "CBH-23744", date: "2026-01-08", items: "Premium Cabin Trolley x1", amount: 3599, status: "Delivered" },
  ],
};

export const dashboardStats = {
  totalOrders: 1284,
  totalProducts: 16,
  totalCustomers: 642,
  totalRevenue: 4820000,
  pendingEnquiries: 3,
  bulkEnquiries: 4,
  lowStock: 4,
};

export const monthlyRevenue = [
  { month: "Mar", value: 320 },
  { month: "Apr", value: 410 },
  { month: "May", value: 380 },
  { month: "Jun", value: 520 },
  { month: "Jul", value: 610 },
  { month: "Aug", value: 720 },
];

export const categorySplit = [
  { label: "School Bags", value: 28 },
  { label: "Laptop Backpacks", value: 22 },
  { label: "Corporate Bags", value: 19 },
  { label: "Suitcases", value: 16 },
  { label: "Travel Bags", value: 9 },
  { label: "Others", value: 6 },
];
