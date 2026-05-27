// src/components/Privacy.jsx
import React, { useState } from 'react';
import LastSeen from '../pages/privacy/LastSeen';
import ProfilePhoto from '../pages/privacy/ProfilePhoto';
import AboutView from "../pages/privacy/AboutView";
import GroupsView from "../pages/privacy/GroupsView";
import BlockedContactsView from "../pages/privacy/BlockedContactsView";

export default function Privacy({ onBack }) {
  // 1. Fixed Main View State Routing String
  const [currentView, setCurrentView] = useState('main'); 
  const [readReceipts, setReadReceipts] = useState(true);
  
  // 2. Added All Missing React Local State Hooks
  const [lastSeenValue, setLastSeenValue] = useState('Everyone');
  const [profilePhotoValue, setProfilePhotoValue] = useState('Everyone');
  const [aboutValue, setAboutValue] = useState('Everyone');
  const [groupsValue, setGroupsValue] = useState('Everyone');
  const [blockedCount, setBlockedCount] = useState(9);

  // Dynamic Array Setup mapping perfectly to inner routing views
  const navigationOptions = [
    { id: 'lastSeen', title: 'Last Seen', value: lastSeenValue },
    { id: 'profilePhoto', title: 'Profile Photo', value: profilePhotoValue },
    { id: 'about', title: 'About', value: aboutValue }, // Linked dynamically
  ];

  // Nested Routing Conditional Logic Blocks
  if (currentView === 'lastSeen') {
    return (
      <LastSeen 
        currentValue={lastSeenValue}
        onChange={(val) => setLastSeenValue(val)}
        onBack={() => setCurrentView('main')} 
      />
    );
  }

  if (currentView === 'profilePhoto') {
    return (
      <ProfilePhoto 
        currentValue={profilePhotoValue}
        onChange={(val) => setProfilePhotoValue(val)}
        onBack={() => setCurrentView('main')} 
      />
    );
  }

  if (currentView === 'about') {
    return (
      <AboutView 
        currentValue={aboutValue}
        onChange={(val) => setAboutValue(val)}
        onBack={() => setCurrentView('main')} 
      />
    );
  }

  if (currentView === 'groups') {
    return (
      <GroupsView 
        currentValue={groupsValue}
        onChange={(val) => setGroupsValue(val)}
        onBack={() => setCurrentView('main')} 
      />
    );
  }

  if (currentView === 'blocked') {
    return (
      <BlockedContactsView 
        onCountChange={(count) => setBlockedCount(count)}
        onBack={() => setCurrentView('main')} 
      />
    );
  }

  return (
    <div className="flex flex-col flex-1 bg-[#f8fafc] h-full w-full animate-in fade-in duration-150 select-none">
      
      {/* Privacy Sub Nav Header Area */}
      <div className="p-4 md:p-6 pb-3 flex items-center space-x-4">
        <button 
          onClick={onBack} 
          className="p-1 text-gray-800 hover:bg-gray-200/60 rounded-lg transition-all"
          aria-label="Back to main settings"
        >
          <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-sm font-bold text-gray-900 tracking-tight">Privacy</h1>
      </div>

      {/* Settings Menu List Frame */}
      <div className="flex-1 overflow-y-auto px-6 md:px-8 py-2 space-y-4 w-full max-w-xs md:max-w-none mx-auto">
        
        {/* Dynamic Navigators for Last Seen, Profile Photo, About */}
        {navigationOptions.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setCurrentView(item.id)} // Fixed: Dynamically navigates to whatever ID clicked
            className="flex flex-col pb-3.5 border-b border-gray-200/60 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-800 tracking-wide group-hover:text-blue-600 transition-colors">
                  {item.title}
                </span>
                <span className="text-[10px] text-gray-400 font-semibold mt-0.5">{item.value}</span>
              </div>
              <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}

        {/* Read Receipts Action Row */}
        <div className="flex flex-col pb-3.5 border-b border-gray-200/60">
          <div className="flex items-start justify-between">
            <div className="flex flex-col pr-4">
              <span className="text-xs font-bold text-gray-800 tracking-wide">Read receipts</span>
              <span className="text-[9.5px] text-gray-400 font-medium leading-relaxed mt-1 max-w-[220px] md:max-w-md">
                if turned off, you won't send or receive read receipts. Read receipts are always sent for group chats.
              </span>
            </div>
            <input 
              type="checkbox" 
              checked={readReceipts}
              onChange={() => setReadReceipts(!readReceipts)}
              className="w-3.5 h-3.5 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer accent-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Groups Navigator Row */}
        <div 
          onClick={() => setCurrentView('groups')} // Fixed: Added missing onClick handler
          className="flex flex-col pb-3.5 border-b border-gray-200/60 cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-800 tracking-wide group-hover:text-blue-600 transition-colors">Groups</span>
              <span className="text-[10px] text-gray-400 font-semibold mt-0.5">{groupsValue}</span> {/* Fixed: Made value dynamic */}
            </div>
            <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Blocked Contacts Navigator Row */}
        <div 
          onClick={() => setCurrentView('blocked')} // Fixed: Added missing onClick handler
          className="flex flex-col pb-3.5 cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-800 tracking-wide group-hover:text-blue-600 transition-colors">Blocked contacts</span>
              <span className="text-[10px] text-gray-400 font-semibold mt-0.5">{blockedCount}</span> {/* Fixed: Made value dynamic */}
            </div>
            <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}