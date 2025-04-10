import React, { useEffect, useState } from 'react';
import { categories } from '../data/problemData';
import { Button } from './ui/button';
import { Book, Info, Terminal } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const pauseTime = 1500;

    let timeout: NodeJS.Timeout;

    if (!deleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(i => i + 1);
      }, typingSpeed);
    } else if (!deleting && index === text.length) {
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        setIndex(i => i - 1);
      }, typingSpeed);
    } else if (deleting && index === 0) {
      setDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, deleting, text]);

  return (
    <p
      className="font-semibold text-white text-lg md:text-2xl  w-fit whitespace-nowrap overflow-hidden"
      style={{ minHeight: '2.5rem' }} // Prevents layout shift
    >
      {displayedText}
    </p>
  );
};

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredCategories = categories.filter(category => category !== "All");

  const navButtons = [];

  if (currentPath === "/rules") {
    navButtons.push(
      {
        label: "Problem Statements",
        to: "/",
        icon: <Terminal className="mr-2" />
      },
      {
        label: "About",
        to: "/about",
        icon: <Info className="mr-2" />
      }
    );
  } else if (currentPath === "/about") {
    navButtons.push(
      {
        label: "Problem Statements",
        to: "/",
        icon: <Terminal className="mr-2" />
      },
      {
        label: "Rules",
        to: "/rules",
        icon: <Book className="mr-2" />
      }
    );
  } else {
    navButtons.push(
      {
        label: "Rules",
        to: "/rules",
        icon: <Book className="mr-2" />
      },
      {
        label: "About",
        to: "/about",
        icon: <Info className="mr-2" />
      }
    );
  }

  return (
    <header className="flex flex-col items-center justify-center py-10 md:py-16 bg-hackathon-dark text-white relative">
      <div className="absolute top-4 right-4 flex gap-2">
        {navButtons.map((btn, index) => (
          <Button
            key={index}
            variant="ghost"
            className="bg-hackathon-purple/10 hover:bg-hackathon-purple/20"
            asChild
          >
            <Link to={btn.to}>
              {btn.icon}
              {btn.label}
            </Link>
          </Button>
        ))}
      </div>

      <div className="animate-pulse-slow -mt-20">
        <img
          src="/title.png"
          alt="HackHorizon Logo"
          className="h-52 md:h-72 object-contain"
        />
      </div>

      {/* Animated Typewriter Text */}
      <div className="mt-1">
        <TypewriterText text="Where Innovation Meets Reality!" />
      </div>

      {currentPath === "/" && (
        <>
          <p className="text-lg md:text-xl mt-16 max-w-3xl text-center px-4">
            Explore problem statements for our hackathon and start building innovative solutions
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {filteredCategories.map(category => (
              <button
                key={category}
                onClick={() =>
                  scrollToSection(category.replace(/\s+/g, '-').toLowerCase())
                }
                className="px-4 py-2 text-sm rounded-full bg-gray-800 hover:bg-hackathon-purple transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="h-1 w-32 bg-gradient-to-r from-hackathon-purple to-hackathon-blue mt-8 rounded-full"></div>
        </>
      )}
    </header>
  );
};

export default Header;
