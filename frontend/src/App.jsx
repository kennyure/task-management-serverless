import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Tasks from './pages/Tasks';

// Create a query client instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 30000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <Tasks />
      </div>
    </QueryClientProvider>
  );
}

export default App;