import type { Route } from "./+types/home";
import { Welcome } from "../Pages/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Maura Fortino" },
    { name: "description", content: "Welcome to my website!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
