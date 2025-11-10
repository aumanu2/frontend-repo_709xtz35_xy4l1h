import { useState } from 'react';
import { Sparkles, Rocket, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const funFacts = [
    'Currently learning Machine Learning',
    'Built 10+ projects across web, AI, and mobile',
    'Love hackathons and open-source',
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl"
          >
            I’m Naman, a Computer Science Engineering undergrad who enjoys building delightful, performant products.
            My current interests include AI-assisted development, full‑stack web, and systems that scale.
          </motion.p>
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {funFacts.map((fact, idx) => (
              <motion.div
                key={fact}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -2 }}
                className={`rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50 dark:bg-zinc-900/60 ${
                  hovered === idx ? 'ring-2 ring-indigo-500' : ''
                }`}
              >
                <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                  {idx === 0 && <Brain className="w-4 h-4 text-indigo-600" />}
                  {idx === 1 && <Rocket className="w-4 h-4 text-indigo-600" />}
                  {idx === 2 && <Sparkles className="w-4 h-4 text-indigo-600" />}
                  <p className="text-sm font-medium">{fact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square max-w-md lg:justify-self-end w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
            alt="Portrait"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
