import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const {user} = useAuth();
  const navigate = useNavigate();
//   console.log(id, user);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const github = form.github.value;
    const linkedin = form.linkedin.value;
    const resume = form.resume.value;

    // console.log(github, linkedin, resume);

    const jobApplication = {
        job_id: id,
        applicant_email: user.email,
        linkedin,
        github,
        resume
    }

    fetch('http://localhost:3000/job-applications', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(jobApplication)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your job apply has been successful",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/myApplications')
        } 
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Apply for the Job
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* GitHub URL */}
          <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500">
            <FaGithub className="text-gray-500 mr-3 text-xl" />
            <input
              type="url"
              name="github"
              placeholder="GitHub URL"
              className="w-full py-2 px-2 text-gray-700 focus:outline-none"
              required
            />
          </div>
          {/* LinkedIn URL */}
          <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500">
            <FaLinkedin className="text-blue-600 mr-3 text-xl" />
            <input
              type="url"
              name="linkedin"
              placeholder="LinkedIn URL"
              className="w-full py-2 px-2 text-gray-700 focus:outline-none"
              required
            />
          </div>
          {/* Resume URL */}
          <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500">
            <FaFileAlt className="text-gray-500 mr-3 text-xl" />
            <input
              type="url"
              name="resume"
              placeholder="Resume URL"
              className="w-full py-2 px-2 text-gray-700 focus:outline-none"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
