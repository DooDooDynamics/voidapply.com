import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function NotFoundPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-700 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Application Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Much like your real applications, this page has disappeared into the void.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Return to the Void
        </Link>
      </motion.div>
    </div>
  );
}
