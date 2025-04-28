"use client";

import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(1800); // 1800 seconds = 30 minutes

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const day = Math.floor(seconds / (60 * 60 * 24));
    const hour = Math.floor(seconds / (60 * 60)) % 24;
    const minute = Math.floor(seconds / 60) % 60;
    const second = seconds % 60;

    return {
      day,
      hour,
      minute: minute < 10 ? `0${minute}` : minute,
      second: second < 10 ? `0${second}` : second,
    };
  };

  const { day, hour, minute, second } = formatTime(timeLeft);

  return (
    <div className="p-btn_area" style={{ width: "80%", marginLeft: 0, marginRight: 0, paddingBottom: 0, backgroundColor: "#f0f0f0" }}>
      <div className="p-btn_area__text_box">
        <p style={{ fontWeight: "bold", textAlign: "center", paddingTop: 60 }}>
          無料のうちに、今すぐ参加しましょう！
          
        </p>
      </div>
      <div
        className="p-btn_area__text_box"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: 40,
          paddingTop: 40,
          
        }}
      >
        <div>
          <span style={{ fontSize: "3rem", color: "#000", fontWeight: 800, lineHeight: 0, paddingRight: 10 }}>
            {day}
          </span>
          <br />
          <span style={{ fontSize: "3rem", color: "#000", fontWeight: 800, paddingRight: 10 }}>
            日々
          </span>
        </div>
        <div>
          <span style={{ fontSize: "3rem", color: "#000", fontWeight: 800, lineHeight: 0, paddingRight: 10 }}>
            {hour}
          </span>
          <br />
          <span style={{ fontSize: "3rem", color: "#000", fontWeight: 800, paddingRight: 10 }}>
            時間
          </span>
        </div>
        <div>
          <span style={{ fontSize: "3rem", color: "#3b9edb", fontWeight: 800, lineHeight: 0, paddingRight: 10 }}>
            {minute}
          </span>
          <br />
          <span style={{ fontSize: "3rem", color: "#3b9edb", fontWeight: 800, paddingRight: 10 }}>
            分
          </span>
        </div>
        <div>
          <span style={{ fontSize: "3rem", color: "#3b9edb", fontWeight: 800, lineHeight: 0 }}>
            {second}
          </span>
          <br />
          <span style={{ fontSize: "3rem", color: "#3b9edb", fontWeight: 800 }}>
            秒
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
