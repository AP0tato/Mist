import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigator from './Navigator';
import Home from './pages/Home';
import About from './pages/About';
import Topics from './pages/Topics';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigator />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="topics" element={<Topics />} />
          <Route path="*" element={<div className="content"><h1>404 page not found</h1></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
