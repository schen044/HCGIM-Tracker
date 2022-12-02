export default function StatItem({stat}) {
    return (
        <tr>
            <td><img src={stat.icon}/>  {stat.skill}</td>
            <td>{stat.rank}</td>
            <td>{stat.level}</td>
            <td>{stat.experience}</td>
        </tr>
    )
}