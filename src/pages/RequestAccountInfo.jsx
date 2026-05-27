import React from 'react';

export default function RequestAccountInfo({ onBack }) {
  return (
    <div className="flex flex-col flex-1 bg-[#f8fafc] h-full w-full animate-in fade-in duration-150 select-none">
      
      {/* Header Bar Row */}
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
        <h1 className="text-sm font-bold text-gray-900 tracking-tight">Request Account Info</h1>
      </div>

      {/* Main Container Viewport */}
      <div className="flex-1 overflow-y-auto px-6 md:px-8 py-4 flex flex-col items-center">
        
        {/* Clipboard Vector Branding Icon Box */}
        <div className="w-20 h-20 bg-blue-500/80 rounded-full flex items-center justify-center text-white/95 shadow-sm mb-10 mt-2 transform transition-all duration-200 hover:scale-105">
          <svg className="w-8 h-8 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>

        {/* Info Area Block Card */}
        <div className="w-full max-w-xs md:max-w-none">
          
          {/* Action Trigger Line Item text */}
          <button className="w-full text-left py-3 text-[11px] font-bold tracking-wide text-gray-600 hover:text-gray-900 transition-colors focus:outline-none">
            Request Report
          </button>
          
          {/* Underline Separator Divider */}
          <div className="w-full border-b border-gray-200/70 mb-5" />

          {/* Context Explainer Paragraph Text */}
          <p className="text-[10px] text-gray-400 font-semibold leading-relaxed tracking-normal max-w-[240px] md:max-w-none">
            Create a report of your Talk Account Information and settings, which you can access or port to another app. This report does not include your messages.
          </p>
          
        </div>

      </div>
    </div>
  );
}