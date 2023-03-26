import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Form from './pages/Form';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
