import Addtodoform from "./addtodoform"
import Todolist from "./todolist"
import { useState } from "react"

function Todocontainer() 
{
    const [activityArr, setActivityArr] = useState([
        {
            id: 1,
            activity: "go for walk"
        },
        {
            id: 2,
            activity: "have breakfast"
        }
        , {
            id: 3,
            activity: "take a shower"
        }
    ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <Addtodoform activityArr={activityArr} setActivityArr={setActivityArr} />
                <Todolist activityArr={activityArr} setActivityArr={setActivityArr} />

            </div>
        </div>


    )
}
export default Todocontainer