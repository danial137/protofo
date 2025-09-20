import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';
import '@testing-library/jest-dom';

describe('ProductCard', () => {
  const productProps = {
    title: 'تست عنوان',
    description: 'تست توضیحات',
    price: 10000,
    imageUrl: '/images/p1.png',
  };

  it('renders the product title, price, and add to cart button', () => {
    render(<ProductCard {...productProps} />);

    // Check for the title
    expect(screen.getByText('تست عنوان')).toBeInTheDocument();

    // Check for the price (formatted)
    expect(screen.getByText('۱۰٬۰۰۰ تومان')).toBeInTheDocument();

    // Check for the "Add to cart" button
    expect(screen.getByRole('button', { name: /افزودن به سبد/i })).toBeInTheDocument();
  });

  it('renders the product image', () => {
    render(<ProductCard {...productProps} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src');
    expect(image.getAttribute('src')).toContain('p1.png');
  });

  it('shows a placeholder when no image is provided', () => {
    const { rerender } = render(<ProductCard {...productProps} imageUrl={undefined} />);
    expect(screen.getByText('بدون تصویر')).toBeInTheDocument();
  });

  it('shows a loading skeleton when isLoading is true', () => {
    render(<ProductCard {...productProps} isLoading={true} />);
    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument();
  });
});
