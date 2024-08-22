import React from 'react';

function Instagram() {
  return (
    <a 
      href="https://www.instagram.com/aryan_s012/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="transition-transform duration-300 ease-in-out hover:scale-110"
    >
      <img
        src="icons8-instagram-48.png"
        alt="Instagram"
        className="w-12 h-12 cursor-pointer"
      />
    </a>
  );
}

export default Instagram;
