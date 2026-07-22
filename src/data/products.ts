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

export type ProductLocale = "en" | "bn";
export type LocalizedProductText = { en: string; bn: string };

export const productTranslations: Record<
  string,
  {
    name: LocalizedProductText;
    shortDescription: LocalizedProductText;
    description: LocalizedProductText;
    categoryLabel: LocalizedProductText;
  }
> = {
  "heritage-lounge-chair": {
    name: { en: "Heritage Lounge Chair", bn: "হেরিটেজ লাউঞ্জ চেয়ার" },
    categoryLabel: { en: "Premium Chair", bn: "প্রিমিয়াম চেয়ার" },
    shortDescription: {
      en: "A sculptural handcrafted cane lounge chair with a woven backrest and inviting natural warmth.",
      bn: "বোনা ব্যাকরেস্ট ও প্রাকৃতিক উষ্ণতায় ভরা ভাস্কর্যময় হাতে তৈরি বেতের লাউঞ্জ চেয়ার।",
    },
    description: {
      en: "A beautifully handcrafted bamboo accent chair featuring a woven lattice backrest and curved frame. Designed to offer comfort, durability, and timeless natural elegance for living rooms, patios, or cozy reading corners.",
      bn: "বোনা ল্যাটিস ব্যাকরেস্ট ও বাঁকানো ফ্রেমের সুন্দর হাতে তৈরি বেতের অ্যাকসেন্ট চেয়ার। লিভিং রুম, প্যাটিও বা পড়ার কোণের জন্য আরাম, স্থায়িত্ব ও চিরন্তন সৌন্দর্যে তৈরি।",
    },
  },
  "natural-center-table": {
    name: { en: "Natural Center Table", bn: "ন্যাচারাল সেন্টার টেবিল" },
    categoryLabel: { en: "Table", bn: "টেবিল" },
    shortDescription: {
      en: "Minimal Scandinavian round tea table crafted from premium bamboo.",
      bn: "প্রিমিয়াম বাঁশে তৈরি মিনিমাল স্ক্যান্ডিনেভিয়ান গোল টি টেবিল।",
    },
    description: {
      en: "A beautifully handcrafted round bamboo tea table featuring a woven tabletop and an open storage shelf. Perfect as a coffee table or center table, it brings natural warmth, timeless craftsmanship, and practical elegance to any living space.",
      bn: "বোনা টপ ও খোলা স্টোরেজ শেলফসহ সুন্দর হাতে তৈরি গোল বেতের টি টেবিল। কফি বা সেন্টার টেবিল হিসেবে যেকোনো ঘরে প্রাকৃতিক উষ্ণতা ও ব্যবহারিক সৌন্দর্য আনে।",
    },
  },
  "wall-mounted-nest": {
    name: { en: "Wall Mounted Nest", bn: "ওয়াল মাউন্টেড নেস্ট" },
    categoryLabel: { en: "Wall Shelf", bn: "ওয়াল শেলফ" },
    shortDescription: {
      en: "This cane wall shelf brings lightweight storage and organic texture to any room.",
      bn: "এই বেতের ওয়াল শেলফ যেকোনো ঘরে হালকা স্টোরেজ ও প্রাকৃতিক টেক্সচার যোগ করে।",
    },
    description: {
      en: "Designed with handcrafted woven details and a sturdy natural frame, this wall shelf makes a refined home for books, decor, and daily essentials.",
      bn: "হাতে তৈরি বোনা ডিটেইল ও মজবুত প্রাকৃতিক ফ্রেমে তৈরি এই ওয়াল শেলফ বই, সাজসজ্জা ও দৈনন্দিন জিনিসের জন্য পরিশীলিত স্থান তৈরি করে।",
    },
  },
  "classic-rocking-chair": {
    name: { en: "Classic Rocking Chair", bn: "ক্লাসিক রকিং চেয়ার" },
    categoryLabel: { en: "Chair", bn: "চেয়ার" },
    shortDescription: {
      en: "Luxury handcrafted rocking chair with premium cushioning.",
      bn: "প্রিমিয়াম কুশনসহ বিলাসবহুল বেতের তৈরি রকিং চেয়ার।",
    },
    description: {
      en: "Unwind in style with this handcrafted bamboo rocking chair, featuring a woven backrest and gently curved rockers.",
      bn: "বোনা ব্যাকরেস্ট ও মৃদু বাঁকানো রকারসহ এই হাতে তৈরি বেতের রকিং চেয়ারে আরাম করুন স্টাইলে।",
    },
  },
  "natural-flower-stand": {
    name: {
      en: "Natural Two-Tier Flower Stand",
      bn: "ন্যাচারাল টু-টিয়ার ফ্লাওয়ার স্ট্যান্ড",
    },
    categoryLabel: { en: "Plant Stand", bn: "প্ল্যান্ট স্ট্যান্ড" },
    shortDescription: {
      en: "Modern indoor plant stand inspired by Scandinavian design.",
      bn: "স্ক্যান্ডিনেভিয়ান নকশায় অনুপ্রাণিত আধুনিক ইনডোর প্ল্যান্ট স্ট্যান্ড।",
    },
    description: {
      en: "Showcase your favorite indoor plants with this handcrafted two-tier bamboo plant stand.",
      bn: "হাতে তৈরি দুই স্তরের বেতের প্ল্যান্ট স্ট্যান্ডে আপনার প্রিয় ইনডোর গাছগুলো সুন্দরভাবে সাজান।",
    },
  },
  "floral-lounge-chair": {
    name: { en: "Floral Lounge Chair", bn: "ফ্লোরাল লাউঞ্জ চেয়ার" },
    categoryLabel: { en: "Chair", bn: "চেয়ার" },
    shortDescription: {
      en: "Petal-inspired cane accent chair that adds sculptural character to homes, cafés, and boutique interiors.",
      bn: "পাপড়ি-অনুপ্রাণিত বেতের চেয়ার, যা বাড়ি, ক্যাফে ও বুটিক ইন্টেরিয়রে ভাস্কর্যময় সৌন্দর্য যোগ করে।",
    },
    description: {
      en: "Make a bold statement with this handcrafted bamboo flower accent chair.",
      bn: "এই হাতে তৈরি বেতের ফুলের অ্যাকসেন্ট চেয়ারে আনুন অনন্য সৌন্দর্যের প্রকাশ।",
    },
  },
};

