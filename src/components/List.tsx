import React, {useState} from "react"
import {IState as Props} from "../App"


interface IProps {
    habits: Props["habits"]
}

// type HabitOption = {
//     habits: Props["habits"]
//   }
  
// type Habits = {
//     habits : HabitOption
//     habitOptions: HabitOption[]
//     onChange: (habits: HabitOption) => void
//   }

export default function List({habits}: IProps) {

const [isOpen, setIsOpen] = useState(false)



    return (
        <div>
            <div className="optionsContainer" onBlur={()=>setIsOpen(false)} onClick={()=> setIsOpen(!isOpen)}>
            <span>{habits[0].habits}</span>
            <div className="buttonsContainer">
                <button 
                className="xBtn" 
                onClick={(e) => {
                    e.stopPropagation()
                }}>
                    &times; 
                </button>
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