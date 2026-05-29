import React from 'react';

export default function Security({ onBack }) {
  const securityFeatures = [
    {
      id: 'text-messages',
      label: 'Text and voice messages',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      id: 'calls',
      label: 'Audio & Video Calls',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      id: 'media',
      label: 'Photos, videos & documents',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      id: 'location',
      label: 'Location Sharing',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 'status',
      label: 'Status Updates',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeDasharray="3 3">
          <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col flex-1 bg-[#f8fafc] h-full w-full animate-in fade-in duration-150 select-none">
      
      <div className="p-4 md:p-6 pb-3 flex items-center space-x-4">
        <button 
          onClick={onBack} 
          className="p-1 text-gray-800 hover:bg-gray-200/60 rounded-lg transition-all"
          aria-label="Back to primary settings screen menu"
        >
          <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-sm font-bold text-gray-900 tracking-tight">Security</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6 md:px-8 py-4 flex flex-col items-center text-left md:text-left">
        
        <div className="w-16 h-16 bg-blue-500/85 rounded-full flex items-center justify-center text-white shadow-sm mb-6 mt-2 transform transition-transform hover:scale-105">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <div className="w-full max-w-xs md:max-w-none text-left">
          <h2 className="text-xs font-bold text-gray-800 tracking-wide mb-1.5">
            Your Chats and calls are private
          </h2>
          <p className="text-[10px] text-gray-400 font-medium leading-relaxed tracking-normal mb-8">
            End-to-end encryption keeps your personal messages & call between you and person you choose to communicate with. Not even talk can read or listen to them. This includes your
          </p>
        </div>

        <div className="w-full space-y-4 max-w-xs md:max-w-none">
          {securityFeatures.map((feature) => (
            <div 
              key={feature.id} 
              className="flex items-center space-x-3.5 text-gray-550 hover:text-gray-800 group transition-all cursor-default"
            >
              <div className="text-gray-400 group-hover:text-blue-500 transition-colors p-0.5">
                {feature.icon}
              </div>
              <span className="text-[10px] font-semibold tracking-wide text-gray-500 group-hover:text-gray-700 transition-colors">
                {feature.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}