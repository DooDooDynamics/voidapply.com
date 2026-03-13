import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CompanyLogo } from "@/lib/logoGenerator";
import { CompanyRepository, JobRepository } from "@/repositories";

export function CompanyPage() {
  const { companyId } = useParams<{ companyId: string }>();
  const company = companyId ? CompanyRepository.getById(companyId) : undefined;

  if (!company) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Company Not Found
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          This company has ghosted us too.
        </p>
        <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          Back to home
        </Link>
      </div>
    );
  }

  const jobs = JobRepository.getByCompany(company.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        className="flex items-center gap-5 mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <CompanyLogo companyId={company.id} size={72} />
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {company.name}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {company.industry} &middot; {company.headquarters} &middot; {company.employeeCount} employees
          </p>
        </div>
      </motion.div>

      <div className="mb-8 p-5 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
        <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">About</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          &ldquo;{company.tagline}&rdquo;
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
          At {company.name}, we believe in moving fast and rejecting faster. Our world-class hiring
          pipeline ensures that no qualified candidate accidentally receives a response. Join us in
          our mission to innovate, disrupt, and auto-reject.
        </p>
      </div>

      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Open Positions ({jobs.length})
      </h2>
      <div className="space-y-3">
        {jobs.map((job) => (
          <Link
            key={job.id}
            to={`/job/${job.id}`}
            className="block border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-all bg-white dark:bg-gray-900"
          >
            <h3 className="font-medium text-gray-900 dark:text-gray-100">{job.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {job.location} &middot; {job.type} &middot; {job.salary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
