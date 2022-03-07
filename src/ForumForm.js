import { useState,useContext} from 'react'
import TopicObContext from './TopicObContext'
function ForumForm() {
    const [topic,setTopic]=useState("")
    const [users,setUsers]=useState("user1")
    const {dispatch} = useContext(TopicObContext)

    return (
        <div className="card-container">
            <div>
                <h1>Forum App</h1>
                <div className="box">
                <textarea className="todo-user-input" cols="5" rows="5" placeholder="Enter the topic?" name="topic" onInput={(event)=>{setTopic(event.target.value)}}></textarea>
           <select name="users" className="todo-user-input" onChange={(event)=>{setUsers(event.target.value)}}>
               <option value="user1">User1</option>
               <option value="user2">User2</option>
               <option value="user3">user3</option>
           </select>
                <div className="card">
             <button onClick={()=>{dispatch({type: "submit",topic:topic,users:users,time:new Date().toGMTString()});}}>Submit</button>
             <button onClick={()=>{dispatch({type: "delete5mins"});}}>delete5mins</button>
             </div>
             </div>

            </div>

        </div>
    )

}
export default ForumForm