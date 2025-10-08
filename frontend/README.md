# Task Manager - Frontend

A modern, responsive React application for task management built with Vite, Tailwind CSS, React Query, and Zustand.

## 🎨 Features

### Core Functionality
- ✅ **Create Tasks** - Add new tasks with title, description, status, and priority
- ✅ **View Tasks** - Display all tasks in a responsive grid layout
- ✅ **Update Tasks** - Edit existing tasks with pre-filled forms
- ✅ **Delete Tasks** - Remove tasks with confirmation dialog
- ✅ **Real-time Updates** - Optimistic UI updates for instant feedback

### Advanced Features
- ✅ **Search** - Real-time search across task titles and descriptions
- ✅ **Filters** - Filter by status (Pending, In Progress, Completed)
- ✅ **Priority Filter** - Filter by priority (Low, Medium, High)
- ✅ **Sorting** - Sort by date, priority, status, or title
- ✅ **Task Statistics** - Dashboard with task counts and metrics
- ✅ **Responsive Design** - Optimized for mobile, tablet, desktop, and large screens

### UI/UX
- ✅ **Loading States** - Skeleton screens and spinners
- ✅ **Empty States** - Helpful messages when no tasks exist
- ✅ **Error Handling** - Graceful error messages
- ✅ **Modal Dialogs** - Clean task creation/editing experience
- ✅ **Keyboard Support** - ESC to close modals, accessible forms

## 🏗️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 18.x |
| **Vite** | Build Tool | 7.x |
| **Tailwind CSS** | Styling | 3.4.x |
| **React Query** | Server State | Latest |
| **Zustand** | Client State | Latest |
| **Axios** | HTTP Client | Latest |
| **React Icons** | Icons | Latest |
| **date-fns** | Date Formatting | Latest |
| **React Hook Form** | Form Handling | Latest |

## 📁 Project Structure

```
frontend/
├── src/
│   ├── api/                    # API integration layer
│   │   ├── client.js           # Axios instance with interceptors
│   │   └── tasks.js            # Task API functions
│   │
│   ├── components/             # React components
│   │   ├── common/             # Reusable components
│   │   │   ├── Badge.jsx       # Status/Priority badges
│   │   │   ├── Button.jsx      # Styled button
│   │   │   ├── Modal.jsx       # Modal dialog
│   │   │   └── Spinner.jsx     # Loading spinner
│   │   │
│   │   ├── layout/             # Layout components
│   │   │   ├── Container.jsx   # Main container
│   │   │   └── Header.jsx      # App header
│   │   │
│   │   └── tasks/              # Task-specific components
│   │       ├── TaskFilters.jsx # Filter controls
│   │       ├── TaskForm.jsx    # Create/Edit form
│   │       ├── TaskItem.jsx    # Task card
│   │       ├── TaskList.jsx    # Task grid
│   │       └── TaskStats.jsx   # Statistics dashboard
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useTasks.js         # React Query hooks
│   │   └── useFilteredTasks.js # Filter/sort logic
│   │
│   ├── pages/                  # Page components
│   │   └── Tasks.jsx           # Main tasks page
│   │
│   ├── store/                  # Zustand stores
│   │   └── uiStore.js          # UI state management
│   │
│   ├── utils/                  # Utility functions
│   │   ├── constants.js        # App constants
│   │   └── formatters.js       # Formatting utilities
│   │
│   ├── App.jsx                 # Root component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
│
├── public/                     # Static assets
├── .env                        # Environment variables
├── .env.example               # Environment template
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js            # Vite configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies

```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd assessment/frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your backend API URL:
   ```
   VITE_API_URL=https://your-api-endpoint.execute-api.us-east-1.amazonaws.com/dev
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:5173`

## 📜 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎨 State Management

### React Query (Server State)
Handles all API data fetching, caching, and synchronization:

- **Queries**: Fetch tasks from the backend
- **Mutations**: Create, update, delete tasks
- **Optimistic Updates**: Instant UI feedback before server confirmation
- **Cache Management**: Automatic refetching and invalidation

### Zustand (Client State)
Manages UI-specific state:

- **Modal State**: Open/close, mode (create/edit)
- **Filters**: Status, priority, search query
- **Sorting**: Sort field and order
- **Actions**: Methods to update state

## 📱 Responsive Design

The application is fully responsive across multiple device sizes:

