import React, { useState } from "react";
import zxcvbn from "zxcvbn";
import { GiPadlock } from "react-icons/gi";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(null);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setStrength(zxcvbn(newPassword));
  };

  const getStrengthColor = (score) => {
    switch (score) {
      case 0:
        return "red";
      case 1:
        return "orange";
      case 2:
        return "yellow";
      case 3:
        return "lightgreen";
      case 4:
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <div className="password-strength-checker">
      <h2> Check Your Password Strength</h2>
      <input
        type="text"
        placeholder="Enter your password..."
        value={password}
        onChange={handlePasswordChange}
      />
      {strength && (
        <div className="strength-meter">
          <div
            className="strength-bar"
            style={{
              width: `${(strength.score + 1) * 20}%`,
              backgroundColor: getStrengthColor(strength.score),
            }}
          ></div>
        </div>
      )}
      {strength && (
        <div className="strength-feedback">
          <GiPadlock size={24} />
          <p>
            Time to crack:{" "}
            {strength.crack_times_display.offline_slow_hashing_1e4_per_second}
          </p>
          <p>Score: {strength.score}/4</p>
          <p>{strength.feedback.warning || "No warnings"}</p>
          <p>{strength.feedback.suggestions.join(" ") || "No suggestions"}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordStrengthChecker;
