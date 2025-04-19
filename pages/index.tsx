// pages/index.tsx
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "https://obed1s.vercel.app/";
  }, []);

  return <p>Redirecting...</p>;
}
