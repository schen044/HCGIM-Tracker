import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <img src={require('./gnome.png')} width="50"/>
            <div className="links">
                <div>Welcome, <Link to="/profile">{user.charName}</Link></div>
                |
                <Link to="/goals">All Goals</Link>
                |
                <Link to="" onClick={handleLogOut}>Log Out</Link>
            </div>
        </nav>
)}