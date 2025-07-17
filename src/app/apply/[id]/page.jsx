
"use client";
import Success from '@/app/component/Success';
// import Success from '@/app/component/Success';
import { useParams } from 'next/navigation';

export default function JobApplication() {
  const { id } = useParams();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-400 p-4'>

        <h1 className='text-3xl font-bold'>Job Application</h1>
        <p className='text-lg'>Thank you for your interest in applying for a job with us. Please fill out the application form below.</p>
        <p className='text-lg'>You are applying for the job: <span className='font-semibold'>{id.replaceAll("-", " ").toUpperCase()}</span></p>
        <form className='bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4' method="POST" action={`/apply/${id}`}>
            <div>
                <label className="">Job Title</label>
                <input type="text" id="jobTitle" name="jobTitle"
                 required className="mt-1 block w-full border border-gray-300 
                 rounded-md shadow-sm focus:ring focus:ring-opacity-50" value={id.replaceAll("-", " ").toUpperCase()} disabled />
            </div>
            <div>
                <label className='block text-sm font-medium text-amber-600' htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"/>

            </div>
        <div>
            <label className='block text-sm font-medium text-amber-600' htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
        </div>

        <div>
            <label className='block text-sm font-medium text-amber-600' htmlFor="resume">Resume:</label>
                <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx"
                 required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"       />
            </div>
        <div>
            <label className='block text-sm font-medium text-amber-600' htmlFor="coverLetter">Cover Letter:</label>
            <textarea id="coverLetter" name="coverLetter" rows="4" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"></textarea>
        </div>
        <div>
            <label className='block text-sm font-medium text-amber-600' htmlFor="coverLetter">Cover Letter:</label>
                <input type="file" id="coverLetter" name="coverLetter" accept=".pdf,.doc,.docx"
                 required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"       />
            </div>
        
        <div>
            <label className='block text-sm font-medium text-gray-700' htmlFor="linkedin">LinkedIn Profile:</label>
            <input type="url" id="linkedin" name="linkedin" placeholder="https://www.linkedin.com/in/yourprofile" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
        </div>
        
        <p>We will review your application and get back to you soon.</p>
        <Success />
    
        </form>
    </div>
  )
}
