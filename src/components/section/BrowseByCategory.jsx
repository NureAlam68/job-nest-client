
import { FaBullhorn, FaHeadset, FaUniversity, FaCode, FaUserTie } from 'react-icons/fa';

const categories = [
  { id: 1, icon: <FaBullhorn size={30} />, title: 'Marketing & Sale', jobs: '1526 Jobs Available' },
  { id: 2, icon: <FaHeadset size={30} />, title: 'Customer Help', jobs: '185 Jobs Available' },
  { id: 3, icon: <FaUniversity size={30} />, title: 'Finance', jobs: '168 Jobs Available' },
  { id: 4, icon: <FaCode size={30} />, title: 'Software', jobs: '1856 Jobs Available' },
  { id: 5, icon: <FaUserTie size={30} />, title: 'Human Resource', jobs: '165 Jobs Available' },
];

const BrowseByCategory = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Browse by category</h2>
        <p className="text-gray-600">Find the job that’s perfect for you. about 800+ new jobs everyday</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4 max-w-7xl mx-auto">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-lg p-6 border-2 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="text-blue-500 mb-4">{category.icon}</div>
            <h3 className="text-lg font-medium text-gray-800">{category.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{category.jobs}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;
