import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import './App.css'
import ErrorBoundary from './ErrorBoundary.jsx';
import { lazy, Suspense } from 'react';
import LandingPage from './pages/LandingPage.jsx';
import ProtectedRoutes from './utils/ProtectedRoutes.jsx';

const Home = lazy(() => import('./pages/Home.jsx'))
const WeatherForecast = lazy(() => import('./pages/WeatherForecast.jsx'))
const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>

      <Navbar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>

          <Route path="/" element={
            <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
              <LandingPage />
            </ErrorBoundary>} />

          <Route element={<ProtectedRoutes />}>

            <Route path="/home" element={
              <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
                <Home />
              </ErrorBoundary>
            } />

            <Route path="/weatherforecast" element={
              <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
                <WeatherForecast />
              </ErrorBoundary>
            } />

          </Route>
        </Routes>
      </Suspense>

    </QueryClientProvider>
  )
}

export default App