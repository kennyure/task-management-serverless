import apiClient from './client';

/**
 * Fetch all tasks
 */
export const fetchTasks = async () => {
  const response = await apiClient.get('/tasks');
  return response.data;
};

/**
 * Fetch a single task by ID
 */
export const fetchTask = async (id) => {
  const response = await apiClient.get(`/tasks/${id}`);
  return response.data;
};

/**
 * Create a new task
 */
export const createTask = async (taskData) => {
  const response = await apiClient.post('/tasks', taskData);
  return response.data;
};

/**
 * Update an existing task
 */
export const updateTask = async ({ id, ...taskData }) => {
  const response = await apiClient.put(`/tasks/${id}`, taskData);
  return response.data;
};

/**
 * Delete a task
 */
export const deleteTask = async (id) => {
  const response = await apiClient.delete(`/tasks/${id}`);
  return response.data;
};



