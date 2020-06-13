import React, { useState } from "react";
import List from "./List";

export default function Content({
  content,
  post,
  index,
  upPost,
  downPost,
  deletePost
}) {
  const [sublist, setSublist] = useState(false);
  const [ind, setInd] = useState(null);

  return (
    <li key={index + 1} id={index} style={{ listStyleType: "none" }}>
      {/* ADD SUBLIST  */}
      {!sublist ? (
        <button
          style={{ marginRight: "5px" }}
          onClick={e => {
            let thisIndex = e.target.parentElement.getAttribute("id");
            setInd(Number(thisIndex));
            setSublist(true);
          }}
        >
          addSublist
        </button>
      ) : (
        undefined
      )}

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

      {/* UP */}
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

      {/* DOWN  */}
      {content.length - 1 !== index && (
        <button
          onClick={e => {
            let thisIndex = e.target.parentElement.getAttribute("id");
            downPost(thisIndex);
          }}
        >
          DOWN
        </button>
      )}

      {/* DELETE  */}
      <button
        onClick={e => {
          let thisIndex = e.target.parentElement.getAttribute("id");
          deletePost(thisIndex);
          setSublist(false);
        }}
      >
        Delete
      </button>

      {/* sublist && DELETE SUBLIST*/}
      <div>
        {sublist && ind === index ? (
          <button
            style={{ display: "inline-block", marginRight: "5px" }}
            onClick={e => {
              setSublist(false);
              setInd(null);
            }}
          >
            deleteSublist
          </button>
        ) : (
          undefined
        )}
        {sublist && ind === index && <List />}
      </div>
    </li>
  );
}
