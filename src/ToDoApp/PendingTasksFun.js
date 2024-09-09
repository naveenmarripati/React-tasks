import _isEqual from "lodash/isEqual";
import React from "react";

function PendingTasksFun(props) {
  const { props1, props2, props3 } = props;
  const filteredItems = props1.filter((item) => item.status === false);
  return (
    <>
      <h1>Pending Tasks</h1>
      {console.log("inside pending tasks")}
      {filteredItems.map((item) => (
        <div key={item.id}>
          <p>
            {item.work} at {item.time}
          </p>
          <button onClick={() => props2(item.id)}>Completed</button>
          <button onClick={() => props3(item.id)}>Permanently Remove</button>
        </div>
      ))}
    </>
  );
}

export default React.memo(PendingTasksFun, (prevProps, nextProps) => {
  if (_isEqual(prevProps.props1, nextProps.props1)) {
    return true;
  } else {
    return false;
  }
});