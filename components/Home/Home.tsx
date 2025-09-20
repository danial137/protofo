import React from 'react'
import Hero from './Hero/Hero'
import { products } from '@/Data/products'
import ProductCard from '../ProductCard'
import About from './About/About'
import Services from './Services/Services'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import Reviews from './Reviews/Reviews'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'


export const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <div className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-900 dark:text-white">
            محصولات ما
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Project />
      <Skills />
      <Reviews />
      <Blog />
      <Contact/>
    </div>
  )
}
export default Home
