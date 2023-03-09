import React, {useState} from "react"
import {IState as Props} from "../App"


interface IProps {
    habit: Props["habits"]
    setHabit: React.Dispatch<React.SetStateAction<Props["habits"]>>
}



export default function Habit({habit, setHabit}: IProps) {

    const [input, setInputs] = useState<{habit:string;}>({
        habit: "",
      })

      const handleChange = (e : React.ChangeEvent<HTMLInputElement>) : void => {
        setInputs({
            ...input,
            [e.target.name]:e.target.value
        })
      }

      const handleClick = () : void => {
        if(!input.habit){
            return;
        }
        setHabit([
            ...habit,
            {
                habits: input.habit,
            }
        ]);

        setInputs({
            habit:"",
        })
      }
    return (
        <div className="add-habit-div">
            <input type="text" placeholder="Habit" value={input.habit} name="habit" onChange={handleChange}/>
            <button type="submit" className="submit-btn" onClick={handleClick}>Add</button>
      </div>
    )
}