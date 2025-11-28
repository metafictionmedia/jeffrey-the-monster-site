"use client"

import { useState } from "react";

export default function EmailSignup() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  return (
    <div className="comic-panel p-8">
      <h2 className="font-heading text-3xl md:text-4xl mb-6 text-center">Stay Updated!</h2>

      <div className="mb-6">
        <p className="font-body text-lg mb-4">
          Sign up to get:
        </p>
        <ul className="font-body text-base space-y-2 list-disc list-inside ml-4">
          <li>Email notifications when new comic strips are posted</li>
          <li>The option to preorder the graphic novel (not required)</li>
          <li>Updates on the book release and exclusive content</li>
        </ul>
      </div>

      <form
        action="https://metafictionmedia.us6.list-manage.com/subscribe/post?u=ad09522c5956208af4ac8afda&id=80c5d438d9&f_id=00d4c2e1f0"
        method="post"
        target="_blank"
        className="space-y-4"
      >
        <div>
          <label htmlFor="mce-EMAIL" className="font-body font-semibold block mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            required
            className="w-full px-4 py-2 border-2 border-light-border dark:border-dark-border rounded-lg bg-white dark:bg-gray-800 text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-accent-purple"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="mce-FNAME" className="font-body font-semibold block mb-2">
            First Name
          </label>
          <input
            type="text"
            name="FNAME"
            id="mce-FNAME"
            className="w-full px-4 py-2 border-2 border-light-border dark:border-dark-border rounded-lg bg-white dark:bg-gray-800 text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-accent-purple"
            placeholder="First Name"
          />
        </div>

        <div>
          <label htmlFor="mce-LNAME" className="font-body font-semibold block mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="LNAME"
            id="mce-LNAME"
            className="w-full px-4 py-2 border-2 border-light-border dark:border-dark-border rounded-lg bg-white dark:bg-gray-800 text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-accent-purple"
            placeholder="Last Name"
          />
        </div>

        {/* Honeypot field */}
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input
            type="text"
            name="b_ad09522c5956208af4ac8afda_80c5d438d9"
            tabIndex={-1}
            defaultValue=""
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-accent-purple hover:bg-accent-purple/80 text-white font-body font-bold text-lg rounded-lg transition-colors"
        >
          Sign Up!
        </button>
      </form>
    </div>
  );
}
