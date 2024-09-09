import axios from 'axios'


function MovieRootPage(){

const getimdbdata=()=>{
    axios.get("https://api.themoviedb.org/3/movie/157336?api_key=de0b3350a6037a07cf50d9995be946db&append_to_response=videos,images")
    .then((res)=>console.log(res.data)).catch((error)=>console.log(error))
}

    return(
        <>
        {getimdbdata()}
        <h1>Movie Rating</h1>
        </>
    )
}
export default MovieRootPage