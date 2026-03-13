export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Void<span className="text-linkedin dark:text-blue-400">Apply</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs">
            <a
              href="https://github.com/yaq1n0/voidapply.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code | GitHub
            </a>
            <a href="https://yaqinhasan.com" target="_blank" rel="noopener noreferrer">
              Developer Contact
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-4">
          Nothing is done with your data, this site isn't real. It's just catharsis from dealing
          with the 2026 job market.
        </p>
      </div>
    </footer>
  )
}