### Breakpoints
| Device | Breakpoint | Layout |
|--------|-----------|--------|
| Mobile | < 640px | 1 column grid, stacked filters |
| Tablet | 640px - 1024px | 2 column grid, compact filters |
| Desktop | 1024px - 1536px | 3 column grid, full filters |
| Large Desktop | > 1536px | 4 column grid, dashboard view |

### Responsive Features
- ✅ Mobile-first design approach
- ✅ Touch-friendly button sizes
- ✅ Adaptive grid layouts
- ✅ Collapsible navigation
- ✅ Optimized form layouts

## 🔌 API Integration

### Axios Client
Configured with:
- Base URL from environment variables
- Request/Response interceptors
- Automatic error handling
- JSON content-type headers

### API Endpoints
All CRUD operations are handled through the `/tasks` endpoint:

```javascript
// Fetch all tasks
GET /tasks

// Fetch single task
GET /tasks/{id}

// Create task
POST /tasks
{
  "title": "string",
  "description": "string",
  "status": "pending|in-progress|completed",
  "priority": "low|medium|high"
}

// Update task
PUT /tasks/{id}
{
  "title": "string",
  "description": "string",
  "status": "string",
  "priority": "string"
}

// Delete task
DELETE /tasks/{id}
```

## 🎯 Features in Detail

### Task Creation
1. Click "New Task" button
2. Fill in task details (title required)
3. Select status and priority
4. Submit to create

### Task Filtering
- **Status Filter**: All, Pending, In Progress, Completed
- **Priority Filter**: All, Low, Medium, High
- **Search**: Real-time search across titles and descriptions
- **Clear Filters**: Reset all filters to default

### Task Sorting
- **Sort By**: Date Created, Last Updated, Priority, Status, Title
- **Sort Order**: Ascending (↑) or Descending (↓)

### Task Statistics
- Total task count
- Completed tasks count
- In-progress tasks count
- High-priority tasks count

## 🎨 Styling

### Tailwind CSS
Utility-first CSS framework for rapid UI development:

```javascript
// Custom color palette
colors: {
  primary: {
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

### Design System
- **Colors**: Blue primary, semantic status colors
- **Typography**: System fonts, responsive sizing
- **Spacing**: Consistent 4px grid system
- **Shadows**: Subtle elevation for depth

## 🔧 Configuration

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API endpoint | `https://api.example.com/dev` |
| `VITE_APP_NAME` | Application name | `Task Manager` |

### Tailwind Configuration
See `tailwind.config.js` for custom theme configuration.

### Vite Configuration
See `vite.config.js` for build and dev server settings.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Deployment Options

#### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Option 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Option 3: AWS Amplify
1. Connect your GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Set environment variables
4. Deploy

#### Option 4: AWS S3 + CloudFront
```bash
aws s3 sync dist/ s3://your-bucket-name
```

## 📊 Performance

### Build Output
- **HTML**: < 1 KB (gzipped)
- **CSS**: ~17 KB (gzipped: ~4 KB)
- **JavaScript**: ~300 KB (gzipped: ~97 KB)

### Optimization
- ✅ Code splitting with React.lazy()
- ✅ Tree shaking unused code
- ✅ Minified production build
- ✅ Optimistic UI updates
- ✅ Efficient re-rendering with React Query

## 🐛 Troubleshooting

### Common Issues

**Issue**: API connection errors
- Check `.env` file has correct `VITE_API_URL`
- Verify backend is running
- Check CORS configuration

**Issue**: Build fails
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version (18.x or later)

**Issue**: Tailwind styles not working
- Verify `tailwind.config.js` content paths
- Check `postcss.config.js` is configured
- Ensure `@tailwind` directives in `index.css`

## 📝 Best Practices

### Code Organization
- Modular component structure
- Separation of concerns (UI, logic, state)
- Reusable utility functions
- Custom hooks for shared logic

### State Management
- React Query for server state
- Zustand for client state
- Component state for local UI

### Styling
- Tailwind utility classes
- Consistent design tokens
- Responsive-first approach
- Accessible color contrasts

## 🔮 Future Enhancements

- [ ] Dark mode toggle
- [ ] Drag-and-drop task reordering
- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] User authentication (AWS Cognito)
- [ ] Collaborative features
- [ ] Export tasks (CSV, PDF)
- [ ] Offline support (PWA)
- [ ] Task templates
- [ ] File attachments

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please follow standard Git workflow:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Zustand](https://docs.pmnd.rs/zustand/)

---

**Built with ❤️ using modern web technologies**