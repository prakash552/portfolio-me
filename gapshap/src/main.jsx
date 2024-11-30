import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";  // सही इंपोर्ट
import { BrowserRouter } from "react-router-dom";  // सही किया गया टाइपो

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
