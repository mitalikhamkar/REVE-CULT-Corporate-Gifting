import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import StatusBadge from "@/components/admin/StatusBadge";
import { Inbox, Sparkles, PhoneCall, CheckCircle2, AlertTriangle } from "lucide-react";

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-white rounded-2xl border border-reve-border/70 p-6">
      <div className="w-10 h-10 rounded-xl bg-reve-peachcream flex items-center justify-center text-reve-terracotta">
        <Icon className="w-5 h-5" />
      </div>
      <p className="mt-4 text-3xl font-heading font-semibold text-reve-charcoal">{value}</p>
      <p className="mt-1 text-sm text-reve-brown">{label}</p>
    </div>
  );
}

function formatDate(ts) {
  if (!ts?.toDate) return "—";
  return ts.toDate().toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}

function sortByNewest(rows) {
  return [...rows].sort((a, b) => {
    const ta = a.submitted_at?.toMillis ? a.submitted_at.toMillis() : 0;
    const tb = b.submitted_at?.toMillis ? b.submitted_at.toMillis() : 0;
    return tb - ta;
  });
}

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "inquiries"),
      (snap) => {
        const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setInquiries(sortByNewest(rows));
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error("Failed to load inquiries from Firestore:", err);
        setError(err.message || "Failed to load inquiries.");
        setLoading(false);
      }
    );
    return unsub;
  }, []);

  const total = inquiries.length;
  const newCount = inquiries.filter((i) => (i.status || "new").toLowerCase() === "new").length;
  const contactedCount = inquiries.filter((i) => (i.status || "").toLowerCase() === "contacted").length;
  const completedCount = inquiries.filter((i) => (i.status || "").toLowerCase() === "completed").length;
  const recent = inquiries.slice(0, 5);

  return (
    <div>
      <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-reve-charcoal">Dashboard</h1>
      <p className="mt-1 text-sm text-reve-brown">Overview of corporate gifting inquiries.</p>

      {error && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4">
          <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-700">Couldn't load inquiry data.</p>
            <p className="mt-0.5 text-xs text-red-600">{error}</p>
          </div>
        </div>
      )}

      <div className="mt-7 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Inbox} label="Total Inquiries" value={loading ? "…" : error ? "—" : total} />
        <StatCard icon={Sparkles} label="New" value={loading ? "…" : error ? "—" : newCount} />
        <StatCard icon={PhoneCall} label="Contacted" value={loading ? "…" : error ? "—" : contactedCount} />
        <StatCard icon={CheckCircle2} label="Completed" value={loading ? "…" : error ? "—" : completedCount} />
      </div>

      <div className="mt-8 bg-white rounded-2xl border border-reve-border/70 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-reve-border/70">
          <h2 className="font-heading text-lg font-semibold text-reve-charcoal">Recent Inquiries</h2>
          <Link to="/admin/inquiries" className="text-sm font-medium text-reve-terracotta hover:text-reve-brown transition-colors">
            View all
          </Link>
        </div>

        {loading ? (
          <p className="px-6 py-8 text-sm text-reve-brown">Loading…</p>
        ) : error ? (
          <p className="px-6 py-8 text-sm text-reve-brown">Unable to display recent inquiries right now.</p>
        ) : recent.length === 0 ? (
          <p className="px-6 py-8 text-sm text-reve-brown">No inquiries yet.</p>
        ) : (
          <div className="divide-y divide-reve-border/60">
            {recent.map((i) => (
              <div key={i.id} className="flex items-center justify-between gap-4 px-6 py-4">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-reve-charcoal truncate">{i.full_name || "—"}</p>
                  <p className="text-xs text-reve-brown truncate">{i.company_name || i.work_email || "—"}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs text-reve-brown/70 hidden sm:inline">{formatDate(i.submitted_at)}</span>
                  <StatusBadge status={i.status} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}