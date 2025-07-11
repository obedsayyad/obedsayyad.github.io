// app/page.tsx
"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "https://obed1s.vercel.app/resume";
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#000",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  } as React.CSSProperties,
  spinner: {
    width: "60px",
    height: "60px",
    border: "6px solid rgba(255, 255, 255, 0.2)",
    borderTop: "6px solid #fff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  } as React.CSSProperties,
};

// Inject @keyframes only once
if (
  typeof window !== "undefined" &&
  !document.getElementById("spinner-keyframes")
) {
  const style = document.createElement("style");
  style.id = "spinner-keyframes";
  style.innerHTML = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}
