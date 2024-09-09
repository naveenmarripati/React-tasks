import { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [name, setName] = useState("naveen");
  const click=(e)=>{
    e.preventDefault()
    setName("Lokehs")
  }
  return (
    <>
      <ChildComponent fname={name} setNameFunction={click} ></ChildComponent>
      {/* <button onClick={(e)=>click(e)}>click</button> */}
    </>
  );
}

export default ParentComponent;