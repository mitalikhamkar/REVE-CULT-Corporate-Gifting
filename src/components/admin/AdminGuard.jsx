import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { isAdminEmail } from "@/config/admin";

export default function AdminGuard() {
  const location = useLocation();
  const [state, setState] = useState({ loading: true, user: null, authorized: false, denied: false });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setState((s) => ({ loading: false, user: null, authorized: false, denied: s.denied }));
        return;
      }
      if (!isAdminEmail(user.email)) {
        await signOut(auth);
        setState({ loading: false, user: null, authorized: false, denied: true });
        return;
      }
      setState({ loading: false, user, authorized: true, denied: false });
    });
    return unsub;
  }, []);

  if (state.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-reve-ivory">
        <div className="flex flex-col items-center gap-3">
          <span className="w-8 h-8 rounded-full border-2 border-reve-terracotta/30 border-t-reve-terracotta animate-spin" />
          <p className="text-sm text-reve-brown">Checking access…</p>
        </div>
      </div>
    );
  }

  if (!state.user || !state.authorized) {
    return (
      <Navigate
        to="/admin/login"
        state={{ from: location.pathname, unauthorized: state.denied }}
        replace
      />
    );
  }

  return <Outlet context={{ user: state.user }} />;
}