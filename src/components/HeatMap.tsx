import { options } from "../utils/selectMenus"

type HeatMapMProps = {
    habitName:string;
}
export default function HeatMap({habitName}:HeatMapMProps) {
    const days = options.map(option => {
        return (
          <div  className="dayBox">
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