import { projects as projectsData, type Project } from '../data/work'

export default function Projects() {
  
  const getSortWeight = (dateStr: string) => {
    const yearMatch = dateStr.match(/\d{4}/);
    const year = yearMatch ? parseInt(yearMatch[0], 10) : 0;

    let seasonWeight = 0.9; // Default high so a generic year sits above the previous year's Fall
    const lower = dateStr.toLowerCase();
    
    if (lower.includes('winter')) seasonWeight = 0.1; 
    else if (lower.includes('spring')) seasonWeight = 0.3;
    else if (lower.includes('summer')) seasonWeight = 0.6;
    else if (lower.includes('fall') || lower.includes('autumn')) seasonWeight = 0.8;

    return year + seasonWeight;
  };

  // Multi-tier sorting: Stars first, chronological second
  const sortedProjects = [...projectsData].sort((a: Project, b: Project) => {
    // 1. Starred items always bubble to the top
    if (a.starred && !b.starred) return -1;
    if (!a.starred && b.starred) return 1;

    // 2. If both are starred (or neither is), sort chronologically
    return getSortWeight(b.date) - getSortWeight(a.date);
  });

  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100">Projects</h2>

      <div className="flex flex-col gap-20">
        {sortedProjects.map((p) => (
          <article key={p.id} className="group relative flex flex-col items-start justify-start">
            
            {p.image && (
              <div className="w-full relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-6 border border-gray-200 dark:border-gray-800 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-lg">
                <div className="aspect-video w-full">
                  <img src={p.image} alt={p.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              {p.status && (
                <span className="flex items-center gap-2 text-gray-900 dark:text-gray-200">
                  <span className="relative flex h-2.5 w-2.5">
                    {p.status === 'Live' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>}
                    <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${p.status === 'Live' ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                  </span>
                  {p.status}
                </span>
              )}
              {p.status && <span>&middot;</span>}
              <span>{p.date}</span>
              {p.role && <span>&middot;</span>}
              <span className="text-blue-600 dark:text-blue-400">{p.role}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-3">
              {p.title}
            </h3>

            <div className="text-base text-gray-600 dark:text-gray-400 space-y-4 mb-6 leading-relaxed">
              <p>{p.desc}</p>
              {p.insight && (
                <p className="italic border-l-2 border-gray-300 dark:border-gray-600 pl-4 text-gray-500 dark:text-gray-500">
                  {p.insight}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {p.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
                  {tag}
                </span>
              ))}
            </div>

            {/* 6. Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-auto">
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-2.5 rounded-full transition-all flex items-center gap-2">
                  
                  {/* Dynamically check the urlType from work.ts */}
                  {p.urlType === 'Demo' ? 'View Demo' : 'View Live'}
                  
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-6 py-2.5 rounded-full transition-all flex items-center gap-2">
                  
                  {/* Added a GitHub icon to match the primary button's icon */}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  Source Code
                </a>
              )}
            </div>
            
          </article>
        ))}
      </div>
    </section>
  )
}