export default function Hero() {
  return (
    // Added relative positioning to hold the background glow
    <div className="relative group w-full flex flex-col items-start justify-start">
      
      {/* 1. Ambient Background Glow (Only visible in dark mode) */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* 2. Text Gradient for your Name */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-3">
        <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Sathvik Ram Lanka
        </span>
      </h1>
      
      {/* 3. A Brighter Gradient for your Title */}
      <h2 className="text-xl font-semibold mb-6">
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
          Software Engineer
        </span>
      </h2>
      
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[400px] leading-relaxed mb-8">
        I build robust, scalable applications with modern technologies, focusing on clean architecture and bridging the gap between low-level systems and full-stack engineering.
      </p>

      {/* Socials & Resume Row */}
      <div className="flex items-center gap-5">
        
        {/* Resume Button */}
        <a 
          href="/SathvikLankaR.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-semibold text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-5 py-2.5 rounded-lg transition-all shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Resume
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/RamLanka05" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 -ml-2" 
          aria-label="GitHub"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/sathvik-r-lanka/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2" 
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>

        {/* Email */}
        <a 
          href="mailto:ramlanka1208@gmail.com"
          className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2"
          aria-label="Email"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </a>

      </div>
    </div>
  )
}

// export default function Projects() {
  
//   const getSortWeight = (dateStr: string) => {
//     const yearMatch = dateStr.match(/\d{4}/);
//     const year = yearMatch ? parseInt(yearMatch[0], 10) : 0;

//     let seasonWeight = 0.9;
//     const lower = dateStr.toLowerCase();
    
//     if (lower.includes('winter')) seasonWeight = 0.1; 
//     else if (lower.includes('spring')) seasonWeight = 0.3;
//     else if (lower.includes('summer')) seasonWeight = 0.6;
//     else if (lower.includes('fall') || lower.includes('autumn')) seasonWeight = 0.8;

//     return year + seasonWeight;
//   };

//   const sortedProjects = [...projectsData].sort((a: Project, b: Project) => {
//     if (a.starred && !b.starred) return -1;
//     if (!a.starred && b.starred) return 1;
//     return getSortWeight(b.date) - getSortWeight(a.date);
//   });

//   return (
//     <section id="projects" className="scroll-mt-24">
//       <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100">Projects</h2>

//       <div className="flex flex-col gap-12">
//         {sortedProjects.map((p) => (
//           <article 
//             key={p.id} 
//             // Glassmorphism classes applied here:
//             className="group relative flex flex-col items-start justify-start p-6 sm:p-8 rounded-3xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200/60 dark:border-gray-800/60 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-xl dark:hover:border-gray-700/80"
//           >
            
//             {p.image && (
//               // Adjusted image container to fit inside the padded glass card
//               <div className="w-full relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-8 border border-gray-200/50 dark:border-gray-700/50">
//                 <div className="aspect-video w-full">
//                   <img src={p.image} alt={p.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]" />
//                 </div>
//               </div>
//             )}

//             <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
//               {p.status && (
//                 <span className="flex items-center gap-2 px-3 py-1 bg-white/50 dark:bg-gray-800/50 rounded-full border border-gray-200/50 dark:border-gray-700/50 text-gray-900 dark:text-gray-200">
//                   <span className="relative flex h-2.5 w-2.5">
//                     {p.status === 'Live' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>}
//                     <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${p.status === 'Live' ? 'bg-green-500' : 'bg-gray-500'}`}></span>
//                   </span>
//                   {p.status}
//                 </span>
//               )}
//               {p.status && <span className="text-gray-300 dark:text-gray-700">&middot;</span>}
//               <span>{p.date}</span>
//               {p.role && <span className="text-gray-300 dark:text-gray-700">&middot;</span>}
//               <span className="text-blue-600 dark:text-blue-400">{p.role}</span>
//             </div>

//             <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-3">
//               {p.title}
//               {p.starred && (
//                 <svg className="w-6 h-6 text-yellow-500 dark:text-yellow-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//               )}
//             </h3>

//             <div className="text-base text-gray-600 dark:text-gray-300 space-y-4 mb-8 leading-relaxed">
//               <p>{p.desc}</p>
//               {p.insight && (
//                 <p className="italic border-l-2 border-blue-400 dark:border-blue-600 pl-4 py-1 text-gray-500 dark:text-gray-400 bg-blue-50/30 dark:bg-blue-900/10 rounded-r-lg">
//                   {p.insight}
//                 </p>
//               )}
//             </div>

//             <div className="flex flex-wrap gap-2 mb-8">
//               {p.tags.map((tag) => (
//                 <span key={tag} className="text-xs font-semibold px-3 py-1.5 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 rounded-lg border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             <div className="flex flex-wrap gap-4 mt-auto">
//               {p.url && (
//                 <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 px-6 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-md shadow-blue-500/20">
//                   {p.urlType === 'Demo' ? 'View Demo' : 'View Live'}
//                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
//                 </a>
//               )}
//               {p.github && (
//                 <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-900 dark:text-gray-100 bg-white/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200/60 dark:border-gray-700/60 px-6 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-sm">
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
//                   Source Code
//                 </a>
//               )}
//             </div>
            
//           </article>
//         ))}
//       </div>
//     </section>
//   )
// }