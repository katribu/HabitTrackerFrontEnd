import React, {useState} from "react"
import {IState as Props} from "../App"

interface IProps {
    habit: Props["habits"]
    setHabit: React.Dispatch<React.SetStateAction<Props["habits"]>>
}

export default function Habit({habit, setHabit}: IProps) {

    const [input, setInputs] = useState<{habit:string; date: string;}>({
        habit: "",
        date: ""
      })

      const handleChange = (e : React.ChangeEvent<HTMLInputElement>) : void => {
        setInputs({
            ...input,
            [e.target.name]:e.target.value
        })
      }

      const handleClick = () : void => {
        if(!input.date || !input.habit){
            return;
        }
        setHabit([
            ...habit,
            {
                habit: input.habit,
                date: input.date
            }
        ]);

        setInputs({
            habit:"",
            date:""
        })
      }
    return (
        <div className="add-habit-div">
            <h5> Add habit</h5>
            <input type="text" placeholder="Habit" value={input.habit} name="habit" onChange={handleChange}/>
            <input type="text" placeholder="Date" value={input.date} name="date" onChange={handleChange}/>
            <button type="submit" className="submit-btn" onClick={handleClick}>Add</button>
      </div>
    )
}