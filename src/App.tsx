import './App.css';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Results from './pages/Results/Results';
import appointment from './store/appointment';
import defaultData from './mock/defaultData';

const Menu = lazy(() => import('./pages/Menu/Menu'));
const Tabulator = lazy(() => import('./pages/Tabulator/Tabulator'));
const TanStack = lazy(() => import('./pages/TanStack/TanStack'));
const ReactDataGrid = lazy(() => import('./pages/ReactDataGrid/ReactDataGrid'));

function App() {
  appointment.setData(defaultData);
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/tabulator" element={<Tabulator />} />
        <Route path="/tanStack" element={<TanStack />} />
        <Route path="/reactDataGrid" element={<ReactDataGrid />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