export function localizeProduct(
  product: Product,
  locale: ProductLocale,
): Product {
  const translation = productTranslations[product.slug];
  return translation
    ? {
        ...product,
        name: translation.name[locale],
        shortDescription: translation.shortDescription[locale],
        description: translation.description[locale],
        categoryLabel: translation.categoryLabel[locale],
      }
    : product;
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
    gallery: ["/products/ch1.jpg", "/products/ch11.jpg", "/products/ch12.jpg"],
    shortDescription:
      "A sculptural handcrafted cane lounge chair with a woven backrest and inviting natural warmth.",
    description:
      "A beautifully handcrafted bamboo accent chair featuring a woven lattice backrest and curved frame. Designed to offer comfort, durability, and timeless natural elegance for living rooms, patios, or cozy reading corners.",
    features: [
      "Handwoven cane backrest",
      "Comfortable curved profile",
      "Hand-finished natural frame",
    ],
    specifications: [
      { label: "Material", value: "Cane and bamboo" },
      { label: "Finish", value: "Natural hand finish" },
    ],
    dimensions: '54" W × 30" D × 40" H',
    materials: "Natural cane and bamboo",
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
      "Handwoven tabletop",
      "Open lower shelf",
      "Natural bamboo frame",
    ],
    specifications: [
      { label: "Material", value: "Cane and bamboo" },
      { label: "Finish", value: "Natural" },
    ],
    dimensions: '53" W × 29" D × 39" H',
    materials: "Natural cane and bamboo",
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
      "This cane wall shelf that brings lightweight storage and organic texture to any room.",
    description:
      "Designed with handcrafted woven details and a sturdy natural frame, this wall shelf makes a refined home for books, decor, and daily essentials.",
    features: ["Handcrafted", "Sturdy natural frame", "Woven cane detail"],
    specifications: [
      { label: "Material", value: "Cane and bamboo" },
      { label: "Installation", value: "Wall mounting required" },
    ],
    dimensions: '55" W × 31" D × 41" H',
    materials: "Natural cane and bamboo",
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
    image: "/products/sh1.jpg",
    gallery: ["/products/sh1.jpg", "/products/sh11.jpg", "/products/sh12.jpg"],
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
    image: "/products/rocking1.jpg",
    gallery: [
      "/products/rocking1.jpg",
      "/products/rocking11.jpg",
      "/products/rocking12.jpg",
    ],
    shortDescription:
      "Luxury handcrafted rocking chair with premium cushioning.",
    description:
      "Unwind in style with this handcrafted bamboo rocking chair, featuring a woven backrest and gently curved rockers. Designed for exceptional comfort and timeless natural elegance, it's perfect for patios, balconies, living rooms, or cozy reading corners.",
    features: [
      "Gentle rocking motion",
      "Strong curved frame",
      "Natural hand finish",
    ],
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
    image: "/products/sob1.jpg",
    gallery: [
      "/products/sob1.jpg",
      "/products/sob11.jpg",
      "/products/sob12.jpg",
    ],
    shortDescription:
      "Petal-inspired cane accent chair that adds sculptural character to homes, cafes, and boutique interiors.",
    description:
      "Make a bold statement with this handcrafted bamboo flower accent chair. Featuring a stunning petal-inspired backrest and natural woven craftsmanship, it combines artistic design with everyday comfort, making it the perfect centerpiece for living rooms, cafés, studios, or boutique interiors.",
    features: [
      "Petal-inspired backrest",
      "Handwoven cane detail",
      "Solid bamboo construction",
    ],
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
    image: "/products/so1.jpg",
    gallery: ["/products/so1.jpg", "/products/so11.jpg", "/products/so12.jpg"],
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
    image: "/products/b1.jpg",
    gallery: ["/products/b1.jpg", "/products/b11.jpg", "/products/b12.jpg"],
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
