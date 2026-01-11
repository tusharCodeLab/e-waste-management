import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* 1. NAVBAR */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-green-600">EcoCircuit ♻️</Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-green-600 font-medium">How it Works</a>
              <a href="#impact" className="text-gray-600 hover:text-green-600 font-medium">Impact</a>
            </div>
            <div className="flex space-x-4">
              <Link to="/login" className="text-green-600 font-medium hover:text-green-700 py-2">
                Login
              </Link>
              <Link to="/register" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Turn Your E-Waste into <span className="text-green-200">Eco-Rewards</span>
            </h1>
            <p className="mt-4 text-xl text-green-100">
              Don't throw away your old gadgets. Recycle them responsibly, track your impact, and earn points for a greener future.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105">
                Schedule Pickup
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="text-9xl">🌍📱💻</div> 
          </div>
        </div>
      </header>

      {/* 3. HOW IT WORKS (The missing part) */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Recycle in 3 Easy Steps</h2>
          <p className="mt-2 text-gray-600">Recycling electronics has never been this easy.</p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-xl transition bg-gray-50">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-800">1. List Your Items</h3>
              <p className="mt-2 text-gray-500">Upload details of your old electronics and get an instant estimated value.</p>
            </div>
            {/* Step 2 */}
            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-xl transition bg-gray-50">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-800">2. Free Pickup</h3>
              <p className="mt-2 text-gray-500">Our certified agents will come to your doorstep to collect the waste securely.</p>
            </div>
            {/* Step 3 */}
            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-xl transition bg-gray-50">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-xl font-bold text-gray-800">3. Earn Rewards</h3>
              <p className="mt-2 text-gray-500">Get Eco-Points or cash directly to your wallet once recycling is confirmed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS SECTION */}
      <section id="impact" className="py-12 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div className="text-4xl font-bold text-green-400">10k+</div><div className="mt-1 text-gray-300">Users</div></div>
          <div><div className="text-4xl font-bold text-green-400">5 Tons</div><div className="mt-1 text-gray-300">Recycled</div></div>
          <div><div className="text-4xl font-bold text-green-400">500+</div><div className="mt-1 text-gray-300">Pickups</div></div>
          <div><div className="text-4xl font-bold text-green-400">₹2L+</div><div className="mt-1 text-gray-300">Paid Out</div></div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 EcoCircuit. Building a sustainable future.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;