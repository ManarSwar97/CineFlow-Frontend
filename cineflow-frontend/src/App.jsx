import './App.css'
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'
import Main from './pages/Main';
import SignupPage from './pages/SignupPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage /> }/>
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/main" element={<Main />} />

      </Routes>
    </main>
  );
}


export default App
