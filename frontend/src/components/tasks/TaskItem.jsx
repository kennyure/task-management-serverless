import { FaEdit, FaTrash, FaClock, FaCheckCircle } from 'react-icons/fa';
import Badge from '../common/Badge';
import { formatRelativeTime, getStatusColor, getPriorityColor } from '../../utils/formatters';

/**
 * Task Item Component - Displays a single task card
 */
const TaskItem = ({ task, onEdit, onDelete }) => {
  const statusColor = getStatusColor(task.status);
  const priorityColor = getPriorityColor(task.priority);

  const priorityStyles = {
    high: 'border-l-4 border-red-500',
    medium: 'border-l-4 border-yellow-500',
    low: 'border-l-4 border-green-500',
  };

  return (
    <div className={`group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden ${priorityStyles[task.priority] || ''} flex flex-col h-full`}>
      <div className="p-6 flex flex-col flex-1">
        {/* Header - Fixed Height */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
            {task.title}
          </h3>
          <div className="h-10">
            {task.description && (
              <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                {task.description}
              </p>
            )}
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
            task.status === 'completed' ? 'bg-green-100 text-green-800' :
            task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {task.status === 'completed' && <FaCheckCircle className="mr-1" />}
            {task.status.replace('-', ' ')}
          </span>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
            task.priority === 'high' ? 'bg-red-100 text-red-800' :
            task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}>
            {task.priority} priority
          </span>
        </div>

        {/* Footer - Pushed to bottom */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center text-xs text-gray-500">
            <FaClock className="mr-2 text-gray-400" />
            <span>{formatRelativeTime(task.updatedAt)}</span>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onEdit(task)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              aria-label="Edit task"
            >
              <FaEdit size={18} />
            </button>
            <button
              onClick={() => onDelete(task)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              aria-label="Delete task"
            >
              <FaTrash size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;



