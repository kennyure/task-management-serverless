import { FaTasks, FaCheckCircle, FaClock, FaExclamationCircle } from 'react-icons/fa';

/**
 * Task Stats Component - Displays task statistics
 */
const TaskStats = ({ tasks = [] }) => {
  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === 'completed').length,
    inProgress: tasks.filter((t) => t.status === 'in-progress').length,
    pending: tasks.filter((t) => t.status === 'pending').length,
    high: tasks.filter((t) => t.priority === 'high').length,
  };

  const statCards = [
    {
      label: 'Total Tasks',
      value: stats.total,
      icon: FaTasks,
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
    },
    {
      label: 'Completed',
      value: stats.completed,
      icon: FaCheckCircle,
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-100',
    },
    {
      label: 'In Progress',
      value: stats.inProgress,
      icon: FaClock,
      gradient: 'from-amber-500 to-orange-600',
      bgGradient: 'from-amber-50 to-orange-100',
    },
    {
      label: 'High Priority',
      value: stats.high,
      icon: FaExclamationCircle,
      gradient: 'from-red-500 to-rose-600',
      bgGradient: 'from-red-50 to-rose-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statCards.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            <div className="relative p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600 group-hover:text-gray-700 transition-colors">
                    {stat.label}
                  </p>
                  <p className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </p>
                </div>
                <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.gradient} transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="text-white" size={28} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskStats;


