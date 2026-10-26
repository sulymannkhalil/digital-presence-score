export type NavItem = {
  label: string;
  href: string;
  /** When true, treated as a landing-page section hash link */
  isSection?: boolean;
  /** When true, desktop/mobile show a Services or Industries mega menu */
  hasDropdown?: "services" | "industries";
};

export type MegaNavItem = {
  title: string;
  description: string;
  href: string;
  iconSrc: string;
};

/** Baqi Digital navbar brand. */
export const navbarBrand = {
  logoSrc:
    "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1770301534/Logo_tmop41.svg",
  logoAlt: "Baqi Digital Logo",
  href: "https://baqidigital.com/",
} as const;

/**
 * Primary Baqi Digital navigation (absolute baqidigital.com URLs).
 */
export const mainNav: NavItem[] = [
  { label: "About", href: "https://baqidigital.com/about/" },
  {
    label: "Services",
    href: "https://baqidigital.com/services/",
    hasDropdown: "services",
  },
  {
    label: "Industries",
    href: "https://baqidigital.com/industries/",
    hasDropdown: "industries",
  },
  { label: "Our Process", href: "https://baqidigital.com/our-process/" },
  { label: "Why Us", href: "https://baqidigital.com/why-us/" },
];

/** Sole navbar CTA — opens Calendly in a new tab. No Contact Us. */
export const primaryCta = {
  label: "Book a Strategy Call",
  href: "https://calendly.com/baqidigital-info",
} as const;

export const servicesDropdownItems: MegaNavItem[] = [
  {
    title: "Paid Ads",
    description:
      "Meta and Google campaigns focused on high-quality client acquisition.",
    href: "https://baqidigital.com/services/paid-ads-systems/",
    iconSrc:
      "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1766566759/Step_Icon-1_ryktwb.svg",
  },
  {
    title: "SEO",
    description: "Search visibility strategies that drive real business growth.",
    href: "https://baqidigital.com/services/seo-systems/",
    iconSrc:
      "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1766566920/Icon-1_xwy0v3.svg",
  },
  {
    title: "Funnels",
    description: "High-converting landing systems that turn traffic into leads.",
    href: "https://baqidigital.com/services/funnels-and-landing-pages/",
    iconSrc:
      "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1766566921/Icon-2_n5wdx9.svg",
  },
  {
    title: "CRM",
    description:
      "Automated systems and workflows designed to reduce manual work.",
    href: "https://baqidigital.com/services/crm-systems-automations/",
    iconSrc:
      "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1766566922/Icon-3_dij4kd.svg",
  },
  {
    title: "Analytics",
    description: "Clean data and tracking for clear, confident decisions.",
    href: "https://baqidigital.com/services/analytics-attribution/",
    iconSrc:
      "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1766566923/Icon-4_gi2akg.svg",
  },
  {
    title: "Advisory",
    description: "Strategic marketing guidance for founders seeking clarity.",
    href: "https://baqidigital.com/services/advisory-services/",
    iconSrc:
      "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1766566923/Icon-5_qst5nn.svg",
  },
  {
    title: "Additional Capabilities",
    description:
      "Complementary capabilities that strengthen and extend core growth systems.",
    href: "https://baqidigital.com/services/additional-capabilities/",
    iconSrc:
      "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1766575406/cog_j17shm.svg",
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, Google Ads, Meta Ads, and AI search visibility built to generate qualified leads.",
    href: "https://baqidigital.com/services/digital-marketing-services/",
    iconSrc:
      "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1785250020/Icon_qkvx5g.svg",
  },
];

export const industriesDropdownItems: MegaNavItem[] = [
  {
    title: "Legal",
    description: "Marketing systems for law firms and legal practices.",
    href: "https://baqidigital.com/industries/legal/",
    iconSrc:
      "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1766566755/Icon_hh57wa.svg",
  },
  {
    title: "Real Estate",
    description: "Growth systems for real estate teams and developers.",
    href: "https://baqidigital.com/industries/real-estate/",
    iconSrc:
      "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1766566755/Icon-1_ytks2i.svg",
  },
  {
    title: "Beauty & Esthetics",
    description: "Marketing solutions for beauty and esthetic brands.",
    href: "https://baqidigital.com/industries/beauty-esthetics/",
    iconSrc:
      "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1766566755/Icon-2_t73uqh.svg",
  },
  {
    title: "Medical & Wellness",
    description: "Systems for medical practices and wellness centers.",
    href: "https://baqidigital.com/industries/medical-wellness/",
    iconSrc:
      "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1766566754/heart-add_eetjy7.svg",
  },
  {
    title: "Home Services & Trades",
    description: "Marketing for HVAC, plumbing, electrical, and more.",
    href: "https://baqidigital.com/industries/home-services-trades/",
    iconSrc:
      "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1766566755/house-03_l3tlyw.svg",
  },
  {
    title: "Automotive",
    description: "Growth systems for dealerships and auto businesses.",
    href: "https://baqidigital.com/industries/automotive/",
    iconSrc:
      "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1766566752/car-05_pk0qhq.svg",
  },
  {
    title: "E-Commerce",
    description: "Marketing systems for online stores and brands.",
    href: "https://baqidigital.com/industries/e-commerce/",
    iconSrc:
      "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1766566758/shopping-bag-01_kc2g4p.svg",
  },
];

