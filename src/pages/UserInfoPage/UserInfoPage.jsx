import { getInfo } from '../../utilities/users-api'
import * as userService from '../../utilities/users-service'

export default function UserInfoPage({ user }) {

    let uname = user.charName
    async function handleCheckToken() {
        const expDate = await userService.checkToken()
        console.log(expDate)
    }

    async function handleGetInfo() {
        // alert(uname)
        const info = await userService.getInfo(uname)
        console.log(info)
    }

    

    return (
        <>
            <h1>UserInfoPage</h1>
            <p>https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player={user.charName}</p>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
            <button onClick={handleGetInfo}>Get Info</button>
        </>
    )
}