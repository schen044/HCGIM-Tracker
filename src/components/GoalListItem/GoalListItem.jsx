import './GoalListItem.css';

export default function GoalListItem({ goalItem }) {
  return (
    <div className="GoalListItem">
      <div className="name">
        <input type="checkbox" />
        <img src={goalItem.icon} />
        {goalItem.name}
      </div>
    </div>
  );
}