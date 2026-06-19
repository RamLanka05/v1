import { experience as experienceData } from '../data/work'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Experience</h2>

      {/* Swapped grid for a vertical flex column */}
      <div className="flex flex-col gap-12">
        {experienceData.map((it) => (
          <article 
            id={it.id} 
            key={it.id} 
            className="group relative flex flex-col items-start justify-start border-l-2 border-gray-200 dark:border-gray-800 pl-6 transition-colors hover:border-blue-600 dark:hover:border-blue-400"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between w-full gap-2 mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {it.role}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mt-1">
                  {it.company}
                </p>
              </div>
              
              {/* Pushed the date to the right on desktop, kept it subdued */}
              <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                {it.period}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
              {it.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

// import { experience as experienceData } from '../data/work'

// export default function Experience() {
//   return (
//     <section id="experience" className="scroll-mt-24">
//       <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Experience</h2>

//       <div className="flex flex-col gap-6">
//         {experienceData.map((it) => (
//           <article 
//             id={it.id} 
//             key={it.id} 
//             // Glassmorphism classes applied here:
//             className="group relative flex flex-col items-start justify-start p-6 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200/60 dark:border-gray-800/60 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-lg dark:hover:border-gray-700/80 hover:-translate-y-1"
//           >
//             <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between w-full gap-2 mb-3">
//               <div>
//                 <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                   {it.role}
//                 </h3>
//                 <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-1">
//                   {it.company}
//                 </p>
//               </div>
              
//               <span className="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap bg-gray-100/50 dark:bg-gray-800/50 px-3 py-1 rounded-full">
//                 {it.period}
//               </span>
//             </div>
            
//             <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-2 whitespace-pre-line">
//               {it.desc}
//             </p>
//           </article>
//         ))}
//       </div>
//     </section>
//   )
// }