import React from 'react';
import ReactImg from '../icons/ReactImg'; 
import NodeImg from '../icons/NodeImg';
import ReduxImg from '../icons/ReduxImg';
import TailwindImg from '../icons/TailwindImg';
import MySql from '../icons/MySql';
import CPP from '../icons/CPP';
function Technologies() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto">
        <h2 className="text-7xl text-center p-8 cursor-pointer font-amatic-sc font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-pink-300 to-pink-300 hover:from-blue-100 hover:via-blue-300 hover:to-blue-100 transition-colors duration-300">Technologies</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <ReactImg  />
          <NodeImg />
          <ReduxImg />
          <TailwindImg />
          <MySql />
          <CPP />
        </div>
      </div>
    </section>
  );
}

export default Technologies;
