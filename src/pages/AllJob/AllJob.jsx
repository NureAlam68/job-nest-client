import { useEffect, useState } from "react";
import {
  FaChartBar,
  FaBullhorn,
  FaUniversity,
  FaDatabase,
  FaPencilRuler,
  FaChalkboardTeacher,
  FaCode,
  FaBriefcase,
  FaWrench,
} from "react-icons/fa";
import JobCard from "../../components/JobCard";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading";
import { BiSearch } from "react-icons/bi";

const AllJob = () => {
  const [jobs, setJobs] = useState([]);
  const [categoryJobs, setCategoryJobs] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Jobs");
  const { loading } = useAuth();
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");

  const items = [
    { icon: <FaBriefcase />, label: "All Jobs" },
    { icon: <FaWrench />, label: "Engineering" },
    { icon: <FaChartBar />, label: "Management" },
    { icon: <FaBullhorn />, label: "Marketing" },
    { icon: <FaUniversity />, label: "Finance" },
    { icon: <FaDatabase />, label: "Data Science" },
    { icon: <FaPencilRuler />, label: "Design" },
    { icon: <FaChalkboardTeacher />, label: "Teaching" },
    { icon: <FaCode />, label: "Development" },
  ];

  useEffect(() => {
    const query = categoryJobs ? `category=${categoryJobs}` : "";
    fetch(
      `https://job-portal-server-iota-plum.vercel.app/jobs?${query}&sort=${sort}&search=${search}&min=${minSalary}&max=${maxSalary}`
    )
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [categoryJobs, sort, search, minSalary, maxSalary]);

  const handleCategoryClick = (category) => {
    setCategoryJobs(category === "All Jobs" ? "" : category);
    setActiveCategory(category);
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="px-4 md:px-10 lg:px-6 mt-10 md:mt-14 lg:mt-20 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8">All Job Here</h2>
      <div className="w-11/12 mx-auto bg-blue-50 p-4 flex flex-col items-center gap-5 justify-evenly">
        <button
          onClick={() => setSort(!sort)}
          className={`px-4 py-2 border border-blue-400 rounded-lg transition-all duration-300 w-full sm:w-auto font-medium ${
            sort && "bg-blue-600 text-white"
          }`}
        >
          {sort === true ? "Sorted By Salary" : "Sort By Salary"}
        </button>
        <div className="flex items-center gap-2">
          <BiSearch></BiSearch>
          <input
            onKeyUp={(e) => setSearch(e.target.value)}
            type="text"
            className="input border border-blue-400"
            placeholder="Search Jobs by Location"
          />
        </div>
        <div className="space-x-2 flex">
          <input
            onKeyUp={(e) => setMinSalary(e.target.value)}
            type="text"
            className="input border border-blue-400 w-[100px] md:w-auto"
            placeholder="Min Salary"
          />
          <input
            onKeyUp={(e) => setMaxSalary(e.target.value)}
            type="text"
            className="input border border-blue-400 w-[100px] md:w-auto"
            placeholder="Max Salary"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4 mt-4 md:mt-6 lg:mt-8">
        {items.map((item, index) => (
          <button
            onClick={() => handleCategoryClick(item.label)}
            key={index}
            className={`flex items-center justify-center gap-2 px-4 py-2 border rounded-lg transition-all duration-300 w-full sm:w-auto ${
              activeCategory === item.label
                ? "bg-blue-100 border-blue-500"
                : "border-blue-400 text-blue-500"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-medium text-black hover:text-blue-500">
              {item.label}
            </span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 md:mt-10">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AllJob;
