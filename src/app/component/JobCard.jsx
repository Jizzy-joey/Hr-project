"use client";
import jobs from "../data/jobs";

import { ImFlattr } from "react-icons/im";
import Button from "./Button";

export default function JobCard(props) {
  const jobList = jobs.map((job) => (
    <article key={job.id} className="flex flex-col bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden">
      <div className="flex flex-col items-center gap-2 bg-gray-200 p-4 border-b border-gray-300">
        <ImFlattr className="text-3xl text-amber-600" />
        <span className="text-2xl font-bold text-black">{job.company}</span>
      </div>
      <div className="flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h2>
        <p className="text-gray-600 mb-1">{job.category}</p>
        <p className="text-gray-600 mb-4 space-x-3">{job.location}</p>
        <Button className="w-full" title={job.title} />
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