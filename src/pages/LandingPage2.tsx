
'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingCart, Truck, Shield, Clock, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LandingPage2 = () => {
  const categories = [
    {
      id: 1,
      name: 'Fresh Fruits',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&h=300&fit=crop',
      itemCount: '25+ Items'
    },
    {
      id: 2,
      name: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=300&fit=crop',
      itemCount: '30+ Items'
    },
    {
      id: 3,
      name: 'Dairy Products',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop',
      itemCount: '15+ Items'
    },
    {
      id: 4,
      name: 'Meat & Fish',
      image: 'https://images.unsplash.com/photo-1588347818131-d607ae4b6c3b?w=300&h=300&fit=crop',
      itemCount: '20+ Items'
    },
    {
      id: 5,
      name: 'Bakery',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop',
      itemCount: '12+ Items'
    },
    {
      id: 6,
      name: 'Beverages',
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop',
      itemCount: '18+ Items'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Fresh Organic Bananas',
      price: 12.99,
      originalPrice: 15.99,
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop',
      rating: 4.8,
      discount: 20
    },
    {
      id: 2,
      name: 'Red Bell Peppers',
      price: 8.50,
      originalPrice: 10.00,
      image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop',
      rating: 4.6,
      discount: 15
    },
    {
      id: 3,
      name: 'Fresh Milk 1L',
      price: 25.99,
      originalPrice: 28.99,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop',
      rating: 4.9,
      discount: 10
    },
    {
      id: 4,
      name: 'Whole Grain Bread',
      price: 18.50,
      originalPrice: 22.00,
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop',
      rating: 4.7,
      discount: 16
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-green-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="font-bold text-xl text-gray-900">
                Grocery<span className="text-green-600">Mart</span>
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">Home</Link>
              <Link to="/shop" className="text-gray-700 hover:text-green-600 font-medium">Shop</Link>
              <Link to="#" className="text-gray-700 hover:text-green-600 font-medium">About</Link>
              <Link to="#" className="text-gray-700 hover:text-green-600 font-medium">Contact</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium">
                <Truck className="h-4 w-4 mr-2" />
                Free delivery on orders over R500
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fresh Groceries
                <span className="block text-green-600">
                  At Your Doorstep
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg">
                Get the freshest produce, pantry essentials, and quality products delivered 
                straight to your home. Shop smart, eat fresh.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4 h-auto">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                  View Products
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-600 mr-2" />
                  Quality Guaranteed
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  Fast Delivery
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=600&fit=crop"
                  alt="Fresh groceries"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-600">30%</div>
                <div className="text-sm text-gray-600">Off</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Fresh Daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Free Delivery</h3>
              <p className="text-gray-600">Free shipping on all orders over R500</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Quality Products</h3>
              <p className="text-gray-600">100% fresh and organic products guaranteed</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Fast Service</h3>
              <p className="text-gray-600">Quick delivery within 2-4 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of fresh and quality products across different categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="aspect-square relative rounded-full overflow-hidden mb-4 mx-auto w-20 h-20">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.itemCount}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Products
              </h2>
              <p className="text-xl text-gray-600">
                Best selling products this week
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                      -{product.discount}%
                    </Badge>
                    <Button 
                      size="sm" 
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-green-600 hover:bg-green-700"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-900">
                          R{product.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          R{product.originalPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get Fresh Groceries Delivered Today!
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
            Order now and enjoy fresh, quality groceries delivered right to your doorstep. 
            Fast, reliable, and always fresh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto">
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-green-600">
              Download App
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-10 w-10 rounded-lg bg-green-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className="font-bold text-2xl">
                  Grocery<span className="text-green-400">Mart</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Your trusted grocery delivery partner, bringing fresh produce and quality products 
                directly to your doorstep with fast, reliable service.
              </p>
              <div className="flex items-center space-x-4 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+27 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@grocerymart.co.za</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/cart" className="hover:text-white transition-colors">Cart</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="#" className="hover:text-white transition-colors">Fresh Fruits</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Vegetables</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Dairy Products</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Meat & Fish</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Bakery</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2024 GroceryMart. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-gray-400">
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-white transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage2;
