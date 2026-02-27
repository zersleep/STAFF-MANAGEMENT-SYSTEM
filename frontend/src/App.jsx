import { useEffect, useState } from "react";

function App() {

  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.text())
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Failed to connect to backend");
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Staff Management System</h1>

      <p>Backend status:</p>

      <div style={{
        padding: "10px",
        backgroundColor: "black",
        borderRadius: "5px"
      }}>
        {message}
      </div>

    </div>
  );
}

export default App;