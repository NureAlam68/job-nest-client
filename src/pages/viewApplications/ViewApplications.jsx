import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applications = useLoaderData();

  const handleStatusChange = (e, id) => {
    console.log(e.target.value, id);
    const data = {
        status: e.target.value
    }

    fetch(`http://localhost:3000/job-applications/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if (data.modifiedCount) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Status Has been updated.",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
  };

  return (
    <div className="min-h-screen mt-8 md:mt-12 lg:mt-20">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Resume</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((job, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{job.applicant_email}</td>
                <td>{job.resume}</td>
                <td>{job.status}</td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, job._id)}
                    defaultValue={job.status || "Change Status"}
                    className="select select-bordered select-xs w-full max-w-xs"
                  >
                    <option disabled>Change Status</option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
