import '../components/TaskForm.css'
import Tag from '../components/Tag'
import { useState } from 'react'

const TaskForm = (Props) => {

    const { setTasks } = Props

    //Handle Form data in one Hook
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    })
    const[disable, setDisable]=useState('typing');
    

    //Check the slected tag and style it 
    const checkTag = (tag) => {
        return taskData.tags.some(item => item == tag)
    }

    // for chnages in inpput and option 
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setTaskData(prev => {
            return { ...prev, [name]: value }
        })
    }

    //for chnages and prevent defualt behavior of form
    const handleSubmit = (e) => {
        e.preventDefault();

        setTasks(prev => {
            return [...prev, taskData]
        })

        setTaskData({
            task: "",
            status: "todo",
            tags: []
        });

        setDisable('submitted');
    }
    // console.log(taskData);

    //for  selcting tag
    const selectTag = (tag) => {
        if (taskData.tags.some(item => item === tag)) {
            const filterTags = taskData.tags.filter(item => item !== tag)
            setTaskData(prev => {
                return { ...prev, tags: filterTags }
            })
        } else {
            setTaskData(prev => {
                return { ...prev, tags: [...prev.tags, tag] }
            })
        }
    }
    // console.log(taskData.tags);


    return (
        <header className="app_header">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="task"
                    value={taskData.task}
                    className="task_input"
                    placeholder='Enter '
                    onChange={handleChange}
                />

                <div className="task_form_bottom_line">
                    <Tag TagName="HTML" selecttag={selectTag} selected={checkTag("HTML")} />
                    <Tag TagName="CSS" selecttag={selectTag} selected={checkTag("CSS")} />
                    <Tag TagName="JavaScript" selecttag={selectTag} selected={checkTag("JavaScript")} />
                    <Tag TagName="React" selecttag={selectTag} selected={checkTag("React")} />

                    <select className="task_status" name="status" onClick={handleChange} >
                        <option value="todo">Todo</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>

                    </select>

                    <button type="submit" className="task_submit"
                        disabled={taskData.task.length === 0 ||
                            disable === 'submitted'
                        }
                    > Add Task </button>
                </div>
            </form>
        </header>
    )
}

export default TaskForm
