import { useEffect, useState} from 'react'
import { getInfo } from '../../utilities/users-api'
import * as userService from '../../utilities/users-service'
import CharacterInfo from '../../components/CharacterInfo/CharacterInfo';

export default function UserInfoPage({ user }) {
    const [ charInfo, setCharInfo ] = useState("")
    let username = user.charName

    async function handleClick() {
        const characterStats =  await userService.getInfo(username)
    setCharInfo(characterStats)}

    return (
        <>
            <h1>Stats - {username}</h1>
            <button type="submit" onClick={handleClick}>Click to see stats</button>
            <CharacterInfo charInfo={charInfo} />
        </>
    )
}