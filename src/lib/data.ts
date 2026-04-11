import type { Concept, Category, FooterColumn } from "@/types";

export const concepts: Concept[] = [
  {
    slug: "zero-gravity-lumina-lamp",
    title: "The Zero-Gravity Lumina Lamp",
    description:
      '\u201CA desk lamp that defies gravity, using magnetic levitation to suspend the light source for perfectly adjustable, shadow-free illumination.\u201D',
    category: "Home Office",
    categorySlug: "home",
    image: "/images/hero-levitating-lamp.png",
    approvalPercent: 84,
    totalVotes: 1251,
    postedDate: "Posted 13mo ago",
    isFeatured: true,
    howItWorks:
      "Most lamps need a rigid arm to hold the bulb. The Lumina uses opposing electromagnets in the base and the bulb head to create a stable levitation field. Power is transferred wirelessly through the air, so the light glows while floating freely.",
    theProblem:
      "Traditional desk lamps take up space with bulky arms and bases, cast harsh shadows, and limit adjustability. The fixed arm means you are always compromising on light angle.",
    theConcept:
      "By suspending the light source in a magnetic field, the Lumina lets you position light exactly where you need it with zero shadow interference. Wireless power transfer means no cables tethering the light head.",
    specs: [
      { label: "Height", value: "42cm" },
      { label: "Lumen", value: "800lm (Adjustable)" },
      { label: "Power", value: "Wireless Induction" },
      { label: "Material", value: "Aerospace Aluminum" },
    ],
    galleryImages: [
      "/images/hero-levitating-lamp.png",
      "/images/hero-levitating-lamp.png",
    ],
    video: "/images/hf_20260411_014823_6af24b48-fe80-477d-b173-9e4c50c58fdb.mp4",
  },
  {
    slug: "omni-modular-pack",
    title: "The Omni-Modular Pack",
    description:
      '\u201CA backpack system where every pocket is a detachable, interchangeable module \u2014 swap your daily carry in seconds.\u201D',
    category: "Travel",
    categorySlug: "travel",
    image: "/images/product-modular-backpack.png",
    approvalPercent: 70,
    totalVotes: 892,
    postedDate: "Posted 8mo ago",
    howItWorks:
      "The pack uses a universal magnetic rail system. Each module clicks into any slot on the main frame. Swap a camera insert for a laptop sleeve in seconds \u2014 no zippers, no straps.",
    theProblem:
      "Traditional backpacks force you into one configuration. Need a camera bag? Buy a camera bag. Need a gym bag? Buy another bag.",
    theConcept:
      "One shell, infinite configurations. Every pocket detaches and reattaches magnetically, so your bag adapts to your day, not the other way around.",
    specs: [
      { label: "Volume", value: "28L (expandable to 38L)" },
      { label: "Weight", value: "1.2kg (frame only)" },
      { label: "Modules", value: "6 included, 12+ available" },
      { label: "Material", value: "Recycled Cordura 500D" },
    ],
    galleryImages: ["/images/product-modular-backpack.png"],
  },
  {
    slug: "flora-smart-pot",
    title: "Flora Smart Pot",
    description:
      '\u201CAn intelligent planter that monitors soil moisture, light levels, and nutrients \u2014 then waters your plant automatically.\u201D',
    category: "Home",
    categorySlug: "home",
    image: "/images/product-smart-planter.png",
    approvalPercent: 92,
    totalVotes: 1087,
    postedDate: "Posted 6mo ago",
    howItWorks:
      "Sensors in the inner pot monitor soil moisture, ambient light, and nutrient levels. A built-in reservoir handles automated watering based on each plant species\u2019 needs.",
    theProblem:
      "Most houseplants die from overwatering or neglect. People want plants but don\u2019t have the time or knowledge to care for them properly.",
    theConcept:
      "A self-watering, self-monitoring planter that takes the guesswork out of plant care. Just add water to the reservoir every few weeks and the pot handles the rest.",
    specs: [
      { label: "Capacity", value: "2L reservoir" },
      { label: "Battery", value: "USB-C, 3 months standby" },
      { label: "Sensors", value: "Moisture, light, pH" },
      { label: "App", value: "iOS & Android" },
    ],
    galleryImages: ["/images/product-smart-planter.png"],
  },
  {
    slug: "paperslate-air",
    title: "PaperSlate Air",
    description:
      '\u201CAn e-ink tablet thinner than a magazine that replaces paper notebooks forever \u2014 with real pencil feel and infinite pages.\u201D',
    category: "Productivity",
    categorySlug: "productivity",
    image: "/images/product-eink-tablet.png",
    approvalPercent: 77,
    totalVotes: 634,
    postedDate: "Posted 4mo ago",
    howItWorks:
      'A 10.3\u201D Carta 1200 e-ink display paired with a Wacom EMR stylus layer delivers paper-like friction. Notes sync wirelessly and convert to searchable text via on-device OCR.',
    theProblem:
      "Paper notebooks are finite, unsearchable, and easy to lose. Existing e-ink tablets are either too expensive or feel nothing like paper.",
    theConcept:
      "An e-ink writing surface so thin and responsive it replaces your paper notebook. Handwriting recognition turns scrawl into searchable text. Cloud sync means your notes are everywhere.",
    specs: [
      { label: "Display", value: '10.3" Carta 1200 e-ink' },
      { label: "Thickness", value: "4.7mm" },
      { label: "Weight", value: "238g" },
      { label: "Battery", value: "2 weeks typical use" },
    ],
    galleryImages: ["/images/product-eink-tablet.png"],
  },
  {
    slug: "foldcity-commuter",
    title: "FoldCity Commuter",
    description:
      '\u201CAn electric scooter that folds to the size of an umbrella \u2014 light enough to carry, powerful enough for your commute.\u201D',
    category: "Mobility",
    categorySlug: "mobility",
    image: "/images/product-collapsible-scooter.png",
    approvalPercent: 78,
    totalVotes: 723,
    postedDate: "Posted 3mo ago",
    howItWorks:
      "A patented triple-fold mechanism collapses the scooter along three axes. The battery and motor are integrated into the deck, keeping the center of gravity low when riding and compact when folded.",
    theProblem:
      "Current e-scooters are too bulky to carry onto a train or store under a desk. The last-mile problem remains unsolved for multimodal commuters.",
    theConcept:
      "A scooter that truly folds small enough to carry like a bag. 15km range, 25km/h top speed, and it fits in an overhead bin.",
    specs: [
      { label: "Range", value: "15km" },
      { label: "Top Speed", value: "25km/h" },
      { label: "Weight", value: "6.8kg" },
      { label: "Folded Size", value: "68 \u00d7 18 \u00d7 12cm" },
    ],
    galleryImages: ["/images/product-collapsible-scooter.png"],
  },
  {
    slug: "zero-bezel-smart-watch",
    title: "Zero-Bezel Smart Watch",
    description:
      '\u201CA smartwatch with absolutely no bezel \u2014 the display wraps edge to edge for a screen-forward design that looks like the future.\u201D',
    category: "Wearable",
    categorySlug: "tech",
    image: "/images/product-smart-watch.png",
    approvalPercent: 92,
    totalVotes: 1156,
    postedDate: "Posted 2mo ago",
    howItWorks:
      "A flexible OLED display curves over the case edge, protected by sapphire crystal with a lubricated nano-coating. The crown is haptic \u2014 no physical button, just a pressure-sensitive zone on the case side.",
    theProblem:
      "Every smartwatch still looks like a tiny phone strapped to your wrist. Thick bezels waste space and make the display feel small.",
    theConcept:
      "Remove the bezel entirely. The display IS the watch face. Information density doubles, notifications feel glanceable, and the overall form factor shrinks by 20%.",
    specs: [
      { label: "Display", value: '1.9" flexible OLED' },
      { label: "Battery", value: "2 days typical" },
      { label: "Water", value: "5ATM" },
      { label: "Material", value: "Grade 5 Titanium" },
    ],
    galleryImages: ["/images/product-smart-watch.png"],
  },
  {
    slug: "holographic-alarm",
    title: "Holographic Alarm",
    description:
      '\u201CAn alarm clock that projects the time as a floating hologram above your nightstand \u2014 no screen, no blue light, just light.\u201D',
    category: "Home Tech",
    categorySlug: "home",
    image: "",
    approvalPercent: 69,
    totalVotes: 412,
    postedDate: "Posted 1mo ago",
    howItWorks:
      "A high-speed DLP projector bounces light off a rapidly spinning holographic film disc. The result is a floating, volumetric time display visible from any angle in a dark room.",
    theProblem:
      "Phone screens and bedside clocks blast blue light into your face at 3am. You just want to know the time without fully waking up.",
    theConcept:
      "A soft amber holographic projection that floats above the device. Visible in the dark, invisible in daylight. No screen to light up your face \u2014 just gentle, ambient information.",
    specs: [
      { label: "Projection", value: "DLP Holographic" },
      { label: "Display Size", value: '4" floating' },
      { label: "Sound", value: "Spatial audio wake" },
      { label: "Power", value: "USB-C" },
    ],
    galleryImages: [],
  },
];

