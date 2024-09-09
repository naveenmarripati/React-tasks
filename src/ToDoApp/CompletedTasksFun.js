import _isEqual from "lodash/isEqual";
import React from "react";

function CompletedTasksFun(props) {
  const { props1, props2, props3, props4 } = props;
  //   const filteredItems = props1.filter((item) => item.status === false);
  return (
    <>
      <h1>Completed Tasks</h1>
      {console.log("inside complete tasks")}
      {props1.map((item) => (
        <div key={item.id}>
          <p>
            {item.work} at {item.time}
          </p>
          <button onClick={() => props2(item.id)}>UnDo</button>
          <button onClick={() => props3(item.id)}>Delete</button>
          <button onClick={() => props4(item.id)}>Remove Permanently</button>
        </div>
      ))}
    </>
  );
}

export default React.memo(CompletedTasksFun, (prevProps, nextProps) => {
  if (_isEqual(prevProps.props1, nextProps.props1)) {
    return true;
  } else {
    return false;
  }
});