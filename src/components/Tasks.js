import Task from "./Task"
import Button from "./Button"

export default function Tasks({onClick, tasks}){

    return(
        tasks.map((task, index) => {
            return (
            <div className="TaskLine">
                <Task data={task}/>
                <Button onClick={onClick} text='Delete' index={index}/> 
            </div>
            
            )
        })
    )
}