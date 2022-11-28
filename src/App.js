import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import Modal from './Pages/Shared/Modal/Modal';
import router from './Routes/Routes/Routes';

const queryClient=new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="container mx-auto px-4 ">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
      <Modal></Modal>
    </div>
    </QueryClientProvider>
      
  );
}

export default App;
