import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl?: string;
  isLoading?: boolean;
}

const ProductCard = ({
  title,
  description,
  price,
  imageUrl,
  isLoading = false,
}: ProductCardProps) => {
  if (isLoading) {
    return (
      <div
        className="w-full max-w-sm mx-auto overflow-hidden transition-shadow duration-300 ease-in-out bg-gray-200 rounded-lg shadow-lg animate-pulse dark:bg-gray-800"
        role="alert"
        aria-label="loading"
        data-testid="loading-skeleton"
      >
        <div className="w-full h-48 bg-gray-300 dark:bg-gray-700"></div>
        <div className="p-4">
          <div className="w-3/4 h-6 mb-2 bg-gray-300 rounded dark:bg-gray-700"></div>
          <div className="w-full h-4 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
          <div className="flex items-center justify-between">
            <div className="w-1/4 h-6 bg-gray-300 rounded dark:bg-gray-700"></div>
            <div className="w-1/3 h-10 bg-gray-400 rounded-lg dark:bg-gray-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full max-w-sm mx-auto overflow-hidden transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-lg dark:bg-gray-900 dark:hover:shadow-red-500/40 hover:shadow-2xl">
      <div className="relative w-full h-48">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-800">
            <span className="text-gray-500">بدون تصویر</span>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-grow p-4">
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="flex-grow mb-4 text-sm text-gray-600 dark:text-gray-400">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-black text-gray-800 dark:text-red-500">
            {price.toLocaleString('fa-IR')} تومان
          </span>
          <button className="px-4 py-2 text-sm font-bold text-white transition-colors duration-300 bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            افزودن به سبد
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
