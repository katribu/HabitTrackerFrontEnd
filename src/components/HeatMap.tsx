import { options } from "../utils/selectMenus"

type HeatMapMProps = {
    habitName:string;
    dataDay: number[];
    dayId: number[]
}
export default function HeatMap({habitName,dataDay, dayId}:HeatMapMProps) {
  
  const days = options.map((option, index) => {
      const habitId = dayId.map(id => id)
      const habitExists = dataDay?.some((day) => day === option.value);
        return (
          <div 
            key={index}
            onClick={()=>console.log(habitId)} 
            className={`dayBox
            ${(habitExists) ? "habitExists":""}`} 
          >
            {option.label}
          </div>
        )
      })

    return (
        <div className="habitRowContainer">
            <p className="habitName">{habitName}</p>
            <div className="square">{days}</div>
        </div>
    )

}