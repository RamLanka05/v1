export default function Experience() {
  const items = [
    { role: 'Software Developer Intern', company: 'OLI Gardens, Patriotic Gardens', period: 'May 2025 — Present', desc: 'Developed a full stack web platform serving a non-profit organization utilizing MongoDB, Express.js, React, Node.js, and more than 15 API endpoints featuring secure admin authentication, content management, and integrated payment processing systems. Implemented a secure JWT-based authentication system with bcrypt password hashing, protected admin routes, and role based access supporting multiple admins and account management. Integrated Stripe payment processing for collecting donations with customizable donation tiers, secure checkout sessions, and automated success/failure handling. Utilized Tailwind CSS and Headless UI to implement advanced UI/UX elements, including infinite-scroll carousels, filterable blog sliders, and custom dropdowns.' },
  ]

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-blue-400">02.</span> Experience
        </h2>
        <div className="space-y-8">
          {items.map((it) => (
            <article key={it.role} className="border-l-2 border-blue-600 dark:border-blue-400 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{it.role}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{it.company}</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">{it.period}</span>
              </div>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
