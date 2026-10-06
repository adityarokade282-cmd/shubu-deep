export const BUSINESS = {
  name: 'Shubh Deep Diwali Decorators',
  tagline: 'Lighting up homes, businesses and celebrations with beautiful Diwali decorations.',
  phone: '+91 98765 43210',
  phoneRaw: '919876543210',
  whatsapp: '919876543210',
  email: 'shubhdeepdecorators@gmail.com',
  serviceArea: 'Mumbai, Pune, Thane & Navi Mumbai',
  hours: 'Mon – Sun: 9:00 AM – 9:00 PM',
  whatsappMessage: 'Hi, I want to book Diwali decoration services. Please share your packages and availability.',
};

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'home',
    icon: 'Home',
    title: 'Home Diwali Decoration',
    description: 'Transform your home into a festive wonderland with diyas, rangoli, and fairy lights.',
  },
  {
    id: 'office',
    icon: 'Building2',
    title: 'Office Decoration',
    description: 'Brighten your workplace with elegant Diwali decor that sparks joy and productivity.',
  },
  {
    id: 'shop',
    icon: 'Store',
    title: 'Shop & Showroom Decoration',
    description: 'Attract customers this festive season with stunning shop and showroom decorations.',
  },
  {
    id: 'party',
    icon: 'PartyPopper',
    title: 'Diwali Party Decoration',
    description: 'Make your Diwali party unforgettable with themed decor, lighting, and backdrops.',
  },
  {
    id: 'flower',
    icon: 'Flower2',
    title: 'Flower & Rangoli Decoration',
    description: 'Beautiful floral arrangements and intricate rangoli designs crafted by expert artists.',
  },
  {
    id: 'led',
    icon: 'Lightbulb',
    title: 'LED & Fairy Light Decoration',
    description: 'Illuminate every corner with dazzling LED and fairy light arrangements.',
  },
  {
    id: 'lantern',
    icon: 'Lamp',
    title: 'Lantern & Diya Decoration',
    description: 'Traditional lanterns and beautifully arranged diyas to light up your festivities.',
  },
  {
    id: 'corporate',
    icon: 'Sparkles',
    title: 'Corporate Diwali Events',
    description: 'Full-scale corporate Diwali event decoration with customized themes and branding.',
  },
];

export interface Package {
  id: string;
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  accent: string;
}

export const packages: Package[] = [
  {
    id: 'basic',
    name: 'Basic Package',
    price: '2,999',
    accent: 'orange',
    features: [
      'Diya decoration',
      'Basic rangoli',
      'Fairy lights',
      'Door decoration',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price: '6,999',
    popular: true,
    accent: 'gold',
    features: [
      'Complete entrance decoration',
      'Flower decoration',
      'Rangoli',
      'Fairy lights',
      'Diyas & lanterns',
    ],
  },
  {
    id: 'royal',
    name: 'Royal Package',
    price: '12,999',
    accent: 'purple',
    features: [
      'Complete home/event decoration',
      'Premium flowers',
      'Designer rangoli',
      'LED lighting',
      'Decorative backdrop',
      'Customized theme',
    ],
  },
];

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  { icon: 'Sparkles', title: 'Creative Designs', description: 'Unique, artistic decoration concepts tailored to your space.' },
  { icon: 'Flame', title: 'Traditional + Modern Themes', description: 'Perfect blend of classic Diwali traditions and contemporary aesthetics.' },
  { icon: 'BadgeCheck', title: 'Quality Decoration', description: 'Premium materials and meticulous attention to every detail.' },
  { icon: 'Zap', title: 'Fast Setup', description: 'Quick and efficient installation with zero hassle for you.' },
  { icon: 'Wallet', title: 'Affordable Packages', description: 'Beautiful decorations at every budget without compromising quality.' },
  { icon: 'Heart', title: 'Customized Decorations', description: 'Personalized themes and decor that match your vision perfectly.' },
];

export interface GalleryItem {
  url: string;
  alt: string;
  category: string;
  span?: string;
}

