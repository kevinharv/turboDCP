import { useState } from "react";
import "./App.css";

import LoginScreen from "./views/LoginScreen";
import TopBar from "./components/TopBar";

function App() {
  const [activeView, setActiveView] = useState("loginscreen");

  if (activeView === "login-screen") {
    return <LoginScreen />;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <TopBar />

        <div
          style={{
            display: "flex",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "10%",
              backgroundColor: "red",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>Item 1</h1>
            <h1>Item 2</h1>
            <h1>Item 3</h1>
            <h1>Item 4</h1>
          </div>

          <div>
            <h1>Main Content</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
