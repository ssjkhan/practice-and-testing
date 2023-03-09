import { Route, Routes } from "react-router-dom";
import TailwindBasics from "./TailwindBasics";

export default function BasicsIndex() {
  return (
    <Routes>
      <Route path="tailwind-basics" element={<TailwindBasics />} />
    </Routes>
  );
}
