import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'

import Class21 from '@/pages/Class21'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="class21" element={<Class21 />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App