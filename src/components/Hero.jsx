import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] sm:min-h-[86vh] md:min-h-[92vh] overflow-hidden bg-white dark:bg-zinc-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-24 sm:pt-28 md:pt-32">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              Building thoughtful software with impact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl"
            >
              I’m Naman, a Computer Science undergrad crafting AI, mobile, and web experiences. I love shipping polished products and exploring the full stack—from cloud to pixels.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#projects" className="px-5 py-2.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Explore Projects
              </a>
              <a href="#contact" className="px-5 py-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Get in Touch
              </a>
            </motion.div>
          </div>
          <div className="lg:col-span-6">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
