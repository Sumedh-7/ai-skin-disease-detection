import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error connecting to backend:", error);
      });
  }, []);

  return (
    <div>
      <h1>AI Skin Disease Detection System</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;