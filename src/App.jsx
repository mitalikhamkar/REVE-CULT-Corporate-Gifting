import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';
import AdminLogin from './pages/admin/AdminLogin';
import AdminGuard from './components/admin/AdminGuard';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import InquiriesPage from './pages/admin/InquiriesPage';
import ThemesPage from './pages/admin/ThemesPage';

function App() {

  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <ThemeProvider>
                <Home />
              </ThemeProvider>
            }
          />

          <Route path="/admin/login" element={<AdminLogin />} />

          <Route element={<AdminGuard />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/inquiries" element={<InquiriesPage />} />
              <Route path="/admin/themes" element={<ThemesPage />} />
            </Route>
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App