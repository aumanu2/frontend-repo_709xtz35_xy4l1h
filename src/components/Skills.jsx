import { useMemo, useState } from 'react';
import { Cpu, Library, Wrench, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const data = {
  'Programming Languages': [
    { name: 'JavaScript / TypeScript', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'C/C++', level: 75 },
  ],
  Frameworks: [
    { name: 'React', level: 85 },
    { name: 'FastAPI', level: 80 },
    { name: 'Node.js', level: 70 },
  ],
  Tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'Docker', level: 70 },
    { name: 'MongoDB', level: 75 },
  ],
  'Soft Skills': [
    { name: 'Communication', level: 85 },
    { name: 'Problem Solving', level: 90 },
    { name: 'Teamwork', level: 80 },
  ],
};

const groups = Object.keys(data);

export default function Skills() {
  const [filter, setFilter] = useState('All');

  const items = useMemo(() => {
    if (filter === 'All') return data;
    return { [filter]: data[filter] };
  }, [filter]);

  return (
    <section id="skills" className="py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Skills</h2>
          <div className="flex gap-2 overflow-x-auto">
            {['All', ...groups].map((g) => (
              <button
                key={g}
                onClick={() => setFilter(g)}
                className={`px-3 py-1.5 rounded-full text-sm border transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  filter === g
                    ? 'bg-indigo-600 border-indigo-600 text-white'
                    : 'border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {Object.entries(items).map(([group, skills]) => (
            <div key={group} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
              <div className="flex items-center gap-2">
                {group === 'Programming Languages' && <Cpu className="w-5 h-5 text-indigo-600" />}
                {group === 'Frameworks' && <Library className="w-5 h-5 text-indigo-600" />}
                {group === 'Tools' && <Wrench className="w-5 h-5 text-indigo-600" />}
                {group === 'Soft Skills' && <Users className="w-5 h-5 text-indigo-600" />}
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{group}</h3>
              </div>
              <div className="mt-4 grid gap-4">
                {skills.map((s) => (
                  <div key={s.name} className="">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-700 dark:text-zinc-300">{s.name}</span>
                      <span className="text-zinc-500">{s.level}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
