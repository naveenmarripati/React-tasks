import _isEqual from "lodash/isEqual";
import React from "react";

function ArchievedTasksFun(props) {
  const { props1, props2, props3, props4 } = props;

  return (
    <>
      <h1>Archieved Tasks</h1>
      {console.log("inside archieved tasks")};
      {props1.map((item) => (
        <div key={item.id}>
          <p>
            {item.work} at {item.time}
          </p>
          <button  onClick={() => props2(item.id)}>Restore</button>
        </div>
      ))}
    </>
  );
}

export default React.memo(ArchievedTasksFun, (prevProps, nextProps) => {
  if (_isEqual(prevProps.props1, nextProps.props1)) {
    return true;
  } else {
    return false;
  }
});