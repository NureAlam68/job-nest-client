import { useLoaderData } from "react-router-dom";
import { FaMapMarkerAlt, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { MdDateRange, MdWork } from "react-icons/md";
import { BiDollar } from "react-icons/bi";


const JobDetails = () => {
    const job = useLoaderData();
    return (
        <div className="max-w-5xl mx-auto p-6 bg-blue-50 border-2">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <img
          src={job.company_logo}
          alt={job.company}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">{job.title}</h1>
          <p className="text-gray-600">{job.company}</p>
        </div>
      </div>

      {/* Job Information */}
      <div className="grid md:grid-cols-2 gap-6 mt-6 bg-blue-100 p-4 rounded-lg border-2">
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-blue-600" />
          <p className="text-gray-700">{job.location}</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaBriefcase className="text-blue-600" />
          <p className="text-gray-700">{job.jobType}</p>
        </div>
        <div className="flex items-center space-x-2">
          <BiDollar className="text-blue-600" />
          <p className="text-gray-700">
            {job.salaryRange.min}-{job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <MdDateRange className="text-blue-600" />
          <p className="text-gray-700">Deadline: {job.applicationDeadline}</p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Job Description</h2>
        <p className="text-gray-700 mt-2">{job.description}</p>
      </div>

      {/* Responsibilities */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Responsibilities</h2>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
          {job.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Requirements</h2>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
          {job.requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Contact HR */}
      <div className="mt-6 p-4 bg-blue-100 rounded-lg border">
        <h2 className="text-xl font-semibold text-blue-600">Contact HR</h2>
        <div className="flex items-center space-x-2 mt-2">
          <FaEnvelope className="text-blue-600" />
          <p className="text-gray-700">{job.hr_email}</p>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <MdWork className="text-blue-600" />
          <p className="text-gray-700">{job.hr_name}</p>
        </div>
      </div>
      <button className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700 transition mt-3">
              Apply Now
            </button>
    </div>
    );
};

export default JobDetails;