import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <Link to="/profile">User Profile</Link>
            &nbsp; | &nbsp;
            <Link to="/goals">All Goals</Link>
            &nbsp;
            <Link to="/goals/new">New Goal</Link>
            &nbsp; | &nbsp;
            Welcome, {user.charName}
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}