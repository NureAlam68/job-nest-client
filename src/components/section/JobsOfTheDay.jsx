import { useEffect, useState } from "react";
import JobCard from "../JobCard";
import { FaChartBar, FaBullhorn, FaUniversity, FaUsers, FaStore, FaPenNib } from "react-icons/fa";

const JobsOfTheDay = () => {

  const [jobs, setJobs] = useState([])

  const items = [
    { icon: <FaChartBar />, label: "Management" },
    { icon: <FaBullhorn />, label: "Marketing & Sale" },
    { icon: <FaUniversity />, label: "Finance" },
    { icon: <FaUsers />, label: "Human Resource" },
    { icon: <FaStore />, label: "Retail & Products" },
    { icon: <FaPenNib />, label: "Content Writer" },
  ];

useEffect(() => {
  fetch('http://localhost:3000/jobs')
  .then(res => res.json())
  .then(data => {
    setJobs(data)
  })
}, [])

  return (
    <div className="px-4 md:px-10 lg:px-6 mt-10 md:mt-14 lg:mt-20">
      <h2 className="text-4xl font-bold text-center mb-8">Jobs of the Day</h2>
     <div className="flex flex-wrap justify-center gap-4 p-4">
      {items.map((item, index) => (
        <button
          key={index}
          className="flex items-center justify-center gap-2 px-4 py-2 border border-blue-400 rounded-lg text-blue-500 transition-all duration-300 w-full sm:w-auto"
        >
          <span className="text-xl">{item.icon}</span>
          <span className="text-sm font-medium text-black hover:text-blue-500">{item.label}</span>
        </button>
      ))}
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 md:mt-10">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobsOfTheDay;
