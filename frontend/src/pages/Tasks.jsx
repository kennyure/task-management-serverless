import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Header from '../components/layout/Header';
import Container from '../components/layout/Container';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import ConfirmDialog from '../components/common/ConfirmDialog';
import TaskList from '../components/tasks/TaskList';
import TaskForm from '../components/tasks/TaskForm';
import TaskFilters from '../components/tasks/TaskFilters';
import TaskStats from '../components/tasks/TaskStats';
import { ToastContainer } from '../components/common/Toast';
import { SkeletonStats } from '../components/common/Skeleton';
import { useTasks, useCreateTask, useUpdateTask, useDeleteTask } from '../hooks/useTasks';
import { useFilteredTasks } from '../hooks/useFilteredTasks';
import { useToast } from '../hooks/useToast';

/**
 * Main Tasks Page
 */
const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const { toasts, addToast, removeToast } = useToast();

  // React Query hooks
  const { data: tasks, isLoading } = useTasks();
  const createTaskMutation = useCreateTask();
  const updateTaskMutation = useUpdateTask();
  const deleteTaskMutation = useDeleteTask();

  // Filter and sort tasks
  const filteredTasks = useFilteredTasks(tasks);

  // Open modal for creating a new task
  const handleCreateClick = () => {
    setSelectedTask(null);
    setIsModalOpen(true);
  };

  // Open modal for editing a task
  const handleEditClick = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  // Handle form submission (create or update)
  const handleFormSubmit = async (formData) => {
    try {
      if (selectedTask) {
        // Update existing task
        await updateTaskMutation.mutateAsync({
          id: selectedTask.id,
          ...formData,
        });
        addToast('Task updated successfully!', 'success');
      } else {
        // Create new task
        await createTaskMutation.mutateAsync(formData);
        addToast('Task created successfully!', 'success');
      }
      handleCloseModal();
    } catch (error) {
      console.error('Error saving task:', error);
      addToast('Failed to save task. Please try again.', 'error');
    }
  };

  // Handle task deletion
  const handleDeleteClick = (task) => {
    setTaskToDelete(task);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (taskToDelete) {
      try {
        await deleteTaskMutation.mutateAsync(taskToDelete.id);
        addToast('Task deleted successfully!', 'success');
        setTaskToDelete(null);
      } catch (error) {
        console.error('Error deleting task:', error);
        addToast('Failed to delete task. Please try again.', 'error');
      }
    }
  };

  const isSubmitting = createTaskMutation.isPending || updateTaskMutation.isPending;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      
      <Container>
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">My Tasks</h2>
            <p className="text-gray-600 mt-1">
              {filteredTasks?.length || 0} of {tasks?.length || 0} {tasks?.length === 1 ? 'task' : 'tasks'}
            </p>
          </div>
          <Button
            onClick={handleCreateClick}
            variant="primary"
            size="lg"
            className="flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <FaPlus />
            <span>New Task</span>
          </Button>
        </div>

        {/* Stats */}
        {isLoading ? <SkeletonStats /> : <TaskStats tasks={tasks || []} />}

        {/* Filters */}
        <TaskFilters />

        {/* Task List */}
        <TaskList
          tasks={filteredTasks}
          isLoading={isLoading}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
        />

        {/* Task Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedTask ? 'Edit Task' : 'Create New Task'}
          size="md"
        >
          <TaskForm
            task={selectedTask}
            onSubmit={handleFormSubmit}
            onCancel={handleCloseModal}
            isSubmitting={isSubmitting}
          />
        </Modal>

        {/* Delete Confirmation Dialog */}
        <ConfirmDialog
          isOpen={isDeleteDialogOpen}
          onClose={() => {
            setIsDeleteDialogOpen(false);
            setTaskToDelete(null);
          }}
          onConfirm={confirmDelete}
          title="Delete Task?"
          message={`Are you sure you want to delete "${taskToDelete?.title}"? This action cannot be undone.`}
          type="danger"
        />
      </Container>
    </div>
  );
};

export default Tasks;

