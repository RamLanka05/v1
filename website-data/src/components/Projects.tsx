export default function Projects() {
  const projects = [
    { 
      title: 'Portfolio', 
      desc: 'This site — built with React, Vite, and Tailwind CSS.',
      date: '2025',
      url: 'https://your-portfolio.example.com',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    { 
      title: 'SolAR', 
      desc: 'Coming soon...',
      date: '2025',
      url: '',
      tags: ['React', 'Node.js']
    },
  ]

  return (
    <section id="projects" className="py-24 px-12 bg-white dark:bg-gray-950">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-blue-600 dark:text-blue-400">03.</span> Projects
        </h2>
        <div className="space-y-8">
          {projects.map((p) => (
            <article key={p.title} className="border-l-2 border-gray-300 dark:border-gray-700 pl-6 pb-8">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold">
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600 dark:text-blue-400">
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>

                <div className="flex items-center gap-4">
                  {p.date && (
                    <time className="text-sm text-gray-500 dark:text-gray-400">{p.date}</time>
                  )}
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-3 py-1 rounded-md transition-colors"
                    >
                      View
                    </a>
                  ) : null}
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
