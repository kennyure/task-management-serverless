const { getItem, deleteItem } = require('../utils/dynamodb');
const { successResponse, notFoundResponse, badRequestResponse, serverErrorResponse } = require('../utils/response');

/**
 * Lambda handler to delete a task
 */
exports.handler = async (event) => {
  try {
    // Get task ID from path parameters
    const taskId = event.pathParameters?.id;

    if (!taskId) {
      return badRequestResponse('Task ID is required');
    }

    // Check if task exists
    const existingTask = await getItem(taskId);
    if (!existingTask) {
      return notFoundResponse('Task not found');
    }

    // Delete task from DynamoDB
    await deleteItem(taskId);

    return successResponse({ id: taskId }, 'Task deleted successfully');
  } catch (error) {
    console.error('Error deleting task:', error);
    return serverErrorResponse('Failed to delete task', error);
  }
};
