import { experience as experienceData } from '../data/work'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-transparent dark:bg-transparent scroll-mt-24">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {experienceData.map((it) => (
            <article id={it.id} key={it.id} className="group bg-transparent dark:bg-transparent rounded-2xl p-4 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold dark:group-hover:text-blue-300">{it.role}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{it.company}</p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">{it.period}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-3">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
