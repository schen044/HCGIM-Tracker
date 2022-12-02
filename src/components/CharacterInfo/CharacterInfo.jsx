import StatItem from '../StatItem/StatItem'
import ActivityItem from '../ActivityItem/ActivityItem'
import './CharacterInfo.css';

export default function CharacterInfo({ charInfo }) {
    let skillArr = ["Overall", "Attack", "Defence", "Strength", "Hitpoints", "Ranged", "Prayer", "Magic", "Cooking", "Woodcutting", "Fletching", "Fishing", "Firemaking", "Crafting", "Smithing", "Mining", "Herblore", "Agility", "Thieving", "Slayer", "Farming", "Runecrafting", "Hunter", "Construction"]

    let activityArr = ["League Points", "Bounty Hunter - Hunter", "Bounty Hunter - Rogue", "Clue Scrolls (all)", "Clue Scrolls (beginner)", "Clue Scrolls (easy)", "Clue Scrolls (medium)", "Clue Scrolls (hard)", "Clue Scrolls (elite)", "Clue Scrolls (master)", "LMS - Rank", "PvP Arena - Rank", "Soul Wars Zeal", "Rifts closed", "Abyssal Sire", "Alchemical Hydra", "Barrows Chests", "Bryophyta", "Callisto", "Cerberus", "Chambers of Xeric", "Chambers of Xeric: Challenge Mode", "Chaos Elemental", "Chaos Fanatic", "Commander Zilyana", "Corporeal Beast", "Crazy Archaeologist", "Dagannoth Prime", "Dagannoth Rex", "Dagannoth Supreme", "Deranged Archaeologist", "General Graardor", "Giant Mole", "Grotesque Guardians", "Hespori", "Kalphite Queen", "King Black Dragon", "Kraken", "Kree'Arra", "K'ril Tsutsaroth", "Mimic", "Nex", "Nightmare", "Phosani's Nightmare", "Obor", "Sarachnis", "Scorpia", "Skotizo", "Tempoross", "The Gauntlet", "The Corrupted Gauntlet", "Theatre of Blood", "Theatre of Blood: Hard Mode", "Thermonuclear Smoke Devil", "Tombs of Amascut", "Tombs of Amascut: Expert Mode", "TzKal-Zuk", "TzTok-Jad", "Venenatis", "Vet'ion", "Vorkath", "Wintertodt", "Zalcano", "Zulrah"]

    let iconArr = ["https://oldschool.runescape.wiki/images/Gnome_child_icon.png?122dd", "https://oldschool.runescape.wiki/images/Attack_icon.png?b4bce", "https://oldschool.runescape.wiki/images/Defence_icon.png?ca0cd", "https://oldschool.runescape.wiki/images/Strength_icon.png?e6e0c", "https://oldschool.runescape.wiki/images/Hitpoints_icon.png?a4819", "https://oldschool.runescape.wiki/images/Ranged_icon.png?01b0e", "https://oldschool.runescape.wiki/images/Prayer_icon.png?ca0dc", "https://oldschool.runescape.wiki/images/Magic_icon.png?334cf", "https://oldschool.runescape.wiki/images/Cooking_icon.png?a0156", "https://oldschool.runescape.wiki/images/Woodcutting_icon.png?6ead4", "https://oldschool.runescape.wiki/images/Fletching_icon.png?15cda", "https://oldschool.runescape.wiki/images/Fishing_icon.png?15a98", "https://oldschool.runescape.wiki/images/Firemaking_icon.png?45ea0", "https://oldschool.runescape.wiki/images/Crafting_icon.png?a1f71", "https://oldschool.runescape.wiki/images/Smithing_icon.png?d26c5", "https://oldschool.runescape.wiki/images/Mining_icon.png?00870", "https://oldschool.runescape.wiki/images/Herblore_icon.png?ffa9e", "https://oldschool.runescape.wiki/images/Agility_icon.png?389e0", "https://oldschool.runescape.wiki/images/Thieving_icon.png?973fe", "https://oldschool.runescape.wiki/images/Slayer_icon.png?cd34f", "https://oldschool.runescape.wiki/images/Farming_icon.png?558fa", "https://oldschool.runescape.wiki/images/Runecraft_icon.png?c278c", "https://oldschool.runescape.wiki/images/Hunter_icon.png?8762f", "https://oldschool.runescape.wiki/images/Construction_icon.png?f9bf7"]

    let newStr = charInfo.replaceAll('-1,-1', 'n/a,n/a')
    let charArr = newStr.split("\n")
    charArr.pop();
    let char2 = charArr.map(function(e,idx) {
        let arr = e.split(",");
        if(idx < 24) {
            return {'skill':skillArr[idx],
            'rank':arr[0],
            'level':arr[1],
            'experience':arr[2],
            'icon': iconArr[idx]
        }}
        return {
            'activity':activityArr[idx - 24],
            'rank':arr[0],
            'count':arr[1]
        }
    })
    let statArr = char2.slice(0, 24)
    let actArr = char2.slice(24)

    return (
        <div className="character-info">
            <table className="stat-table">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Rank</th>
                        <th>Level</th>
                        <th>Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {statArr.map((stat, idx) => ( <StatItem stat={stat} key={idx} /> ))}
                </tbody>
            </table>
            <table className="activity-table">
                <thead>
                    <tr>
                        <th>Activity</th>
                        <th>Rank</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {actArr.map((activity, idx) => ( <ActivityItem activity={activity} key={idx} /> ))}
                </tbody>
            </table>
        </div>
    )
}