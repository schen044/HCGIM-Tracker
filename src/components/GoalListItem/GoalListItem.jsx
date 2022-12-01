import './GoalListItem.css';
import { deleteGoal } from '../../utilities/goals-api'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from 'react-router-dom'

export default function GoalListItem({ goalItem }) {
  const navigate = useNavigate()
  const itemId = goalItem._id

  async function handleDelete() {
    const delGoal =  await deleteGoal(itemId)
    console.log(delGoal)
    navigate('/profile')
  }
  async function handleEdit() {
    const editGoal =  await editGoal(itemId)
    console.log(editGoal)
    navigate('/goals')
  }

  return (
    <div className="GoalListItem">
      <div className="name">
        <input type="checkbox" defaultChecked={goalItem.completed} className="complete-box"/>
        <img src={goalItem.icon} />
        {goalItem.name}
        <Link to={`/goals/edit/${itemId}`}><button type="submit">Edit</button></Link>
        <button type="submit" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}