import './ActivityItem.css';
export default function ActivityItem({activity}) {
    return (
        <tr>
            <td>{activity.activity}</td>
            <td>{activity.rank}</td>
            <td>{activity.count}</td>
        </tr>
    )
}