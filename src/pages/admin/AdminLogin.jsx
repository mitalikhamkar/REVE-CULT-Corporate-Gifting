import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { isAdminEmail } from "@/config/admin";
import { LogIn } from "lucide-react";

const ERROR_MESSAGES = {
  "auth/invalid-credential": "Incorrect email or password.",
  "auth/invalid-email": "That email address doesn't look right.",
  "auth/wrong-password": "Incorrect email or password.",
  "auth/user-not-found": "Incorrect email or password.",
  "auth/too-many-requests": "Too many attempts. Please wait a moment and try again.",
};

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(
    location.state?.unauthorized
      ? "You don't have permission to access the admin panel."
      : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
      if (!isAdminEmail(cred.user.email)) {
        await signOut(auth);
        setError("You don't have permission to access the admin panel.");
        setLoading(false);
        return;
      }
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(ERROR_MESSAGES[err?.code] || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-reve-ivory px-5">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <p className="font-heading text-2xl font-semibold text-reve-charcoal">REVE CULT</p>
          <p className="eyebrow mt-1">Admin Panel</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-[1.75rem] border border-reve-border/70 p-8 sm:p-10 shadow-[0_24px_48px_-32px_rgba(138,90,74,0.35)]"
        >
          <h1 className="font-heading text-xl font-semibold text-reve-charcoal">Sign in</h1>
          <p className="mt-1 text-sm text-reve-brown">Access is restricted to approved admin accounts.</p>

          <div className="mt-7">
            <label htmlFor="email" className="eyebrow">Email</label>
            <input
              id="email"
              type="email"
              required
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-reve-border/80 bg-reve-ivory/60 px-4 py-3 text-[15px] text-reve-charcoal placeholder:text-reve-brown/40 focus:border-reve-terracotta focus:outline-none transition-colors"
              placeholder="you@revecult.com"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="password" className="eyebrow">Password</label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-xl border border-reve-border/80 bg-reve-ivory/60 px-4 py-3 text-[15px] text-reve-charcoal placeholder:text-reve-brown/40 focus:border-reve-terracotta focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="mt-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-reve-terracotta text-white font-medium py-3.5 hover:bg-reve-brown transition-colors disabled:opacity-60"
          >
            {loading ? "Signing in…" : (
              <>
                <LogIn className="w-4 h-4" /> Sign In
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}