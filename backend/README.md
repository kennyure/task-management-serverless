# Task Management API - Backend

A serverless REST API built with AWS Lambda, API Gateway, and DynamoDB for managing tasks.

## 🏗️ Architecture

This application uses:
- **AWS Lambda**: Serverless compute for handling API requests
- **API Gateway**: RESTful API endpoints
- **DynamoDB**: NoSQL database for task storage
- **Serverless Framework**: Infrastructure as Code (IaC)
- **GitHub Actions**: CI/CD pipeline for automated deployments

## 📋 Features

- ✅ **Create Task**: Add new tasks with title, description, priority, and status
- ✅ **Read Tasks**: Get all tasks or a specific task by ID
- ✅ **Update Task**: Modify existing task details
- ✅ **Delete Task**: Remove tasks from the system
- ✅ **Multi-stage Deployments**: Separate dev and prod environments
- ✅ **CORS Enabled**: Frontend-ready with cross-origin support

## 🚀 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/tasks` | Create a new task |
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/{id}` | Get a specific task |
| PUT | `/tasks/{id}` | Update a task |
| DELETE | `/tasks/{id}` | Delete a task |

## 📦 Task Schema

```json
{
  "id": "uuid-v4",
  "title": "string (required)",
  "description": "string (optional)",
  "status": "pending | in-progress | completed",
  "priority": "low | medium | high",
  "createdAt": "ISO-8601 timestamp",
  "updatedAt": "ISO-8601 timestamp"
}
```

## 🛠️ Prerequisites

- Node.js 18.x or later
- AWS Account with appropriate permissions
- AWS CLI configured
- Serverless Framework installed globally (`npm install -g serverless`)

## 📥 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd assessment/backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure AWS credentials**:
   ```bash
   aws configure
   ```

## 🚢 Deployment

### Manual Deployment

Deploy to **dev** environment:
```bash
npm run deploy:dev
```

Deploy to **production** environment:
```bash
npm run deploy:prod
```

### CI/CD Pipeline

The project uses **GitHub Actions** for automated deployments:

- **Pull Requests**: Automatically deploy to `dev` environment
- **Push to master/main**: Automatically deploy to `production` environment

#### Setup CI/CD:

1. **Add AWS credentials to GitHub Secrets**:
   - Go to repository Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `AWS_ACCESS_KEY_ID`
     - `AWS_SECRET_ACCESS_KEY`

2. **Push to trigger deployment**:
   ```bash
   git push origin master
   ```

3. **Monitor deployment**:
   - Check the "Actions" tab in GitHub repository
   - View real-time deployment logs and status

## 📝 API Usage Examples

### Create a Task

```bash
curl -X POST https://<api-id>.execute-api.us-east-1.amazonaws.com/dev/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete project documentation",
    "description": "Write comprehensive README files",
    "status": "in-progress",
    "priority": "high"
  }'
```

### Get All Tasks

```bash
curl https://<api-id>.execute-api.us-east-1.amazonaws.com/dev/tasks
```

### Get a Specific Task

```bash
curl https://<api-id>.execute-api.us-east-1.amazonaws.com/dev/tasks/{task-id}
```

### Update a Task

```bash
curl -X PUT https://<api-id>.execute-api.us-east-1.amazonaws.com/dev/tasks/{task-id} \
  -H "Content-Type: application/json" \
  -d '{
    "status": "completed"
  }'
```

### Delete a Task

```bash
curl -X DELETE https://<api-id>.execute-api.us-east-1.amazonaws.com/dev/tasks/{task-id}
```

## 🗂️ Project Structure

```
backend/
├── src/
│   ├── handlers/           # Lambda function handlers
│   │   ├── createTask.js   # POST /tasks
│   │   ├── getTasks.js     # GET /tasks
│   │   ├── getTask.js      # GET /tasks/{id}
│   │   ├── updateTask.js   # PUT /tasks/{id}
│   │   └── deleteTask.js   # DELETE /tasks/{id}
│   └── utils/              # Utility functions
│       ├── dynamodb.js     # DynamoDB operations
│       └── response.js     # HTTP response helpers
├── serverless.yml          # Serverless Framework configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🧪 Local Development

Run the API locally using Serverless Offline:

```bash
npm run local
```

The API will be available at: `http://localhost:3000`

## 📊 DynamoDB Table Structure

**Table Name**: `task-management-api-tasks-{stage}`

**Primary Key**:
- Partition Key: `id` (String)

**Billing Mode**: PAY_PER_REQUEST (On-Demand)

## 🔒 IAM Permissions

The Lambda functions have the following DynamoDB permissions:
- `dynamodb:Query`
- `dynamodb:Scan`
- `dynamodb:GetItem`
- `dynamodb:PutItem`
- `dynamodb:UpdateItem`
- `dynamodb:DeleteItem`

## 🗑️ Cleanup

To remove all resources:

```bash
# Remove dev environment
npm run remove:dev

# Remove production environment
npm run remove:prod
```

## 📈 Monitoring and Logs

View Lambda logs:
```bash
# View logs for a specific function
npm run logs -- createTask --stage dev

# Tail logs in real-time
serverless logs -f createTask --stage dev --tail
```

## 🔧 Environment Variables

The following environment variables are automatically configured:

- `TASKS_TABLE`: DynamoDB table name
- `STAGE`: Deployment stage (dev/prod)
- `AWS_REGION`: AWS region (default: us-east-1)

## 🎯 Best Practices Implemented

1. **Separation of Concerns**: Handlers, utilities, and business logic are separated
2. **Error Handling**: Comprehensive error handling with appropriate HTTP status codes
3. **Input Validation**: Request validation before processing
4. **Idempotency**: Update operations are idempotent
5. **CORS Support**: Enabled for frontend integration
6. **Standardized Responses**: Consistent response format across all endpoints
7. **Environment Isolation**: Separate dev and prod environments
8. **Infrastructure as Code**: All resources defined in Serverless Framework

## 📄 License

MIT

## 👥 Contributors

- Your Name

## 🔗 Related Documentation

- [Serverless Framework Docs](https://www.serverless.com/framework/docs)
- [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/)
- [DynamoDB Developer Guide](https://docs.aws.amazon.com/dynamodb/)
- [API Gateway Documentation](https://docs.aws.amazon.com/apigateway/)
