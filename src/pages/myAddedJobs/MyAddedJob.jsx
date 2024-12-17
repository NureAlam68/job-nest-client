import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyAddedJob = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);
  return (
    <div className="min-h-screen mt-8 md:mt-10 lg:mt-20">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Application Count</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
                <td>
                  <Link to={`/viewApplications/${job._id}`}>
                    <button className="btn btn-link">View Applications</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedJob;
