import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, Play } from 'lucide-react';

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
        className="font-semibold text-white text-lg md:text-2xl w-fit whitespace-nowrap overflow-hidden"
        style={{ minHeight: '2.5rem' }} // Prevents layout shift
      >
        {displayedText}
      </p>
    );
  };

const TimerPage = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning && time > 0) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, time]);

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0')
    ].join(':');
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  return (
    <div className="min-h-screen bg-hackathon-dark flex flex-col items-center justify-start relative p-4 pt-8">
      <div className="max-w-3xl w-full flex flex-col items-center">
        <div className="animate-pulse-slow flex flex-col items-center">
          <img
              src="/title.png"
              alt="HackHorizon Logo"
              className="h-64 md:h-80 object-contain mb-0"
          />
          <div className="-mt-4">
            <TypewriterText text="Where Innovation Meets Reality!" />
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-hackathon-purple/20 to-hackathon-blue/20 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-white/10 w-full max-w-md">
          <div className="text-6xl md:text-7xl font-bold text-white text-center font-mono tracking-wider mb-6">
            {formatTime()}
          </div>
          
          {!isRunning && (
            <Button 
              onClick={startTimer} 
              className="w-full py-6 text-lg bg-gradient-to-r from-hackathon-purple to-hackathon-blue hover:opacity-90 transition-all duration-300 animate-pulse-slow"
            >
              <Play className="mr-2" /> Start Hackathon
            </Button>
          )}

          {isRunning && (
            <p className="text-center text-white/80 text-lg">
              Your hackathon is underway! Good luck!
            </p>
          )}
        </div>

        <div className="mt-10 text-center text-white/60 max-w-lg">
          <p className="text-lg">24 hours to turn your ideas into reality! </p>
        </div>
      </div>
    </div>
  );
};

export default TimerPage;