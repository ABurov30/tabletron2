import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './HOC/ErrorBoundary.tsx';
import Loader from './ui/Loader/Loader.tsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <ErrorBoundary>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </Suspense>
);
