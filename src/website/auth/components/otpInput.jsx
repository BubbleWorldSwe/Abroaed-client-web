import React, { useRef, useState } from "react";

const OtpInput = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange?.(newOtp.join(""));

    // focus next input
    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {otp.map((digit, i) => (
        <input
          key={i}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e.target.value, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          ref={(el) => (inputs.current[i] = el)}
          className={`w-12 h-12 text-center text-lg border rounded-md outline-none focus:border-black border-gray-500 mr-1`}
        />
      ))}
    </div>
  );
};

export default OtpInput;
