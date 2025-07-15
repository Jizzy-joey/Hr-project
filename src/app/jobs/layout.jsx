import Categories from "../component/Categories";
import jobs from "../data/jobs";

export default function JobsLayout({ children }) {
    return (
        <div>
            <Categories jobs={jobs} />
            {children}
        </div>
    );
}


