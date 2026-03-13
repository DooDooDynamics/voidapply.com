import { useSearchParams, Link } from 'react-router-dom'
import { CompanyLogo } from '@/lib/logoGenerator'
import { JobRepository, CompanyRepository } from '@/repositories'

export function SearchResultsPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const results = JobRepository.search(query)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {query ? `Results for "${query}"` : 'All Jobs'}
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {results.length} {results.length === 1 ? 'job' : 'jobs'} found.{' '}
          {results.length > 0
            ? 'All equally likely to reject you.'
            : 'Even the void has nothing for you.'}
        </p>
      </div>

      <div className="space-y-2">
        {results.map((job) => {
          const company = CompanyRepository.getById(job.companyId)
          return (
            <Link
              key={job.id}
              to={`/job/${job.id}`}
              className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
            >
              <CompanyLogo companyId={job.companyId} size={48} className="shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <h2 className="text-sm font-semibold text-linkedin dark:text-blue-400">
                  {job.title}
                </h2>
                <p className="text-sm text-gray-800 dark:text-gray-200 mt-0.5">
                  {company?.name ?? job.companyId}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {job.location}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2 text-xs">
                  <span className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-sm font-medium">
                    {job.salary}
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-sm">
                    {job.type}
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-sm">
                    Posted {job.postedDate}
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {results.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 dark:text-gray-400">
            No jobs found. Much like your real job search.
          </p>
          <Link
            to="/"
            className="inline-block mt-4 text-sm text-linkedin dark:text-blue-400"
          >
            Back to home
          </Link>
        </div>
      )}
    </div>
  )
}
