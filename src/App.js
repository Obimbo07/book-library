import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import Category from './components/Category';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="categories" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
