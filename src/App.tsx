import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

type Cursor = "cursor1" | "cursor2" | "cursor3" | "cursor4";

const cursors: Cursor[] = ["cursor1", "cursor2", "cursor3", "cursor4"];

function App() {
  const [selectedCursor, setSelectedCursor] = useState<Cursor>("cursor1");
  const [cursorPosition, setCursorPosition] = useState([0, 0]);
  const [calibratedCursorPosition, setCalibratedCursorPosition] = useState([
    0, 0,
  ]);

  useEffect(() => {
    const event = ({ clientX, clientY }: MouseEvent) => {
      setCursorPosition([clientX, clientY]);
      const pos = [clientX, clientY];
      switch (selectedCursor) {
        case "cursor1":
          pos[0] -= 1;
          pos[1] -= 2;
          break;
        case "cursor2":
          pos[0] -= 28;
          break;
        case "cursor3":
          pos[0] -= 16;
          pos[1] -= 17;
          break;
        case "cursor4":
          pos[0] -= 5;
          pos[1] -= 4;
          break;
      }
      setCalibratedCursorPosition(pos);
      console.log(clientX, clientY);
    };
    window.addEventListener("mousemove", event);

    return () => window.removeEventListener("mousemove", event);
  }, [selectedCursor]);
  return (
    <>
      <img
        style={{
          pointerEvents: "none",
          position: "fixed",
          left: calibratedCursorPosition[0],
          top: calibratedCursorPosition[1],
          width: "50px",
        }}
        src={`/images/${selectedCursor}.png`}
        alt="커서 이미지"
      />
      <div style={{ fontSize: "24px" }}>
        버튼을 눌러서 마우스 커서를 바꿔보세요
      </div>
      <div
        style={{
          marginTop: "26px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/*버튼 목록*/}
        {cursors.map((cursor) => (
          <Button
            onClick={() => {
              const pos = cursorPosition;
              switch (selectedCursor) {
                case "cursor1":
                  pos[0] -= 1;
                  pos[1] -= 2;
                  break;
                case "cursor2":
                  pos[0] -= 28;
                  break;
                case "cursor3":
                  pos[0] -= 16;
                  pos[1] -= 17;
                  break;
                case "cursor4":
                  pos[0] -= 5;
                  pos[1] -= 4;
                  break;
              }
              setCalibratedCursorPosition(pos);
              setSelectedCursor(cursor);
            }}
            selected={selectedCursor === cursor}
            name={cursor}
            key={cursor}
          />
        ))}
      </div>
    </>
  );
}

export default App;
