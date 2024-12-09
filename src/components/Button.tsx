import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', disabled = false, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-teal-700 text-white rounded hover:bg-teal-900 disabled:opacity-50 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;