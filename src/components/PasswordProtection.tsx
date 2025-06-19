"use client";

import { useState, useEffect } from "react";

interface PasswordProtectionProps {
  children: React.ReactNode;
}

export default function PasswordProtection({
  children,
}: PasswordProtectionProps) {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  // Hardcoded password - change this to your desired password
  const CORRECT_PASSWORD = "mingduo2024";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
      // Store authentication in sessionStorage
      sessionStorage.setItem("authenticated", "true");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  // Check if already authenticated from sessionStorage
  useEffect(() => {
    const isAuth = sessionStorage.getItem("authenticated") === "true";
    setIsAuthenticated(isAuth);
  }, []);

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Access Required
            </h1>
            <p className="text-gray-300">
              Please enter the password to view Mingduo Zhao's academic website
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                placeholder="Enter password"
                required
              />
              {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Access Website
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              This is a private academic website. Authorized access only.
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            © 2024 Mingduo Zhao. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
