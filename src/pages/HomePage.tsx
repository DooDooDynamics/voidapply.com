import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { CompanyLogo } from '@/lib/logoGenerator'
import { CompanyRepository, JobRepository } from '@/repositories'

export function HomePage() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const companies = CompanyRepository.getAll()
  const recentJobs = JobRepository.search('').slice(0, 3)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(`/search?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-linkedin dark:bg-navy-900 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Find your next rejection
          </h1>
          <p className="text-blue-100 dark:text-navy-300 mb-8">
            Apply to top companies. Get ghosted by the best.
          </p>

          <form onSubmit={handleSearch} className="max-w-xl mx-auto">
            <div className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, company, or reason for despair"
                className="flex-1 px-4 py-3 rounded-sm bg-white text-gray-900 placeholder-gray-500 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-sm text-sm"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 py-5 flex justify-center gap-10 md:gap-20 text-center">
          <div>
            <div className="text-xl font-bold text-gray-900 dark:text-gray-100">10,000+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">jobs posted</div>
          </div>
          <div>
            <div className="text-xl font-bold text-gray-900 dark:text-gray-100">0</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">responses</div>
          </div>
          <div>
            <div className="text-xl font-bold text-gray-900 dark:text-gray-100">&infin;</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">ghostings</div>
          </div>
        </div>
      </section>

      {/* Suggested for you */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
            Suggested for you
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Based on your profile, preferences, and willingness to suffer
          </p>
          <div className="space-y-2">
            {recentJobs.map((job) => {
              const company = CompanyRepository.getById(job.companyId)
              return (
                <Link
                  key={job.id}
                  to={`/job/${job.id}`}
                  className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
                >
                  <CompanyLogo companyId={job.companyId} size={40} className="shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-linkedin dark:text-blue-400">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {company?.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {job.location}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
          <Link
            to="/search?q="
            className="inline-block mt-3 text-sm font-medium text-linkedin dark:text-blue-400"
          >
            Show all &rarr;
          </Link>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-10 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
            Explore companies that hire for your skills
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-5">
            And then ignore your application entirely
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {companies.map((company) => (
              <Link
                key={company.id}
                to={`/company/${company.id}`}
                className="flex flex-col items-center gap-2 p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
              >
                <CompanyLogo companyId={company.id} size={48} />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {company.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {company.industry}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Find a Job',
                desc: 'Browse through listings that look suspiciously real.',
              },
              {
                step: '2',
                title: 'Apply Carefully',
                desc: 'Fill out every field. Upload your resume. Write a cover letter.',
              },
              {
                step: '3',
                title: 'Get Instantly Rejected',
                desc: 'Experience the full range of corporate rejection, speedrun-style.',
              },
            ].map((item) => (
              <div key={item.step} className="p-5">
                <div className="w-9 h-9 rounded-full bg-linkedin/10 dark:bg-blue-900/30 text-linkedin dark:text-blue-400 flex items-center justify-center font-bold text-sm mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
