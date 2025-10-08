const { getItem } = require('../utils/dynamodb');
const { successResponse, notFoundResponse, badRequestResponse, serverErrorResponse } = require('../utils/response');

/**
 * Lambda handler to get a single task by ID
 */
exports.handler = async (event) => {
  try {
    // Get task ID from path parameters
    const taskId = event.pathParameters?.id;

    if (!taskId) {
      return badRequestResponse('Task ID is required');
    }

    // Get task from DynamoDB
    const task = await getItem(taskId);

    if (!task) {
      return notFoundResponse('Task not found');
    }

    return successResponse(task, 'Task retrieved successfully');
  } catch (error) {
    console.error('Error getting task:', error);
    return serverErrorResponse('Failed to retrieve task', error);
  }
};
