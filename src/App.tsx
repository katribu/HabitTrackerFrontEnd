
import Habits from './components/Habit';
import List from './components/List';
import './App.css';
import Header from './components/Header';
import {useState, useEffect} from "react"
import Day from './components/Day';
import Month from './components/Month';
import { options, months } from './utils/selectMenus';
import { getHabitOptionList, registerDailyHabit } from './utils/fetch';

export interface Habit {
  habits: string;
}

function App() {

  const [habit, setHabit] = useState<Habit[]>([{habits:""}])
  const [value, setValue] = useState<typeof options[0]>(options[0])
  const [currentMonth, setMonth] = useState<typeof months[0]>(months[0])

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

  useEffect(() => {
    populateHabitList()
  },[])

  const handleHabitChange = (selectedHabit: Habit):void => {
    setHabit([selectedHabit, ...habit.filter(h => h !== selectedHabit)]);
  }; 
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
      </div>
    </div>
  );
}

export default App;