export const galleryItems: GalleryItem[] = [
  { url: 'https://images.pexels.com/photos/3135229/pexels-photo-3135229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Vibrant diyas arranged creatively for Diwali', category: 'Diya Decoration', span: 'row-span-2' },
  { url: 'https://images.pexels.com/photos/34400039/pexels-photo-34400039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Colorful Rangoli design with a lit diya', category: 'Rangoli', span: '' },
  { url: 'https://images.pexels.com/photos/8818591/pexels-photo-8818591.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Friends celebrating Diwali on a decorated balcony', category: 'Balcony Decoration', span: '' },
  { url: 'https://images.pexels.com/photos/4078516/pexels-photo-4078516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Oil lamps decorated with marigold flowers', category: 'Flower Decoration', span: 'row-span-2' },
  { url: 'https://images.pexels.com/photos/8887279/pexels-photo-8887279.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Oil lamps on vibrant red and gold fabrics', category: 'Entrance Decoration', span: '' },
  { url: 'https://images.pexels.com/photos/34400035/pexels-photo-34400035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Vibrant Rangoli with a lit diya at its center', category: 'Rangoli', span: '' },
  { url: 'https://images.pexels.com/photos/8819577/pexels-photo-8819577.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Colorful wrapped presents with lights and marigold flowers', category: 'Diwali Party Setup', span: 'col-span-2' },
  { url: 'https://images.pexels.com/photos/19721896/pexels-photo-19721896.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Festive outdoor string lights in Kolkata', category: 'Office Decoration', span: '' },
  { url: 'https://images.pexels.com/photos/29215357/pexels-photo-29215357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Marigold flowers and decorative diyas', category: 'Home Decoration', span: '' },
  { url: 'https://images.pexels.com/photos/30198271/pexels-photo-30198271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Golden fairy lights cascading indoors', category: 'LED & Fairy Lights', span: 'row-span-2' },
  { url: 'https://images.pexels.com/photos/36215734/pexels-photo-36215734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Paper lanterns hanging at a festival in India', category: 'Lantern Decoration', span: '' },
];

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    location: 'Andheri, Mumbai',
    rating: 5,
    text: 'Absolutely beautiful decoration! Our home looked amazing for Diwali. The team was professional, punctual, and the attention to detail was incredible. Highly recommended!',
    initials: 'PS',
  },
  {
    name: 'Rajesh Mehta',
    location: 'Baner, Pune',
    rating: 5,
    text: 'We booked the Royal Package for our society Diwali event and everyone was speechless. The designer rangoli and LED lighting setup was out of this world. Worth every rupee!',
    initials: 'RM',
  },
  {
    name: 'Anita Desai',
    location: 'Thane West',
    rating: 5,
    text: 'The Premium Package was perfect for our home. The flower decoration and entrance setup made our Diwali so special. The team understood exactly what we wanted. Thank you!',
    initials: 'AD',
  },
];

export interface Step {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export const steps: Step[] = [
  { number: '01', icon: 'Phone', title: 'Contact Us', description: 'Reach out via phone, WhatsApp, or the booking form to share your requirements.' },
  { number: '02', icon: 'Palette', title: 'Choose Your Theme', description: 'Browse our packages and customize a theme that matches your vision and space.' },
  { number: '03', icon: 'Wrench', title: 'Decoration Setup', description: 'Our expert team arrives on time and sets up everything with precision and care.' },
  { number: '04', icon: 'Smile', title: 'Enjoy Your Diwali', description: 'Relax and celebrate a beautifully decorated Diwali with your loved ones.' },
];

export const decorationTypes = [
  'Home Diwali Decoration',
  'Office Decoration',
  'Shop & Showroom Decoration',
  'Diwali Party Decoration',
  'Flower & Rangoli Decoration',
  'LED & Fairy Light Decoration',
  'Lantern & Diya Decoration',
  'Corporate Diwali Events',
];

export const packageOptions = ['Basic Package', 'Premium Package', 'Royal Package', 'Custom Quote'];
