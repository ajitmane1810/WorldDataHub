import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.js';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import CountryDetail from './pages/CountryDetail.js';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className=" min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200 ">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:code" element={<CountryDetail />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;