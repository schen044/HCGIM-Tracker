import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as goalsAPI from '../../utilities/goals-api'

export default function NewGoalForm() {
    const navigate = useNavigate()
    const [newGoal, setNewGoal] = useState({
        name: '',
        goalType: 'personal',
        tier: '',
        icon: '',
        completed: false
    });

    function handleChange(evt) {
        let formValue = convertBoolean(evt);
        setNewGoal({
            ...newGoal,
            [evt.target.name]: formValue,
            error: ''
        })
    }

    function convertBoolean(evt) {
        if (evt.target.name === "completed" && evt.target.value === "true") return true;
        if (evt.target.name === "completed" && evt.target.value === "false") return false;
        return evt.target.value;
    }

async function handleSubmit(evt) {
    evt.preventDefault()
    try {
        const formDataCopy = {...newGoal}
        delete formDataCopy.error
        delete formDataCopy.confirm
        await goalsAPI.addGoal(formDataCopy)
        navigate('/goals')
    } catch {
        setNewGoal({
            ...newGoal,
            error: 'Failed to add goal'
        })
    }
}

return(
    <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Goal Name</label>
            <input type="text" name="name" value={newGoal.name} onChange={handleChange} required />
            <label>Tier</label>
            <select name="tier" value={newGoal.tier} onChange={handleChange}>
                <option value="">---</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                <option value="elite">Elite</option>
                <option value="master">Master</option>
            </select>
            <label>Icon Link</label>
            <input type="text" name="icon" value={newGoal.icon} onChange={handleChange} />
            <label>Completed</label>
            <select name="completed" value={newGoal.completed} onChange={handleChange}>
                <option value="false">Not Completed</option>
                <option value="true">Completed</option>
            </select>
            <button type="submit">Add Goal</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{newGoal.error}</p>
      </div>
)
}
