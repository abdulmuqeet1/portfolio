import App from '../../App';
import { Route, Routes } from 'react-router';

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path="*" element={<div>404 Page</div>} />
    </Routes>
  );
}
export default AppRoutes;
