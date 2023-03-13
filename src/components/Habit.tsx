import React, {useState} from "react"
import {Habit as Props} from "../App"
import { createNewHabit } from "../utils/fetch"

interface HabitProps {
    habit: Props[]
    setHabit: React.Dispatch<React.SetStateAction<Props[]>>
}




export default function Habits({habit, setHabit}: HabitProps) {

    const [input, setInputs] = useState<{habit:string;}>({
        habit: "",
      })

      const handleChange = (e : React.ChangeEvent<HTMLInputElement>) : void => {
        setInputs({
            ...input,
            [e.target.name]:e.target.value
        })
      }

      const handleClick = async () => {
        if(!input.habit){
            return;
        }
        if(habit.some(habit => habit.habits.toLowerCase() === input.habit.toLowerCase())){
            alert("This habit already exists.")
            setInputs({habit:""})
            return;
        }else {
            setHabit([
                ...habit,
                {
                    habits: input.habit,
                }
            ]);
            await createNewHabit(input.habit)
        }

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