
import { Component } from "react"
import axios from 'axios'
const axioshoc = (Input)=>{
    return class NewComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                result: [],
                search: "",
                name:"naveen"
    
            }
    
        }
        componentDidMount(){
            axios.get("https://hn.algolia.com/api/v1/search?query=react").then((res)=>console.log(res)).catch((err)=>console.log(err))
        }
        userInput(e) {
            this.setState({ search: e.target.value })
            //console.log("hii")
        }
        handleSearch(e) {
            e.preventDefault()
            axios.get(`https://hn.algolia.com/api/v1/search?query=${this.state.search}`).then((res) => this.setState({ result: res.data.hits })).catch((err) => console.log(err))
        }
        render() {
            return(
                <>
                <Input result={this.state.result} handleSearch={this.handleSearch} userInput={this.userInput}></Input>
                </>
            )
        }
}
}
export default axioshoc
