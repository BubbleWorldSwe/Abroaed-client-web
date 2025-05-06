// OtpLogin.js
import React, { useState, useEffect } from "react";

import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../utils/firebase";

function OtpLogin() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState(null);
  const [confirmResult, setConfirmResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("reCAPTCHA resolved");
          },
        },
        auth
      );
    }
  };

  const sendOtp = async () => {
    setError("");
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    try {
      const confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier
      );
      setConfirmResult(confirmation);
      console.log("OTP sent");
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async () => {
    try {
      await confirmResult.confirm(otp);
      setError("");
      console.log("Phone number verified");
    } catch (err) {
      setError("Invalid OTP");
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <div style={{ padding: 20 }}>
      {user ? (
        <>
          <h2>✅ Logged in as: {user.phoneNumber}</h2>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <>
          {!confirmResult ? (
            <>
              <input
                type="tel"
                placeholder="+91xxxxxxxxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div id="recaptcha-container" />
              <button onClick={sendOtp}>Send OTP</button>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button onClick={verifyOtp}>Verify OTP</button>
            </>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </>
      )}
    </div>
  );
}

export default OtpLogin;
