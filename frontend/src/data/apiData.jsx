import React from 'react';
import { Stethoscope, Utensils, GraduationCap, Bus, ShoppingCart, Hotel, Landmark, Plane, Briefcase } from 'lucide-react';

export const categories = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'APIs for hospitals, clinics, and medical applications.',
    apiCount: 3,
    status: 'ACTIVE',
    icon: <Stethoscope className="w-6 h-6" />,
    link: '/apis/hospital'
  },
  {
    id: 'food',
    name: 'Food & Delivery',
    description: 'Restaurant menus, delivery tracking, and ordering systems.',
    apiCount: 2,
    status: 'COMING_SOON',
    icon: <Utensils className="w-6 h-6" />
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Schools, colleges, courses, and student management.',
    apiCount: 4,
    status: 'COMING_SOON',
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    id: 'transport',
    name: 'Transport',
    description: 'Public transit, ride-sharing, and logistics.',
    apiCount: 3,
    status: 'COMING_SOON',
    icon: <Bus className="w-6 h-6" />
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Products, carts, orders, and payment gateways.',
    apiCount: 5,
    status: 'COMING_SOON',
    icon: <ShoppingCart className="w-6 h-6" />
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    description: 'Hotels, bookings, and room management.',
    apiCount: 2,
    status: 'COMING_SOON',
    icon: <Hotel className="w-6 h-6" />
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Banking, transactions, and cryptocurrency.',
    apiCount: 3,
    status: 'COMING_SOON',
    icon: <Landmark className="w-6 h-6" />
  },
  {
    id: 'travel',
    name: 'Travel',
    description: 'Flights, destinations, and itineraries.',
    apiCount: 2,
    status: 'COMING_SOON',
    icon: <Plane className="w-6 h-6" />
  },
  {
    id: 'jobs',
    name: 'Jobs',
    description: 'Job portals, recruitment, and resumes.',
    apiCount: 2,
    status: 'COMING_SOON',
    icon: <Briefcase className="w-6 h-6" />
  }
];

export const apis = [
  {
    id: 'hospital',
    categoryId: 'healthcare',
    name: 'Hospital API',
    description: 'A realistic mock REST API for building and testing hospital and healthcare applications.',
    status: 'ACTIVE',
    icon: <Stethoscope className="w-6 h-6" />
  },
  {
    id: 'food-delivery',
    categoryId: 'food',
    name: 'Food Delivery API',
    description: 'Mock endpoints for restaurants, menus, and order tracking.',
    status: 'COMING_SOON',
    icon: <Utensils className="w-6 h-6" />
  },
  {
    id: 'college',
    categoryId: 'education',
    name: 'College API',
    description: 'Manage students, courses, faculties, and grades.',
    status: 'COMING_SOON',
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    id: 'transport-api',
    categoryId: 'transport',
    name: 'Transport API',
    description: 'Routes, schedules, and live location tracking mock data.',
    status: 'COMING_SOON',
    icon: <Bus className="w-6 h-6" />
  },
  {
    id: 'ecommerce-api',
    categoryId: 'ecommerce',
    name: 'E-commerce API',
    description: 'Complete store mock with products, carts, and user profiles.',
    status: 'COMING_SOON',
    icon: <ShoppingCart className="w-6 h-6" />
  },
  {
    id: 'hotel-api',
    categoryId: 'hospitality',
    name: 'Hotel API',
    description: 'Mock API for hotel reservations, rooms, and guests.',
    status: 'COMING_SOON',
    icon: <Hotel className="w-6 h-6" />
  }
];
