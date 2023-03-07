import React from "react"
import {IState as Props} from "../App"

interface IProps {
    habits:Props["habits"]
}

export default function List({habits}:IProps) {

    const renderHabits: JSX.Element[] = habits.map((hab,i) => {
        return (
            <div key={i}>
                <h4>{hab.habit}</h4>
                <p>{hab.date}</p>
            </div>
        )
    })

    return (
        <div>
            {renderHabits}
        </div>
    )
}