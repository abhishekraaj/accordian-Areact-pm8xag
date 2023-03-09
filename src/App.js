import React, { useState } from 'react';
import './style.css';
import { acc } from './Const';

export default function App() {
  const [data, setData] = useState(acc);

  function handleAnswer(e) {
    console.log(e);
    if (!e.isShown) {
      e.isShown = true;
    } else {
      e.isShown = false;
    }
    setData([...data]);
  }
  return (
    <div className="main">
      {data.map((e) => (
        <>
          <div className="card" key={e.id} onClick={() => handleAnswer(e)}>
            {e.id } {e.ques} <br />
          </div>
          {e.isShown ? <p className="answer">{e.ans}</p> : ''}
        </>
      ))}
    </div>
  );
}
