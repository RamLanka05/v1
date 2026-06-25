import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubCommits() {
const username = "RamLanka05";
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const customTheme = {
    light: [
      '#eef3fb', 
      '#c6d6f0', 
      '#90b4e5', 
      '#5a92da', 
      '#1a3562'  
    ],
    dark: [
      'rgba(255, 255, 255, 0.03)', 
      'rgba(59, 130, 246, 0.4)', 
      'rgba(59, 130, 246, 0.6)', 
      'rgba(59, 130, 246, 0.8)', 
      '#3b82f6'                  
    ],
  };

  return (
    <div className="w-full mt-12 overflow-x-auto no-scrollbar pb-2">
      <div className="min-w-max">
        <GitHubCalendar 
          username={username} 
          theme={customTheme}
          colorScheme={isDark ? "dark" : "light"} 
          
          blockSize={10}
          blockMargin={4}
          blockRadius={2} 
          fontSize={12}
        />
      </div>
    </div>
  );
}