import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { FileText, FolderGit2, Mail } from 'lucide-react';

const roles = [
  'a CSE Student passionate about AI, Web Development & Problem Solving.',
  'an Open‑Source Contributor and Hackathon Enthusiast.',
  'curious about Systems, UX, and Developer Tools.',
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden bg-white dark:bg-zinc-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-24 sm:pt-28 md:pt-32">
          <div className="lg:col-span-7">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-sm font-medium tracking-wide text-indigo-600">Hi, I’m Naman</motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              Building thoughtful software with impact
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl"
            >
              <Typing roles={roles} />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#resume" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <FileText className="w-4 h-4" /> View Resume
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <FolderGit2 className="w-4 h-4" /> Explore Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <Mail className="w-4 h-4" /> Contact Me
              </a>
            </motion.div>
          </div>
          <div className="lg:col-span-5">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent" />
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent dark:from-zinc-950/70" />
    </section>
  );
}

function Typing({ roles }) {
  const text = roles.join(' ');
  return (
    <span className="inline-flex">
      <span className="[--n:1] animate-typing will-change-[width] overflow-hidden whitespace-nowrap border-r-2 border-indigo-500 pr-1">
        {text}
      </span>
      <style>{`
        @keyframes typing { from { width: 0 } to { width: 100% } }
        .animate-typing { width: 0; animation: typing 4s steps(60, end) 0.2s 1 both; }
      `}</style>
    </span>
  );
}
