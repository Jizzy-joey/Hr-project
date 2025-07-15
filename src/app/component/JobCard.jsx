"use client";
import jobs from "../data/jobs";

import { ImFlattr } from "react-icons/im";
import Button from "./Button";

export default function JobCard(props) {
  const jobList = jobs.map((job) => (
    <article key={job.id} className="job-card">
      <p className="flex flex-col items-center gap-2 text-2xl font-bold text-black
        border-b-2 border-gray-700 p-4">
        <ImFlattr className="text-3xl text-green-700" />
        <span>{job.company}</span>
      </p>
      <div className="flex flex-col items-center justify-center text-lg p-4">
        <h2 className="flex flex-col items-center text-3xl font-bold text-gray-800 p-4">
            {job.title}
        </h2>
        <p className="flex flex-col items-center text-gray-600">
            {job.category}
        </p>
        <p className="flex flex-col items-center text-gray-600">
            {job.location}
        </p>

        <Button className="flex flex-row justify-center items-center " title={job.title} />
      </div>
    </article>
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {
            [...jobList]
            .sort(() => 0.5 - Math.random())
            .slice(0, props.val)
            .map((card, index) => (
                <div key={index} className="p-4 m-4 bg-gray-100 rounded shadow-md border border-gray-700">
                    {card}
                </div>
            ))
        }
    </div>
  );
}