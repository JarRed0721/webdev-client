import { Suspense } from "react";
import "@/app/labs/lab2/tailwind/utilities.css";
import QueryCalculator from "./QueryCalculator";

export default function QueryCalculatorPage() {
  return (
    <Suspense fallback={<p>Loading calculator...</p>}>
      <QueryCalculator />
    </Suspense>
  );
}
