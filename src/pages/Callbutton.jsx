import React, { useState, useEffect } from 'react';

export default function Callbutton({ onClose }) {
  const [status, setStatus] = useState('connecting');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('connected');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/10 backdrop-blur-[2px] flex items-center justify-end p-8 pointer-events-none">
      <div className="absolute top-2 bg-white w-full max-w-[460px] h-[340px] rounded-[32px] shadow-2xl shadow-slate-900/10 border border-slate-100/80 p-8 flex flex-col justify-between items-center pointer-events-auto transition-all duration-300 animate-in fade-in zoom-in-95">
        
        <div className="w-full flex justify-end">
          <button 
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-gray-200 hover:text-gray-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-center w-full space-x-6 relative px-4">
          <div className="flex flex-col items-center space-y-3 flex-1">
            <div className="w-20 h-20 rounded-full overflow-hidden shadow-md ring-4 ring-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&h=150&q=80" 
                className="w-full h-full object-cover" 
                alt="Camel" 
              />
            </div>
            <span className="text-xs font-bold text-gray-700">Camel</span>
          </div>

          <div className="flex-1 h-10 flex items-center justify-center relative overflow-hidden">
            {status === 'connecting' ? (
              <svg className="w-full h-full text-blue-400 opacity-80" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M0 20 Q25 5, 50 20 T100 20" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  fill="none"
                  className="animate-pulse duration-1000"
                />
                <path 
                  d="M0 20 Q25 35, 50 20 T100 20" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  fill="none"
                  className="opacity-40 animate-pulse"
                />
              </svg>
            ) : (
              <div className="w-8 h-0.5 bg-slate-100 rounded-full"></div>
            )}
          </div>

          <div className="flex flex-col items-center space-y-3 flex-1">
            <div className="w-20 h-20 rounded-full overflow-hidden shadow-md ring-4 ring-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80" 
                className="w-full h-full object-cover" 
                alt="Horse" 
              />
            </div>
            <span className="text-xs font-bold text-gray-700">Horse</span>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-3 w-full">
          {status === 'connecting' ? (
            <>
              <h4 className="text-md font-bold text-gray-900 tracking-wide">Connecting...</h4>
              <button 
                onClick={onClose}
                className="px-5 py-1.5 border border-red-200 hover:bg-red-50 text-red-500 font-bold text-[11px] rounded-lg transition-all shadow-sm"
              >
                Hang Up
              </button>
            </>
          ) : (
            <>
              <span className="text-xs font-bold text-emerald-500 tracking-wide animate-fade-in">
                Connected
              </span>
              <h2 className="text-xl font-black text-gray-800 font-mono tracking-wider">
                00 : 32
              </h2>
              <button 
                onClick={onClose}
                className="mt-2 px-5 py-1.5 border border-red-200 hover:bg-red-50 text-red-500 font-bold text-[11px] rounded-xl transition-all shadow-sm"
              >
                Hang Up
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}