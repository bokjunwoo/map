import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/Layout/AppLayout';
import MainPage from './page/MainPage';
import NewsPage from './page/NewsPage';

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/*" element={<Navigate to="/" replace={false} />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
