import React from "react";
import image from "../images/under_construction.jpg";
export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <img
        src={image}
        alt="image of a website with the words 'Under Construction'"
      />
    </main>
  );
}
