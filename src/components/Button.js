import React from "react";

const Button = ({ content }) => {
  return (
    <div className="button">
      <div className="container">
        <a>{content}</a>
        <svg
          className="right-arrow"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      </div>
    </div>
  );
};

export default Button;
