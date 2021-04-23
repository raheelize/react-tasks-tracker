import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, settasks] = useState([
    {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th  at 5:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Food Shopping',
        day: 'Feb 5th  at 2:30pm',
        reminder: false
    },
    {
        id: 3,
        text: 'University Project',
        day: 'Feb 6th  at 1:30pm',
        reminder: true
    }

])
const addTask=(task)=>{
  //console.log(task)
 // const id = Math.floor(Math.random * 1000) + 1
  const id = Date.now()
  const newTask = {id, ...task}
  settasks([...tasks , newTask])

}
const deleteTask = (id) =>{
  //console.log('delete', id)
  settasks( tasks.filter(
    (task)=> task.id !== id
  ) )
}
const toggleReminder = (id) =>{
  //console.log('remind', id)
  settasks( tasks.map((task) => task.id === id? {...task, reminder: !task.reminder} : task))
}
  return (
    <div className="container">
    <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    {showAddTask&&<AddTask onAdd={addTask}/>}
    {
      tasks.length>0 ? (<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>  )
      : 'No Task to Show.'
    }
    </div>
  );
}

export default App;
