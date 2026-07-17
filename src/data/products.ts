export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  badge?: "New" | "Sale" | "Featured";
  price: number;
  salePrice?: number;
  availability: string;
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  dimensions: string;
  materials: string;
  careInstructions?: string;
  shippingInfo?: string;
  warrantyInfo?: string;
  reviews: {
    author: string;
    rating: number;
    comment: string;
    date?: string;
  }[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "alder-convertible-crib",
    name: "Alder Convertible Crib",
    category: "baby-cot",
    categoryLabel: "Baby Cot",
    badge: "New",
    price: 799,
    salePrice: 699,
    availability: "In stock",
    image: "/products/c1.jpg",
    gallery: ["/products/c1.jpg", "/products/c11.jpg", "/products/c12.jpg"],
    shortDescription:
      "Elegant solid wood convertible crib designed to grow with your child.",
    description:
      "Built from premium hardwood with a timeless Scandinavian design. Converts from crib to toddler bed.",
    features: [
      "3 mattress height positions",
      "Toddler conversion kit included",
      "Non-toxic child-safe finish",
    ],
    specifications: [
      { label: "Weight Capacity", value: "50 lbs" },
      { label: "Assembly", value: "Required" },
      { label: "Material", value: "Solid Oak Wood" },
    ],
    dimensions: '54" W × 30" D × 40" H',
    materials: "Solid Oak, Eco-friendly Paint, Steel Hardware",
    reviews: [],
  },

  {
    id: "2",
    slug: "nordic-baby-cot",
    name: "Nordic Baby Cot",
    category: "baby-cot",
    categoryLabel: "Baby Cot",
    badge: "New",
    price: 749,
    salePrice: 669,
    availability: "In stock",
    image: "/products/c2.jpg",
    gallery: ["/products/c2.jpg", "/products/c21.png", "/products/c13.jpg"],
    shortDescription:
      "Minimal Scandinavian baby cot crafted from premium beech wood.",
    description:
      "Clean lines and durable construction make this cot perfect for modern nurseries.",
    features: [
      "Adjustable mattress base",
      "Rounded safety edges",
      "Premium Beech Wood",
    ],
    specifications: [
      { label: "Material", value: "Beech Wood" },
      { label: "Finish", value: "Natural" },
    ],
    dimensions: '53" W × 29" D × 39" H',
    materials: "Solid Beech Wood",
    reviews: [],
  },

  {
    id: "3",
    slug: "heritage-wooden-cot",
    name: "Heritage Wooden Cot",
    category: "baby-cot",
    categoryLabel: "Baby Cot",
    badge: "Featured",
    price: 899,
    salePrice: 799,
    availability: "In stock",
    image: "/products/c3.jpg",
    gallery: ["/products/c3.jpg", "/products/c31.jpg"],
    shortDescription:
      "Classic handcrafted cot with timeless elegance & exceptional comfort.",
    description:
      "Designed for durability with handcrafted details and premium hardwood construction.",
    features: ["Handcrafted", "Heavy-duty frame", "Smooth rounded corners"],
    specifications: [
      { label: "Material", value: "Mahogany" },
      { label: "Assembly", value: "Required" },
    ],
    dimensions: '55" W × 31" D × 41" H',
    materials: "Mahogany Wood",
    reviews: [],
  },

  {
    id: "4",
    slug: "classic-rocking-dolna",
    name: "Classic Rocking Dolna",
    category: "dolna",
    categoryLabel: "Dolna",
    badge: "New",
    price: 329,
    salePrice: 289,
    availability: "In stock",
    image: "/products/d1.jpg",
    gallery: ["/products/d1.jpg", "/products/d11.jpg", "/products/d12.jpg"],
    shortDescription: "Traditional metal made rocking dolna with gentle swing.",
    description:
      "Crafted for comfort and soothing sleep with secure hanging hardware.",
    features: [
      "Gentle rocking motion",
      "Soft mattress included",
      "Premium cotton fabric",
    ],
    specifications: [{ label: "Capacity", value: "20 kg" }],
    dimensions: '36" L × 20" W',
    materials: "Solid Wood & Cotton",
    reviews: [],
  },

  {
    id: "5",
    slug: "royal-swing-dolna",
    name: "Royal Swing Dolna",
    category: "dolna",
    categoryLabel: "Dolna",
    badge: "Featured",
    price: 379,
    salePrice: 339,
    availability: "In stock",
    image: "/products/d2.jpg",
    gallery: ["/products/d2.jpg", "/products/d21.jpg", "/products/d22.jpg"],
    shortDescription: "Luxury handcrafted baby swing with premium cushioning.",
    description:
      "Combines traditional craftsmanship with modern safety features.",
    features: ["Washable bedding", "Strong rope support", "Natural finish"],
    specifications: [],
    dimensions: '38" × 22"',
    materials: "Oak Wood, Cotton",
    reviews: [],
  },

  {
    id: "6",
    slug: "nordic-hanging-cradle",
    name: "Nordic Hanging Cradle",
    category: "dolna",
    categoryLabel: "Dolna",
    badge: "New",
    price: 349,
    salePrice: 319,
    availability: "In stock",
    image: "/products/d3.jpg",
    gallery: ["/products/d3.jpg", "/products/d31.jpg", "/products/d32.jpg"],
    shortDescription: "Modern hanging cradle inspired by Scandinavian design.",
    description:
      "Beautiful minimalist design with exceptional comfort and safety.",
    features: [
      "Handwoven basket",
      "Soft premium mattress",
      "Natural wood frame",
    ],
    specifications: [],
    dimensions: '37" × 21"',
    materials: "Ash Wood & Cotton",
    reviews: [],
  },

  {
    id: "7",
    slug: "montessori-bookshelf",
    name: "Montessori Bookshelf",
    category: "bookshelf",
    categoryLabel: "Bookshelf",
    badge: "Featured",
    price: 269,
    salePrice: 239,
    availability: "In stock",
    image: "/products/s1.jpg",
    gallery: ["/products/s1.jpg", "/products/s11.jpg", "/products/s12.jpg"],
    shortDescription:
      "Child-friendly front-facing beautifully crafted wooden bookshelf.",
    description: "Encourages independent reading with easy access to books.",
    features: ["Rounded edges", "Open shelves", "Solid wood construction"],
    specifications: [],
    dimensions: '30" W × 12" D × 36" H',
    materials: "Solid Pine",
    reviews: [],
  },

  {
    id: "8",
    slug: "cloud-book-display",
    name: "Cloud Book Display",
    category: "bookshelf",
    categoryLabel: "Bookshelf",
    badge: "New",
    price: 299,
    salePrice: 269,
    availability: "In stock",
    image: "/products/s2.jpg",
    gallery: ["/products/s2.jpg", "/products/s21.jpg", "/products/s22.jpg"],
    shortDescription: "Modern nursery bookshelf with playful cloud silhouette.",
    description:
      "Perfect storage solution for books, toys and nursery essentials.",
    features: ["Large storage", "Stable base", "Premium finish"],
    specifications: [],
    dimensions: '32" W × 14" D × 40" H',
    materials: "Beech Wood",
    reviews: [],
  },

  {
    id: "9",
    slug: "oak-dressing-table",
    name: "Oak Dressing Table",
    category: "dressing-table",
    categoryLabel: "Dressing Table",
    badge: "New",
    price: 699,
    salePrice: 639,
    availability: "In stock",
    image: "/products/dr1.jpg",
    gallery: ["/products/dr1.jpg", "/products/dr11.jpg", "/products/dr12.jpg"],
    shortDescription:
      "Elegant wooden dressing table with timeless craftsmanship for modern living",
    description:
      "Features spacious drawers and premium craftsmanship for modern bedrooms.",
    features: ["Large mirror", "Soft-close drawers", "Premium finish"],
    specifications: [],
    dimensions: '48" W × 18" D × 60" H',
    materials: "Oak Wood",
    reviews: [],
  },

  {
    id: "10",
    slug: "heritage-dining-table",
    name: "Heritage Dining Table",
    category: "dining-table",
    categoryLabel: "Dining Table",
    badge: "New",
    price: 1299,
    salePrice: 1149,
    availability: "In stock",
    image: "/products/dt1.jpg",
    gallery: ["/products/dt1.jpg", "/products/dt11.jpg", "/products/dt12.jpg"],
    shortDescription: "Premium solid wood dining table for family gatherings.",
    description:
      "Handcrafted dining table featuring natural wood grain and exceptional durability.",
    features: ["Seats 6 people", "Solid hardwood", "Hand-finished surface"],
    specifications: [{ label: "Seating", value: "6 Persons" }],
    dimensions: '72" W × 36" D × 30" H',
    materials: "Solid Oak Wood",
    reviews: [],
  },
];
