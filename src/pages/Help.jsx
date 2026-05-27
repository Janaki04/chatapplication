import React from 'react';

export default function Help({ onBack }) {
  const helpOptions = [
    { id: 'help-center', label: 'Help Center' },
    { id: 'contact-us', label: 'Contact Us' },
    { id: 'licenses', label: 'Licenses' },
    { id: 'terms-privacy', label: 'Terms and Privacy Policy' },
  ];

  return (
    <div className="flex flex-col flex-1 bg-[#f8fafc] h-full w-full animate-in fade-in duration-150 select-none">
      
      {/* Top Navigation Row Header */}
      <div className="p-4 md:p-6 pb-3 flex items-center space-x-4">
        <button 
          onClick={onBack} 
          className="p-1 text-gray-800 hover:bg-gray-200/60 rounded-lg transition-all"
          aria-label="Back to primary settings menu"
        >
          <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-sm font-bold text-gray-900 tracking-tight">Help</h1>
      </div>

      {/* Main Core View Area Viewport */}
      <div className="flex-1 overflow-y-auto px-6 md:px-8 py-4 flex flex-col items-center">
        
        {/* Rounded Blue Fingerprint Branding Identity Badge */}
        <div className="w-20 h-20 bg-blue-500/80 rounded-full flex items-center justify-center text-white/95 shadow-sm mb-10 mt-2 transform transition-all duration-200 hover:scale-105">
          <svg className="w-10 h-10 stroke-[1.25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-3.517-1.009-6.799-2.753-9.571m-3.44 2.04l.054-.09A13.916 13.916 0 009 11a13.917 13.917 0 002.309 7.643m1.156-11.512A13.93 13.93 0 0015 11c0 2.454-.633 4.76-1.745 6.764m-4.652 1.257c-.184-.63-.284-1.297-.284-1.986 0-1.393.406-2.69 1.102-3.778m-2.193 6.015A13.915 13.915 0 013 11a13.915 13.915 0 012.316-7.653M15 11c0 .73-.06 1.446-.175 2.143M12 21h.008v.008H12V21zm0-3a3 3 0 100-6 3 3 0 000 6z" />
          </svg>
        </div>

        {/* Support Options Navigation Stack List */}
        <div className="w-full space-y-0.5 max-w-xs md:max-w-none">
          {helpOptions.map((option, index) => (
            <div key={option.id} className="w-full">
              <button 
                className="w-full text-left py-3.5 text-[11px] font-bold tracking-wide text-gray-500 hover:text-gray-900 transition-colors focus:outline-none"
              >
                {option.label}
              </button>
              {/* Conditional bottom separator line based on layout design rules */}
              {index < helpOptions.length - 1 && (
                <div className="w-full border-b border-gray-200/60" />
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}