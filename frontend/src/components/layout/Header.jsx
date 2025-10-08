import { FaTasks, FaGithub } from 'react-icons/fa';

/**
 * Header Component
 */
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
              <FaTasks className="text-white text-3xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                Task Manager Pro
              </h1>
              <p className="text-blue-100 text-sm">Serverless Task Management System</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/kennyure/task-management-serverless" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              <FaGithub className="text-white text-xl" />
              <span className="text-white font-medium hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;



