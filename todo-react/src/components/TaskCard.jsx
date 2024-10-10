
import '../components/TaskCard.css'
import Tag from './Tag'
import deleteIcon from "../assets/delete.png";



const TaskCard = (Props) => {
    const {title, tags,  handleDelete, index} = Props
    return (
        <article className='task_card' draggable>

            <p className="task_text">{ title}</p>

            <div className="task_card_bottom_line">
                <div className="task_card_tags">
                    {
                        tags.map((tag, index) => (
                            <Tag
                                key={index}
                                TagName={tag}
                                selected
                            />
                        ))
                    }
                </div>
                <div className="task_delete" onClick={() => handleDelete(index)}>
                    <img src={deleteIcon} className="delete_icon" alt="delete icon" />
                </div>
            </div>
        </article>
    )
}

export default TaskCard
