import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Nopage from './pages/Nopage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
