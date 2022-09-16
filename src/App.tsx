import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

type Cursor = "cursor1" | "cursor2" | "cursor3" | "cursor4";

const cursors: Cursor[] = ["cursor1", "cursor2", "cursor3", "cursor4"];

function App() {
  const [selectedCursor, setSelectedCursor] = useState<Cursor>("cursor1");
  return (
    <>
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
        뭐요
        {cursors.map((cursor) => (
          <Button
            onClick={() => setSelectedCursor(cursor)}
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
