import React, { useState } from 'react';

interface DropdownProps {
  children: React.ReactNode;
  icon: React.ReactNode; 
}

const Dropdown: React.FC<DropdownProps> = ({ children, icon}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Icon */}
      <div className="cursor-pointer">{icon}</div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 bg-white border border-gray-200 rounded shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
