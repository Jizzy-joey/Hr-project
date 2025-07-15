import JobCard from "../component/JobCard";
import  jobs from "../data/jobs";  
import Categories from "../component/Categories";

export default function Jobs() {
    return (
        <div>
            <JobCard val={jobs.length} />
        </div>
    )
}