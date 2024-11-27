'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [role, setRole] = useState('Engineer'); // Role state
  const router = useRouter();

  // Handle form submission
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    // Redirect based on role
    if (role === 'Engineer') {
      router.push('/profile/engineer');
    } else if (role === 'Client') {
      router.push('/profile/client');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-500">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>

        {/* Role Selector */}
        <label className="block font-semibold mb-2">I am signing up as:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="block w-full mb-4 p-2 border border-gray-300 rounded-md"
        >
          <option value="Engineer">Engineer</option>
          <option value="Client">Client</option>
        </select>

        {/* Conditional Form Rendering */}
        {role === 'Engineer' ? (
          <form onSubmit={handleSignUp}>
            {/* Name Input */}
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="block w-full mb-4 p-3 border border-gray-300 rounded-md placeholder-gray-500 text-lg"
            />

            {/* Email Input */}
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="block w-full mb-4 p-3 border border-gray-300 rounded-md placeholder-gray-500 text-lg"
            />

            {/* Password Input */}
            <label className="block font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="Create a secure password"
              className="block w-full mb-4 p-3 border border-gray-300 rounded-md placeholder-gray-500 text-lg"
            />

            {/* Skills Input */}
            <label className="block font-semibold mb-1">Skills</label>
            <input
              type="text"
              placeholder="List your technical skills"
              className="block w-full mb-4 p-3 border border-gray-300 rounded-md placeholder-gray-500 text-lg"
            />

            {/* Portfolio Link */}
            <label className="block font-semibold mb-1">Portfolio Link</label>
            <input
              type="url"
              placeholder="Enter the URL of your portfolio"
              className="block w-full mb-6 p-3 border border-gray-300 rounded-md placeholder-gray-500 text-lg"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
            >
              Sign Up as Engineer
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignUp}>
            {/* Name Input */}
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="block w-full mb-4 p-3 border border-gray-300 rounded-md placeholder-gray-500 text-lg"
            />

            {/* Email Input */}
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="block w-full mb-4 p-3 border border-gray-300 rounded-md placeholder-gray-500 text-lg"
            />

            {/* Password Input */}
            <label className="block font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="Create a secure password"
              className="block w-full mb-4 p-3 border border-gray-300 rounded-md placeholder-gray-500 text-lg"
            />

            {/* Company Name Input */}
            <label className="block font-semibold mb-1">Company Name</label>
            <input
              type="text"
              placeholder="Enter your company name"
              className="block w-full mb-6 p-3 border border-gray-300 rounded-md placeholder-gray-500 text-lg"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
            >
              Sign Up as Client
            </button>
          </form>
        )}

        {/* Footer Links */}
        <div className="text-center mt-4">
          <p>
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 font-semibold hover:underline">
              Login
            </a>
          </p>
          <p className="mt-2 flex justify-center gap-4">
            <button
              className="text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition"
              onClick={() => alert("Google Sign In")}
            >
              Sign in with Google
            </button>
            <button
              className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={() => alert("Facebook Sign In")}
            >
              Sign in with Facebook
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;










