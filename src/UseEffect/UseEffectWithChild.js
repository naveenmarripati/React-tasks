function UseEffectWithChild({ ...props }) {
  console.log(props)
    const { serverData } = props;
    const { cname, cno, cemail, id } = serverData;
    console.log(cname);
    return (
      <>
        
        <ul className="listitem">
          <li>{cname}</li>
          <li>{cno}</li>
          <li>{cemail}</li>
          <li>{id}</li>
        </ul>
      </>
    );
  }
  
  export default UseEffectWithChild