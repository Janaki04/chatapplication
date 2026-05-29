import React from 'react';

export default function CallModal({ type, onClose }) {
  return (
    <div className="absolute top-20 right-6 w-[440px] aspect-[4/3] bg-transparent z-40 p-1 pointer-events-none">
      <div className="w-full h-full rounded-[24px] overflow-hidden shadow-2xl relative border border-white/10 bg-slate-900 pointer-events-auto">
        
        <img 
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80" 
          alt="Remote Stream Video" 
          className="w-full h-full object-cover"
        />

        <div className="absolute top-4 right-4 w-28 aspect-[4/3] rounded-xl overflow-hidden border border-white/20 shadow-lg bg-slate-800">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" 
            alt="Local Stream Video" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-6 inset-x-0 flex justify-center items-center">
          <button 
            onClick={onClose}
            className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg transition-transform active:scale-95"
            title="End Video Call"
          >
            <svg className="w-6 h-6 transform rotate-[135deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
        </div>

        <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-white tracking-wide">
          {type === 'video' ? 'Video Session' : 'Audio Call'}
        </div>
      </div>
    </div>
  );
}