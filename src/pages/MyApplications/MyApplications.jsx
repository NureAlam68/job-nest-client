import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // fetch(`https://job-portal-server-iota-plum.vercel.app/job-applications?email=${user.email}`)
    // .then(res => res.json())
    // .then(data => {
    //     setJobs(data);
    // })
    // axios.get(`https://job-portal-server-iota-plum.vercel.app/job-applications?email=${user.email}`, {
    //   withCredentials: true
    // })

    axiosSecure
      .get(`/job-applications?email=${user.email}`)
      .then((res) => setJobs(res.data));
  }, [axiosSecure, user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://job-portal-server-iota-plum.vercel.app/job-applications/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your visa application has been deleted.",
                icon: "success",
              });

              const remainingVisaApplications = jobs.filter(
                (job) => job._id !== id
              );
              setJobs(remainingVisaApplications);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen mt-10 md:mt-14 lg:mt-20">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Company</th>
              <th>Job</th>
              <th>ApplicationDeadline</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job, idx) => (
              <tr key={job._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.title}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {job.category}
                  </span>
                </td>
                <td>{job.applicationDeadline}</td>
                <th>
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaDeleteLeft
                      className="text-red-500"
                      size={20}
                    ></FaDeleteLeft>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
