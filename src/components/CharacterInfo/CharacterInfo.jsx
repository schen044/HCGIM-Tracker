import StatItem from '../StatItem/StatItem'

export default function CharacterInfo({ charInfo }) {
    let skillArr = ["Overall", "Attack", "Defence", "Strength", "Hitpoints", "Ranged", "Prayer", "Magic", "Cooking", "Woodcutting", "Fletching", "Fishing", "Firemaking", "Crafting", "Smithing", "Mining", "Herblore", "Agility", "Thieving", "Slayer", "Farming", "Runecrafting", "Hunter", "Construction"]

    let activityArr = ["League Points", "Bounty Hunter - Hunter", "Bounty Hunter - Rogue", "Clue Scrolls (all)", "Clue Scrolls (beginner)", "Clue Scrolls (easy)", "Clue Scrolls (medium)", "Clue Scrolls (hard)", "Clue Scrolls (elite)", "Clue Scrolls (master)", "LMS - Rank", "PvP Arena - Rank", "Soul Wars Zeal", "Rifts closed", "Abyssal Sire", "Alchemical Hydra", "Barrows Chests", "Bryophyta", "Callisto", "Cerberus", "Chambers of Xeric", "Chambers of Xeric: Challenge Mode", "Chaos Elemental", "Chaos Fanatic", "Commander Zilyana", "Corporeal Beast", "Crazy Archaeologist", "Dagannoth Prime", "Dagannoth Rex", "Dagannoth Supreme", "Deranged Archaeologist", "General Graardor", "Giant Mole", "Grotesque Guardians", "Hespori", "Kalphite Queen", "King Black Dragon", "Kraken", "Kree'Arra", "K'ril Tsutsaroth", "Mimic", "Nex", "Nightmare", "Phosani's Nightmare", "Obor", "Sarachnis", "Scorpia", "Skotizo", "Tempoross", "The Gauntlet", "The Corrupted Gauntlet", "Theatre of Blood", "Theatre of Blood: Hard Mode", "Thermonuclear Smoke Devil", "Tombs of Amascut", "Tombs of Amascut: Expert Mode", "TzKal-Zuk", "TzTok-Jad", "Venenatis", "Vet'ion", "Vorkath", "Wintertodt", "Zalcano", "Zulrah"]

    let newStr = charInfo.replaceAll('-1,-1', 'n/a,n/a')
    let charArr = newStr.split("\n")
    charArr.pop();
    let char2 = charArr.map(function(e,idx) {
        let arr = e.split(",");
        if(idx < 24) {
            return {'skill':skillArr[idx],
            'rank':arr[0],
            'level':arr[1],
            'experience':arr[2]
        }}
        return {
            'activity':activityArr[idx - 24],
            'rank':arr[0],
            'count':arr[1]
        }
    })
    let statitemlist = char2.map((stat, idx) => {
        <StatItem stat={stat} key={idx} />
    })
    

    return (
        <>
            <h1>CharInfoPage</h1>
            {charArr[0]}
            {/* {char2[0].skill} */}
        </>
    )
}