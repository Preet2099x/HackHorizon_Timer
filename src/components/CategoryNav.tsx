
import React from 'react';
import { categories } from '../data/problemData';

interface CategoryNavProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="w-full overflow-x-auto pb-2 mb-6">
      <div className="flex space-x-2 md:space-x-4 min-w-max md:flex-wrap md:justify-center px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
              activeCategory === category
                ? 'bg-hackathon-purple text-white font-medium shadow-lg shadow-hackathon-purple/20'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
