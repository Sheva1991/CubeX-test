import React from "react";

const ListContent = ({ content, upPost, downPost }) => {
  return (
    <>
      {content.map((post, index) => (
        <li key={index + 1} id={index} style={{ listStyleType: "none" }}>
          <p
            style={{
              display: "inline-block",
              minWidth: "200px",
              border: "1px solid blue",
              margin: "0",
              marginRight: "10px"
            }}
          >
            {post}
          </p>
          {index !== 0 && (
            <button
              onClick={e => {
                let thisIndex = e.target.parentElement.getAttribute("id");
                upPost(thisIndex);
              }}
            >
              UP
            </button>
          )}
          {content.length - 1 !== index && (
            <button
              onClick={e => {
                let thisIndex = e.target.parentElement.getAttribute("id");
                console.log(thisIndex);
                downPost(thisIndex);
              }}
            >
              DOWN
            </button>
          )}
        </li>
      ))}
    </>
  );
};

export default ListContent;
