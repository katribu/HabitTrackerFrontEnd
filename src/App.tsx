
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
  id: number;
  habit:string;
  day:number;
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
  })

  useEffect(() => {
    renderMonthlyHabits(chosenMonth.month)
  })
  
  // ===== JSX FUNCTIONS USED IN FINAL RETURN ====== //
  const handleHabitChange = (selectedHabit: Habit):void => {
    setHabit([selectedHabit, ...habit.filter(h => h !== selectedHabit)]);
   
  }; 

  const renderHabitSquares = () => {
    if(data.length === 0){
      return (<p>No habits for this month</p>)
    }
    else{
      const habitSquares = data?.map((habit,index) => (
        <div>
          <HeatMap key={index} habitName={habit.habit} />
        </div>
      ));
      return habitSquares;
    }
  };
  
  


  // ===== FINAL RETURN OF APP COMPONENT ===== //
  return (
    <div className="App">
      <Header />

      <div className="main">
        <div>
          <h5>Add a new habit to the list</h5>
          <Habits habit={habit} setHabit={setHabit} />
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
          <div className="allHabits">{renderHabitSquares()}</div>
        </div>
    </div>
  );
}

export default App;
