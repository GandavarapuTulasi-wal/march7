import { useReducer } from "react";
import ForumForm from "./ForumForm";
import TopicObContext from './TopicObContext'
import ForumReducer from './ForumReducer'
import ForumList from './ForumList'
const Forum = () => {
    const todoOb=[]
     const [state,dispatch] = useReducer(ForumReducer,todoOb);
     const reducerValue={state,dispatch}
     return (
         <div>
            <TopicObContext.Provider value={reducerValue}>
               <ForumForm/>
               <ForumList/>
            </TopicObContext.Provider>
         </div>
     );
 }
export default Forum;