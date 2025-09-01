import { useState } from "react";
import { Construction } from "./construction";
import Home from "./home";

export function Welcome() {
  const [isWorking, setIsWork] = useState(true);

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      {isWorking ? <Home /> : <Construction />}
    </main>
  );
}
