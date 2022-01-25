import React from "react";

function Parent({ children }) {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
}

export default Parent;
