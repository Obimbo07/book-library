import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookPage from './components/BookPage';
import Category from './components/Category';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<BookPage />} />
        <Route path="categories" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
