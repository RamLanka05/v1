import { projects as projectsData } from '../data/work'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100">Projects</h2>

      {/* Changed to a vertical stack with massive gaps between projects */}
      <div className="flex flex-col gap-20">
        {projectsData.map((p) => (
          <article key={p.id} className="group relative flex flex-col items-start justify-start">
            
            {/* 1. Large Feature Image (Only renders if p.image exists) */}
            {p.image && (
              <div className="w-full relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-6 border border-gray-200 dark:border-gray-800 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-lg">
                <div className="aspect-video w-full">
                  <img src={p.image} alt={p.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
              </div>
            )}

            {/* 2. Status & Metadata */}
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

            {/* 3. Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {p.title}
            </h3>

            {/* 4. Two-Part Description */}
            <div className="text-base text-gray-600 dark:text-gray-400 space-y-4 mb-6 leading-relaxed">
              <p>{p.desc}</p>
              {p.insight && (
                <p className="italic border-l-2 border-gray-300 dark:border-gray-600 pl-4 text-gray-500 dark:text-gray-500">
                  {p.insight}
                </p>
              )}
            </div>

            {/* 5. Minimal Pill Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {p.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
                  {tag}
                </span>
              ))}
            </div>

            {/* 6. Action Buttons */}
            <div className="flex gap-4 mt-auto">
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-2.5 rounded-full transition-all flex items-center gap-2">
                  View Live
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-2 py-2.5 transition-colors flex items-center gap-2">
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