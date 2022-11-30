import './GoalList.css';
import GoalListItem from '../GoalListItem/GoalListItem';

export default function GoalList({ goals }) {
  const goalList = goals.map(goal =>
    <GoalListItem
      key={goal._id}
      goalItem={goal}   />
  );
  return (
    <main className="GoalList">
      {goalList}
    </main>
  );
}