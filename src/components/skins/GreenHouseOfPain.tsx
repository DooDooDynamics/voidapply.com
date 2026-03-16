import type { AtsSkinProps } from '@/types'
import { TextInput } from '@/components/shared/TextInput'
import { TextArea } from '@/components/shared/TextArea'
import { FileUpload } from '@/components/shared/FileUpload'
import { SelectInput } from '@/components/shared/SelectInput'

function GreenHouseOfPain({ job, company, onSubmit }: AtsSkinProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-green-600 text-white px-6 py-4 rounded-t-lg flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold">GreenHouse of Pain&trade;</h1>
          <p className="text-xs text-green-100 mt-1">
            {company.name} &mdash; {job.title}
          </p>
        </div>
        <div className="bg-green-700 px-3 py-1 rounded-full text-xs flex items-center gap-1">
          <span className="inline-block w-2 h-2 bg-green-300 rounded-full" />
          AI Screening Active
        </div>
      </div>

      {/* Form */}
      <div className="border border-t-0 border-gray-200 dark:border-gray-700 rounded-b-lg bg-white dark:bg-gray-900">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit()
          }}
          className="p-6 space-y-6"
        >
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Personal Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextInput label="First Name" required />
              <TextInput label="Last Name" required />
            </div>
            <TextInput label="Email" required type="email" />
            <TextInput label="Phone" type="tel" />
            <TextInput label="LinkedIn URL" placeholder="https://linkedin.com/in/your-profile" />
          </div>

          <hr className="border-gray-200 dark:border-gray-700" />

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Resume</h2>
            <FileUpload label="Upload Resume" required />
            <FileUpload label="Cover Letter" />
          </div>

          <hr className="border-gray-200 dark:border-gray-700" />

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Additional Questions
            </h2>

            <TextArea
              label="Why do you want to work here? (Minimum 200 words. Our AI will count.)"
              required
              rows={5}
            />

            <SelectInput
              label={`On a scale of 1-10, how passionate are you about ${company.name}'s mission? (Answers below 9 are automatically rejected)`}
              required
              options={[
                { value: '1', label: '1 — I have other interests' },
                { value: '5', label: "5 — It's fine" },
                { value: '8', label: '8 — Very passionate' },
                { value: '9', label: '9 — It keeps me up at night' },
                { value: '10', label: '10 — I have a tattoo of the company logo' },
              ]}
            />

            <TextArea
              label="Describe a time you went above and beyond (sleeping under your desk counts)"
              required
              rows={4}
            />

            <TextInput
              label="Are you legally authorized to be rejected in this country?"
              required
            />

            <SelectInput
              label="How did you hear about us?"
              options={[
                { value: 'linkedin', label: 'LinkedIn (where I live now)' },
                { value: 'friend', label: 'A friend who also got rejected' },
                { value: 'indeed', label: 'Indeed (I indeed have no hope)' },
                { value: 'dream', label: 'It came to me in a dream' },
                { value: 'void', label: 'The void whispered your name' },
              ]}
            />
          </div>

          <hr className="border-gray-200 dark:border-gray-700" />

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-4 text-sm text-blue-800 dark:text-blue-200">
            Our AI-powered screening system will evaluate your application in approximately 0.001
            seconds. This is 86,399.999 seconds faster than a human recruiter would take to not read
            it.
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white font-medium rounded-lg hover:opacity-90"
            style={{ backgroundColor: '#24a47f' }}
          >
            Submit Application
          </button>
        </form>

        {/* Powered by Greenhouse badge */}
        <div className="flex justify-end px-6 py-3 border-t border-gray-100 dark:border-gray-800">
          <span className="text-xs text-gray-400 dark:text-gray-600 flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: '#24a47f' }} />
            Powered by Greenhouse
          </span>
        </div>
      </div>
    </div>
  )
}

export default GreenHouseOfPain
