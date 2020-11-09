import './App.css';
import cx from "classnames";
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(100);
  const [clicked, setClicked] =  useState(false);

  const getCount = () => {
    if(clicked) {
      setCount(100)
      
    } else {
      setCount(count+1);
    }
    setClicked(!clicked)
    
  } 
 /*{cx("like-button", {liked:clicked})}*/
  return (
    <>
    <div>
      <button className = {'liked-button ' + (clicked ? 'liked' : '')}  onClick={getCount}> Like | <span className="likes-counter">{count}</span> </button>
    </div>
    <style>{`
      .like-button {
        font-size: 1rem;
        padding: 5px 10px;
        color: #585858
      }
      .liked {
        font-weight: bold;
        color: #1565c0;
      }
    `}</style>
    </>
  );
}

export default App;
