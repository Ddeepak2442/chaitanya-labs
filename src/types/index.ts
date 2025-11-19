export interface TestCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  tests?: TestItem[];
}

export interface TestItem {
  name: string;
  price: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}