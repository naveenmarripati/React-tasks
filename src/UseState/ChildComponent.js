function ChildComponent({ ...props }) {
    const { fname,setNameFunction } = props;
    
    return (
      <div>
        <h1>Child Component</h1>
        <h2>{fname}</h2>
        <button onClick={(e)=>setNameFunction(e)}>setnameFunction</button>
      </div>
    );
  }
  
  export default ChildComponent;