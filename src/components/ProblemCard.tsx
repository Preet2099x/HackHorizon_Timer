
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface ProblemCardProps {
  problem: {
    id: number;
    category: string;
    title: string;
    context: string;
    challenge: string;
    goal: string;
  };
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card 
      className={`mb-6 overflow-hidden transition-all duration-300 bg-hackathon-card hover:shadow-xl border-opacity-10 border-hackathon-purple ${
        expanded ? 'border-l-4 border-l-hackathon-purple' : ''
      }`}
    >
      <CardContent className="p-0">
        <div 
          className="p-6 cursor-pointer flex flex-col" 
          onClick={toggleExpand}
        >
          <div className="flex justify-between items-start mb-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs bg-hackathon-purple bg-opacity-20 text-hackathon-purple font-medium">
              {problem.category}
            </span>
            <span className="text-sm text-gray-400">
              Problem {problem.id}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
          
          <div className={`transition-all duration-300 overflow-hidden ${
            expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="mt-4 space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold text-hackathon-blue mb-1">Context:</h4>
                <p>{problem.context}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-hackathon-blue mb-1">Challenge:</h4>
                <p>{problem.challenge}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-hackathon-blue mb-1">Goal:</h4>
                <p>{problem.goal}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-hackathon-blue flex items-center">
            <span>{expanded ? 'Click to collapse' : 'Click to expand details'}</span>
            <svg 
              className={`ml-1 h-5 w-5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProblemCard;
