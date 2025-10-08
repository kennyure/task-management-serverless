import TaskItem from './TaskItem';
import { SkeletonCard } from '../common/Skeleton';
import { FaTasks } from 'react-icons/fa';

/**
 * Task List Component - Displays a grid of task cards
 */
const TaskList = ({ tasks, isLoading, onEdit, onDelete }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (!tasks || tasks.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-6">
          <FaTasks className="text-5xl text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">No tasks found</h3>
        <p className="text-gray-500 text-lg">
          Create your first task to get started on your productivity journey!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {tasks.map((task, index) => (
        <div
          key={task.id}
          style={{ animationDelay: `${index * 50}ms` }}
          className="animate-fadeIn"
        >
          <TaskItem
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;



