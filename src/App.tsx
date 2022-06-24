import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { Charts } from './Components/Charts'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.layout}>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="charts" element={<Charts />} />
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
