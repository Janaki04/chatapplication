import React, { useState } from 'react';

export default function BlockedContactsView({ onBack, onCountChange }) {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Dinesh', status: 'Enjoy life to the fullest', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' },
    { id: 2, name: 'Dog Hat', status: 'You can call me at random..', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
    { id: 3, name: 'Cute Turtle', status: 'Almost there', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80' },
    { id: 4, name: 'Cool spirit', status: 'Fiddling with ideas', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80' },
    { id: 5, name: 'strange cat', status: 'Omw to discover myself', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [availablePool, setAvailablePool] = useState([
    { id: 101, name: 'Alice Walker', status: 'At the gym 🏋️‍♂️', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80' },
    { id: 102, name: 'Bob Miller', status: 'Coding all night...', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80' },
    { id: 103, name: 'Charlie Green', status: 'Urgent calls only', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80' },
    { id: 104, name: 'Diana Prince', status: 'Exploring nature 🌿', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80' }
  ]);

  const handleUnblock = (id) => {
    const updated = contacts.filter(c => c.id !== id);
    setContacts(updated);
    if (onCountChange) onCountChange(updated.length);
  };

  const handleBlockNewContact = (newContact) => {
    const updated = [...contacts, newContact];
    setContacts(updated);
    
    setAvailablePool(availablePool.filter(c => c.id !== newContact.id));
    
    if (onCountChange) onCountChange(updated.length);
    setIsModalOpen(false); 
    setSearchQuery('');
  };

  const filteredPool = availablePool.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative flex flex-col flex-1 bg-[#f8fafc] h-full w-full animate-in slide-in-from-right-5 duration-200 select-none">
      
      {/* Header Row */}
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
        <h1 className="text-sm font-bold text-gray-900 tracking-tight">Blocked Contacts</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6 md:px-8 py-2 w-full max-w-xs md:max-w-none mx-auto space-y-4">
        
        <div 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-between pb-3 border-b border-gray-200/60 cursor-pointer group"
        >
          <span className="text-[11px] text-blue-500 font-bold group-hover:text-blue-600 transition-colors">
            Block New Contact
          </span>
          <svg className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
          </svg>
        </div>

        <div className="space-y-2.5 pt-1">
          {contacts.map((contact) => (
            <div 
              key={contact.id}
              className="flex items-center justify-between bg-white border border-gray-100/80 p-3 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-gray-200/50 transition-all group"
            >
              <div className="flex items-center max-w-[80%]">
                <img 
                  src={contact.avatar} 
                  alt={contact.name}
                  className="w-9 h-9 rounded-full object-cover border border-gray-100 mr-3"
                />
                <div className="flex flex-col truncate">
                  <span className="text-xs font-bold text-gray-900 tracking-wide">
                    {contact.name}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium truncate mt-0.5">
                    {contact.status}
                  </span>
                </div>
              </div>

              <button 
                onClick={() => handleUnblock(contact.id)}
                className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50/60 rounded-lg transition-all"
                title={`Unblock ${contact.name}`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}

          {contacts.length === 0 && (
            <div className="text-center py-8 text-[11px] text-gray-400 font-medium">
              No blocked contacts
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[1px] animate-in fade-in duration-200 p-4">
          <div 
            className="bg-white w-full max-w-[340px] rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex items-center space-x-3 border-b border-gray-100">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-gray-500 hover:bg-gray-100 rounded-lg transition-all"
              >
                <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-xs font-bold text-gray-900 tracking-tight">Block New Contact</h2>
            </div>

            <div className="p-3 bg-white">
              <div className="relative flex items-center bg-blue-50/50 rounded-xl px-3 py-2 border border-transparent focus-within:border-blue-200/60 transition-all">
                <svg className="w-3.5 h-3.5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0x" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-[11px] font-semibold text-gray-700 placeholder-blue-400/80 outline-none border-none p-0"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-3 pb-4 max-h-[260px] space-y-1.5">
              {filteredPool.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => handleBlockNewContact(item)}
                  className="flex items-center p-2.5 rounded-xl cursor-pointer hover:bg-gray-50/80 active:bg-gray-100 transition-all group"
                >
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-8 h-8 rounded-full object-cover mr-3 border border-gray-100"
                  />
                  <div className="flex flex-col truncate">
                    <span className="text-[11px] font-bold text-gray-800 tracking-wide group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[9.5px] text-gray-400 font-medium truncate mt-0.5">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}

              {filteredPool.length === 0 && (
                <div className="text-center py-6 text-[10px] text-gray-400 font-medium">
                  {searchQuery ? 'No matching contacts found' : 'All contacts are blocked'}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}