export const footerQuickLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/#how-it-works", isSection: true },
  { label: "What We Check", href: "/#what-we-check", isSection: true },
  { label: "Why It Matters", href: "/#why-it-matters", isSection: true },
  { label: "Sample Report", href: "/#sample-report", isSection: true },
  { label: "Contact", href: "/#contact", isSection: true },
];

export const footerResourceLinks: NavItem[] = [
  { label: "FAQs", href: "/#faqs", isSection: true },
  { label: "Assessment Methodology", href: "/methodology" },
];

export const footerLegalLinks: NavItem[] = [
  {
    label: "Terms of Services",
    href: "https://baqidigital.com/terms-of-service/",
  },
  {
    label: "Policies",
    href: "https://baqidigital.com/privacy-policy/",
  },
];

/** Mid-page Ready to Build CTA band (landing). */
export const readyToBuildCta = {
  heading: "Ready to see how your business performs online?",
  primaryLabel: "Get My Free Report Card",
  primaryHref: "/#home",
  secondaryLabel: "Call Now",
} as const;

/** Baqi Digital footer columns (Figma footer). */
export const footerBrand = {
  logoSrc:
    "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1770303568/Logo_1_gr6aag.svg",
  logoAlt: "Baqi Digital",
  logoHref: "https://baqidigital.com/",
  tagline:
    "Modern marketing systems engineered for growth. Serving North American service businesses.",
  copyrightName: "Baqi Digital",
  decorativeSrc:
    "https://res.cloudinary.com/dxxwzp4qs/image/upload/v1792734979/27472512_1332_2_isrbig.svg",
  contactEmailHref: "mailto:info@baqidigital.com",
  contactPhoneHref: "tel:+16479437069",
} as const;

export const footerLinkColumns: { title: string; links: NavItem[] }[] = [
  {
    title: "Services",
    links: [
      {
        label: "Paid Ads Systems",
        href: "https://baqidigital.com/services/paid-ads-systems/",
      },
      {
        label: "SEO Systems",
        href: "https://baqidigital.com/services/seo-systems/",
      },
      {
        label: "Funnels & Landing Pages",
        href: "https://baqidigital.com/services/funnels-and-landing-pages/",
      },
      {
        label: "CRM Systems & Automations",
        href: "https://baqidigital.com/services/crm-systems-automations/",
      },
      {
        label: "Analytics & Attribution",
        href: "https://baqidigital.com/services/analytics-attribution/",
      },
      {
        label: "Advisory Services",
        href: "https://baqidigital.com/services/advisory-services/",
      },
    ],
  },
  {
    title: "Industries",
    links: [
      {
        label: "Legal",
        href: "https://baqidigital.com/industries/legal/",
      },
      {
        label: "Real Estate",
        href: "https://baqidigital.com/industries/real-estate/",
      },
      {
        label: "Beauty & Esthetics",
        href: "https://baqidigital.com/industries/beauty-esthetics/",
      },
      {
        label: "Medical & Wellness",
        href: "https://baqidigital.com/industries/medical-wellness/",
      },
      {
        label: "Home Services & Trades",
        href: "https://baqidigital.com/industries/home-services-trades/",
      },
      {
        label: "Automotive",
        href: "https://baqidigital.com/industries/automotive/",
      },
      {
        label: "E-Commerce",
        href: "https://baqidigital.com/industries/e-commerce/",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "https://baqidigital.com/about/" },
      { label: "Services", href: "https://baqidigital.com/services/" },
      { label: "Industries", href: "https://baqidigital.com/industries/" },
      { label: "Contact", href: "https://baqidigital.com/contact-us/" },
    ],
  },
];
