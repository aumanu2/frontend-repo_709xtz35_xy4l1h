import { useMemo, useState } from 'react';
import { Filter, ExternalLink } from 'lucide-react';

const sampleProjects = [
  {
    title: 'VisionGuard',
    description: 'Real-time computer vision anomaly detection with on-device inference.',
    tags: ['AI', 'CV', 'Edge'],
    link: 'https://github.com/',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'CloudFoundry Architect',
    description: 'Reference architectures and IaC for scalable microservices on the cloud.',
    tags: ['Cloud', 'DevOps'],
    link: 'https://github.com/',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'PulseFit',
    description: 'Flutter + Firebase mobile app with offline-first health tracking.',
    tags: ['Mobile', 'Flutter'],
    link: 'https://github.com/',
    image: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'WebDX Toolkit',
    description: 'A set of accessible, high-performance React primitives.',
    tags: ['Web', 'React'],
    link: 'https://github.com/',
    image: 'https://images.unsplash.com/photo-1555066931-bf19f8fd1085?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function ProjectGrid() {
  const [active, setActive] = useState('All');

  const tags = useMemo(() => {
    const t = new Set(sampleProjects.flatMap((p) => p.tags));
    return ['All', ...Array.from(t)];
  }, []);

  const filtered = useMemo(() => {
    if (active === 'All') return sampleProjects;
    return sampleProjects.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <section id="projects" className="relative py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Selected Projects</h2>
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="sr-only">Filter projects</span>
            <Filter className="w-4 h-4 text-zinc-500" />
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`px-3 py-1.5 rounded-full text-sm border transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  active === t
                    ? 'bg-indigo-600 border-indigo-600 text-white'
                    : 'border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.title} className="group rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View Repo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
