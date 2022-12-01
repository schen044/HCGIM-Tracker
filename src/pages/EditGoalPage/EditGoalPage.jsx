import EditGoalForm from '../../components/EditGoalForm/EditGoalForm';
import * as goalsAPI from '../../utilities/goals-api'
import { useParams } from 'react-router-dom'

export default function EditGoalPage() {
    const goalId = useParams();
    return (
        <>
            <h1>EditGoalPage</h1>
            <EditGoalForm goalId={goalId}/>
        </>
)}