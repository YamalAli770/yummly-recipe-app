import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Filtered from './Components/Filtered';
import Recipe from './Components/Recipe';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Searched from './Components/Searched';

function App() {
  return (
    <Router>
      <Navbar />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filtered/:category" element={<Filtered />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/searched/:name" element={<Searched />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
