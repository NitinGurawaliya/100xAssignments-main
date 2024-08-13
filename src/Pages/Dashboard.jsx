import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';

export const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar className="flex-shrink-0" /> {/* Ensure Sidebar does not shrink */}

      </div>
    </div>
  );
};
  