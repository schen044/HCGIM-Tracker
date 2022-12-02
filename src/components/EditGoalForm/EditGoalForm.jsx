import { useNavigate } from "react-router-dom";
import * as goalsAPI from '../../utilities/goals-api'
import './EditGoalForm.css';

export default function EditGoalForm({ goalId, goal, setGoal }) {
    const navigate = useNavigate()

    function handleChange(evt) {
        let formValue = convertBoolean(evt);
        setGoal({
            ...goal,
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
            const formDataCopy = {...goal}
            delete formDataCopy.error
            delete formDataCopy.confirm
            await goalsAPI.editGoal(goalId.id, formDataCopy)
            navigate('/goals')
        } catch {
            setGoal({
                ...goal,
                error: 'Failed to edit goal'
            })
        }
    }

return(
    <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Goal Name</label>
            <input type="text" name="name" value={goal.name} onChange={handleChange} required />
            <label>Tier</label>
            <select name="tier" className="custom-select" value={goal.tier} onChange={handleChange}>
                <option value="">---</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                <option value="elite">Elite</option>
                <option value="master">Master</option>
            </select>
            <label>Icon Link</label>
            <input type="text" name="icon" value={goal.icon} onChange={handleChange} />
            <label>Completed</label>
            <select name="completed" className="custom-select" value={goal.completed} onChange={handleChange}>
                <option value="false">Not Completed</option>
                <option value="true">Completed</option>
            </select>
            <button type="submit">Edit Goal</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{goal.error}</p>
        <div className="goblin">
            <img src={require('./goblin1.png')} />
            <img src={require('./goblin2.png')} />
        </div>
      </div>
)
}