export const categories: Category[] = [
  { name: "Tech", slug: "tech", conceptCount: 4, description: "The next generation of personal electronics, wearables, and smart devices." },
  { name: "Home", slug: "home", conceptCount: 3, description: "Smart home innovations, furniture concepts, and living space upgrades." },
  { name: "Lifestyle", slug: "lifestyle", conceptCount: 1, description: "Products designed to enhance your daily routine and personal well-being." },
  { name: "Travel", slug: "travel", conceptCount: 1, description: "Gear and gadgets for the modern traveler and commuter." },
  { name: "Productivity", slug: "productivity", conceptCount: 1, description: "Tools and devices that help you focus and get more done." },
  { name: "Mobility", slug: "mobility", conceptCount: 1, description: "Last-mile transport, micro-vehicles, and urban movement solutions." },
  { name: "Furniture", slug: "furniture", conceptCount: 1, description: "Reimagined seating, desks, and home furnishings." },
];

export const footerColumns: FooterColumn[] = [
  {
    heading: "Discover",
    links: [
      { label: "Trending Now", href: "/" },
      { label: "New Arrivals", href: "/" },
      { label: "Most Voted", href: "/" },
      { label: "Categories", href: "/categories" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Submit an Idea", href: "/submit" },
      { label: "Newsletter", href: "/subscribe" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Affiliate Disclosure", href: "/affiliate" },
    ],
  },
];

export const categoryFilterOptions = [
  "All",
  "Tech",
  "Home",
  "Lifestyle",
  "Travel",
  "Productivity",
  "Mobility",
];

export const trendingTopics = [
  "Sustainable",
  "SmartHome",
  "Minimalism",
  "TravelTech",
  "Wearable",
  "AI",
];
