import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  // 1. State to hold form data
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // 2. Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle form submission (Just logs data for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data Submitted:', formData);
    alert('Login functionality will be connected to backend soon!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-600">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Sign in to manage your e-waste</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              placeholder="you@example.com"
              required 
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              placeholder="••••••••"
              required 
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md"
          >
            Sign In
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center text-gray-600">
          <p>
            Don't have an account?{' '}
            <Link to="/register" className="text-green-600 font-bold hover:underline">
              Register here
            </Link>
          </p>
          <div className="mt-4">
            <Link to="/" className="text-sm text-gray-400 hover:text-gray-600">
              ← Back to Home
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;