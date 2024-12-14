import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { FaBolt } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";

const JobCard = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
    jobType,
  } = job;
  return (
    <div className="bg-blue-50 rounded-lg p-4 border transform transition duration-300 hover:-translate-y-2">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-[50px] w-[50px] flex items-center justify-center">
                <img
                  src={company_logo}
                  alt="Company Logo"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="font-medium text-gray-800">{company}</p>
                <p className="text-sm text-gray-500 flex items-center gap-1"><CiLocationOn /> {location}</p>
              </div>
            </div>
            <FaBolt className="text-green-500" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
          <div className="text-sm text-gray-500 flex items-center space-x-2 mt-2">
            <p className="flex items-center gap-1"><IoBagCheckOutline /> {jobType}</p>
          </div>
          <p className="mt-4 text-sm text-gray-600">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2 items-center">
            {requirements.map((skill, index) => (
              <p
                key={index}
                className="bg-blue-100 text-gray-800 text-xs font-medium px-2 py-1 rounded"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold text-blue-600">
            {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </p>
          <button className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700 transition mt-3">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
    job: PropTypes.object
}

export default JobCard;
