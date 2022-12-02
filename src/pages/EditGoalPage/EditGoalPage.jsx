import EditGoalForm from '../../components/EditGoalForm/EditGoalForm';
import * as goalsAPI from '../../utilities/goals-api'
import { useParams } from 'react-router-dom'

export default function EditGoalPage({ goal, setGoal }) {
    const goalId = useParams();
    return (
        <>
            <h1>Edit Goal</h1>
            <EditGoalForm goalId={goalId} goal={goal} setGoal={setGoal} />
        </>
)}