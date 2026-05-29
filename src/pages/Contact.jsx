import React, { useState } from 'react';

export default function ContactInfoDrawer({ isOpen, onClose, activeUser }) {
  const [drawerSubView, setDrawerSubView] = useState('info'); 
  const [activeTab, setActiveTab] = useState('media'); 

  if (!isOpen) return null;

  const handleCloseAll = () => {
    setDrawerSubView('info');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end overflow-hidden antialiased select-none">
      
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={handleCloseAll}
      />

      <aside className="relative w-80 max-w-sm h-full bg-white shadow-2xl flex flex-col z-10 overflow-y-auto animate-slide-in">
        
        {drawerSubView === 'info' && (
          <>
            <div className="flex items-center px-4 py-5 border-b border-gray-50 space-x-3">
              <button onClick={handleCloseAll} className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-50 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <span className="text-sm font-medium text-gray-500">Contact info</span>
            </div>

            <div className="p-6 flex flex-col items-center text-center border-b border-gray-50">
              <img 
                className="w-24 h-24 rounded-full object-cover shadow-sm mb-4 border-2 border-slate-100" 
                src={activeUser?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb"} 
                alt="" 
              />
              <h3 className="text-base font-bold text-gray-800">{activeUser?.name || "Shreyansh shah"}</h3>
              <p className="text-xs text-gray-400 mt-1">+91 6265 081 928</p>

              <div className="flex items-center space-x-8 mt-5">
                <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-indigo-600 group">
                  <div className="p-2 text-gray-500 group-hover:text-indigo-500 transition-colors bg-slate-50 group-hover:bg-indigo-50 rounded-xl">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium">Audio</span>
                </button>
                <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-indigo-600 group">
                  <div className="p-2 text-gray-500 group-hover:text-indigo-500 transition-colors bg-slate-50 group-hover:bg-indigo-50 rounded-xl">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium">Voice</span>
                </button>
              </div>
            </div>

            <div className="p-6 border-b border-gray-50">
              <span className="text-xs font-semibold text-gray-400 block mb-2">About</span>
              <p className="text-sm font-bold text-gray-900">{activeUser?.subtext || "Hi there! I am using this application. ✨"}</p>
            </div>

            <div className="p-6 border-b border-gray-50">
              <div 
                onClick={() => setDrawerSubView('shared-media')}
                className="flex items-center justify-between mb-4 cursor-pointer group"
              >
                <span className="text-xs font-semibold text-gray-700">Media, links and docs</span>
                <div className="flex items-center space-x-1 text-gray-400 group-hover:text-gray-700">
                  <span className="text-xs font-medium">201</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                <img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=100&h=100&q=80" className="h-16 w-full object-cover rounded-xl" alt="" />
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=100&h=100&q=80" className="h-16 w-full object-cover rounded-xl" alt="" />
                <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=100&h=100&q=80" className="h-16 w-full object-cover rounded-xl" alt="" />
              </div>
            </div>

            <div className="p-2 border-b border-gray-50 space-y-0.5">
              <button 
                onClick={() => setDrawerSubView('starred')}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors text-left"
              >
                <div className="flex items-center space-x-3 text-gray-600">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Starred Messages</span>
                </div>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="flex items-center justify-between p-3 text-sm">
                <div className="flex items-center space-x-3 text-gray-600">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="font-medium text-gray-700">Mute Notifications</span>
                </div>
                <div className="w-8 h-4 bg-blue-500 rounded-full relative cursor-pointer">
                  <div className="w-3.5 h-3.5 bg-white rounded-full absolute right-0.5 top-0.5" />
                </div>
              </div>
            </div>

            <div className="p-5 border-b border-gray-50">
              <span className="text-xs font-semibold text-gray-400 block mb-3">1 group in common</span>
              <div className="flex items-center space-x-3 cursor-pointer p-1 rounded-xl hover:bg-slate-50 transition-colors">
                <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=80&q=80" className="w-10 h-10 rounded-full object-cover" alt="" />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-800 truncate">Camel's Gang</p>
                  <p className="text-xs text-gray-400 truncate">Owl, Parrot, Rabbit, You</p>
                </div>
              </div>
            </div>

            <div className="p-4 grid grid-cols-2 gap-3 mt-auto">
              <button className="py-2.5 border border-red-200 text-red-500 hover:bg-red-50 rounded-xl font-bold text-xs transition-colors flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>Block</span>
              </button>
              <button className="py-2.5 border border-gray-200 text-gray-500 hover:bg-slate-50 rounded-xl font-bold text-xs transition-colors flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                <span>Delete</span>
              </button>
            </div>
          </>
        )}

        {drawerSubView === 'starred' && (
          <>
            <div className="flex items-center px-4 py-5 border-b border-gray-50 space-x-4">
              <button 
                onClick={() => setDrawerSubView('info')}
                className="text-gray-400 hover:text-gray-700 transition-colors p-1 hover:bg-gray-50 rounded-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <span className="text-sm font-semibold text-gray-700">Starred Messages</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-slate-50/50 space-y-4">
              <p className="text-xs font-semibold text-gray-400 px-1">27th Oct 22</p>
              
              <div className="flex flex-col items-start w-full max-w-[85%]">
                <div className="bg-white text-gray-800 p-3.5 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 text-sm w-full">
                  Hi 👋, How are ya ?
                  <div className="text-[10px] text-gray-400 text-right mt-1">0:12</div>
                </div>
              </div>

              <div className="flex flex-col items-end w-full ml-auto max-w-[85%]">
                <div className="bg-blue-500 text-white p-3.5 rounded-2xl rounded-br-none shadow-sm text-sm w-full">
                  Hi 🐼 Panda, not bad, u ?
                  <div className="text-[10px] text-blue-100 text-right mt-1">8:17</div>
                </div>
              </div>

              <div className="flex flex-col items-end w-full ml-auto max-w-[85%]">
                <div className="bg-blue-500 text-white p-3.5 rounded-2xl rounded-br-none shadow-sm text-sm w-full">
                  Can you send it as file ?
                  <div className="text-[10px] text-blue-100 text-right mt-1">11:12</div>
                </div>
              </div>

              <div className="flex flex-col items-start w-full max-w-[85%]">
                <div className="bg-white border border-gray-100 p-3.5 rounded-2xl rounded-bl-none shadow-sm w-full flex items-center justify-between">
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className="p-2 bg-slate-50 border border-gray-100 text-gray-400 rounded-xl">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-gray-700 truncate">Abstract.png</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-700 transition-colors p-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
                <span className="text-[10px] text-gray-400 mt-1 pl-1">11:25</span>
              </div>
            </div>
          </>
        )}

        {drawerSubView === 'shared-media' && (
          <>
            <div className="flex items-center px-4 py-5 border-b border-gray-50 space-x-4">
              <button onClick={() => setDrawerSubView('info')} className="text-gray-400 hover:text-gray-700 transition-colors p-1 hover:bg-gray-50 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              </button>
              <span className="text-sm font-semibold text-gray-700">Media, links and docs</span>
            </div>

            <div className="flex border-b border-gray-100 text-sm font-medium text-center">
              {['media', 'links', 'docs'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3.5 capitalize border-b-2 font-semibold transition-all ${
                    activeTab === tab ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {activeTab === 'media' && (
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 mb-2.5">27th Oct 22</p>
                    <div className="grid grid-cols-3 gap-2">
                      {['https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d','https://images.unsplash.com/photo-1494790108377-be9c29b29330','https://images.unsplash.com/photo-1534528741775-53994a69daeb','https://images.unsplash.com/photo-1517841905240-472988babdf9','https://images.unsplash.com/photo-1539571696357-5a69c17a67c6','https://images.unsplash.com/photo-1501196354995-cbb51c65aaea','https://images.unsplash.com/photo-1488161628813-04466f872be2','https://images.unsplash.com/photo-1492562080023-ab3db95bfbce','https://images.unsplash.com/photo-1511919884226-fd3cad34687c'].map((src, idx) => (
                        <div key={idx} className="aspect-square bg-slate-100 rounded-xl overflow-hidden shadow-sm hover:opacity-95 cursor-pointer">
                          <img src={`${src}?auto=format&fit=crop&w=150&h=150&q=80`} className="w-full h-full object-cover" alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'links' && (
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-gray-400 mb-1">27th Oct 22</p>
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-start p-3 bg-white border border-gray-100 rounded-2xl shadow-sm space-x-3 cursor-pointer">
                      <div className="p-3 bg-slate-50 border border-gray-100 text-gray-400 rounded-xl flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-gray-700 truncate hover:underline">https://codingmonk.in/blogs</p>
                        <p className="text-[11px] text-blue-500 mt-0.5 truncate">codingmonk.in</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'docs' && (
                <div className="space-y-4">
                  <p className="text-xs font-semibold text-gray-400">27th Oct 22</p>
                  {[{ name: 'Booked Ticket', ext: 'PDF', color: 'bg-red-50 text-red-500 border-red-100' }, { name: 'Invoice 22 Oct', ext: 'IMG', color: 'bg-blue-50 text-blue-500 border-blue-100' }, { name: 'Sales Report', ext: 'XLS', color: 'bg-emerald-50 text-emerald-500 border-emerald-100' }].map((doc, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:border-gray-200 group cursor-pointer">
                      <div className="h-28 bg-slate-50 border border-dashed border-gray-200 rounded-xl mb-3 flex items-center justify-center text-xs font-medium text-gray-400">Preview Area</div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2.5 min-w-0">
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border flex-shrink-0 ${doc.color}`}>{doc.ext}</span>
                          <p className="text-xs font-semibold text-gray-700 truncate">{doc.name}</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-700"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg></button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

      </aside>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-in {
          animation: slideIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}