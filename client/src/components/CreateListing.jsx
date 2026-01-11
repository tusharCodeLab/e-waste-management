import React, { useState } from 'react';
import axios from 'axios';

const CreateListing = () => {
  const [formData, setFormData] = useState({
    title: '', deviceCategory: 'Mobile', condition: 'Working',
    batteryPresent: false, quantity: 1, city: '', sellerContact: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/listings', formData);
      alert('Listing Created! System has auto-classified your item.');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">List e-Waste</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Basic Fields */}
        <input 
          placeholder="Device Title (e.g., Broken Dell Laptop)" 
          className="w-full border p-2 rounded"
          onChange={(e) => setFormData({...formData, title: e.target.value})} 
        />
        
        <div className="grid grid-cols-2 gap-4">
          <select 
            className="border p-2 rounded"
            onChange={(e) => setFormData({...formData, deviceCategory: e.target.value})}
          >
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="Appliance">Appliance</option>
          </select>
          
          <select 
             className="border p-2 rounded"
             onChange={(e) => setFormData({...formData, condition: e.target.value})}
          >
            <option value="Working">Working</option>
            <option value="Repairable">Repairable</option>
            <option value="Scrap">Scrap</option>
          </select>
        </div>

        <label className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            onChange={(e) => setFormData({...formData, batteryPresent: e.target.checked})} 
          />
          <span>Contains Battery? (Affects Hazard Classification)</span>
        </label>

        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded font-bold">
          Submit Listing
        </button>
      </form>
    </div>
  );
};

export default CreateListing;