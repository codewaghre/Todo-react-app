
import '../components/TaskColumn.css'
import TaskCard from './TaskCard'

const TaskColumn = (Props) => {
    const { title, icon, tasks, status ,  handleDelete } = Props
    return (
        <section className="task_column">
            <h2 className="task_column_heading">
                <img className="task_column_icon" src={icon} alt="" /> {title}
            </h2>
            {tasks.map(
                (task, index) =>
                    task.status === status && (
                            <TaskCard key={index}
                                title={task.task}
                                tags={task.tags}
                                index={index}
                                handleDelete={handleDelete} 
                            
                            /> 
                    )
            )}
        </section>
    )
}

export default TaskColumn
