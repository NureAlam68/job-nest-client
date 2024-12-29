import { useEffect, useState } from "react";
import JobCard from "../JobCard";
import { Link } from "react-router-dom";

const JobsOfTheDay = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/latest-job")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div className="px-4 md:px-10 lg:px-6 mt-10 md:mt-14 lg:mt-20">
      <h2 className="text-4xl font-bold text-center mb-8">Jobs of the Day</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 md:mt-10">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
      <Link to="/allJob">
        <div className="bg-blue-600 text-white text-sm font-medium px-8 py-3 rounded hover:bg-blue-700 transition mt-8 text-center">
          All Job
        </div>
      </Link>
    </div>
  );
};

export default JobsOfTheDay;
