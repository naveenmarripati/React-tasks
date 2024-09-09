import React from "react";
import { useState, useEffect } from "react";
import PendingTasksFun from "./PendingTasksFun";
import CompletedTasksFun from "./CompletedTasksFun";
import ArchievedTasksFun from "./ArchievedTasksFun";
import "./TodoApp.css"
function ToDoMainComponent(props) {
    const [todos, settodos] = useState(props.alldata);
    const [work, setwork] = useState();
    const [time, settime] = useState();

    const handleWork = (e) => {
        setwork(e.target.value);
    };

    const handleTime = (e) => {
        settime(e.target.value);
    };
    const addToDo = (len) => {
        // let len = this.state.todos.length;
        let counter = len + 1; //if length is 0, then counter becomes 1 and id is 1 eventually and follows upon addition of objects.
        console.log("Counter:", counter);
        const newItem = {
            id: counter,
            work: work,
            time: time,
            status: false,
            active: true,
        };
        const temp = [...todos, newItem];
        settodos(temp);
        // const temp=todos.(newItem)
        // console.log(temp)
    };

    const completed = (id) => {
        settodos(
            todos.map((item) => {
                if (item.id === id) {
                    return { ...item, status: !item.status };
                } else {
                    return item;
                }
            })
        );
    };

    const completedelete = (todoId) => {
        const temp = todos.filter((item) => item.id !== todoId);
        settodos(temp);
    };

    const getCompletedItems = () => {
        const completedItems = todos.filter(
            (item) => item.status === true && item.active === true
        );
        return completedItems;
    };

    const changeCompletionStatus = (todoId) => {
        const temp = todos.map((item) => {
            if (item.id === todoId) {
                // console.log("item details", { ...item });
                return { ...item, status: !item.status };
            } else {
                // console.log("else item:", item);
                return item;
            }
        });
        settodos(temp);
    };

    const changeActiveStatus = (todoId) => {
        const temp = todos.map((item) => {
            if (item.id === todoId) {
                // console.log("item details", { ...item });
                return { ...item, active: !item.active };
            } else {
                // console.log("else item:", item);
                return item;
            }
        });
        settodos(temp);
    };

    //Deleting the Data(Object) from an Array Permanently
    const completeDelete = (todoId) => {
        const temp = todos.filter((item) => item.id !== todoId);
        settodos(temp);
    };

    const getArchievedItems = () => {
        const archievedItems = todos.filter((item) => item.active === false);
        return archievedItems;
    };

    const changeRestoreditems = (todoId) => {
        const temp = todos.map((item) => {
            if (item.id === todoId) {
                // console.log("item details", { ...item });
                return { ...item, active: !item.active };
            } else {
                // console.log("else item:", item);
                return item;
            }
        });
        settodos(temp);
    };

    // Using useEffect to perform a side effect when todos change
    useEffect(() => {
        console.log("Todos have been updated:", todos);
    }, [todos]); // This effect runs whenever 'todos' changes

    console.log(todos);

    return (
        <div className="mainContainer">
            <h1 className="todo-Main-heading">Add Todos</h1>
            {console.log("inside parent tasks")}
            <div className="todo-card">
                <div>
                    <label htmlFor="work">Work:</label>
                    <input type="text" onChange={(e) => handleWork(e)} name="work" />
                </div>
                <div>
                    <label htmlFor="time">Time:</label>
                    <input type="text" onChange={(e) => handleTime(e)} name="time" />
                </div>
                <div className="button-container">
                    <button className="todo-button" onClick={() => addToDo(todos.length)}>Add-ToDo</button>
                </div>
            </div>
            <div className="text-card-container">
                <div className="each-card">
                    <PendingTasksFun
                        props1={todos}
                        props2={completed}
                        props3={completedelete}
                    ></PendingTasksFun>
                </div>
                <div className="each-card">
                    <CompletedTasksFun
                        props1={getCompletedItems()}
                        props2={changeCompletionStatus}
                        props3={changeActiveStatus}
                        props4={completeDelete}
                    ></CompletedTasksFun>
                </div>
                <div className="each-card">
                    <ArchievedTasksFun
                        props1={getArchievedItems()}
                        props2={changeRestoreditems}
                    ></ArchievedTasksFun>
                </div>



            </div>
        </div>
    );
}
export default ToDoMainComponent;




