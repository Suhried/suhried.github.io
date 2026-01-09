
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <div className="min-h-screen bg-dark text-white overflow-x-hidden">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
