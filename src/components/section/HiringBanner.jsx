import Lottie from "lottie-react";
import jobApply from "../../assets/lottie/jobApply.json"

const HiringBanner = () => {
  return (
    <div className="bg-white border rounded-lg shadow-md py-6 px-8 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
      <div className="flex items-center gap-4">
        <div className="w-[100px]">
        <Lottie animationData={jobApply}></Lottie>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">WE ARE <span className="text-blue-600">HIRING</span></h2>
          <p className="text-gray-600 text-sm mt-1">Let’s Work Together & Explore Opportunities</p>
        </div>
      </div>
      <button className="mt-4 md:mt-0 bg-blue-600 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700 transition">
        Apply now
      </button>
    </div>
  );
};

export default HiringBanner;
