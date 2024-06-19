import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './component/Layout/AppLayout';
import InputPage from './page/InputPage';
import LandingPage from './page/LandingPage';
import NewsPage from './page/NewsPage';
import UserPage from './page/UserPage';

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/name/:name" element={<UserPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/*" element={<Navigate to="/" replace={false} />} />
      </Routes>{' '}
    </AppLayout>
  );
};

export default App;
