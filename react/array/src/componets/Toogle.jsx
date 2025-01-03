import React, { useState } from "react";

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div
      style={{
        backgroundColor: isDark ? "#333" : "#fff",
        color: isDark ? "#fff" : "#000",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>{isDark ? "Dark" : "Light"} Theme</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ToggleTheme;