import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ClipboardList } from 'lucide-react';
import { projects } from '../../data/shopData';

const RecentProjects = () => {
  const [filter, setFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'rooftop-solar', label: 'Rooftop Solar' },
    { id: 'home-backup', label: 'Home Backup' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'shop-interior', label: 'Shop Interior' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-accent">
            Our Work
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Recent Successful Installations
          </h3>
          <p className="text-base text-slate-500 dark:text-slate-400">
            Take a look at how we help families and enterprises achieve energy independence. Every project represents our commitment to engineering quality.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-primary text-white border-primary dark:bg-accent dark:text-primary-dark dark:border-accent shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[350px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Image Box */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.category.replace('-', ' ')}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors line-clamp-1">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Meta Info */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-850 flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <ClipboardList className="w-3.5 h-3.5 text-primary dark:text-accent shrink-0" />
                      <span className="line-clamp-1">{project.client}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary dark:text-accent shrink-0" />
                      <span>{project.completionDate}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default RecentProjects;
