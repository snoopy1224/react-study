import React from "react";
import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히가세요");

  const [color, setColor] = useState("black");
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "yellow" }} onClick={() => setColor("yellow")}>
        노랑색
      </button>
      <button style={{ color: "skyblue" }} onClick={() => setColor("skyblue")}>
        하늘색
      </button>
    </div>
  );
};

export default Say;
