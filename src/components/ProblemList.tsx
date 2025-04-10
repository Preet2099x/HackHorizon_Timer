
import React from 'react';
import ProblemCard from './ProblemCard';
import { problemData } from '../data/problemData';

interface ProblemListProps {
  categoryFilter: string;
}

const ProblemList: React.FC<ProblemListProps> = ({ categoryFilter }) => {
  // Filter problems based on category
  const filteredProblems = problemData.filter(problem => problem.category === categoryFilter);

  return (
    <div>
      {filteredProblems.length > 0 ? (
        filteredProblems.map(problem => (
          <ProblemCard key={problem.id} problem={problem} />
        ))
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-gray-500">No problems found for this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProblemList;
