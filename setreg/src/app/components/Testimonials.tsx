'use client';

import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael Doe',
      role: 'UX Designer',
      feedback: 'Excellent website which seamlessy connects the enginner to the clients and creates new projects easily!',
      image: '/michael.jpg',
      rating: 5,
    },
    {
      name: 'Anthony Beverse',
      role: 'Software Engineer',
      feedback: 'A clear coded plugin that does the trick perfectly.',
      image: '/anthony.jpg',
      rating: 5,
    },
    {
      name: 'Ryan Murphy',
      role: 'Mechanical Engineer',
      feedback: 'Very simple to use and with lots of options.',
      image: '/ryan.jpg',
      rating: 4,
    },
  ];

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
            <div className="testimonial-rating">
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

