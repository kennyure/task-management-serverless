import { FaSearch, FaTimes, FaCheckCircle, FaClock, FaCircle, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useUIStore } from '../../store/uiStore';
import { STATUS_FILTER_OPTIONS, PRIORITY_FILTER_OPTIONS } from '../../utils/constants';

/**
 * Task Filters Component - Interactive filters with pills
 */
const TaskFilters = () => {
  const {
    statusFilter,
    priorityFilter,
    searchQuery,
    sortBy,
    sortOrder,
    setStatusFilter,
    setPriorityFilter,
    setSearchQuery,
    setSortBy,
    toggleSortOrder,
    resetFilters,
  } = useUIStore();

  const hasActiveFilters = statusFilter !== 'all' || priorityFilter !== 'all' || searchQuery;

  const statusIcons = {
    pending: <FaCircle className="text-gray-500" />,
    'in-progress': <FaClock className="text-blue-500" />,
    completed: <FaCheckCircle className="text-green-500" />,
  };

  return (
    <div className="space-y-4 mb-8">
      {/* Search Bar */}
      <div className="relative group">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
        <input
          type="text"
          placeholder="Search tasks by title or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all text-gray-700 placeholder-gray-400 shadow-sm hover:shadow-md"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes />
          </button>
        )}
      </div>

      {/* Filter Pills and Sort */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Status Filter Pills */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-600">Status:</span>
          {STATUS_FILTER_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => setStatusFilter(option.value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all transform hover:scale-105 ${
                statusFilter === option.value
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {option.value !== 'all' && statusIcons[option.value]}
              <span>{option.label}</span>
            </button>
          ))}
        </div>

        {/* Priority Filter Pills */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-600">Priority:</span>
          {PRIORITY_FILTER_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => setPriorityFilter(option.value)}
              className={`px-4 py-2 rounded-xl font-medium transition-all transform hover:scale-105 ${
                priorityFilter === option.value
                  ? option.value === 'all'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                    : option.value === 'high'
                    ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-lg'
                    : option.value === 'medium'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                    : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Sort Controls */}
        <button
          onClick={() => setSortBy(sortBy === 'createdAt' ? 'priority' : 'createdAt')}
          className="ml-auto flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-medium text-gray-700"
        >
          <span>Sort: {sortBy === 'createdAt' ? 'Date' : 'Priority'}</span>
        </button>
        
        <button
          onClick={toggleSortOrder}
          className="px-3 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
          title={`Sort ${sortOrder === 'asc' ? 'Ascending' : 'Descending'}`}
        >
          {sortOrder === 'asc' ? <FaArrowUp className="text-gray-600" /> : <FaArrowDown className="text-gray-600" />}
        </button>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all font-medium animate-pulse"
          >
            <FaTimes />
            <span>Clear All</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskFilters;


