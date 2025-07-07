/*import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/SideBar/SideBar'
import AdminDashboard from './AdminDashboard';

const Admin = () => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
         <Sidebar role="admin" />
        <div style={{ flex: 1, padding: '1rem' }}>
            <AdminDashboard />
        </div>
      </div>
    </div>
    
  );
};

export default Admin*/

/*import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/SideBar/SideBar';
import AdminDashboard from './AdminDashboard';

const Admin = () => {
  const [showTop, setShowTop] = useState(false);

  // Show scroll-to-top arrow after scrolling down
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      <Header />

      {
      <div className="flex flex-1">
        <Sidebar role="admin" />

        <main className="flex-1 p-4 overflow-y-auto">
          <AdminDashboard />
        </main>
      </div>

      
      <footer className="relative bg-gray-100 text-center text-sm text-gray-600 py-4 border-t">
        © {new Date().getFullYear()} ListenIQ. All rights reserved.

        {showTop && (
          <button
            onClick={scrollToTop}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow transition"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
      </footer>
    </div>
  );
};

export default Admin;*/

import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/SideBar/SideBar';
import AdminDashboard from './AdminDashboard';

const Admin = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 150);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Sidebar + Main */}
      <div className="flex flex-1">
        <Sidebar role="admin" />
        <main className="flex-1 p-4 overflow-y-auto">
          <AdminDashboard />
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4 border-t relative z-0">
        © {new Date().getFullYear()} ListenIQ. All rights reserved.
      </footer>

      {/* Scroll to top button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 animate-bounce z-50"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Admin;


