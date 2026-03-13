export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; 2026 VoidApply Inc. All applications discarded.</p>
        <div className="mt-2 flex items-center justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            GitHub
          </a>
          <span className="inline-flex items-center gap-1 text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-full">
            Built with frustration
          </span>
        </div>
      </div>
    </footer>
  );
}
