# Task Management System - Full Stack Serverless Application

A complete serverless task management application built with React frontend and AWS serverless backend infrastructure.

## 🎯 Project Overview

This project demonstrates a modern full-stack application architecture using:
- **Frontend**: React, Vite, Tailwind CSS, React Query, Zustand
- **Backend**: AWS Lambda, API Gateway, DynamoDB
- **Infrastructure**: Serverless Framework
- **CI/CD**: GitHub Actions

## 🏗️ Architecture

```
┌─────────────────┐
│   React App     │
│   (Frontend)    │
│                 │
│  - Vite         │
│  - Tailwind     │
│  - React Query  │
│  - Zustand      │
└────────┬────────┘
         │
         │ HTTPS/REST
         │
         ▼
┌─────────────────┐
│  API Gateway    │
│  (REST API)     │
└────────┬────────┘
         │
         │
         ▼
┌─────────────────┐       ┌──────────────┐
│  Lambda         │◄─────►│  DynamoDB    │
│  Functions      │       │  Tables      │
│                 │       │              │
│  - createTask   │       │  - Tasks     │
│  - getTasks     │       └──────────────┘
│  - getTask      │
│  - updateTask   │
│  - deleteTask   │
└─────────────────┘
```

## ✨ Features

### Core Functionality
- ✅ **Create** - Add new tasks with details
- ✅ **Read** - View all tasks or single task
- ✅ **Update** - Edit existing tasks
- ✅ **Delete** - Remove tasks with confirmation

### Advanced Features
- ✅ **Real-time Search** - Filter tasks by title/description
- ✅ **Status Filtering** - Pending, In Progress, Completed
- ✅ **Priority Filtering** - Low, Medium, High
- ✅ **Sorting** - By date, priority, status, title
- ✅ **Statistics Dashboard** - Task metrics and counts
- ✅ **Responsive Design** - Mobile, tablet, desktop, large screens
- ✅ **Optimistic Updates** - Instant UI feedback
- ✅ **Error Handling** - Graceful error messages
- ✅ **Loading States** - Spinners and skeletons

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or later
- AWS Account with credentials configured
- npm or yarn

### Backend Setup

1. **Navigate to backend**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Deploy to AWS**:
   ```bash
   # Deploy to development
   npm run deploy:dev
   
   # Deploy to production
   npm run deploy:prod
   ```

4. **Note the API endpoint URL** from deployment output

### Frontend Setup

1. **Navigate to frontend**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment**:
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your API endpoint:
   ```
   VITE_API_URL=https://your-api-id.execute-api.us-east-1.amazonaws.com/dev
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```
   
   Visit: `http://localhost:5173`

## 📁 Project Structure

```
assessment/
├── backend/                    # Serverless backend
│   ├── src/
│   │   ├── handlers/          # Lambda functions
│   │   └── utils/             # Utilities
│   ├── serverless.yml         # Infrastructure as Code
│   ├── package.json
│   └── README.md
│
├── frontend/                   # React frontend
│   ├── src/
│   │   ├── api/               # API integration
│   │   ├── components/        # React components
│   │   ├── hooks/             # Custom hooks
│   │   ├── pages/             # Page components
│   │   ├── store/             # State management
│   │   └── utils/             # Utilities
│   ├── package.json
│   └── README.md
│
├── .github/
│   └── workflows/
│       └── deploy.yml         # CI/CD pipeline
│
├── API_ENDPOINTS.md           # API documentation
├── BACKEND_PLAN.md            # Backend architecture
├── FRONTEND_PLAN.md           # Frontend architecture
├── IMPLEMENTATION_PLAN.md     # Phase-by-phase plan
└── README.md                  # This file
```

## 🔧 Technology Stack

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| React | UI Framework | 18.x |
| Vite | Build Tool | 7.x |
| Tailwind CSS | Styling | 3.4.x |
| React Query | Server State | Latest |
| Zustand | Client State | Latest |
| Axios | HTTP Client | Latest |

### Backend
| Technology | Purpose | Version |
|------------|---------|---------|
| Node.js | Runtime | 18.x |
| Serverless Framework | IaC | 3.x |
| AWS Lambda | Compute | - |
| API Gateway | REST API | - |
| DynamoDB | Database | - |
| AWS SDK v3 | AWS Integration | Latest |

### DevOps
| Tool | Purpose |
|------|---------|
| GitHub Actions | CI/CD Pipeline |
| AWS CloudFormation | Infrastructure |
| CloudWatch | Logging & Monitoring |

## 🌐 API Endpoints

**Base URL**: `https://b9xjrr67lf.execute-api.us-east-1.amazonaws.com/dev`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/tasks` | Create a new task |
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/{id}` | Get a specific task |
| PUT | `/tasks/{id}` | Update a task |
| DELETE | `/tasks/{id}` | Delete a task |

See [API_ENDPOINTS.md](./API_ENDPOINTS.md) for detailed documentation.

## 🚢 Deployment

### Backend Deployment (Serverless Framework)

The backend is deployed using Serverless Framework to AWS:

```bash
cd backend
npm run deploy:dev   # Development environment
npm run deploy:prod  # Production environment
```

**What gets deployed:**
- 5 Lambda functions (CRUD operations)
- API Gateway REST API
- DynamoDB table
- IAM roles and permissions
- CloudWatch log groups

### Frontend Deployment Options

#### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
cd frontend
vercel
```

#### Option 2: Netlify
```bash
npm install -g netlify-cli
cd frontend
npm run build
netlify deploy --prod --dir=dist
```

#### Option 3: AWS Amplify
1. Connect GitHub repository
2. Configure build: `npm run build`
3. Set output directory: `dist`
4. Set environment variables
5. Deploy

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

The project includes automated CI/CD using GitHub Actions:

**Triggers:**
- **Pull Request** → Deploy to `dev` environment
- **Push to master** → Deploy to `prod` environment

**Pipeline Steps:**
1. Checkout code
2. Setup Node.js
3. Install dependencies
4. Configure AWS credentials
5. Deploy with Serverless Framework
6. Run tests (future)

### Required GitHub Secrets

Add these to your repository secrets:
- `AWS_ACCESS_KEY_ID` - Your AWS access key
- `AWS_SECRET_ACCESS_KEY` - Your AWS secret key

**Path**: Settings → Secrets and variables → Actions

## 📊 AWS Resources Created

### Development Environment (`dev`)
- **Lambda Functions**: 5 (createTask, getTasks, getTask, updateTask, deleteTask)
- **API Gateway**: REST API with CORS enabled
- **DynamoDB Table**: `task-management-api-tasks-dev`
- **IAM Role**: Lambda execution role with DynamoDB permissions
- **CloudWatch**: Log groups for each function

### Production Environment (`prod`)
- Same resources with `-prod` suffix

### Cost Estimate
- **Free Tier**: Covers typical development usage
- **Beyond Free Tier**: 
  - Lambda: $0.20 per 1M requests
  - DynamoDB: $1.25 per million writes
  - API Gateway: $3.50 per million requests

## 🧪 Testing

### Backend API Testing

```bash
# Create a task
curl -X POST https://your-api-url/dev/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Task","status":"pending","priority":"high"}'

# Get all tasks
curl https://your-api-url/dev/tasks

# Update a task
curl -X PUT https://your-api-url/dev/tasks/{id} \
  -H "Content-Type: application/json" \
  -d '{"status":"completed"}'

# Delete a task
curl -X DELETE https://your-api-url/dev/tasks/{id}
```

### Frontend Testing

```bash
cd frontend
npm run dev  # Start dev server
# Open http://localhost:5173 in browser
```

## 📈 Monitoring

### CloudWatch Logs
```bash
# View logs for a specific function
serverless logs -f createTask --stage dev --tail

# Or using AWS CLI
aws logs tail /aws/lambda/task-management-api-dev-createTask --follow
```

### Metrics
- Lambda invocations
- API Gateway requests
- DynamoDB read/write units
- Error rates
- Response times

## 🔒 Security

### Backend
- ✅ IAM roles with least privilege
- ✅ CORS configured for frontend domain
- ✅ Input validation in Lambda functions
- ✅ Environment-based configuration
- ✅ No hardcoded credentials

### Frontend
- ✅ Environment variables for sensitive data
- ✅ HTTPS only in production
- ✅ XSS protection via React
- ✅ CSRF protection via same-origin policy

## 📝 Environment Variables

### Backend
No environment variables needed (configured in `serverless.yml`)

### Frontend
```bash
VITE_API_URL=https://your-api-endpoint.com/dev
VITE_APP_NAME=Task Manager
```

## 🐛 Troubleshooting

### Backend Issues

**Issue**: Deployment fails with IAM errors
- Solution: Ensure AWS credentials have necessary permissions (see IMPLEMENTATION_PLAN.md)

**Issue**: API returns 502 Bad Gateway
- Solution: Check Lambda function logs in CloudWatch

### Frontend Issues

**Issue**: API connection errors
- Solution: Verify `.env` file has correct API URL

**Issue**: Build fails
- Solution: Delete `node_modules`, run `npm install` again

## 📚 Documentation

- [Backend README](./backend/README.md) - Backend setup and API docs
- [Frontend README](./frontend/README.md) - Frontend setup and features
- [API Endpoints](./API_ENDPOINTS.md) - Detailed API documentation
- [Backend Architecture](./BACKEND_PLAN.md) - Backend design decisions
- [Frontend Architecture](./FRONTEND_PLAN.md) - Frontend design decisions
- [Implementation Plan](./IMPLEMENTATION_PLAN.md) - Phase-by-phase development

## ✅ Project Status

All core features and requirements completed:

- [x] Serverless Framework REST API with AWS
- [x] 5 Lambda functions for CRUD operations
- [x] DynamoDB for data storage
- [x] GitHub Actions CI/CD pipeline
- [x] Multi-stage deployments (dev/prod)
- [x] React frontend with modern stack
- [x] All 4 CRUD operations working
- [x] Responsive design (4+ device sizes)
- [x] Modern UI with Tailwind CSS
- [x] Complete documentation

## 🔮 Future Enhancements

- [ ] User authentication with AWS Cognito
- [ ] Unit and integration tests
- [ ] Load testing
- [ ] Custom domain names
- [ ] WebSocket for real-time updates
- [ ] File attachments (S3)
- [ ] Email notifications (SES)
- [ ] Analytics dashboard
- [ ] Dark mode
- [ ] PWA support

## 📄 License

MIT

## 👨‍💻 Author

Kenny Urena

## 🙏 Acknowledgments

- AWS for serverless infrastructure
- Serverless Framework for deployment simplification
- React and Vite teams for excellent developer experience
- Tailwind CSS for utility-first styling
- TanStack Query for powerful data synchronization

---

**Built with modern web technologies and serverless architecture** 🚀

---

## 🌐 Live Demo

- **GitHub Repository**: https://github.com/kennyure/task-management-serverless
- **Frontend Application**: https://task-manager-kenny.vercel.app
- **Backend API**: https://b9xjrr67lf.execute-api.us-east-1.amazonaws.com/dev
- **CI/CD Pipeline**: https://github.com/kennyure/task-management-serverless/actions


