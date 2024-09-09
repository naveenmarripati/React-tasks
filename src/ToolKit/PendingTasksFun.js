import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

import { changeTodoPending, removed } from "./loginReducer"

function PendingTasksFun(props) {

    const result = useSelector((state) => {
        return state
    })
    console.log("result", result.todoData)
    const dispatch = useDispatch()
    const completed = (e, id) => {
        e.preventDefault()
        //const propsData=[...props.res,id]
        dispatch(changeTodoPending({ props: props, id: id }))

    }
    const remove = (e, id) => {
        e.preventDefault()
        const find = result.todoData.findIndex((item) => item.id === id)
        console.log("find", find)
        
        dispatch(removed({ index:find}))
    }
    //console.log("line 123",result.todoData.filter((item)=>console.log(item.status)))
    const falseItems = result.todoData.filter((item) => item.status === false)
    console.log("false",falseItems)
    return (
        <>
            <h1>PendingTasks</h1>
            {
                falseItems.map((item) => (
                    <>
                        <h3>{item.username}</h3>
                        <p>{item.userEmail}</p>
                        <button onClick={(e) => completed(e, item.id)}> completed</button>
                        <button onClick={(e) => remove(e, item.id)}> remove</button>
                    </>
                ))
            }
        </>
    )
}
export default PendingTasksFun