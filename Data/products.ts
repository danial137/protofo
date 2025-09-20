export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl?: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: 'کتاب سایه وحشت',
    description: 'یک رمان ترسناک روانشناختی که شما را تا آخرین صفحه درگیر خود می‌کند.',
    price: 150000,
    imageUrl: '/images/p1.png',
  },
  {
    id: 2,
    title: 'مجسمه کلکسیونی',
    description: 'مجسمه‌ای با جزئیات دقیق از یک هیولای باستانی، مناسب برای کلکسیونرها.',
    price: 450000,
    imageUrl: '/images/p2.png',
  },
  {
    id: 3,
    title: 'بازی فکری نفرین شده',
    description: 'یک بازی رومیزی که در آن باید قبل از اینکه دیر شود، از یک عمارت نفرین شده فرار کنید.',
    price: 280000,
    imageUrl: '/images/p3.png',
  },
  {
    id: 4,
    title: 'پوستر هنری گوتیک',
    description: 'یک پوستر با طراحی هنری تاریک و گوتیک برای تزئین اتاق شما.',
    price: 75000,
  },
];
