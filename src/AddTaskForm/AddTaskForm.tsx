import React from "react";

interface AddTaskFormProps {
    onChangeText: (text: string) => void
    text: string
    addTask: () => void
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({onChangeText, text, addTask}) => {

    return (
        <div className="taskform">
            <input type="text" className="input" value={text} onChange={(e) => onChangeText(e.target.value)}/>
            <button onClick={addTask}>Add</button>
        </div>
    )
}

export default AddTaskForm