import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');

    if (!name || !email || !message) {
      setStatus('Please fill out all fields.');
      return;
    }

    try {
      // In a full app, send to backend. For now just simulate.
      await new Promise((r) => setTimeout(r, 600));
      setStatus('Message sent! I will get back to you soon.');
      e.target.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Let’s build something</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Have a project idea or just want to say hi? Drop a message.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
              <input id="name" name="name" type="text" required className="mt-1 w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
            <textarea id="message" name="message" rows="5" required className="mt-1 w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="flex items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <Mail className="w-4 h-4" /> Send Message
            </button>
            {status && <p role="status" className="text-sm text-zinc-600 dark:text-zinc-400">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
