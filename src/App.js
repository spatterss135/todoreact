import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskAdder from "./components/TaskAdder"

function App() {
  let [tasks, setTasks] = useState([{
    id:0,
    text: 'Do Dishes'
  },
  {
    id:1,
    text: 'Work on Cabin'
  }])

  let [id, setId] = useState(tasks.length-1)
  let [clicked, setClicked] = useState(false)

  function onClick(){
    setClicked(!clicked)
}

function onSubmit(e){
  e.preventDefault()
  setId(id++)
  setTasks([...tasks, {id: id, text: e.target.getAttribute('value')}])
}

  function deleteTask(e){
    let index = Number(e.target.getAttribute('index'))
    console.log(index)
    console.log([...tasks.slice(0, index), ...tasks.slice(index+1)])
    setTasks([...tasks.slice(0, index), ...tasks.slice(index+1)])
  }
  
  return (
    <div className="container">
      <Header onClick={onClick} clicked={clicked}/>
      {clicked? <TaskAdder onSubmit={onSubmit}/>: null}    
      <Tasks tasks={tasks} onClick={deleteTask}/>
    </div>
  );
}

export default App;