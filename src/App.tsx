import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Charts } from './pages/Charts'
import styles from './App.module.scss'
import { NavBar } from './components/NavBar/NavBar'

function App() {
  return (
    <div className={styles.layout}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
