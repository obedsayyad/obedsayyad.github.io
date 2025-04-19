// pages/index.tsx
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.location.href = "https://obed1s.vercel.app/";
  }, []);

  return <p>Redirecting...</p>;
}
