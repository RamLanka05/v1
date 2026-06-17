import { projects as projectsData } from '../data/work'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-transparent dark:bg-transparent scroll-mt-24">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectsData.map((p) => (
            <article id={p.id} key={p.id} className="group bg-transparent dark:bg-transparent rounded-2xl p-4 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">{p.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{p.date}</p>
                </div>

                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md">
                    View
                  </a>
                ) : null}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 bg-blue-900/10 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 rounded-full">
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
