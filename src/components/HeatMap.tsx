import { options } from "../utils/selectMenus"

type HeatMapMProps = {
    habitName:string;
    dataDay: number[];
}
export default function HeatMap({habitName,dataDay}:HeatMapMProps) {

  
  const days = options.map((option, index) => {
      const habitExists = dataDay?.some((day) => day === option.value);
        return (
          <div  
            className={`dayBox
            ${(habitExists) ? "habitExists":""}`} 
            key={index}
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