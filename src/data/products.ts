import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import p9 from "@/assets/p9.jpg";
import p10 from "@/assets/p10.jpg";
import p11 from "@/assets/p11.jpg";
import p12 from "@/assets/p12.jpg";
import p13 from "@/assets/p13.jpg";
import p14 from "@/assets/p14.jpg";
import p15 from "@/assets/p15.jpg";
import p16 from "@/assets/p16.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  short: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  colors: string[];
  sizes: string[];
  stock: number;
  badge: "New" | "Bestseller" | "Premium" | "Sale" | "";
  featured: boolean;
  active: boolean;
  sold: number;
  createdAt: string;
};

const spec = (material: string, capacity: string, warranty: string, dim: string) => [
  { label: "Material", value: material },
  { label: "Capacity", value: capacity },
  { label: "Warranty", value: warranty },
  { label: "Dimensions", value: dim },
  { label: "Brand", value: "PS Creation" },
  { label: "Country of Origin", value: "India" },
];

export const products: Product[] = [
  {
    id: "cbh-01", name: "Classic School Backpack", category: "school-bags", image: p1,
    price: 899, mrp: 1499, rating: 4.5, reviews: 128,
    short: "Lightweight everyday school bag with a padded back panel.",
    description:
      "A dependable daily-use school backpack built with reinforced stitching at all stress points. The padded back panel and breathable shoulder straps keep the load comfortable through a full school day.",
    features: ["Padded ventilated back panel", "Reinforced bar-tack stitching", "Water-resistant polyester", "Bottle pockets on both sides", "Name-tag window inside"],
    specs: spec("600D Polyester", "24 Litres", "1 Year", "42 x 30 x 16 cm"),
    colors: ["Navy", "Red", "Black"], sizes: ["Small", "Medium"], stock: 42, badge: "Bestseller",
    featured: true, active: true, sold: 310, createdAt: "2025-11-02",
  },
  {
    id: "cbh-02", name: "Premium Laptop Backpack", category: "laptop-backpacks", image: p2,
    price: 1799, mrp: 2999, rating: 4.7, reviews: 214,
    short: "15.6-inch padded laptop sleeve with USB charging port.",
    description:
      "Designed for daily commutes, this backpack keeps a 15.6-inch laptop cushioned in a suspended sleeve while an external USB port keeps your phone alive on the move.",
    features: ["Suspended 15.6\" laptop sleeve", "External USB charging port", "Anti-theft rear pocket", "Luggage trolley strap", "Water-repellent finish"],
    specs: spec("Water-repellent Nylon", "28 Litres", "2 Years", "46 x 32 x 18 cm"),
    colors: ["Grey", "Black", "Navy"], sizes: [], stock: 28, badge: "Premium",
    featured: true, active: true, sold: 402, createdAt: "2025-12-14",
  },
  {
    id: "cbh-03", name: "Executive Office Backpack", category: "corporate-bags", image: p3,
    price: 2499, mrp: 3799, rating: 4.6, reviews: 96,
    short: "Slim faux-leather backpack for the boardroom commute.",
    description:
      "A slim, structured silhouette in soft-touch faux leather. Formal enough for client meetings, practical enough for a laptop, files and a lunch box.",
    features: ["Soft-touch vegan leather", "Structured slim profile", "Quick-access top handle", "Organiser panel with pen loops", "Metal YKK-style zips"],
    specs: spec("PU Leather", "22 Litres", "2 Years", "44 x 30 x 14 cm"),
    colors: ["Black", "Coffee"], sizes: [], stock: 16, badge: "Premium",
    featured: true, active: true, sold: 178, createdAt: "2026-01-09",
  },
  {
    id: "cbh-04", name: "Waterproof Travel Backpack", category: "travel-bags", image: p4,
    price: 2199, mrp: 3299, rating: 4.4, reviews: 74,
    short: "Roll-top rucksack that shrugs off monsoon showers.",
    description:
      "A roll-top travel rucksack in tarpaulin-backed fabric. Roll it down for a day pack, roll it up for a three-day trip.",
    features: ["Roll-top waterproof closure", "Taped seams", "Side zip laptop access", "Compression straps", "Hidden passport pocket"],
    specs: spec("Tarpaulin-backed Nylon", "35 Litres", "2 Years", "52 x 32 x 20 cm"),
    colors: ["Olive", "Black"], sizes: ["35L", "45L"], stock: 21, badge: "New",
    featured: true, active: true, sold: 91, createdAt: "2026-02-18",
  },
  {
    id: "cbh-05", name: "Urban College Backpack", category: "school-bags", image: p5,
    price: 1299, mrp: 1899, rating: 4.3, reviews: 152,
    short: "Canvas campus backpack with leather-trim base.",
    description:
      "Heavy canvas body, leather-trim base and a roomy main compartment that swallows textbooks, a laptop and gym kit without complaint.",
    features: ["16oz cotton canvas", "Leather-trim reinforced base", "Padded 14\" sleeve", "Front organiser pocket", "Adjustable webbing straps"],
    specs: spec("Cotton Canvas", "26 Litres", "1 Year", "44 x 31 x 15 cm"),
    colors: ["Mustard", "Olive", "Navy"], sizes: [], stock: 34, badge: "Bestseller",
    featured: true, active: true, sold: 265, createdAt: "2025-10-21",
  },
  {
    id: "cbh-06", name: "Large Travel Duffel", category: "travel-bags", image: p6,
    price: 2899, mrp: 4299, rating: 4.5, reviews: 63,
    short: "Wheeled 70L duffel for long trips and team kit.",
    description:
      "A cavernous wheeled duffel with an inline skate wheel system and a retractable trolley handle. Perfect for family trips and sports teams.",
    features: ["Inline skate wheels", "Retractable trolley handle", "Dual carry handles", "Full-length U-zip opening", "Reinforced base panel"],
    specs: spec("Ballistic Nylon", "70 Litres", "3 Years", "68 x 36 x 34 cm"),
    colors: ["Black", "Navy"], sizes: ["70L", "90L"], stock: 12, badge: "Sale",
    featured: true, active: true, sold: 140, createdAt: "2025-09-30",
  },
  {
    id: "cbh-07", name: "Premium Cabin Trolley", category: "suitcases", image: p7,
    price: 3599, mrp: 5999, rating: 4.8, reviews: 188,
    short: "Cabin-legal hard trolley with TSA lock and 360° spinners.",
    description:
      "A polycarbonate cabin trolley that clears most Indian carrier cabin limits, with silent double-spinner wheels and a built-in combination lock.",
    features: ["Cabin-approved 55 cm size", "360° silent spinner wheels", "TSA combination lock", "Cross-ribbon interior", "Scratch-resistant shell"],
    specs: spec("Polycarbonate", "38 Litres", "5 Years", "55 x 36 x 22 cm"),
    colors: ["Teal", "Silver", "Navy"], sizes: ["Cabin 55cm"], stock: 19, badge: "Bestseller",
    featured: true, active: true, sold: 355, createdAt: "2026-01-25",
  },
  {
    id: "cbh-08", name: "Hard Shell Suitcase", category: "suitcases", image: p8,
    price: 4999, mrp: 7999, rating: 4.6, reviews: 121,
    short: "Check-in hard case with textured impact-resistant shell.",
    description:
      "A large check-in case with a deeply ribbed shell that hides scuffs, expandable capacity and a fully lined dual-compartment interior.",
    features: ["Expandable +5 cm capacity", "Impact-resistant ribbed shell", "Dual lined compartments", "TSA lock", "Silent spinner wheels"],
    specs: spec("ABS + Polycarbonate", "92 Litres", "5 Years", "76 x 50 x 30 cm"),
    colors: ["Burgundy", "Black"], sizes: ["Medium 65cm", "Large 76cm"], stock: 8, badge: "Premium",
    featured: false, active: true, sold: 118, createdAt: "2025-08-12",
  },
  {
    id: "cbh-09", name: "Corporate Laptop Bag", category: "corporate-bags", image: p9,
    price: 1599, mrp: 2499, rating: 4.4, reviews: 87,
    short: "Slimline shoulder bag ideal for branded corporate gifting.",
    description:
      "Our most-ordered corporate gifting bag. Clean navy nylon with leather-trim corners and a large front panel ready for your logo.",
    features: ["Logo-ready front panel", "Detachable shoulder strap", "14\" padded laptop sleeve", "Leather-trim corners", "Bulk-order friendly"],
    specs: spec("Nylon + PU Trim", "16 Litres", "1 Year", "40 x 30 x 9 cm"),
    colors: ["Navy", "Grey", "Black"], sizes: [], stock: 120, badge: "Bestseller",
    featured: true, active: true, sold: 620, createdAt: "2025-07-19",
  },
  {
    id: "cbh-10", name: "Executive Messenger Bag", category: "corporate-bags", image: p10,
    price: 2799, mrp: 4199, rating: 4.7, reviews: 58,
    short: "Buckle-flap leather messenger with a warm tan finish.",
    description:
      "A classic flap messenger in tan leather with solid brass hardware that ages beautifully. Fits a 14-inch laptop and A4 documents flat.",
    features: ["Full-grain look leather", "Solid brass buckle", "Adjustable shoulder strap", "Two internal document slips", "Hand-finished edges"],
    specs: spec("Genuine Leather", "14 Litres", "3 Years", "38 x 32 x 11 cm"),
    colors: ["Tan", "Dark Brown"], sizes: [], stock: 11, badge: "Premium",
    featured: false, active: true, sold: 76, createdAt: "2025-12-01",
  },
  {
    id: "cbh-11", name: "Institutional School Bag", category: "institutional-bags", image: p11,
    price: 1099, mrp: 1699, rating: 4.2, reviews: 45,
    short: "Uniform school bag supplied with crest and name tag.",
    description:
      "Built for schools ordering in volume: uniform maroon body, contrast piping and a stitched panel for the school crest and student name tag.",
    features: ["School crest embroidery available", "Contrast piping", "Reinforced twin handles", "Wipe-clean lining", "Volume pricing from 50 pcs"],
    specs: spec("900D Polyester", "22 Litres", "1 Year", "40 x 29 x 15 cm"),
    colors: ["Maroon", "Navy", "Bottle Green"], sizes: ["Junior", "Senior"], stock: 200, badge: "",
    featured: false, active: true, sold: 480, createdAt: "2025-06-08",
  },
  {
    id: "cbh-12", name: "Custom Logo Backpack", category: "custom-bags", image: p12,
    price: 1399, mrp: 2199, rating: 4.5, reviews: 39,
    short: "Blank-canvas backpack for embroidery or screen printing.",
    description:
      "A clean royal-blue backpack with a flat front panel and a stitched patch area — the easiest base for embroidery, screen print or heat transfer.",
    features: ["Flat logo panel", "Embroidery / print ready", "Colour matching on bulk orders", "Padded straps", "MOQ 50 pieces"],
    specs: spec("600D Polyester", "25 Litres", "1 Year", "43 x 30 x 16 cm"),
    colors: ["Royal Blue", "Black", "Red", "Grey"], sizes: [], stock: 150, badge: "New",
    featured: true, active: true, sold: 210, createdAt: "2026-02-02",
  },
  {
    id: "cbh-13", name: "Business Travel Backpack", category: "laptop-backpacks", image: p13,
    price: 3299, mrp: 4899, rating: 4.6, reviews: 102,
    short: "Wheeled cabin backpack that switches to a trolley.",
    description:
      "Carry it, or wheel it. This hybrid cabin backpack has retractable wheels and a stowable harness for airport runs and week-long client visits.",
    features: ["Retractable trolley handle", "Stowable shoulder harness", "17\" laptop compartment", "Clamshell packing opening", "Cabin-friendly footprint"],
    specs: spec("1680D Ballistic Nylon", "34 Litres", "3 Years", "52 x 34 x 22 cm"),
    colors: ["Black", "Charcoal"], sizes: [], stock: 14, badge: "Premium",
    featured: true, active: true, sold: 132, createdAt: "2026-01-16",
  },
  {
    id: "cbh-14", name: "Lightweight Travel Suitcase", category: "suitcases", image: p14,
    price: 3899, mrp: 5499, rating: 4.3, reviews: 67,
    short: "Ultra-light medium trolley under 3 kg empty.",
    description:
      "For travellers who fight the baggage scale. A slim silver shell keeps the empty weight under three kilos without giving up on strength.",
    features: ["Under 3 kg empty weight", "Aluminium telescopic handle", "Silent spinner wheels", "Number lock", "Full lining with zip divider"],
    specs: spec("Polypropylene", "65 Litres", "3 Years", "65 x 44 x 26 cm"),
    colors: ["Silver", "Champagne"], sizes: ["Medium 65cm"], stock: 23, badge: "Sale",
    featured: false, active: true, sold: 98, createdAt: "2025-11-27",
  },
  {
    id: "cbh-15", name: "Promotional Drawstring Backpack", category: "promotional-bags", image: p15,
    price: 249, mrp: 449, rating: 4.0, reviews: 210,
    short: "Budget event giveaway bag, printed in bulk.",
    description:
      "The workhorse of marathons, seminars and college fests. Light, cheap in volume, and a large printable face for your branding.",
    features: ["Large print area", "Bulk pricing from 100 pcs", "Reinforced corner eyelets", "Assorted colour runs", "3–5 day dispatch on stock colours"],
    specs: spec("210D Polyester", "10 Litres", "Not applicable", "44 x 34 cm"),
    colors: ["Orange", "Blue", "Green", "Red", "Black"], sizes: [], stock: 500, badge: "",
    featured: false, active: true, sold: 1520, createdAt: "2025-05-15",
  },
  {
    id: "cbh-16", name: "Premium Weekend Travel Bag", category: "travel-bags", image: p16,
    price: 3199, mrp: 4599, rating: 4.8, reviews: 54,
    short: "Waxed canvas holdall with saddle-leather handles.",
    description:
      "A weekend holdall in waxed canvas with saddle-leather handles and antique brass fittings — smart enough for a hotel lobby, tough enough for the boot of a car.",
    features: ["Waxed cotton canvas", "Saddle-leather handles", "Antique brass hardware", "Detachable shoulder strap", "Shoe compartment"],
    specs: spec("Waxed Canvas + Leather", "42 Litres", "3 Years", "55 x 30 x 28 cm"),
    colors: ["Tan", "Olive"], sizes: [], stock: 9, badge: "New",
    featured: true, active: true, sold: 61, createdAt: "2026-02-24",
  },
];

export const discountOf = (p: { price: number; mrp: number }) =>
  Math.round(((p.mrp - p.price) / p.mrp) * 100);

export const findProduct = (id: string) => products.find((p) => p.id === id);

export const inr = (n: number) =>
  "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });
