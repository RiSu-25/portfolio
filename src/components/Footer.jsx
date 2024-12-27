// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-4">
      <div className="flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Rishita Sarkar</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
