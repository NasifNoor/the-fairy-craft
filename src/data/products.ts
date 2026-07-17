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
    slug: "heritage-lounge-chair",
    name: "Heritage Lounge Chair",
    category: "premium-chair",
    categoryLabel: "Premium Chair",
    badge: "New",
    price: 799,
    salePrice: 699,
    availability: "In stock",
    image: "/products/ch1.jpg",
    gallery: ["/products/ch1.jpg", "/products/ch11.jpg", "/products/ch12.jfif"],
    shortDescription:
      "Elegant solid bamboo convertible crib designed to grow with your child.",
    description:
      "A beautifully handcrafted bamboo accent chair featuring a woven lattice backrest and curved frame. Designed to offer comfort, durability, and timeless natural elegance for living rooms, patios, or cozy reading corners.",
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
    slug: "natural-center-table",
    name: "Natural Center Table",
    category: "table",
    categoryLabel: "Table",
    badge: "New",
    price: 749,
    salePrice: 669,
    availability: "In stock",
    image: "/products/tt1.jpg",
    gallery: ["/products/tt1.jpg", "/products/tt11.png", "/products/tt12.jpg"],
    shortDescription:
      "Minimal Scandinavian round tea table crafted from premium bamboo.",
    description:
      "A beautifully handcrafted round bamboo tea table featuring a woven tabletop and an open storage shelf. Perfect as a coffee table or center table, it brings natural warmth, timeless craftsmanship, and practical elegance to any living space.",
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
    slug: "wall-mounted-nest",
    name: "Wall Mounted Nest",
    category: "baby-cot",
    categoryLabel: "Baby Cot",
    badge: "Featured",
    price: 899,
    salePrice: 799,
    availability: "In stock",
    image: "/products/sh3.jpg",
    gallery: ["/products/sh3.jpg", "/products/sh31.jpg", "/products/sh32.jpg"],
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
    slug: "wall-mounted-shelf-mini",
    name: "Wall Mounted Shelf Mini",
    category: "shelf",
    categoryLabel: "Shelf",
    badge: "Sale",
    price: 329,
    salePrice: 289,
    availability: "In stock",
    image: "/products/sh1.jfif",
    gallery: ["/products/sh1.jfif", "/products/sh11.jpg", "/products/sh12.jpg"],
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
    slug: "classic-rocking-chair",
    name: "Classic Rocking Chair",
    category: "Chair",
    categoryLabel: "Chair",
    badge: "Featured",
    price: 379,
    salePrice: 339,
    availability: "In stock",
    image: "/products/rocking1.jfif",
    gallery: [
      "/products/rocking1.jfif",
      "/products/rocking11.jfif",
      "/products/rocking12.jfif",
    ],
    shortDescription:
      "Luxury handcrafted rocking chair with premium cushioning.",
    description:
      "Unwind in style with this handcrafted bamboo rocking chair, featuring a woven backrest and gently curved rockers. Designed for exceptional comfort and timeless natural elegance, it's perfect for patios, balconies, living rooms, or cozy reading corners.",
    features: ["Washable bedding", "Strong rope support", "Natural finish"],
    specifications: [],
    dimensions: '38" × 22"',
    materials: "Bamboo, Cotton",
    reviews: [],
  },

  {
    id: "6",
    slug: "natural-flower-stand",
    name: "Natural Two-Tier Flower Stand",
    category: "flower-stand",
    categoryLabel: "Flower Stand",
    badge: "New",
    price: 349,
    salePrice: 319,
    availability: "In stock",
    image: "/products/r1.jpg",
    gallery: ["/products/r1.jpg", "/products/r11.jpg", "/products/r12.jpg"],
    shortDescription:
      "Modern indoor plants stand inspired by Scandinavian design.",
    description:
      "Showcase your favorite indoor plants with this handcrafted two-tier bamboo plant stand. Featuring a sturdy natural bamboo frame and elevated design, it adds warmth, elegance, and greenery to any living room, balcony, or office.",
    features: [
      "Handwoven basket",
      "Soft premium mattress",
      "Natural wood frame",
    ],
    specifications: [],
    dimensions: '37" × 21"',
    materials: "Bamboo",
    reviews: [],
  },

  {
    id: "7",
    slug: "floral-lounge-chair",
    name: "Floral Lounge Chair",
    category: "chair",
    categoryLabel: "Chair",
    badge: "Featured",
    price: 269,
    salePrice: 239,
    availability: "In stock",
    image: "/products/sob1.jfif",
    gallery: [
      "/products/sob1.jfif",
      "/products/sob11.jfif",
      "/products/sob12.jfif",
    ],
    shortDescription:
      "Child-friendly front-facing beautifully crafted bamboo flower accent chair.",
    description:
      "Make a bold statement with this handcrafted bamboo flower accent chair. Featuring a stunning petal-inspired backrest and natural woven craftsmanship, it combines artistic design with everyday comfort, making it the perfect centerpiece for living rooms, cafés, studios, or boutique interiors.",
    features: ["Rounded edges", "Open shelves", "Solid wood construction"],
    specifications: [],
    dimensions: '30" W × 12" D × 36" H',
    materials: "Solid Bamboo",
    reviews: [],
  },

  {
    id: "8",
    slug: "premium-living-room-set",
    name: "Premium Living Room Set",
    category: "sofa",
    categoryLabel: "Sofa",
    badge: "Sale",
    price: 299,
    salePrice: 269,
    availability: "In stock",
    image: "/products/so1.jfif",
    gallery: [
      "/products/so1.jfif",
      "/products/so11.jfif",
      "/products/so12.jfif",
    ],
    shortDescription:
      "Handcrafted bamboo sofa set with playful cloud silhouette.",
    description:
      "Elevate your living space with this handcrafted bamboo sofa set, featuring a sturdy natural bamboo frame and beautifully woven details. Designed for lasting comfort and timeless style, it's perfect for living rooms, patios, cafés, and resort spaces.",
    features: ["Large storage", "Stable base", "Premium finish"],
    specifications: [],
    dimensions: '32" W × 14" D × 40" H',
    materials: "Beech bamboo",
    reviews: [],
  },

  {
    id: "9",
    slug: "natural-utility-basket",
    name: "Natural Utility Basket",
    category: "basket",
    categoryLabel: "Basket",
    badge: "Sale",
    price: 699,
    salePrice: 639,
    availability: "In stock",
    image: "/products/b1.jfif",
    gallery: ["/products/b1.jfif", "/products/b11.jfif", "/products/b12.jfif"],
    shortDescription:
      "Elegant handcrafted woven bamboo plant basket with timeless craftsmanship for modern living",
    description:
      "Add a touch of natural charm to your home with this handcrafted woven bamboo plant basket. Perfect for displaying indoor plants, organizing everyday essentials, or enhancing your décor with timeless artisanal craftsmanship.",
    features: ["Large mirror", "Soft-close drawers", "Premium finish"],
    specifications: [],
    dimensions: '48" W × 18" D × 60" H',
    materials: "Oak Wood",
    reviews: [],
  },

  // {
  //   id: "10",
  //   slug: "heritage-dining-table",
  //   name: "Heritage Dining Table",
  //   category: "dining-table",
  //   categoryLabel: "Dining Table",
  //   badge: "New",
  //   price: 1299,
  //   salePrice: 1149,
  //   availability: "In stock",
  //   image: "/products/dt1.jpg",
  //   gallery: ["/products/dt1.jpg", "/products/dt11.jpg", "/products/dt12.jpg"],
  //   shortDescription: "Premium solid wood dining table for family gatherings.",
  //   description:
  //     "Handcrafted dining table featuring natural wood grain and exceptional durability.",
  //   features: ["Seats 6 people", "Solid hardwood", "Hand-finished surface"],
  //   specifications: [{ label: "Seating", value: "6 Persons" }],
  //   dimensions: '72" W × 36" D × 30" H',
  //   materials: "Solid Oak Wood",
  //   reviews: [],
  // },
];
