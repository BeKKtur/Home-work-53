import './App.css'
import React from "react";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import TaskList from "./Task/TaskList";

export interface Task  {
    text: string;
    id: number
}

function App() {
    const [tasks, setTasks] = React.useState<Task[]>([
        {text: 'milk', id: 1},
        {text: 'Walk with dog', id: 2},
        {text: 'Do homework', id: 3},
    ]);
    const [taskText, setTaskText] = React.useState('')

    const addTask = () => {
        if (taskText){
            const newTask: Task = {
                text: taskText,
                id: tasks.length + 1,
            }

            setTasks(prevState => prevState.concat(newTask))
        } else {
            alert('Вы ничего не ввели')
        }

    };

    const removeTask = (id: number) => {
        const newData = tasks.filter(task => task.id !== id)

        setTasks(newData)
    }

    const onChangeTaskText = (text: string) => {
        setTaskText(text)
    }



    return (
        <>
            <div className="container">
                <AddTaskForm onChangeText={onChangeTaskText} text={taskText} addTask={addTask} removeTask={removeTask}/>
                <TaskList tasks={tasks} removeTask={removeTask}/>
            </div>
        </>
    )
}

export default App
