import { useState } from "react";
import { Alert } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return <Alert severity="success"> hey there!</Alert>;
}

export default App;
