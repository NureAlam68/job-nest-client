import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job Has been added.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myAddedJobs");
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-blue-50 rounded-lg border">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Post a New Job
      </h2>
      <form onSubmit={handleAddJob} className="grid grid-cols-1 gap-6">
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter job title"
            className="input input-bordered w-full mt-1"
            required
          />
        </div>

        {/* Job Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter job location"
            className="input input-bordered w-full mt-1"
            required
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Type
          </label>
          <select
            name="jobType"
            defaultValue=""
            className="select select-bordered w-full mt-1"
            required
          >
            <option value="" disabled>
              Select Job Type
            </option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Intern">Intern</option>
          </select>
        </div>

        {/* Job Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Field
          </label>
          <select
            name="category"
            defaultValue=""
            className="select select-bordered w-full mt-1"
            required
          >
            <option value="" disabled>
              Select Job Field
            </option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Data Science">Data Science</option>
            <option value="Teaching">Teaching</option>
            <option value="Management">Management</option>
          </select>
        </div>

        {/* Salary Range */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Min Salary
            </label>
            <input
              type="text"
              name="min"
              placeholder="Minimum salary"
              className="input input-bordered w-full mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Max Salary
            </label>
            <input
              type="text"
              name="max"
              placeholder="Maximum salary"
              className="input input-bordered w-full mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Currency
            </label>
            <select
              name="currency"
              defaultValue=""
              className="select select-bordered w-full mt-1"
              required
            >
              <option value="" disabled>
                Select Currency
              </option>
              <option value="BDT">BDT</option>
              <option value="USD">USD</option>
              <option value="ERO">ERO</option>
            </select>
          </div>
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Description
          </label>
          <textarea
            name="description"
            placeholder="Enter job description"
            className="textarea textarea-bordered w-full mt-1"
            required
          ></textarea>
        </div>

        {/* Other Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              className="input input-bordered w-full mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Logo URL
            </label>
            <input
              type="text"
              name="company_logo"
              placeholder="Enter company logo URL"
              className="input input-bordered w-full mt-1"
              required
            />
          </div>
        </div>

        {/* Requirements */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Requirements
          </label>
          <textarea
            name="requirements"
            placeholder="Enter requirements (one per line)"
            className="textarea textarea-bordered w-full mt-1"
            required
          ></textarea>
        </div>

        {/* Responsibilities */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Responsibilities
          </label>
          <textarea
            name="responsibilities"
            placeholder="Enter responsibilities (one per line)"
            className="textarea textarea-bordered w-full mt-1"
            required
          ></textarea>
        </div>

        {/* HR Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              HR Name
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="Enter HR name"
              className="input input-bordered w-full mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              HR Email
            </label>
            <input
              type="text"
              name="hr_email"
              defaultValue={user?.email}
              placeholder="Enter HR email"
              className="input input-bordered w-full mt-1"
              required
            />
          </div>
        </div>

        {/* Deadline */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Application Deadline
          </label>
          <input
            type="date"
            name="applicationDeadline"
            className="input input-bordered w-full mt-1"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="btn btn-primary w-full font-semibold mt-4 text-white"
          >
            Submit Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
