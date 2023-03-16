
import Habits from './components/Habit';
import List from './components/List';
import './App.css';
import Header from './components/Header';
import {useState, useEffect} from "react"
import Day from './components/Day';
import Month from './components/Month';
import { options, months } from './utils/selectMenus';
import { getHabitOptionList, registerDailyHabit, registeredHabitsByMonth } from './utils/fetch';
import HeatMap from './components/HeatMap';
import MonthTitle from './components/MonthTitle';



export interface Habit {
  habits: string;
}

interface MonthlyHabitInfo {
  habits:string;
  days: number[];
}

function App() {

  // ===== STATES ====== //
  const [habit, setHabit] = useState<Habit[]>([{habits:""}])
  const [value, setValue] = useState<typeof options[0]>(options[0])
  const [currentMonth, setMonth] = useState<typeof months[0]>(months[0])
  const [chosenMonth, setChosenMonth] = useState<typeof months[0]>(months[0])
  const [data, setData] = useState<MonthlyHabitInfo[]>([])


  // ===== FETCH REQUEST FUNCTIONS ===== //
  async function populateHabitList() {
    const habitArray = await getHabitOptionList()
    setHabit(habitArray)
  }

  async function addDailyHabit() {
    try {
     const submitHabit = await registerDailyHabit(habit[0].habits,currentMonth.number,parseInt(value.label))
     return submitHabit;
    }catch(error:any){
      console.log(error.message)
    }
  }

  async function renderMonthlyHabits(month:string){
      const monthlyHabits = await registeredHabitsByMonth(month)
      setData(monthlyHabits)
  }

  
  // ==== USE EFFECTS ===== //
  useEffect(() => {
    populateHabitList()
  },[])

  useEffect(() => {
    renderMonthlyHabits(chosenMonth.month)
  })
  
  // ===== JSX FUNCTIONS USED IN FINAL RETURN ====== //
  const handleHabitChange = (selectedHabit: Habit):void => {
    setHabit([selectedHabit, ...habit.filter(h => h !== selectedHabit)]);
   
  }; 

  const renderHabitSquares = () => {
  const habitSquares = data?.map((habit) => (
      <div key={habit.habits}>
        <HeatMap habitName={habit.habits} dataDay={habit.days} />
      </div>
    ));
    return habitSquares;
  };


  // ===== FINAL RETURN OF APP COMPONENT ===== //
  return (
    <div className="App">
      <Header />

      <div className="main">
        <div className="newHabitLegendDiv">
          <div className="newHabitDiv ">
            <p>Add a new habit to the list</p>
            <Habits habit={habit} setHabit={setHabit} />
          </div>
          <div className="legendDiv">
            <div className="registeredBox"></div><p>Habit Registered</p>
            <div className="notRegisteredBox"></div><p>Habit Not Registered</p>
          </div>
        </div>

        <div className="optionFields">
          <Month value={currentMonth} monthOptions={months} onChange={option => setMonth(option)}/>
          <Day options={options} value={value} onChange={option => setValue(option)}/>
          <List habits={habit}  habit={habit[0]} onChange={handleHabitChange} />
        </div>
        <button className='submit-btn' onClick={addDailyHabit}>Submit</button>
        <div>
        </div>
          <MonthTitle value={chosenMonth} monthOptions={months} onChange={option => setChosenMonth(option)} />
          {data.length > 0 ? <div className="allHabits">{renderHabitSquares()}</div> :
            <p className="noHabitsPara">No habits registered for this month!</p>}
        </div>
    </div>
  );
}

export default App;
