import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LocaleLayout } from './components/site/LocaleLayout';
import Index from './pages/Index';
import Hospitals from './pages/Hospitals';
import HospitalDetail from './pages/HospitalDetail';
import Treatments from './pages/Treatments';
import Journey from './pages/Journey';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import AuthCallback from './pages/AuthCallback';
import AuthError from './pages/AuthError';
// MODULE_IMPORTS_START
// MODULE_IMPORTS_END

const queryClient = new QueryClient();

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/en" replace />} />
    <Route path="/:locale" element={<LocaleLayout />}>
      <Route index element={<Index />} />
      <Route path="hospitals" element={<Hospitals />} />
      <Route path="hospitals/:slug" element={<HospitalDetail />} />
      <Route path="treatments" element={<Treatments />} />
      <Route path="journey" element={<Journey />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
    <Route path="/auth/callback" element={<AuthCallback />} />
    <Route path="/auth/error" element={<AuthError />} />
    <Route path="*" element={<Navigate to="/en" replace />} />
    {/* MODULE_ROUTES_START */}
    {/* MODULE_ROUTES_END */}
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* MODULE_PROVIDERS_START */}
    {/* MODULE_PROVIDERS_END */}
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
    {/* MODULE_PROVIDERS_CLOSE */}
  </QueryClientProvider>
);

export default App;
export { AppRoutes };