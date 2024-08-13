import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Week2EasyCard from '../Components/Week2EasyCard';

export const Week2Easy = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar className="flex-shrink-0" /> {/* Ensure Sidebar does not shrink */}
        <div className="flex-1 flex items-center justify-center p-4">
          <Week2EasyCard />
        </div>
      </div>
    </div>
  );
};
