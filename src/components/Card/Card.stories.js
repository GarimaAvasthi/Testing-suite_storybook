import React from 'react';

import { Card } from './Card';



export default {

  title: 'Components/Card',

  component: Card,

  argTypes: {

    title: { control: 'text', description: 'Card heading' },

    description: { control: 'text', description: 'Card body text' },

    price: { control: 'number', description: 'Price displayed on the card' },

    badge: { control: 'text', description: 'Badge label (e.g. "Sale", "New")' },

    badgeColor: {

      control: 'radio',

      options: ['blue', 'green', 'red', 'yellow'],

      description: 'Badge color theme',

    },

    featured: { control: 'boolean', description: 'Featured card with accent border and glow' },

    actionLabel: { control: 'text', description: 'CTA button text' },

  },

  parameters: {

    docs: {

      description: {

        component: 'A product card with floating hover lift, image zoom, translucent badges, and gradient CTA button.',

      },

    },

  },

};



export const Default = {

  args: {

    title: 'Minimal Card',

    description: 'Clean and simple with no distractions - just content that speaks for itself.',

    price: 29.99,

    actionLabel: 'View Details',

    onAction: () => {},

  },

};



export const WithImage = {
  args:{
    title:'MacBook Pro',
    description:"The ultimate pro notebook",
    price:1999.00,
    image:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8-w=400&h=300&fit=crop',
    actionLabel:'Add to Cart',
    onAction:() => {},

  },

};



export const Featured = {
  args:{
    title:'Premium Headphones',
    description:"Immersive audio",
    price:349.99,
    image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e-w=400&h=300&fit=crop',
    badge:'Best Seller',
    badgeColor:'green',
    featured:true,
    actionLabel:'Buy Now',
    onAction:() => {},

  },

};



export const Showcase = () =>

  React.createElement(

    'div',

    {

      style: {

        display: 'flex',

        gap: '24px',

        flexWrap: 'wrap',

        padding: '20px',

        alignItems: 'flex-start',

      },

    },

    React.createElement(Card, {

      title: 'Studio Monitor',

      description: 'Professional audio monitoring for creators and musicians.',

      price: 199.99,

      badge: 'NEW',

      badgeColor: 'blue',

      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e-w=400&h=300&fit=crop',

      actionLabel: 'Explore',

      onAction: () => {},

    }),

    React.createElement(Card, {

      title: 'Smart Watch Ultra',

      description: 'Advanced health tracking meets premium design.',

      price: 449.99,

      badge: 'POPULAR',

      badgeColor: 'green',

      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30-w=400&h=300&fit=crop',

      featured: true,

      actionLabel: 'Pre-Order',

      onAction: () => {},

    }),

    React.createElement(Card, {

      title: 'USB-C Hub Pro',

      description: 'Everything you need in one sleek connector.',

      price: 79.99,

      badge: '30% OFF',

      badgeColor: 'red',

      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8-w=400&h=300&fit=crop',

      actionLabel: 'Add to Cart',

      onAction: () => {},

    })

  );

