import React, { useEffect } from 'react';
import './Toast.css';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
}

export const Toast: React.FC<ToastProps> = ({ message, type }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const toast = document.querySelector('.toast');
      if (toast) {
        toast.classList.add('fade-out');
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`toast ${type}`}>
      {message}
    </div>
  );
}; 