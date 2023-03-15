import {useState} from "react"
import { Habit as Props } from "../App"

interface ListProps {
    habits: Props[]
    habit: Props
    onChange: (habit: ListProps["habit"]) => void
}


export default function List({habits, habit, onChange}: ListProps) {

const [isOpen, setIsOpen] = useState(false)

    const selectHabit = (option: ListProps["habit"]) => {
        const habitIndex = habits.findIndex((h) => h.habits === habit.habits);
        const updatedHabits = [...habits];
        updatedHabits[habitIndex] = option;
        onChange(option);
      };
    
    return (
        <div>
            <div className="optionsContainer" onBlur={()=>setIsOpen(false)} onClick={()=> setIsOpen(!isOpen)}>
            <span>{habit.habits}</span>
            <div className="buttonsContainer">
                <div className="divider"></div>
                <div className="caret"></div>
            </div>
            </div>

            <div className="habitOptions">
                <ul className={`habitList ${isOpen? "show":""}`}>
                {habits.map((habit,i) => (
                            <li 
                            key={i} 
                            className="date"
                            onClick={(e)=>{
                                e.stopPropagation()
                                selectHabit(habit)
                                setIsOpen(false)
                            }}
                            >
                                {habit.habits}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}