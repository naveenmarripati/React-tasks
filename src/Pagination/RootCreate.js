import { useEffect, useState } from "react"
import PageRoot from "./PageRoot"
import axios  from "axios";
function RootCreate(){
    
    const [blogResults,setBlogResults]=useState([])
    useEffect(()=>{
        axios.get(`https://www.amiiboapi.com/api/amiibo/`).then((res)=>setBlogResults(res.data.amiibo)).catch((err)=>console.log(err))
    },[])
    const dependesApi=blogResults.length;
    //console.log(dependesApi)
    const pages=Math.ceil(dependesApi/20)
    //console.log(pages)
    return(
        
        <>
        <PageRoot data={blogResults} displayPages={10} page={pages}  displayPageItems={20}></PageRoot>
        </>
    )
}
export default RootCreate