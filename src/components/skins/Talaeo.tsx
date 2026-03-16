import { useState, useEffect } from 'react'
import type { AtsSkinProps } from '@/types'
import { TextInput } from '@/components/shared/TextInput'
import { TextArea } from '@/components/shared/TextArea'
import { FileUpload } from '@/components/shared/FileUpload'

function Talaeo({ job, company, onSubmit }: AtsSkinProps) {
  const [timeLeft, setTimeLeft] = useState(15 * 60)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const TALEO_TABS = ['My Profile', 'Resume', 'Work History', 'Education', 'Screening', 'Certifications', 'Review', 'Submit']
  const currentTab = 2 // static — stuck at step 3

  return (
    <div className="w-full max-w-[800px] mx-auto px-4 py-8">
      {/* Session timeout banner */}
      <div className="bg-red-600 text-white px-4 py-2 text-sm text-center font-mono">
        SESSION EXPIRES IN: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}{' '}
        &mdash; DO NOT USE THE BACK BUTTON
      </div>

      {/* Windows XP-era tab navigation */}
      <div className="flex border-b-2 border-[#003399] bg-gray-200 dark:bg-gray-800 px-2 pt-2 gap-0.5 overflow-x-auto">
        {TALEO_TABS.map((tab, i) => (
          <div
            key={i}
            className={`px-3 py-1.5 text-xs font-medium border-t border-l border-r cursor-default select-none whitespace-nowrap
              ${i === currentTab
                ? 'bg-white dark:bg-gray-900 border-gray-400 dark:border-gray-600 text-[#003399] dark:text-blue-400 -mb-px pb-2 relative z-10'
                : i < currentTab
                  ? 'bg-gray-300 dark:bg-gray-700 border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-400'
                  : 'bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-600'
              }`}
          >
            {i < currentTab ? `✓ ${i + 1}. ${tab}` : `${i + 1}. ${tab}`}
          </div>
        ))}
      </div>

      {/* Ugly header */}
      <div className="bg-gray-200 dark:bg-gray-800 border border-gray-400 dark:border-gray-600 px-4 py-3">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="align-middle">
                <span className="text-red-700 dark:text-red-400 font-bold text-xl font-serif">
                  Talaeo&trade;
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                  Enterprise Talent Management Suite v3.2.1
                </span>
              </td>
              <td className="text-right text-xs text-gray-500 dark:text-gray-400">
                Powered by OracleNet&trade;
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 dark:bg-gray-900 border-x border-gray-400 dark:border-gray-600 px-4 py-1 text-xs text-gray-600 dark:text-gray-400">
        Home &gt; Careers &gt; {company.name} &gt; {job.title} &gt; Application
      </div>

      {/* Form */}
      <div className="border border-t-0 border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-950 p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit()
          }}
        >
          {/* Deliberately ugly layout */}
          <fieldset className="border border-gray-300 dark:border-gray-700 p-4 mb-4">
            <legend className="text-sm font-bold text-gray-700 dark:text-gray-300 px-1">
              &nbsp;SECTION 1: CONTACT INFORMATION <span className="text-red-500">*</span>&nbsp;
            </legend>
            <div className="space-y-3">
              <TextInput label="First Name *" required />
              <TextInput label="Last Name *" required />
              <TextInput label="Middle Initial" />
              <TextInput label="Suffix (Jr., Sr., III, etc.)" />
              <TextInput label="Email Address *" required type="email" />
              <TextInput label="Confirm Email Address *" required type="email" />
              <TextInput label="Primary Phone *" required type="tel" />
              <TextInput label="Secondary Phone" type="tel" />
              <TextInput label="Fax Number" type="tel" />
            </div>
          </fieldset>

          <fieldset className="border border-gray-300 dark:border-gray-700 p-4 mb-4">
            <legend className="text-sm font-bold text-gray-700 dark:text-gray-300 px-1">
              &nbsp;SECTION 2: ADDRESS&nbsp;
            </legend>
            <div className="space-y-3">
              <TextInput label="Street Address Line 1 *" required />
              <TextInput label="Street Address Line 2" />
              <TextInput label="Street Address Line 3 (in case you live in a very specific place)" />
              <TextInput label="City *" required />
              <TextInput label="State/Province *" required />
              <TextInput label="ZIP/Postal Code *" required />
              <TextInput label="Country *" required />
            </div>
          </fieldset>

          <fieldset className="border border-gray-300 dark:border-gray-700 p-4 mb-4">
            <legend className="text-sm font-bold text-gray-700 dark:text-gray-300 px-1">
              &nbsp;SECTION 3: UPLOAD DOCUMENTS&nbsp;
            </legend>
            <div className="space-y-3">
              <FileUpload
                label="Resume (PDF only, max 500KB — it's 2024 and we still limit file sizes)"
                required
              />
              <FileUpload label="Cover Letter" />
              <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                NOTE: Uploading a resume does NOT auto-populate any fields. You must enter all
                information manually below.
              </p>
            </div>
          </fieldset>

          <fieldset className="border border-gray-300 dark:border-gray-700 p-4 mb-4">
            <legend className="text-sm font-bold text-gray-700 dark:text-gray-300 px-1">
              &nbsp;SECTION 4: WORK HISTORY (MANUAL ENTRY REQUIRED) *&nbsp;
            </legend>
            <div className="space-y-3">
              <TextInput label="Most Recent Job Title *" required />
              <TextInput label="Company Name *" required />
              <TextInput label="Start Date (MM/DD/YYYY) *" required />
              <TextInput label="End Date (MM/DD/YYYY) — leave blank if current" />
              <TextArea label="Duties & Responsibilities *" required rows={3} />
              <TextInput label="Supervisor Name" />
              <TextInput label="Supervisor Phone (yes, really)" type="tel" />
              <TextInput label="May We Contact This Employer? *" required />
            </div>
          </fieldset>

          <fieldset className="border border-gray-300 dark:border-gray-700 p-4 mb-4">
            <legend className="text-sm font-bold text-gray-700 dark:text-gray-300 px-1">
              &nbsp;SECTION 5: LEGAL DISCLAIMERS&nbsp;
            </legend>
            <div className="text-xs text-gray-500 dark:text-gray-400 space-y-2">
              <p>
                By submitting this application, you certify that all information is true and
                complete. Any misstatement or omission may result in your application being rejected
                (as if it needed more reasons).
              </p>
              <p>
                You also agree to allow us to store your data indefinitely while claiming we'll
                &ldquo;keep it on file&rdquo; and then never looking at it again.
              </p>
            </div>
          </fieldset>

          <div className="flex gap-2">
            <button
              type="submit"
              className="px-6 py-2 bg-red-700 hover:bg-red-800 text-white text-sm font-medium"
              style={{ fontFamily: 'serif' }}
            >
              SUBMIT APPLICATION
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-400 dark:hover:bg-gray-600"
              style={{ fontFamily: 'serif' }}
            >
              SAVE FOR LATER
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Talaeo&trade; Enterprise Talent Management Suite &copy; 2009-2024. Best viewed in
            Internet Explorer 8.
          </p>
        </form>
      </div>
    </div>
  )
}

export default Talaeo
