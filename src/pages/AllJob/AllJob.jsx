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


const AllJob = () => {
    const [jobs, setJobs] = useState([]);
    const [categoryJobs, setCategoryJobs] = useState("");
    const [activeCategory, setActiveCategory] = useState("All Jobs");
   
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
    const query = categoryJobs ? `?category=${categoryJobs}` : "";
     fetch(`http://localhost:3000/jobs${query}`)
     .then(res => res.json())
     .then(data => {
       setJobs(data)
     })
   }, [categoryJobs])

   const handleCategoryClick = (category) => {
    setCategoryJobs(category === "All Jobs" ? "" : category);
    setActiveCategory(category);
  };
   
     return (
       <div className="px-4 md:px-10 lg:px-6 mt-10 md:mt-14 lg:mt-20">
         <h2 className="text-4xl font-bold text-center mb-8">All Job Here</h2>
        <div className="flex flex-wrap justify-center gap-4 p-4">
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
             <span className="text-sm font-medium text-black hover:text-blue-500">{item.label}</span>
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