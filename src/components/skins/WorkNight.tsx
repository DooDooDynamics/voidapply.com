import { useState } from 'react'
import type { AtsSkinProps } from '@/types'
import { TextInput } from '@/components/shared/TextInput'
import { TextArea } from '@/components/shared/TextArea'
import { FileUpload } from '@/components/shared/FileUpload'
import { SelectInput } from '@/components/shared/SelectInput'

const STEPS = [
  'Create Account',
  'Upload Resume',
  'Personal Information',
  'Re-enter Your Resume Manually',
  'Work Experience',
  'Education',
  'Personality Assessment',
  'Final Review',
]

function WorkNight({ job, company, onSubmit }: AtsSkinProps) {
  const [step, setStep] = useState(0)

  const next = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1)
    } else {
      onSubmit()
    }
  }

  const prev = () => {
    if (step > 0) setStep(step - 1)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header — dark navy #003b5c per spec */}
      <div className="text-white px-6 py-4 rounded-t-lg flex items-center justify-between" style={{ backgroundColor: '#003b5c' }}>
        <div>
          <h1 className="text-lg font-bold">
            <span className="text-orange-400">Work</span>Night&trade;
          </h1>
          <p className="text-xs text-gray-300 mt-1">
            Applying to: {job.title} at {company.name}
          </p>
        </div>
        <div className="text-xs text-gray-300 flex items-center gap-3">
          <span>My Applications</span>
          <div className="w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-xs">👤</div>
        </div>
      </div>

      {/* Progress — horizontal step list, clickable completed steps */}
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 border-x border-gray-200 dark:border-gray-700 overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {STEPS.map((s, i) => (
            <button
              key={i}
              onClick={() => i < step && setStep(i)}
              disabled={i > step}
              className={`px-2 py-1 text-xs rounded flex items-center gap-1 transition-colors
                ${i === step ? 'bg-blue-600 text-white' : i < step ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-600 cursor-pointer hover:bg-blue-50' : 'text-gray-400 dark:text-gray-500 cursor-not-allowed'}`}
            >
              {i < step && <span>✓</span>}
              <span>{i + 1}. {s}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      <form className="border border-t-0 border-gray-200 dark:border-gray-700 rounded-b-lg p-6 bg-white dark:bg-gray-900" onSubmit={e => { e.preventDefault(); next() }}>
        <div key={step}>
          {step === 0 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Create Your Account
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You must create an account to apply. We promise to only send you 47 emails per week.
              </p>
              <TextInput
                label="Email Address"
                required
                placeholder="you@example.com"
                type="email"
              />
              <TextInput
                label="Password"
                required
                placeholder="Must contain uppercase, lowercase, number, symbol, haiku"
                type="password"
              />
              <TextInput label="Confirm Password" required type="password" />
              <TextInput
                label="Secret Question"
                required
                placeholder="What was the name of your first rejection?"
              />
            </div>
          )}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Upload Your Resume
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Upload your resume so we can ask you to re-type everything in the next step.
              </p>
              <FileUpload label="Resume / CV" required />
              <FileUpload label="Cover Letter (Optional but we'll reject you without one)" />
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Personal Information
              </h2>
              <TextInput label="First Name" required />
              <TextInput label="Middle Name (all 4 of them)" />
              <TextInput label="Last Name" required />
              <TextInput label="Preferred Name (we won't use it)" />
              <TextInput label="Phone Number" required type="tel" />
              <TextInput label="Backup Phone Number" type="tel" />
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Now Re-enter Your Resume
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We parsed your resume but got literally nothing. Please type it all again.
              </p>
              <TextInput label="Current Job Title" required />
              <TextInput label="Current Company" required />
              <TextInput label="Start Date" required type="date" />
              <TextArea
                label="Job Description"
                required
                placeholder="Describe in detail what you do (so we can not read it)"
              />
            </div>
          )}
          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Work Experience
              </h2>
              <TextInput label="Previous Job Title" required />
              <TextInput label="Previous Company" required />
              <TextInput label="Years at Company" required />
              <TextArea
                label="Key Achievements"
                placeholder="List achievements (we'll ignore them)"
              />
              <TextInput
                label="Reason for Leaving"
                required
                placeholder="Be honest (actually don't)"
              />
            </div>
          )}
          {step === 5 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Education</h2>
              <TextInput label="University / College" required />
              <TextInput label="Degree" required />
              <TextInput label="GPA (must be above 4.0 on a 4.0 scale)" />
              <TextInput label="Graduation Year" required />
              <TextArea
                label="Relevant Coursework"
                placeholder="List courses (we don't know what any of these are)"
              />
            </div>
          )}
          {step === 6 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Personality Assessment
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                These questions have no right answers. There are only wrong ones.
              </p>
              <SelectInput
                label="If you were a cloud service, which would you be?"
                required
                options={[
                  { value: 'ec2', label: 'EC2 — Reliable but expensive' },
                  { value: 'lambda', label: 'Lambda — Only works when triggered' },
                  { value: 's3', label: 'S3 — Holds everything, remembers nothing' },
                  { value: 'glacier', label: 'Glacier — Takes forever to respond' },
                ]}
              />
              <SelectInput
                label="How do you handle conflict?"
                required
                options={[
                  { value: 'a', label: 'Schedule a meeting about the conflict' },
                  { value: 'b', label: 'Schedule a meeting about the meeting' },
                  { value: 'c', label: 'Send a passive-aggressive Slack message' },
                  { value: 'd', label: "Update my LinkedIn to 'Open to Work'" },
                ]}
              />
              <TextArea
                label="In 500 words, explain why you deserve this job (you don't)"
                required
                rows={6}
              />
            </div>
          )}
          {step === 7 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Final Review
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You've made it through all 8 steps. Congratulations. This is more effort than our
                hiring team will put into reviewing your application.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded p-4">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  By clicking Submit, you acknowledge that this application will be processed with
                  the same care and attention that all applications receive: absolutely none.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={prev}
            disabled={step === 0}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-2 text-sm font-medium text-white rounded-md"
            style={{ backgroundColor: '#0875e1' }}
          >
            {step === STEPS.length - 1 ? 'Submit Application' : 'Next Step'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default WorkNight
