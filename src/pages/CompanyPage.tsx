import { useParams, Link } from 'react-router-dom'
import { CompanyLogo } from '@/lib/logoGenerator'
import { CompanyRepository, JobRepository } from '@/repositories'

export function CompanyPage() {
  const { companyId } = useParams<{ companyId: string }>()
  const company = companyId ? CompanyRepository.getById(companyId) : undefined

  if (!company) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Company Not Found
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          This company has ghosted us too.
        </p>
        <Link to="/" className="text-sm text-linkedin dark:text-blue-400">
          Back to home
        </Link>
      </div>
    )
  }

  const jobs = JobRepository.getByCompany(company.id)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Company header card */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 overflow-hidden mb-6">
        <div className="h-20 bg-linkedin dark:bg-navy-800" />
        <div className="px-6 pb-5 -mt-8">
          <div className="flex items-end gap-4 mb-3">
            <div className="rounded-lg border-4 border-white dark:border-gray-900 bg-white dark:bg-gray-900 overflow-hidden">
              <CompanyLogo companyId={company.id} size={72} />
            </div>
          </div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{company.name}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {company.industry} &middot; {company.headquarters} &middot; {company.employeeCount}{' '}
            employees
          </p>
        </div>
      </div>

      {/* About */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 p-6 mb-6">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">About</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-3">
          &ldquo;{company.tagline}&rdquo;
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          At {company.name}, we believe in moving fast and rejecting faster. Our world-class hiring
          pipeline ensures that no qualified candidate accidentally receives a response. Join us in
          our mission to innovate, disrupt, and auto-reject.
        </p>
      </div>

      {/* Open Positions */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 p-6">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Open Positions ({jobs.length})
        </h2>
        <div className="space-y-2">
          {jobs.map((job) => (
            <Link
              key={job.id}
              to={`/job/${job.id}`}
              className="block border border-gray-200 dark:border-gray-800 rounded-lg p-4"
            >
              <h3 className="text-sm font-semibold text-linkedin dark:text-blue-400">
                {job.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {job.location} &middot; {job.type} &middot; {job.salary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
