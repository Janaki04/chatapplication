// src/components/Wallpaper.jsx
import React, { useState } from 'react';

export default function Wallpaper({ onBack }) {
  const [enableDoodle, setEnableDoodle] = useState(true);
  const [selectedColor, setSelectedColor] = useState('#474a6c'); // Matches default preview color

  // Swatches from design color palette matrix
  const wallpaperSwatches = [
    { id: 'default', label: 'Default', bgClass: 'bg-gray-200 text-gray-900' },
    { id: 'dark-slate', hex: '#1c2424', bgClass: 'bg-[#1c2424]' },
    { id: 'forest', hex: '#2d5343', bgClass: 'bg-[#2d5343]' },
    { id: 'sage', hex: '#448461', bgClass: 'bg-[#448461]' },
    { id: 'ocean', hex: '#264a61', bgClass: 'bg-[#264a61]' },
    { id: 'rose', hex: '#b58282', bgClass: 'bg-[#b58282]' },
    { id: 'clay', hex: '#958585', bgClass: 'bg-[#958585]' },
    { id: 'burgundy', hex: '#1a080c', bgClass: 'bg-[#1a080c]' },
    { id: 'olive', hex: '#40531b', bgClass: 'bg-[#40531b]' },
    { id: 'plum', hex: '#a65375', bgClass: 'bg-[#a65375]' },
    { id: 'mint', hex: '#5e9982', bgClass: 'bg-[#5e9982]' },
    { id: 'ochre', hex: '#c58559', bgClass: 'bg-[#c58559]' },
    { id: 'lavender', hex: '#b9b0dc', bgClass: 'bg-[#b9b0dc]' },
    { id: 'deep-green', hex: '#0a1d12', bgClass: 'bg-[#0a1d12]' },
    { id: 'dusty-pink', hex: '#cda2a2', bgClass: 'bg-[#cda2a2]' },
    { id: 'charcoal', hex: '#313131', bgClass: 'bg-[#313131]' },
    { id: 'magenta', hex: '#8e2b6d', bgClass: 'bg-[#8e2b6d]' },
    { id: 'slate-blue', hex: '#474a6c', bgClass: 'bg-[#474a6c]' },
    { id: 'seafoam', hex: '#6cb696', bgClass: 'bg-[#6cb696]' },
    { id: 'brown', hex: '#825930', bgClass: 'bg-[#825930]' },
    { id: 'midnight', hex: '#201e5c', bgClass: 'bg-[#201e5c]' },
  ];

  const handleSwatchSelect = (swatch) => {
    if (swatch.id === 'default') {
      setSelectedColor('#e5e7eb'); // Gray tailwind-200 base
    } else {
      setSelectedColor(swatch.hex);
    }
  };

  return (
    <div className="flex flex-1 flex-col md:flex-row h-full bg-white overflow-hidden animate-in fade-in duration-150">
      
      {/* LEFT PICKER FRAME COLUMN */}
      <section className="w-full md:w-80 bg-[#f8fafc] md:border-r border-gray-100 flex flex-col flex-shrink-0 h-1/2 md:h-full">
        {/* Header segment navigation line */}
        <div className="p-6 pb-4 flex items-center space-x-4">
          <button 
            onClick={onBack} 
            className="p-1 text-gray-800 hover:bg-gray-200/50 rounded-lg transition-all"
            aria-label="Back to settings menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Set Chat Wallpaper</h1>
        </div>

        {/* Option configuration action controller row */}
        <div className="px-6 py-4 flex items-center justify-between">
          <label htmlFor="doodle-toggle" className="text-xs font-semibold text-gray-600 tracking-wide select-none">
            Enable Talk Doodle
          </label>
          <input 
            id="doodle-toggle"
            type="checkbox" 
            checked={enableDoodle}
            onChange={(e) => setEnableDoodle(e.target.checked)}
            className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400 accent-blue-500 cursor-pointer"
          />
        </div>

        {/* Fluid custom layout color selector picker matrix grid */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <div className="grid grid-cols-3 gap-2.5">
            {wallpaperSwatches.map((swatch) => (
              <button
                key={swatch.id}
                onClick={() => handleSwatchSelect(swatch)}
                className={`aspect-[3/4] rounded-xl flex items-center justify-center font-bold text-xs shadow-sm hover:opacity-90 active:scale-[0.97] transition-all relative group ${swatch.bgClass} ${
                  selectedColor === swatch.hex || (swatch.id === 'default' && selectedColor === '#e5e7eb')
                    ? 'ring-2 ring-blue-500 ring-offset-2' 
                    : 'border border-black/5'
                }`}
              >
                {swatch.id === 'default' && <span>Default</span>}
                
                {/* Visual indicator overlay node */}
                <div className="absolute inset-0 rounded-xl bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* RIGHT PREVIEW SCREEN VIEWPORT CONTAINER */}
      <main className="flex-1 bg-white flex flex-col h-1/2 md:h-full overflow-hidden">
        {/* Fixed Title Label Segment Box */}
        <div className="py-3 text-center border-b border-gray-100 bg-white">
          <span className="text-[11px] font-bold text-gray-800 uppercase tracking-widest">
            Wallpaper Preview
          </span>
        </div>

        {/* Live Vector Workspace Field Canvas Layout frame */}
        <div className="flex-1 p-4 md:p-8 bg-slate-50 flex items-center justify-center overflow-hidden">
          <div 
            style={{ backgroundColor: selectedColor }}
            className="w-full h-full max-w-4xl rounded-2xl shadow-inner transition-colors duration-200 relative overflow-hidden flex items-center justify-center"
          >
            {/* Conditional structural watermark pattern layer mask overlay */}
            {enableDoodle && (
              <div 
                className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay bg-repeat"
                style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M10 20h10v10H10zm20 20h10v10H30z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")` 
                }} 
              />
            )}
            
            {/* Minimal Mockup Chat Bubbles for visual validation context */}
            <div className="absolute inset-x-6 bottom-8 space-y-3 max-w-md ml-auto md:mr-4 select-none">
              <div className="bg-white/90 backdrop-blur p-3 rounded-2xl rounded-br-none text-xs font-medium text-gray-800 shadow-sm animate-in slide-in-from-bottom-2 duration-300">
                Hey! How does this new background color swatch look on your interface screen mockup canvas grid wrapper profile window?
              </div>
              <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-bl-none text-xs font-semibold shadow-sm w-fit animate-in slide-in-from-bottom-3 duration-300 delay-75">
                Looks incredibly clean! 🚀
              </div>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}