import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import SignupPage from "./pages/SignupPage.jsx"

function App() {

  return (
    <div className="bg-[url('./assets/bgImage.svg')] bg-cover">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={< LoginPage />} />
        <Route path="/signup" element={< LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
