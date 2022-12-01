import { useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import GoalsPage from '../GoalsPage/GoalsPage'
import NewGoalPage from '../NewGoalPage/NewGoalPage'
import EditGoalPage from '../EditGoalPage/EditGoalPage'
import UserInfoPage from '../UserInfoPage/UserInfoPage'
import NavBar from '../../components/NavBar/NavBar'

export default function App() {
  const [user, setUser] = useState(getUser())
  

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/goals/" element={<GoalsPage />} />
            <Route path="/goals/new" element={<NewGoalPage />} />
            <Route path="/goals/edit/:id" element={<EditGoalPage />} />
            <Route path="/profile" element={<UserInfoPage user={user}/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


