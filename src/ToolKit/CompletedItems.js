import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

import { changeTodoPending, removed } from "./loginReducer"


function CompletedItems(){
    const result = useSelector((state) => {
        return state.todoData
    })
    const completeditem=result.filter((item)=>item.status === true && item.active === true )
    //const a= result.todoData.filter((item)=>item.status === false)
    console.log("completeditem",completeditem)
    return(
        <>
        <h1>Completed Item</h1>
        {
                completeditem.map((item) => (
                    <>
                        <h3>{item.username}</h3>
                        <p>{item.userEmail}</p>
                    </>
                ))
            }
        </>
    )
}
export default CompletedItems