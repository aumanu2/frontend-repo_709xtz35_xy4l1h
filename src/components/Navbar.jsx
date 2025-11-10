import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export default function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">
          Naman Meena
        </a>
        <div className="flex items-center gap-3">
          <a
            href="#projects"
            className="hidden sm:inline-flex px-3 py-1.5 rounded-md text-sm font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            View Projects
          </a>
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <a
            href="mailto:namanmeena@example.com"
            className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
