export default function Projects() {
  const projects = [
    { 
      title: 'Portfolio', 
      desc: 'This site — built with React, Vite, and Tailwind CSS.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    { 
      title: 'Project 2', 
      desc: 'Coming soon...',
      tags: ['React', 'Node.js']
    },
  ]

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-blue-400">03.</span> Projects
        </h2>
        <div className="space-y-8">
          {projects.map((p) => (
            <article key={p.title} className="border-l-2 border-gray-300 dark:border-gray-700 pl-6 pb-8">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{p.desc}</p>
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
