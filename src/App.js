import React, { useState } from "react";
import PasswordStrengthChecker from "./PasswordStrenghtChecker";
import PasswordGenerator from "./PasswordGenerator";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("checker");

  return (
    <div className="App">
      <h1>🔐 Password Tool 🔐</h1>
      <div className="container">
        <div className="tabs">
          <button
            onClick={() => setActiveTab("checker")}
            className={activeTab === "checker" ? "active" : ""}
          >
            Password Checker
          </button>
          <button
            onClick={() => setActiveTab("generator")}
            className={activeTab === "generator" ? "active" : ""}
          >
            Password Generator
          </button>
        </div>
        {activeTab === "checker" && <PasswordStrengthChecker />}
        {activeTab === "generator" && <PasswordGenerator />}
      </div>
      <h3>Security Tips</h3>
      <div className="security-tips-container">
        <div className="security-tips-grid">
          <div className="tip">Use a password manager</div>
          <div className="tip">Enable two-factor authentication</div>
          <div className="tip">Use different passwords</div>
          <div className="tip">Update regularly</div>
        </div>
      </div>
      <p>Your passwords are never stored or transmitted.</p>
    </div>
  );
}

export default App;
