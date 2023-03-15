import {useState} from "react"


type MonthOption = {
    month:string
    number:number
}


type MonthProps = {
    value: MonthOption
    monthOptions: MonthOption[]
    onChange: (value:MonthOption) => void
}

export default function MonthTitle({value, monthOptions, onChange}: MonthProps){
    const [isOpen, setIsOpen] = useState(false)


    const selectOption = (option: MonthOption) => {
        onChange(option)
    }
    return (
        <div>
            <div className="optionsContainer" onBlur={()=>setIsOpen(false)} onClick={()=> setIsOpen(!isOpen)}>
                <span>{value.month}</span>
            </div>

            <div className="dateOptions monthTitleContainer" >
                <ul className={`dateList ${isOpen? "show":""}`}>
                    {monthOptions.map(month => (
                        <li 
                        key={month.number} 
                        className="date"
                        onClick={(e) => {
                            e.stopPropagation()
                            selectOption(month)
                            setIsOpen(false)
                        }}

                        >
                            {month.month}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}