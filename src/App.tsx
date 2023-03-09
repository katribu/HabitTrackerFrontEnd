
import Habit from './components/Habit';
import List from './components/List';
import './App.css';
import Header from './components/Header';
import {useState} from "react"
import Select from './components/Select';


export interface Habit {
  habits: string;
}

const options = [
  {value: "1", label:"1"},{value: "2", label:"2"},{value: "3", label:"3"},{value: "4", label:"4"},
  {value: "5", label:"5"},{value: "6", label:"6"},{value: "7", label:"7"},{value: "8", label:"8"},
  {value: "9", label:"9"},{value: "10", label:"10"},{value: "11", label:"11"},{value: "12", label:"12"},
  {value: "13", label:"13"},{value: "14", label:"14"},{value: "15", label:"15"},{value: "16", label:"16"},
  {value: "17", label:"17"},{value: "18", label:"18"},{value: "19", label:"19"},{value: "20", label:"20"},
  {value: "21", label:"21"},{value: "22", label:"22"},{value: "23", label:"23"},{value: "24", label:"24"},
  {value: "25", label:"25"},{value: "26", label:"26"},{value: "27", label:"27"},{value: "28", label:"28"},
  {value: "29", label:"29"},{value: "30", label:"30"}, {value:"31", label:"31"}
  
]

function App() {

  const [habit, setHabit] = useState<Habit[]>([{habits:"Yoga"}])
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0])

  
  const handleHabitChange = (selectedHabit: Habit) => {
    setHabit([selectedHabit, ...habit.filter(h => h !== selectedHabit)]);
  }; 
  return (
    <div className="App">
      <Header />

      <div className="main">
        <div>
          <h5>Add a new habit to the list</h5>
          <Habit habit={habit} setHabit={setHabit} />
        </div>

        <div className="optionFields">
          <Select options={options} value={value} onChange={option => setValue(option)}/>
          <List habits={habit}  habit={habit[0]} onChange={handleHabitChange} />
         

        </div>
      </div>
    </div>
  );
}

export default App;
