import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Landing } from './pages/Landing'
import { Predict } from './components/Predict'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Districts } from './pages/models/Districts'
import { Students } from './pages/models/Students'
import { DistrictsData } from './pages/data/DistrictsData'
import { StudentsData } from './pages/data/StudentsData'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/models/districts" element={<Districts />} />
        <Route path="/models/students" element={<Students />} />
        <Route path="/data/districts" element={<DistrictsData />} />
        <Route path="/data/students" element={<StudentsData />} />
      </Routes>
    </Router>
  )
}

export default App
