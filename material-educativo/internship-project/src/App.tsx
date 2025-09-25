import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

import Class21 from '@/pages/Class21';
import Class22 from '@/pages/Class22';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="class21" element={<Class21 />} />
          <Route path="class22" element={<Class22 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
