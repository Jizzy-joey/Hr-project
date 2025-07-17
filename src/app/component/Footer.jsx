import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-amber-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nija Jobs</h3>
            <p className="text-sm">
              Connecting talented professionals with top employers across Nigeria.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99A12.13 12.13 0 0 1 3.15 5.13a4.29 4.29 0 0 0 1.33 5.72c-.7-.02-1.36-.21-1.94-.53v.05c0 2.02 1.44 3.71 3.36 4.09-.35.1-.72.16-1.1.16-.27 0-.53-.03-.78-.07.53 1.65 2.07 2.85 3.89 2.88A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.7 8.7 0 0 0 24 4.59a8.59 8.59 0 0 1-2.54.7z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.41-.77 1.39-1.5 2.5-1.5 1.93 0 3.5 1.57 3.5 3.5v6.5z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.16c2.67 0 2.99.01 4.04.05 2.74.13 3.97 1.4 4.1 4.1.04 1.05.05 1.37.05 4.04s-.01 2.99-.05 4.04c-.13 2.74-1.4 3.97-4.1 4.1-1.05.04-1.37.05-4.04.05s-2.99-.01-4.04-.05c-2.74-.13-3.97-1.4-4.1-4.1-.04-1.05-.05-1.37-.05-4.04s.01-2.99.05-4.04c.13-2.74 1.4-3.97 4.1-4.1 1.05-.04 1.37-.05 4.04-.05zm0-1.16c-2.72 0-3.06.01-4.12.05-3.58.17-5.16 1.8-5.33 5.33-.04 1.06-.05 1.4-.05 4.12s.01 3.06.05 4.12c.17 3.58 1.8 5.16 5.33 5.33 1.06.04 1.4.05 4.12.05s3.06-.01 4.12-.05c3.58-.17 5.16-1.8 5.33-5.33.04-1.06.05-1.4.05-4.12s-.01-3.06-.05-4.12c-.17-3.58-1.8-5.16-5.33-5.33-1.06-.04-1.4-.05-4.12-.05zm0 3.08a5.6 5.6 0 1 0 0 11.2 5.6 5.6 0 0 0 0-11.2zm0 9.24a3.64 3.64 0 1 1 0-7.28 3.64 3.64 0 0 1 0 7.28zm7.36-9.36a1.31 1.31 0 1 0-2.62 0 1.31 1.31 0 0 0 2.62 0z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/jobs" className="hover:underline">Browse Jobs</a></li>
              <li><a href="/companies" className="hover:underline">Companies</a></li>
              <li><a href="/post-job" className="hover:underline">Post a Job</a></li>
              <li><a href="/career-resources" className="hover:underline">Career Resources</a></li>
              <li><a href="/faq" className="hover:underline">FAQs</a></li>
            </ul>
          </div>

          {/* Job Seekers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Job Seekers</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/create-profile" className="hover:underline">Create Profile</a></li>
              <li><a href="/upload-resume" className="hover:underline">Upload Resume</a></li>
              <li><a href="/job-alerts" className="hover:underline">Job Alerts</a></li>
              <li><a href="/salary-tool" className="hover:underline">Salary Tool</a></li>
              <li><a href="/career-advice" className="hover:underline">Career Advice</a></li>
            </ul>
          </div>

          {/* Employers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Employers</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/employer-dashboard" className="hover:underline">Employer Dashboard</a></li>
              <li><a href="/pricing" className="hover:underline">Pricing Plans</a></li>
              <li><a href="/recruitment-solutions" className="hover:underline">Recruitment Solutions</a></li>
              <li><a href="/talent-solutions" className="hover:underline">Talent Solutions</a></li>
              <li><a href="/contact-sales" className="hover:underline">Contact Sales</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm">
              &copy; {new Date().getFullYear()} Nija Jobs. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/privacy" className="text-xs hover:underline">Privacy Policy</a>
              <a href="/terms" className="text-xs hover:underline">Terms of Service</a>
              <a href="/cookies" className="text-xs hover:underline">Cookie Policy</a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs">
              Built with ❤️ by Jael | Powered by React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}