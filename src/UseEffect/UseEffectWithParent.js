import { useState } from "react";
import { useEffect } from "react";
import UseEffectWithChild from "./UseEffectWithChild";
import axios from "axios";

function UseEffectWithParent() {
  const [data, setData] = useState([
    {
      cname: "",
      cno: "",
      cemail: "",
      id: "",
    },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/ContactsDetails")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);


  return (

    <>
      <h1>UseEffect With Parent Component</h1>
      {/* <UseEffectWithChild serverData="serverData"></UseEffectWithChild>; */}
      {/* {console.log(data[0].cname)} */}
      <h2>SERVER DATA</h2>
      {
        
          data.map((item) => (
            //console.log(item.cname);
            //obj=item
            <div key={item.id}>
              
              <UseEffectWithChild serverData={item}></UseEffectWithChild>
            </div>
            
          ))
        
      }
       
    </>
  );
}

export default UseEffectWithParent;