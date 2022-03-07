import { useContext } from 'react'
import TopicObContext from './TopicObContext'
import ForumTopic from './ForumTopic'
const ForumList = () => {
    const {state,dispatch} = useContext(TopicObContext)
    const delTopic=(index)=>{
        if(window.confirm("Are you Sure you want to delete Topic?")===true){
            dispatch({type: "delete",index:index});
        }
    }
    return (
        <div>
            <h1>My Topics</h1>
            {state.map((val, index) => (
                <div className="card">
                    <div className="item">{index+1}</div>
                    <ForumTopic topic={val.topic}/>
                    <div className="item">{val.users}</div>
                    <div className="item">{val.time}</div>
                    <button className="delete" onClick={()=>{delTopic(index)}}>Delete</button>
                </div>
            ))}
        </div>
    )
}
export default ForumList