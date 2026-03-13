import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CompanyLogo } from "@/lib/logoGenerator";
import { CompanyRepository } from "@/repositories";

export function HomePage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const companies = CompanyRepository.getAll();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Find Your Next{" "}
            <span className="text-blue-600 dark:text-blue-400">Rejection</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Apply to top companies. Get ghosted by the best.
          </p>

          <form onSubmit={handleSearch} className="max-w-xl mx-auto">
            <div className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search jobs, companies, or reasons for despair..."
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-base"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-6 flex justify-center gap-8 md:gap-16 text-center text-sm">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">10,000+</div>
            <div className="text-gray-500 dark:text-gray-400">jobs posted</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">0</div>
            <div className="text-gray-500 dark:text-gray-400">responses</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">&infin;</div>
            <div className="text-gray-500 dark:text-gray-400">ghostings</div>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-8">
            Featured Companies
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {companies.map((company) => (
              <Link
                key={company.id}
                to={`/company/${company.id}`}
                className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <CompanyLogo companyId={company.id} size={56} />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {company.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-10">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Find a Job", desc: "Browse through listings that look suspiciously real." },
              { step: "2", title: "Apply Carefully", desc: "Fill out every field. Upload your resume. Write a cover letter." },
              { step: "3", title: "Get Instantly Rejected", desc: "Experience the full range of corporate rejection, speedrun-style." },
            ].map((item) => (
              <motion.div
                key={item.step}
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Number(item.step) * 0.15 }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
