import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import GroupsPage from './pages/Groups';
import SingleGroup from './pages/SingleGroup';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/group/:id" element={<SingleGroup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
