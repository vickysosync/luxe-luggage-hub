import catSchool from "@/assets/cat-school.jpg";
import catLaptop from "@/assets/cat-laptop.jpg";
import catTravel from "@/assets/cat-travel.jpg";
import catSuitcase from "@/assets/cat-suitcase.jpg";
import catCorporate from "@/assets/cat-corporate.jpg";
import catCustom from "@/assets/cat-custom.jpg";
import catPromo from "@/assets/cat-promo.jpg";
import catInstitutional from "@/assets/cat-institutional.jpg";
import heroImg from "@/assets/hero.jpg";
import workshopImg from "@/assets/workshop.jpg";
import bulkImg from "@/assets/bulk.jpg";

export const business = {
  name: "Chandok Bag House",
  brand: "PS Creation",
  owner: "Navneet Singh Gurmukh Singh Gandhi",
  phone: "+91 93711 11448",
  email: "gschandok@chandokbaghouse.com",
  address:
    "Shop No. 4, Union Bank ATM, Shivaprasad Building, Housing Society, near Old Sangvi, Anand Nagar, Sainath Colony, Old Sangvi, Pimpri-Chinchwad, Maharashtra 411027",
  description:
    "Chandok Bag House is a premier bag manufacturing and retail establishment in Pimpri-Chinchwad, Maharashtra, specialising in high-quality retail and corporate baggage solutions for over two decades.",
  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 9:00 PM" },
    { day: "Sunday", time: "11:00 AM – 7:00 PM" },
    { day: "Public Holidays", time: "By appointment" },
  ],
  social: [
    { label: "Facebook", url: "https://facebook.com" },
    { label: "Instagram", url: "https://instagram.com" },
    { label: "WhatsApp", url: "https://wa.me/919371111448" },
  ],
};

export type Category = {
  id: string;
  slug: string;
  name: string;
  image: string;
  blurb: string;
  active: boolean;
};

export const categories: Category[] = [
  { id: "c1", slug: "school-bags", name: "School Bags", image: catSchool, blurb: "Everyday-tough bags for students", active: true },
  { id: "c2", slug: "laptop-backpacks", name: "Laptop Backpacks", image: catLaptop, blurb: "Padded protection for work & study", active: true },
  { id: "c3", slug: "travel-bags", name: "Travel Bags", image: catTravel, blurb: "Duffels & weekenders built to last", active: true },
  { id: "c4", slug: "suitcases", name: "Suitcases", image: catSuitcase, blurb: "Cabin and check-in trolleys", active: true },
  { id: "c5", slug: "corporate-bags", name: "Corporate Bags", image: catCorporate, blurb: "Executive briefcases & messengers", active: true },
  { id: "c6", slug: "custom-bags", name: "Custom Bags", image: catCustom, blurb: "Your logo, your specification", active: true },
  { id: "c7", slug: "promotional-bags", name: "Promotional Bags", image: catPromo, blurb: "Event and giveaway bags in bulk", active: true },
  { id: "c8", slug: "institutional-bags", name: "Institutional Bags", image: catInstitutional, blurb: "Uniform bags for schools & colleges", active: true },
];

export const categoryName = (slug: string) =>
  categories.find((c) => c.slug === slug)?.name ?? slug;

export type Banner = {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  active: boolean;
  order: number;
};

export const banners: Banner[] = [
  {
    id: "b1",
    title: "Carry Quality. Carry Confidence.",
    subtitle: "Premium Bags, Luggage & Custom Corporate Solutions for Every Journey.",
    cta: "Shop Collection",
    image: heroImg,
    active: true,
    order: 1,
  },
  {
    id: "b2",
    title: "Made In Our Own Workshop",
    subtitle: "Two decades of in-house stitching, quality control and after-sales care.",
    cta: "About Us",
    image: workshopImg,
    active: true,
    order: 2,
  },
  {
    id: "b3",
    title: "Bulk & Corporate Manufacturing",
    subtitle: "Logo branding and bulk production for institutions and businesses.",
    cta: "Bulk Enquiry",
    image: bulkImg,
    active: false,
    order: 3,
  },
];

export const heroImage = heroImg;
export const workshopImage = workshopImg;
export const bulkImage = bulkImg;

export type Coupon = {
  id: string;
  code: string;
  percent: number;
  minOrder: number;
  active: boolean;
  note: string;
};

export const coupons: Coupon[] = [
  { id: "cp1", code: "BAG10", percent: 10, minOrder: 999, active: true, note: "10% off on orders above ₹999" },
  { id: "cp2", code: "WELCOME15", percent: 15, minOrder: 1999, active: true, note: "15% off for first-time buyers" },
  { id: "cp3", code: "CORPORATE20", percent: 20, minOrder: 9999, active: true, note: "20% off on corporate carts" },
];

export const trustPoints = [
  { title: "20+ Years Experience", text: "Trusted experience in bag manufacturing and retail.", icon: "years" },
  { title: "Custom Branding", text: "Personalised logo printing for institutions and businesses.", icon: "brand" },
  { title: "Durable Quality", text: "Products selected for long-lasting everyday use.", icon: "shield" },
  { title: "B2B Manufacturing", text: "Bulk production for corporate and institutional needs.", icon: "factory" },
  { title: "After-Sales Support", text: "Reliable support even after your purchase.", icon: "support" },
] as const;

export const bulkServices = [
  { title: "Corporate Laptop Bags", text: "Branded laptop bags for employees and clients." },
  { title: "School & Institution Bags", text: "Uniform bags with school crest and name tags." },
  { title: "Promotional Bags", text: "Cost-effective giveaway bags for campaigns." },
  { title: "Event Bags", text: "Conference and seminar kits delivered on schedule." },
  { title: "Employee Kits", text: "Onboarding kits assembled and packed to order." },
  { title: "Custom Logo Bags", text: "Embroidery, screen print and embossed logo options." },
  { title: "Bulk Manufacturing", text: "Production runs from 50 to 10,000+ pieces." },
  { title: "Custom Packaging", text: "Individual poly-bagging and branded cartons." },
];

export const faqs = [
  { q: "What is the minimum quantity for a custom order?", a: "Custom logo branding starts from 50 pieces. Smaller trial batches can be discussed for institutions." },
  { q: "How long does bulk production take?", a: "Typical turnaround is 12–18 working days depending on quantity, fabric and branding method." },
  { q: "Do you offer after-sales service?", a: "Yes. Zip, strap and wheel repairs are handled in-house for products bought from us." },
  { q: "Which areas do you deliver to?", a: "We ship pan-India. Local Pimpri-Chinchwad and Pune deliveries are usually same-week." },
  { q: "Can I see samples before a bulk order?", a: "Absolutely — visit our Old Sangvi showroom or request a sample dispatch with your enquiry." },
];
