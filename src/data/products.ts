export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  badge?:
    | string
    | "New"
    | "Sale"
    | "Featured"
    | "ছাড়"
    | "বিশেষ পছন্দ"
    | "নতুন";
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
export type LocalizedProductArray = { en: string[]; bn: string[] };

export const productTranslations: Record<
  string,
  {
    name: LocalizedProductText;
    availability: LocalizedProductText;
    features: LocalizedProductArray;
    badge: LocalizedProductText;
    shortDescription: LocalizedProductText;
    description: LocalizedProductText;
    categoryLabel: LocalizedProductText;
  }
> = {
  "heritage-lounge-chair": {
    name: { en: "Heritage Lounge Chair", bn: "হেরিটেজ লাউঞ্জ চেয়ার" },
    categoryLabel: { en: "Premium Chair", bn: "প্রিমিয়াম চেয়ার" },
    availability: { en: "In stock", bn: "স্টকে আছে" },
    badge: { en: "New", bn: "নতুন" },
    shortDescription: {
      en: "A sculptural handcrafted cane lounge chair with a woven backrest and inviting natural warmth.",
      bn: "বোনা ব্যাকরেস্ট ও প্রাকৃতিক উষ্ণতায় ভরা ভাস্কর্যময় হাতে তৈরি বেতের লাউঞ্জ চেয়ার।",
    },
    features: {
      en: [
        "Handwoven cane backrest",
        "Comfortable curved profile",
        "Hand-finished natural frame",
      ],
      bn: [
        "হাতে বোনা বেতের ব্যাকরেস্ট",
        "আরামদায়ক বাঁকানো নকশা",
        "হাতে করা প্রাকৃতিক ফিনিশ",
      ],
    },
    description: {
      en: "A beautifully handcrafted bamboo accent chair featuring a woven lattice backrest and curved frame. Designed to offer comfort, durability, and timeless natural elegance for living rooms, patios, or cozy reading corners.",
      bn: "বোনা ল্যাটিস ব্যাকরেস্ট ও বাঁকানো ফ্রেমের সুন্দর হাতে তৈরি বেতের অ্যাকসেন্ট চেয়ার। লিভিং রুম, প্যাটিও বা পড়ার কোণের জন্য আরাম, স্থায়িত্ব ও চিরন্তন সৌন্দর্যে তৈরি।",
    },
  },
  "natural-center-table": {
    name: { en: "Natural Center Table", bn: "ন্যাচারাল সেন্টার টেবিল" },
    categoryLabel: { en: "Table", bn: "টেবিল" },
    badge: { en: "New", bn: "নতুন" },
    availability: { en: "In stock", bn: "স্টকে আছে" },
    shortDescription: {
      en: "Minimal Scandinavian round tea table crafted from premium bamboo.",
      bn: "প্রিমিয়াম বাঁশে তৈরি মিনিমাল স্ক্যান্ডিনেভিয়ান গোল টি টেবিল।",
    },
    features: {
      en: [
        "Handwoven cane backrest",
        "Comfortable curved profile",
        "Hand-finished natural frame",
      ],
      bn: [
        "হাতে বোনা বেতের ব্যাকরেস্ট",
        "আরামদায়ক বাঁকানো নকশা",
        "হাতে করা প্রাকৃতিক ফিনিশ",
      ],
    },
    description: {
      en: "A beautifully handcrafted round bamboo tea table featuring a woven tabletop and an open storage shelf. Perfect as a coffee table or center table, it brings natural warmth, timeless craftsmanship, and practical elegance to any living space.",
      bn: "বোনা টপ ও খোলা স্টোরেজ শেলফসহ সুন্দর হাতে তৈরি গোল বেতের টি টেবিল। কফি বা সেন্টার টেবিল হিসেবে যেকোনো ঘরে প্রাকৃতিক উষ্ণতা ও ব্যবহারিক সৌন্দর্য আনে।",
    },
  },
  "wall-mounted-nest": {
    name: { en: "Wall Mounted Nest", bn: "ওয়াল মাউন্টেড নেস্ট" },
    availability: { en: "In stock", bn: "স্টকে আছে" },
    badge: { en: "Featured", bn: "বিশেষ পছন্দ" },
    categoryLabel: { en: "Wall Shelf", bn: "ওয়াল শেলফ" },
    shortDescription: {
      en: "This cane wall shelf brings lightweight storage and organic texture to any room.",
      bn: "এই বেতের ওয়াল শেলফ যেকোনো ঘরে হালকা স্টোরেজ ও প্রাকৃতিক টেক্সচার যোগ করে।",
    },
    features: {
      en: [
        "Handwoven cane backrest",
        "Comfortable curved profile",
        "Hand-finished natural frame",
      ],
      bn: [
        "হাতে বোনা বেতের ব্যাকরেস্ট",
        "আরামদায়ক বাঁকানো নকশা",
        "হাতে করা প্রাকৃতিক ফিনিশ",
      ],
    },
    description: {
      en: "Designed with handcrafted woven details and a sturdy natural frame, this wall shelf makes a refined home for books, decor, and daily essentials.",
      bn: "হাতে তৈরি বোনা ডিটেইল ও মজবুত প্রাকৃতিক ফ্রেমে তৈরি এই ওয়াল শেলফ বই, সাজসজ্জা ও দৈনন্দিন জিনিসের জন্য পরিশীলিত স্থান তৈরি করে।",
    },
  },
  "classic-rocking-chair": {
    name: { en: "Classic Rocking Chair", bn: "ক্লাসিক রকিং চেয়ার" },
    categoryLabel: { en: "Chair", bn: "চেয়ার" },
    badge: { en: "Featured", bn: "বিশেষ পছন্দ" },
    availability: { en: "In stock", bn: "স্টকে আছে" },
    shortDescription: {
      en: "Luxury handcrafted rocking chair with premium cushioning.",
      bn: "প্রিমিয়াম কুশনসহ বিলাসবহুল বেতের তৈরি রকিং চেয়ার।",
    },
    features: {
      en: [
        "Handwoven cane backrest",
        "Comfortable curved profile",
        "Hand-finished natural frame",
      ],
      bn: [
        "হাতে বোনা বেতের ব্যাকরেস্ট",
        "আরামদায়ক বাঁকানো নকশা",
        "হাতে করা প্রাকৃতিক ফিনিশ",
      ],
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
    availability: { en: "In stock", bn: "স্টকে আছে" },
    badge: { en: "New", bn: "নতুন" },
    categoryLabel: { en: "Plant Stand", bn: "প্ল্যান্ট স্ট্যান্ড" },
    shortDescription: {
      en: "Modern indoor plant stand inspired by Scandinavian design.",
      bn: "স্ক্যান্ডিনেভিয়ান নকশায় অনুপ্রাণিত আধুনিক ইনডোর প্ল্যান্ট স্ট্যান্ড।",
    },
    features: {
      en: [
        "Handwoven cane backrest",
        "Comfortable curved profile",
        "Hand-finished natural frame",
      ],
      bn: [
        "হাতে বোনা বেতের ব্যাকরেস্ট",
        "আরামদায়ক বাঁকানো নকশা",
        "হাতে করা প্রাকৃতিক ফিনিশ",
      ],
    },
    description: {
      en: "Showcase your favorite indoor plants with this handcrafted two-tier bamboo plant stand.",
      bn: "হাতে তৈরি দুই স্তরের বেতের প্ল্যান্ট স্ট্যান্ডে আপনার প্রিয় ইনডোর গাছগুলো সুন্দরভাবে সাজান।",
    },
  },
  "floral-lounge-chair": {
    name: { en: "Floral Lounge Chair", bn: "ফ্লোরাল লাউঞ্জ চেয়ার" },
    categoryLabel: { en: "Chair", bn: "চেয়ার" },
    availability: { en: "In stock", bn: "স্টকে আছে" },
    badge: { en: "Featured", bn: "বিশেষ পছন্দ" },
    shortDescription: {
      en: "Petal-inspired cane accent chair that adds sculptural character to homes, cafés, and boutique interiors.",
      bn: "পাপড়ি-অনুপ্রাণিত বেতের চেয়ার, যা বাড়ি, ক্যাফে ও বুটিক ইন্টেরিয়রে ভাস্কর্যময় সৌন্দর্য যোগ করে।",
    },
    features: {
      en: [
        "Handwoven cane backrest",
        "Comfortable curved profile",
        "Hand-finished natural frame",
      ],
      bn: [
        "হাতে বোনা বেতের ব্যাকরেস্ট",
        "আরামদায়ক বাঁকানো নকশা",
        "হাতে করা প্রাকৃতিক ফিনিশ",
      ],
    },
    description: {
      en: "Make a bold statement with this handcrafted bamboo flower accent chair.",
      bn: "এই হাতে তৈরি বেতের ফুলের অ্যাকসেন্ট চেয়ারে আনুন অনন্য সৌন্দর্যের প্রকাশ।",
    },
  },
  "wall-mounted-shelf-mini": {
    name: { en: "Wall Mounted Shelf Mini", bn: "ওয়াল মাউন্টেড শেলফ মিনি" },
    categoryLabel: { en: "Wall Shelf", bn: "ওয়াল শেলফ" },
    availability: { en: "In stock", bn: "স্টকে আছে" },
    badge: { en: "Sale", bn: "ছাড়" },
    shortDescription: {
      en: "Compact handcrafted cane wall shelf that combines elegant display space with practical everyday storage.",
      bn: "হাতে তৈরি কমপ্যাক্ট বেতের ওয়াল শেলফ, যা নান্দনিক প্রদর্শন ও দৈনন্দিন সংরক্ষণের জন্য উপযুক্ত।",
    },
    features: {
      en: [
        "Handwoven cane backrest",
        "Comfortable curved profile",
        "Hand-finished natural frame",
      ],
      bn: [
        "হাতে বোনা বেতের ব্যাকরেস্ট",
        "আরামদায়ক বাঁকানো নকশা",
        "হাতে করা প্রাকৃতিক ফিনিশ",
      ],
    },
    description: {
      en: "Designed with handcrafted woven cane and a sturdy bamboo frame, this compact wall-mounted shelf offers a stylish way to organize and display your favorite décor, plants, books, or everyday essentials. Its space-saving design and natural finish make it a perfect addition to modern, minimalist, and nature-inspired interiors.",
      bn: "হাতে তৈরি বোনা বেত ও মজবুত বাঁশের ফ্রেমে নির্মিত এই কমপ্যাক্ট ওয়াল-মাউন্টেড শেলফটি আপনার প্রিয় সাজসজ্জার সামগ্রী, গাছপালা, বই বা দৈনন্দিন প্রয়োজনীয় জিনিস সুন্দরভাবে প্রদর্শন ও সংরক্ষণের জন্য আদর্শ। এর স্থান-সাশ্রয়ী নকশা এবং প্রাকৃতিক ফিনিশ আধুনিক, মিনিমাল ও প্রাকৃতিক সৌন্দর্যপূর্ণ ইন্টেরিয়রের সঙ্গে দারুণভাবে মানিয়ে যায়।",
    },
  },
  "premium-living-room-set": {
    name: { en: "Premium Living Room Set", bn: "প্রিমিয়াম লিভিং রুম সেট" },
    categoryLabel: { en: "Sofa", bn: "সোফা" },
    badge: { en: "Sale", bn: "ছাড়" },
    availability: { en: "In stock", bn: "স্টকে আছে" },
    shortDescription: {
      en: "Handcrafted bamboo sofa set with playful cloud silhouette.",
      bn: "খেলাচ্ছলে মেঘের অবয়ব খচিত হস্তনির্মিত বাঁশের সোফা সেট।",
    },
    features: {
      en: [
        "Handwoven cane backrest",
        "Comfortable curved profile",
        "Hand-finished natural frame",
      ],
      bn: [
        "হাতে বোনা বেতের ব্যাকরেস্ট",
        "আরামদায়ক বাঁকানো নকশা",
        "হাতে করা প্রাকৃতিক ফিনিশ",
      ],
    },
    description: {
      en: "Elevate your living space with this handcrafted bamboo sofa set, featuring a sturdy natural bamboo frame and beautifully woven details. Designed for lasting comfort and timeless style, it's perfect for living rooms, patios, cafes, and resort spaces.",
      bn: "মজবুত প্রাকৃতিক বেতের ফ্রেম এবং সুন্দর বুননের কারুকার্য খচিত এই হস্তনির্মিত বেতের সোফা সেট দিয়ে আপনার থাকার জায়গাটিকে আরও আকর্ষণীয় করে তুলুন। দীর্ঘস্থায়ী আরাম এবং চিরন্তন শৈলীর জন্য ডিজাইন করা এই সেটটি লিভিং রুম, বারান্দা, ক্যাফে এবং রিসোর্টের মতো জায়গার জন্য উপযুক্ত।",
    },
  },
  "natural-utility-basket": {
    name: { en: "Natural Utility Basket", bn: "নেচারাল ইউটিলিটি বাস্কেট" },
    categoryLabel: { en: "Basket", bn: "ঝুড়ি" },
    availability: { en: "In stock", bn: "স্টকে আছে" },
    badge: { en: "Sale", bn: "ছাড়" },
    shortDescription: {
      en: "Elegant handcrafted woven bamboo plant basket with timeless craftsmanship for modern living.",
      bn: "আধুনিক জীবনযাপনের জন্য কালজয়ী কারুকার্যে তৈরি চমৎকার হস্তনির্মিত বেতের ঝুড়ি।",
    },
    features: {
      en: [
        "Handwoven cane backrest",
        "Comfortable curved profile",
        "Hand-finished natural frame",
      ],
      bn: [
        "হাতে বোনা বেতের ব্যাকরেস্ট",
        "আরামদায়ক বাঁকানো নকশা",
        "হাতে করা প্রাকৃতিক ফিনিশ",
      ],
    },
    description: {
      en: "Add a touch of natural charm to your home with this handcrafted woven bamboo plant basket. Perfect for displaying indoor plants, organizing everyday essentials, or enhancing your décor with timeless artisanal craftsmanship.",
      bn: "হাতে বোনা এই বেতের ঝুড়ি দিয়ে আপনার বাড়িতে প্রাকৃতিক সৌন্দর্যের ছোঁয়া আনুন। ঘরের ভেতরের গাছ সাজিয়ে রাখতে, দৈনন্দিন প্রয়োজনীয় জিনিসপত্র গুছিয়ে রাখতে, অথবা চিরন্তন কারুশিল্পের ছোঁয়ায় আপনার সজ্জাকে আরও আকর্ষণীয় করে তুলতে এটি আদর্শ।",
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
        availability: translation.availability[locale],
        badge: translation.badge[locale],
        features: translation?.features[locale],
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
    price: 2800,
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
    price: 2000,
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
    category: "shelf",
    categoryLabel: "Shelf",
    badge: "Featured",
    price: 1300,
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
    price: 1000,
    salePrice: 850,
    availability: "In stock",
    image: "/products/sh1.jpg",
    gallery: ["/products/sh1.jpg", "/products/sh11.jpg", "/products/sh12.jpg"],
    shortDescription:
      "Compact handcrafted cane wall shelf that combines elegant display space with practical everyday storage.",
    description:
      "Designed with handcrafted woven cane and a sturdy bamboo frame, this compact wall-mounted shelf offers a stylish way to organize and display your favorite décor, plants, books, or everyday essentials. Its space-saving design and natural finish make it a perfect addition to modern, minimalist, and nature-inspired interiors.",
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
    price: 5000,
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
    price: 1000,
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
    price: 2500,
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
    price: 15000,
    salePrice: 12500,
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
    price: 500,
    salePrice: 250,
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
