import React from 'react';

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
          Alex Rivera
        </h1>
        <p className="mt-2 text-base md:text-lg text-gray-700">
          IoT Engineer
        </p>
        <p className="mt-4 max-w-3xl text-sm md:text-base text-gray-800 leading-relaxed">
          Designs, prototypes, and ships connected systems across hardware, firmware, and cloud. Focus on reliable data pipelines, efficient power budgets, and maintainable deployments.
        </p>
      </div>
    </header>
  );
};

export default Header;
