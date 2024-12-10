import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Activity1 from './pages/Activities/Activity1';
import Activity2 from './pages/Activities/Activity2';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities/activity1" element={<Activity1 />} />
        <Route path="/activities/activity2" element={<Activity2 />} />
        <Route path="*" element={<NotFound />} /> {/* Página 404 */}
      </Routes>
    </Router>
  );
}

export default App;
