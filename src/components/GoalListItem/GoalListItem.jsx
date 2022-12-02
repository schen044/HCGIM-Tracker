import './GoalListItem.css';
import { deleteGoal } from '../../utilities/goals-api'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

export default function GoalListItem({ goalItem }) {
  const navigate = useNavigate()
  const itemId = goalItem._id

  async function handleDelete() {
    const delGoal =  await deleteGoal(itemId)
    console.log(delGoal)
    navigate('/profile')
  }

  return (
    <div className="GoalListItem">
      <div>
        <input type="checkbox" defaultChecked={goalItem.completed} className="complete-box"/>
        <img src={goalItem.icon} />
        {goalItem.name}
      </div>
      <div>
        <Link to={`/goals/edit/${itemId}`}><button className="edit-button">Edit</button></Link>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}