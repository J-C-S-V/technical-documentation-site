export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/60 dark:border-slate-800/50 py-6">
      <div className="container text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} DocsKit. All rights reserved.</div>
    </footer>
  );
}
