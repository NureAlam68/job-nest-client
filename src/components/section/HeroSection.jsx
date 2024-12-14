import team3 from "../../assets/team/team3.jpg"


const HeroSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              src={team3}
              alt="Team working together"
              className="rounded-lg shadow-md w-full"
            />
            <div className="absolute bottom-0 left-0 bg-white p-4 rounded-lg shadow-lg transform translate-y-1/3">
              <p className="text-gray-800 font-medium">Security Overview</p>
              <button className="mt-2 bg-blue-600 text-white text-sm py-1 px-4 rounded-md hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Millions Of Jobs.<br />
              <span className="text-blue-600">Find The One That’s Right For You</span>
            </h1>
            <p className="mt-4 text-gray-600">
              Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.
            </p>
            <div className="mt-6 flex gap-4">
              <button className="bg-blue-600 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700 transition">
                Search Jobs
              </button>
              <button className="text-blue-600 font-medium py-2 px-6 border border-blue-600 rounded-md hover:bg-blue-100 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-600">25K+</h2>
            <p className="mt-2 text-gray-600">Completed Cases</p>
            <p className="text-sm text-gray-500">We always provide people a complete solution upon focused of any business</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">17+</h2>
            <p className="mt-2 text-gray-600">Our Office</p>
            <p className="text-sm text-gray-500">We always provide people a complete solution upon focused of any business</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">86+</h2>
            <p className="mt-2 text-gray-600">Skilled People</p>
            <p className="text-sm text-gray-500">We always provide people a complete solution upon focused of any business</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">28+</h2>
            <p className="mt-2 text-gray-600">Happy Clients</p>
            <p className="text-sm text-gray-500">We always provide people a complete solution upon focused of any business</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
