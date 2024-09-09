import "./Blog.css"
function BlogPage(props) {
    const { eachItem } = props;
    const { name, character, gameSeries, image } = eachItem
    console.log(character)
    return (
        <div className="card">
            <img className="image" src={image} alt="No Image" />
            <h1 className="heading">name: {name}</h1>
            <p className="text">character: {character}</p>
            <p className="series">gameSeries: {gameSeries}</p>
        </div>

    )
}
export default BlogPage