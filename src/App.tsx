import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./components/theme/theme-hook";

function App() {
  const [count, setCount] = useState(0);
  const { setTheme } = useTheme();

  return (
    <div>
      <h1 className="text-xl">Hellow World</h1>
      <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
      <Button onClick={() => setTheme("dark")}>dark</Button>
      <Button onClick={() => setTheme("light")}>light</Button>
    </div>
  );
}

export default App;
