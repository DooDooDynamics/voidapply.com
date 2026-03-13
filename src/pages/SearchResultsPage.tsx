import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CompanyLogo } from "@/lib/logoGenerator";
import { JobRepository, CompanyRepository } from "@/repositories";

export function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const results = JobRepository.search(query);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {query ? `Results for "${query}"` : "All Jobs"}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {results.length} {results.length === 1 ? "job" : "jobs"} found.{" "}
          {results.length > 0 ? "All equally likely to reject you." : "Even the void has nothing for you."}
        </p>
      </div>

      <div className="space-y-4">
        {results.map((job, i) => {
          const company = CompanyRepository.getById(job.companyId);
          return (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/job/${job.id}`}
                className="block border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition-all bg-white dark:bg-gray-900"
              >
                <div className="flex items-start gap-4">
                  <CompanyLogo companyId={job.companyId} size={44} className="shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-gray-900 dark:text-gray-100">
                      {job.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                      {company?.name ?? job.companyId} &middot; {job.location}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2 text-xs">
                      <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded">
                        {job.salary}
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded">
                        {job.type}
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded">
                        Posted {job.postedDate}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {results.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No jobs found. Much like your real job search.
          </p>
          <Link
            to="/"
            className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
          >
            Back to home
          </Link>
        </div>
      )}
    </div>
  );
}
