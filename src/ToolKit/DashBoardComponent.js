import { useSelector } from "react-redux"
export default function DashBoardComponent() {
    const result = useSelector((state) => {
        return state
    })
    // const completed = (id) => {
    //     const settint=(
    //         result.loginInfo.map((item) => {
    //             if (item.id === id) {
    //                 return { ...item, status: !item.status };
    //             } else {
    //                 return item;
    //             }
    //         })
    //     );
    // };
    // const completedelete = (todoId) => {
    //     const temp = result.loginInfo.filter((item) => item.id !== todoId);
        
    // };
    
    console.log(result)
    return (
        <>
            {console.log(result)}
            <h1>DashBoardComponent</h1>
            {
                // result.isLogged ?
                //     <>
                //         <PendingTasksFun
                           
                //         ></PendingTasksFun>
                //     </>
                //     :
                //     <><h1>Please signin</h1> </>
                result.isLogged?
                    <>
                    </>
                :<h1>Please signin</h1>
            }
        </>
    )
}