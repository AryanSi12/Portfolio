import React from 'react';
import Github from '../icons/Github';
import Instagram from '../icons/Instagram';
import Linkedin from '../icons/Linkedin';
import Leetcode from '../icons/Leetcode';

function Navbar() {
  return (
    <nav className="flex flex-col mb-28 md:flex-row items-center justify-between py-4 md:py-6 px-4 md:px-20 w-full overflow-x-hidden"> {/* Added w-full and overflow-x-hidden */}
      <div className="cursor-pointer font-amatic-sc font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-l from-blue-100 via-blue-300 to-blue-300">
        ARYAN SINGH
      </div>
      <div className="mt-4 md:mt-0 flex justify-center gap-6 md:gap-8">
        <Github />
        <Linkedin />
        <Instagram />
        <Leetcode />
      </div>
    </nav>
  );
}

export default Navbar;
