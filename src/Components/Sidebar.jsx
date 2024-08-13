import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dropdown = ({ title, items, isOpen, onClick, navigateTo }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <li>
      <button
        onClick={onClick}
        className="w-full text-left px-4 py-2 flex justify-between items-center hover:bg-gray-100 focus:outline-none"
      >
        {title}
        <span
          className="transform transition-transform duration-200"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
          }}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <ul className="bg-white-200 px-4 py-2">
          {items.map((item, index) => (
            <li key={index} className="py-1">
              <a
                href="#"
                onClick={() => handleNavigation(navigateTo[index])}
                className="hover:text-gray-700"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="w-64 bg-white mt-7 border-r-2 border-gray-100 text-black h-screen">
      <div className="p-4">
      </div>
      <ul className="space-y-2">
        <Dropdown
          title="Week 2"
          items={['Easy', 'Medium', 'Hard']}
          isOpen={openDropdown === 0}
          onClick={() => handleToggle(0)}
          navigateTo={['/week2/easy','/week2/medium']}
        />
        <Dropdown
          title="Week 3"
          items={['Easy', 'Medium', 'Hard']}
          isOpen={openDropdown === 1}
          onClick={() => handleToggle(1)}
          // navigateTo={['/week3/easy', '/week3/medium', '/week3/hard']}
        />
        {/* Add more Dropdown components as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
