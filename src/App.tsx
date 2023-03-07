
import './App.css';
import Habit from './components/Habit';
import Header from './components/Header';
import React, {useState} from "react"
import List from './components/List';

export interface IState {
  habits : {
    habit: string
    date: string
  }[]
}



function App() {

  const [habit, setHabit] = useState<IState["habits"]>([])


  return (
    <div className="App">
      <Header />

      <div className="main">
        <div>
          <h5>Add a new category</h5>
          <input type="text" placeholder="New category"/>
        </div>
        <Habit habit={habit} setHabit={setHabit}/>
        <List habits={habit}/>
      </div>
    </div>
  );
}

export default App;
