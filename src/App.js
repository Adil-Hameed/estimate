
import { Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Market from './pages/Market';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Market />} />
    </Routes>
  );
}

export default App;
