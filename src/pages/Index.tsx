import React from 'react';
import Header from '@/components/Header';
import ProblemList from '@/components/ProblemList';
import { categories } from '../data/problemData';

const Index = () => {
  // Filter out "All" from categories if it exists
  const filteredCategories = categories.filter(category => category !== "All");
  
  return (
    <div className="min-h-screen bg-hackathon-dark text-white">
      <Header />
      
      <main className="py-8">
        {filteredCategories.map(category => (
          <section key={category} id={category.replace(/\s+/g, '-').toLowerCase()} className="mb-16">
            <div className="container max-w-4xl mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b border-hackathon-purple/30">
                <span className="bg-gradient-to-r from-hackathon-purple to-hackathon-blue bg-clip-text text-transparent">
                  {category}
                </span>
              </h2>
              <ProblemList categoryFilter={category} />
            </div>
          </section>
        ))}
      </main>
      
      <footer className="text-center py-6 text-gray-400 text-sm">
        <p>©  HackHorizon 2K25 | GDG On Campus Arka Jain University</p>
      </footer>
    </div>
  );
};

export default Index