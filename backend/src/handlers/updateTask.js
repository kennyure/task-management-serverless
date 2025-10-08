const { getItem, updateItem } = require('../utils/dynamodb');
const { successResponse, notFoundResponse, badRequestResponse, serverErrorResponse } = require('../utils/response');

/**
 * Lambda handler to update a task
 */
exports.handler = async (event) => {
  try {
    // Get task ID from path parameters
    const taskId = event.pathParameters?.id;

    if (!taskId) {
      return badRequestResponse('Task ID is required');
    }

    // Parse request body
    const body = JSON.parse(event.body || '{}');

    // Check if task exists
    const existingTask = await getItem(taskId);
    if (!existingTask) {
      return notFoundResponse('Task not found');
    }

    // Build update object (only include fields that were provided)
    const updates = {
      updatedAt: new Date().toISOString(),
    };

    if (body.title !== undefined && body.title.trim()) {
      updates.title = body.title.trim();
    }

    if (body.description !== undefined) {
      updates.description = body.description.trim();
    }

    if (body.status !== undefined) {
      updates.status = body.status;
    }

    if (body.priority !== undefined) {
      updates.priority = body.priority;
    }

    // Update task in DynamoDB
    const updatedTask = await updateItem(taskId, updates);

    return successResponse(updatedTask, 'Task updated successfully');
  } catch (error) {
    console.error('Error updating task:', error);
    return serverErrorResponse('Failed to update task', error);
  }
};
