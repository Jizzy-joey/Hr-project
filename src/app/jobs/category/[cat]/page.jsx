import Button from '@/app/component/Button';
import jobs from '@/app/data/jobs.js'
import { ImFlattr } from "react-icons/im";
export default function JobCategory({params}) {
  const filteredJobs = jobs.filter(job => job.category.replace(/\s+/g, '-').toLowerCase() === params.cat);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
     
     {
    filteredJobs.map((job) => (
       <article key={job.id} className="job-card p-4 m-4 bg-gray-100 rounded shadow-md border border-gray-700">
            <p className="flex items-center justify-center
            blue-900  p-2  ">
                <ImFlattr className="text-2xl ml-2 text-green-700"/>
                <span>{job.company}</span>
            </p>
            <div className="flex flex-col items-center justify-center text-lg
            capitalize p-4">
                <h2 className="text-2xl font-semibold">
                    {job.title}
                    </h2>
                <p>{job.category}</p>
                <p>{job.location}</p>

                <Button title={job.title} />
            </div>

        </article>
    ))
    }
    </div>
    );
}