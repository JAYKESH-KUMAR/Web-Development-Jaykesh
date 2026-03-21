import { Suspense } from "react";
import Generate from "./GenerateClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Generate />
    </Suspense>
  );
}
