import FunctionHook from "./FunctionHook.js"
import BlogPage from "./BlogPage.js"
import "./Blog.css"
function PageRoot(props) {
    const { data, displayPages, displayPageItems, page } = props
    //const sendData=props;

    //console.log(sendData)
    const { getEachItem, goToPrevPage, goToNextPage, getPageNumbers, changePage } = FunctionHook(data, displayPages, displayPageItems, page)
    console.log(getPageNumbers())
    return (
        <>
            <div className="maincontainer">
                {
                    getEachItem().map((item) => (
                        <BlogPage eachItem={item}></BlogPage>
                    ))
                }
            </div>
            <div className="buttons">
                <button onClick={(e) => goToPrevPage(e)}>prev</button>

                {
                    getPageNumbers().map((item) => {
                        // <button className="current" onClick={(e) => changePage(item)}>{item}</button>
                        if (item <= page) {
                            return <button onClick={(e) => changePage(item)}>{item}</button>
                        }
                    })
                }

                <button onClick={(e) => goToNextPage(e)}>next</button>
            </div>

        </>
    )
}
export default PageRoot