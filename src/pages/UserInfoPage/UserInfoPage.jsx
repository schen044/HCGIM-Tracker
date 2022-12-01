import { useState} from 'react'
import { getInfo } from '../../utilities/users-api'
import * as userService from '../../utilities/users-service'
import CharacterInfo from '../../components/CharacterInfo/CharacterInfo';

export default function UserInfoPage({ user }) {
    const [ charInfo, setCharInfo ] = useState("")
    let username = user.charName

    async function handleGetInfo() {
        const characterStats =  await userService.getInfo(username)
        setCharInfo(characterStats)
    }

    return (
        <>
            <h1>UserInfoPage</h1>
            <button onClick={handleGetInfo}>Get Info</button>
            <CharacterInfo charInfo={charInfo} />
        </>
    )
}