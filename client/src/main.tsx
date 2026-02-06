import { createRoot } from "react-dom/client";
// Version bump trigger: 1.2.8 - Force publish
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
