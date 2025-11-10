import { useMemo, useState, useEffect } from 'react';
import { Github, ExternalLink, GraduationCap, Award, Briefcase, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Code Assistant',
    description: 'Context-aware coding helper using Transformers with inline suggestions.',
    tags: ['AI', 'Web Apps'],
    repo: 'https://github.com/',
    demo: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1555066931-bf19f8fd1085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'VisionGuard',
    description: 'Real-time computer vision anomaly detection with on-device inference.',
    tags: ['AI'],
    repo: 'https://github.com/',
    demo: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Cloud Architect Kit',
    description: 'IaC templates and dashboards for microservices on the cloud.',
    tags: ['Web Apps'],
    repo: 'https://github.com/',
    demo: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'AlgoPlayground',
    description: 'Interactive visualizations for classic data structures and algorithms.',
    tags: ['Games', 'Web Apps'],
    repo: 'https://github.com/',
    demo: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'PulseFit',
    description: 'Offline-first health tracking app with sync and analytics.',
    tags: ['Web Apps'],
    repo: 'https://github.com/',
    demo: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200&auto=format&fit=crop',
  },
];

const coursework = ['Data Structures', 'Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks', 'Machine Learning'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const categories = useMemo(() => {
    const set = new Set(projects.flatMap((p) => p.tags));
    return ['All', ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <section id="projects" className="relative py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Featured Work</h2>
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-3 py-1.5 rounded-full text-sm border transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  active === c
                    ? 'bg-indigo-600 border-indigo-600 text-white'
                    : 'border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <motion.article
              key={p.title}
              whileHover={{ y: -4 }}
              className="group perspective rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden"
            >
              <div className="relative [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)] aspect-[16/11]">
                <div className="absolute inset-0 backface-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 text-zinc-100 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-zinc-300">{p.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-zinc-700/60 border border-zinc-600">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <a href={p.repo} target="_blank" rel="noreferrer noopener" aria-label="GitHub Repository" className="inline-flex p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <Github className="w-4 h-4" />
                      </a>
                      <a href={p.demo} target="_blank" rel="noreferrer noopener" aria-label="Live Demo" className="inline-flex p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <section aria-labelledby="education-heading" className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              <h3 id="education-heading" className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Education</h3>
            </div>
            <div className="mt-4">
              <p className="text-zinc-900 dark:text-zinc-100 font-medium">B.E. / B.Tech in Computer Science Engineering</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Your College Name • 2022 – 2026</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span key={c} className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" /> {c}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="experience-heading" className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-indigo-600" />
              <h3 id="experience-heading" className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Experience & Internships</h3>
            </div>
            <ol className="mt-4 relative border-l border-zinc-200 dark:border-zinc-800 pl-4">
              <li className="mb-6 ml-2">
                <div className="absolute -left-1.5 mt-1.5 w-3 h-3 rounded-full bg-indigo-600" aria-hidden="true" />
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Jun 2024 – Aug 2024</p>
                <p className="text-zinc-900 dark:text-zinc-100 font-medium">Software Engineering Intern • Tech Startup</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Built a React + FastAPI feature, improving load time by 40% and accessibility scores.</p>
              </li>
              <li className="ml-2">
                <div className="absolute -left-1.5 mt-1.5 w-3 h-3 rounded-full bg-indigo-600" aria-hidden="true" />
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Jan 2024 – May 2024</p>
                <p className="text-zinc-900 dark:text-zinc-100 font-medium">Research Assistant • University Lab</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Explored ML model compression; co-authored a workshop paper.</p>
              </li>
            </ol>
          </section>
        </div>

        <section aria-labelledby="certs-heading" className="mt-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-600" />
            <h3 id="certs-heading" className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Certifications & Achievements</h3>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Coursera: Machine Learning Specialization', link: 'https://coursera.org' },
              { name: 'LeetCode: 300+ problems', link: 'https://leetcode.com' },
              { name: 'Kaggle: Competitions Novice', link: 'https://kaggle.com' },
            ].map((c) => (
              <a
                key={c.name}
                href={c.link}
                target="_blank"
                rel="noreferrer noopener"
                className="group block rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <div className="flex items-start justify-between">
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">{c.name}</p>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-indigo-600" />
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Click to view details</p>
              </a>
            ))}
          </div>
        </section>
      </div>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 inline-flex items-center justify-center w-11 h-11 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          ↑
        </button>
      )}
    </section>
  );
}
