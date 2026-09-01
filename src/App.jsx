import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Sobrenos from './sobrenos'
import Menu from './Menu'
import Contact from './Contact'
import NotFound from './NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobrenos" element={<Sobrenos />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
