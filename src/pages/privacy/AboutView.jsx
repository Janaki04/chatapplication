import React, { useState } from 'react';

export default function AboutView({ onBack, currentValue = 'Everyone', onChange }) {
  const [selected, setSelected] = useState(currentValue);

  const options = [
    { id: 'Everyone', label: 'Everyone' },
    { id: 'My Contacts', label: 'My Contacts' },
    { id: 'Nobody', label: 'Nobody' },
  ];

  const handleSelect = (id) => {
    setSelected(id);
    if (onChange) onChange(id);
  };

  return (
    <div className="flex flex-col flex-1 bg-[#f8fafc] h-full w-full animate-in slide-in-from-right-5 duration-200 select-none">
      
      <div className="p-4 md:p-6 pb-3 flex items-center space-x-4">
        <button 
          onClick={onBack} 
          className="p-1 text-gray-800 hover:bg-gray-200/60 rounded-lg transition-all"
          aria-label="Back to privacy settings"
        >
          <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-sm font-bold text-gray-900 tracking-tight">About</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6 md:px-8 py-2 w-full max-w-xs md:max-w-none mx-auto space-y-6">
        
        <p className="text-[10px] text-blue-500 font-semibold leading-relaxed tracking-normal">
          Who can see my about
        </p>

        <div className="space-y-4">
          {options.map((option, index) => {
            const isSelected = selected === option.id;
            return (
              <div key={option.id} className="w-full">
                <div 
                  onClick={() => handleSelect(option.id)}
                  className="flex items-center space-x-4 py-2.5 cursor-pointer group"
                >
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                    isSelected ? 'border-blue-500 bg-white' : 'border-gray-400 group-hover:border-gray-600'
                  }`}>
                    {isSelected && (
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    )}
                  </div>

                  <span className={`text-xs font-semibold tracking-wide transition-colors ${
                    isSelected ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'
                  }`}>
                    {option.label}
                  </span>
                </div>

                {index < options.length - 1 && (
                  <div className="w-full border-b border-gray-200/60 mt-1" />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}