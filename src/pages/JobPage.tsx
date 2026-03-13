import { useState, useEffect, Suspense, lazy } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { CompanyLogo } from '@/lib/logoGenerator'
import {
  JobRepository,
  CompanyRepository,
  SkinRepository,
  RejectionModeRepository,
} from '@/repositories'
import type { RejectionModeId } from '@/types'

const WorkNight = lazy(() => import('@/components/skins/WorkNight'))
const GreenHouseOfPain = lazy(() => import('@/components/skins/GreenHouseOfPain'))
const Talaeo = lazy(() => import('@/components/skins/Talaeo'))

const DevNull = lazy(() => import('@/components/rejections/DevNull'))
const Ghost = lazy(() => import('@/components/rejections/Ghost'))
const Speedrun = lazy(() => import('@/components/rejections/Speedrun'))
const FakeEmail = lazy(() => import('@/components/rejections/FakeEmail'))
const AtsScore = lazy(() => import('@/components/rejections/AtsScore'))

function SkinSelector({
  currentSkin,
  currentMode,
  supportedModes,
  onSkinChange,
  onModeChange,
}: {
  currentSkin: string
  currentMode: string
  supportedModes: RejectionModeId[]
  onSkinChange: (id: string) => void
  onModeChange: (id: string) => void
}) {
  const skins = SkinRepository.getAll()
  const modes = RejectionModeRepository.getAll().filter((m) => supportedModes.includes(m.id))

  return (
    <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="max-w-4xl mx-auto flex flex-wrap gap-4 items-center text-sm">
        <label className="flex items-center gap-2">
          <span className="text-gray-600 dark:text-gray-400 font-medium">ATS Skin:</span>
          <select
            value={currentSkin}
            onChange={(e) => onSkinChange(e.target.value)}
            className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm"
          >
            {skins.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2">
          <span className="text-gray-600 dark:text-gray-400 font-medium">Rejection Mode:</span>
          <select
            value={currentMode}
            onChange={(e) => onModeChange(e.target.value)}
            className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm"
          >
            {modes.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  )
}

export function JobPage() {
  const { jobId } = useParams<{ jobId: string }>()
  const [searchParams, setSearchParams] = useSearchParams()
  const [applying, setApplying] = useState(false)
  const [rejected, setRejected] = useState(false)
  const [completed, setCompleted] = useState(false)

  const job = jobId ? JobRepository.getById(jobId) : undefined
  const company = job ? CompanyRepository.getById(job.companyId) : undefined

  const skinId = searchParams.get('skin') ?? ''
  const modeId = searchParams.get('rejection') ?? ''

  const supportedModes = job ? JobRepository.getSupportedRejectionModes(job) : []

  useEffect(() => {
    if (!job) return
    const hasSkin = searchParams.has('skin') && SkinRepository.getById(searchParams.get('skin')!)
    const hasMode =
      searchParams.has('rejection') &&
      supportedModes.includes(searchParams.get('rejection') as RejectionModeId)

    if (!hasSkin || !hasMode) {
      const newSkin = hasSkin ? searchParams.get('skin')! : SkinRepository.getRandom().id
      const newMode = hasMode
        ? searchParams.get('rejection')!
        : supportedModes[Math.floor(Math.random() * supportedModes.length)]!
      setSearchParams({ skin: newSkin, rejection: newMode }, { replace: true })
    }
  }, [job, searchParams, setSearchParams, supportedModes])

  if (!job || !company) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Job Not Found
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          This position has been filled. Just kidding, it never existed.
        </p>
        <Link to="/" className="text-sm text-linkedin dark:text-blue-400">
          Back to home
        </Link>
      </div>
    )
  }

  const handleSkinChange = (id: string) => {
    setSearchParams({ skin: id, rejection: modeId }, { replace: true })
  }

  const handleModeChange = (id: string) => {
    setSearchParams({ skin: skinId, rejection: id }, { replace: true })
  }

  const handleSubmit = () => {
    setRejected(true)
  }

  const handleRejectionComplete = () => {
    setCompleted(true)
  }

  if (rejected && !completed) {
    return (
      <Suspense fallback={<LoadingFallback />}>
        {modeId === 'dev-null' && (
          <DevNull job={job} company={company} onComplete={handleRejectionComplete} />
        )}
        {modeId === 'ghost' && (
          <Ghost job={job} company={company} onComplete={handleRejectionComplete} />
        )}
        {modeId === 'speedrun' && (
          <Speedrun job={job} company={company} onComplete={handleRejectionComplete} />
        )}
        {modeId === 'fake-email' && (
          <FakeEmail job={job} company={company} onComplete={handleRejectionComplete} />
        )}
        {modeId === 'ats-score' && (
          <AtsScore job={job} company={company} onComplete={handleRejectionComplete} />
        )}
      </Suspense>
    )
  }

  if (completed) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Application Complete
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Your application to {company.name} has been thoroughly rejected.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            to="/"
            className="px-5 py-2.5 bg-linkedin hover:bg-linkedin-dark text-white font-medium rounded-full text-sm"
          >
            Apply to Another Job
          </Link>
          <button
            onClick={() => {
              const url = window.location.href
              navigator.clipboard.writeText(url)
            }}
            className="px-5 py-2.5 border border-linkedin text-linkedin dark:border-blue-400 dark:text-blue-400 rounded-full font-medium text-sm"
          >
            Share This Rejection
          </button>
        </div>
      </div>
    )
  }

  if (applying) {
    return (
      <>
        <SkinSelector
          currentSkin={skinId}
          currentMode={modeId}
          supportedModes={supportedModes}
          onSkinChange={handleSkinChange}
          onModeChange={handleModeChange}
        />
        <Suspense fallback={<LoadingFallback />}>
          {skinId === 'worknight' && (
            <WorkNight job={job} company={company} onSubmit={handleSubmit} />
          )}
          {skinId === 'greenhouse-of-pain' && (
            <GreenHouseOfPain job={job} company={company} onSubmit={handleSubmit} />
          )}
          {skinId === 'talaeo' && <Talaeo job={job} company={company} onSubmit={handleSubmit} />}
        </Suspense>
      </>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Job Description */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-4 mb-5">
            <CompanyLogo companyId={company.id} size={48} className="shrink-0" />
            <div>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {job.title}
              </h1>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                <Link to={`/company/${company.id}`} className="text-linkedin dark:text-blue-400">
                  {company.name}
                </Link>
                <span>&middot;</span>
                <span>{job.location}</span>
              </div>
              <div className="flex gap-1.5 mt-2 text-xs">
                <span className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-sm font-medium">
                  {job.salary}
                </span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-sm">
                  {job.type}
                </span>
              </div>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-800 mb-5" />

          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {job.description}
          </p>

          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Requirements
          </h3>
          <ul className="space-y-1.5 mb-6">
            {job.requirements.map((req, i) => (
              <li
                key={i}
                className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
              >
                <span className="text-gray-400 mt-1 shrink-0">&bull;</span>
                {req}
              </li>
            ))}
          </ul>

          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Nice to Have
          </h3>
          <ul className="space-y-1.5">
            {job.niceToHaves.map((nth, i) => (
              <li
                key={i}
                className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
              >
                <span className="text-gray-400 mt-1 shrink-0">&bull;</span>
                {nth}
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 overflow-hidden">
            <div className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <CompanyLogo companyId={company.id} size={36} />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {company.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{company.industry}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-5">
                <div className="flex justify-between">
                  <span>Salary</span>
                  <span className="text-gray-900 dark:text-gray-100 font-medium text-right max-w-[180px] text-xs">
                    {job.salary}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Posted</span>
                  <span className="text-gray-900 dark:text-gray-100 text-xs">{job.postedDate}</span>
                </div>
              </div>

              <button
                onClick={() => setApplying(true)}
                className="w-full py-2.5 bg-linkedin hover:bg-linkedin-dark text-white font-semibold rounded-full text-sm"
              >
                Apply Now
              </button>
              <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">
                Average time to rejection: 0.003s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-linkedin" />
    </div>
  )
}
