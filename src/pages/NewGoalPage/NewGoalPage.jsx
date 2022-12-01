import NewGoalForm from '../../components/NewGoalForm/NewGoalForm';
export default function NewGoalPage({ goal, setGoal}) {
    return (
        <>
            <h1>NewGoalPage</h1>
            <NewGoalForm goal={goal} setGoal={setGoal} />
        </>
)}