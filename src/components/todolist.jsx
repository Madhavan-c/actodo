
import Todoitem from "./todoitem"

function Todolist(props)
 {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
   
    return (
        <div className="bg-[#BDB4EA] boder rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today's activity</h1>
            {activityArr.length===0?<p>you haven't added any activity yet</p>:""}
            {
                activityArr.map(function (item, index) {
                    return <Todoitem id={item.id} activity={item.activity} index={index} activityArr={activityArr} setActivityArr={setActivityArr} />

                })
            }
        </div>
    )
}
export default Todolist