import { useState, useEffect } from 'react'
import * as goalsAPI from '../../utilities/goals-api'
import GoalList from '../../components/GoalList/GoalList';
import { Link } from 'react-router-dom'

export default function GoalsPage() {
    const [ goals, setGoals ] = useState([])
    useEffect(function() {
        (async function() {
            const goals = await goalsAPI.getAll()
            setGoals(goals)
        })();
    }, [])
    return (
        <>
            <h1>Viewing All Goals</h1>
            <h3><Link to="/goals/new"><button>Add New Goal</button></Link></h3>
            <GoalList goals={goals} setGoals={setGoals} />
        </>
)}