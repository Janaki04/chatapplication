// src/components/ProfilePanel.jsx
import React, { useState } from 'react';

export default function ProfilePanel({ onBackClick }) {
  const [name, setName] = useState('Pink Panda');
  const [about, setAbout] = useState('Hey there, I am learning from coding monk');

  const handleSave = () => {
    // Add logic here to save profile information
    console.log('Profile Saved:', { name, about });
  };

  return (
    <div className="flex flex-1 flex-col md:flex-row h-full bg-white overflow-hidden animate-in fade-in duration-150">
      
      {/* LEFT EDITABLE FIELDS COLUMN */}
      <section className="w-full md:w-80 bg-[#f8fafc] md:border-r border-gray-100 flex flex-col flex-shrink-0 h-full">
        {/* Header Navigation Row */}
        <div className="p-6 pb-6 flex items-center space-x-4">
          <button 
            onClick={onBackClick} 
            className="p-1 text-gray-800 hover:bg-gray-200/50 rounded-lg transition-all"
            aria-label="Back"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Profile</h1>
        </div>

        {/* Profile Large Avatar Badge Display */}
        <div className="flex flex-col items-center justify-center py-4">
          <div className="relative group cursor-pointer">
            <img 
              className="w-24 h-24 rounded-full object-cover shadow-md border border-gray-100 transition-opacity group-hover:opacity-90"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
              alt="Shreyansh shah Large Profile View" 
            />
            {/* Camera Overlay Hover Effect */}
            <div className="absolute inset-0 rounded-full bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <circle cx="12" cy="13" r="3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Dynamic Inputs Frame Area */}
        <div className="flex-1 px-6 py-4 space-y-6 overflow-y-auto">
          
          {/* Custom Floating Label Name Box Field */}
          <div className="relative mt-2">
            <label className="absolute -top-2.5 left-3 bg-[#f8fafc] px-1 text-[11px] font-semibold text-blue-500 tracking-wide z-10">
              Name
            </label>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border border-blue-400 rounded-xl px-4 py-3.5 text-xs font-semibold text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500 tracking-wide transition-all"
            />
            <p className="text-[11px] text-gray-400 font-medium mt-1.5 pl-1">
              This name is visible to your contacts
            </p>
          </div>

          {/* Custom Floating Label About Textarea Field */}
          <div className="relative">
            <label className="absolute -top-2.5 left-3 bg-[#f8fafc] px-1 text-[11px] font-semibold text-gray-400 tracking-wide z-10">
              About
            </label>
            <textarea 
              rows="3"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full bg-transparent border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-semibold text-gray-700 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 tracking-wide resize-none transition-all"
            />
          </div>

          {/* Action Action Bottom Row */}
          <div className="flex justify-end pt-2">
            <button
              onClick={handleSave}
              className="w-28 py-2.5 text-xs font-bold text-blue-500 bg-transparent border border-blue-200 hover:bg-blue-50/40 rounded-xl transition-all shadow-sm active:scale-[0.98]"
            >
              Save
            </button>
          </div>

        </div>
      </section>

      {/* RIGHT CHAT GRAPHIC CANVAS LAYOUT VIEWPORT */}
      <main className="hidden md:flex flex-1 flex-col items-center justify-center p-8 text-center bg-white relative select-none">
        <div className="w-72 h-72 relative mb-4 flex items-center justify-center">
          {/* Screen Vector Illustration Replica */}
          <svg className="w-64 h-64 text-blue-500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Gear Outline Container */}
            <path d="M280 50h-60l-10 40c-15 5-30 12-42 22l-36-22l-42 42l22 36c-10 12-17 27-22 42l-40 10v60l40 10c5 15 12 30 22 42l-22 36l42 42l36-22c12 10 27 17 42 22l10 40h60l10-40c15-5 30-12 42-22l36 22l42-42l-22-36c10-12 17-27 22-42l40-10v-60l-40-10c-5-15-12-30-22-42l22-36l-42-42l-36 22c-12-10-27-17-42-22l-10-40z" fill="#3b82f6" fillOpacity="0.75" />
            <circle cx="250" cy="250" r="140" fill="#ffffff" />
            {/* Minimal Sketch Figure sitting in center icon */}
            <circle cx="250" cy="210" r="24" stroke="#1e293b" strokeWidth="4" />
            <path d="M225 210c0-12 8-22 20-25m10 50c0 15-8 25-18 28" stroke="#1e293b" strokeWidth="4" />
            <path d="M230 260l-20 80h80l-20-80z" stroke="#1e293b" strokeWidth="4" fill="#ffffff" />
            <path d="M205 290h90M190 270l30 25" stroke="#1e293b" strokeWidth="3" />
          </svg>
        </div>
        <p className="text-xs font-bold text-gray-900 tracking-wide">
          Select a conversation or start a <span className="text-blue-500 hover:underline cursor-pointer font-extrabold">new one</span>
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-blue-500" />
      </main>

    </div>
  );
}