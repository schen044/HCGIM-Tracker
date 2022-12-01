import { useState, useEffect, useRef } from 'react'
import * as goalsAPI from '../../utilities/goals-api'
import GoalList from '../../components/GoalList/GoalList';
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
            <h1>Goals</h1>
            <GoalList goals={goals} setGoals={setGoals} />
        </>
)}