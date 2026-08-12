import React, { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { OCCASIONS } from "@/data/site";
import StatusBadge from "@/components/admin/StatusBadge";
import InquiryDetailModal from "@/components/admin/InquiryDetailModal";
import { Search, AlertTriangle } from "lucide-react";

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

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [occasionFilter, setOccasionFilter] = useState("all");
  const [selected, setSelected] = useState(null);

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

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return inquiries.filter((i) => {
      if (statusFilter !== "all" && (i.status || "new").toLowerCase() !== statusFilter) return false;
      if (occasionFilter !== "all" && i.occasion !== occasionFilter) return false;
      if (!term) return true;
      return (
        i.full_name?.toLowerCase().includes(term) ||
        i.company_name?.toLowerCase().includes(term) ||
        i.work_email?.toLowerCase().includes(term) ||
        i.phone?.toLowerCase().includes(term)
      );
    });
  }, [inquiries, search, statusFilter, occasionFilter]);

  return (
    <div>
      <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-reve-charcoal">Inquiries</h1>
      <p className="mt-1 text-sm text-reve-brown">{filtered.length} of {inquiries.length} inquiries</p>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-reve-brown/60 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, company, email or phone"
            className="w-full rounded-full border border-reve-border/80 bg-white pl-11 pr-4 py-2.5 text-sm text-reve-charcoal placeholder:text-reve-brown/40 focus:border-reve-terracotta focus:outline-none"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-full border border-reve-border/80 bg-white px-4 py-2.5 text-sm text-reve-charcoal focus:border-reve-terracotta focus:outline-none"
        >
          <option value="all">All statuses</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="completed">Completed</option>
        </select>
        <select
          value={occasionFilter}
          onChange={(e) => setOccasionFilter(e.target.value)}
          className="rounded-full border border-reve-border/80 bg-white px-4 py-2.5 text-sm text-reve-charcoal focus:border-reve-terracotta focus:outline-none"
        >
          <option value="all">All occasions</option>
          {OCCASIONS.map((o) => (
            <option key={o.id} value={o.title}>{o.title}</option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      {error && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4">
          <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-700">Couldn't load inquiries.</p>
            <p className="mt-0.5 text-xs text-red-600">{error}</p>
          </div>
        </div>
      )}

      {/* Desktop table */}
      <div className="mt-6 hidden lg:block bg-white rounded-2xl border border-reve-border/70 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[11px] uppercase tracking-[0.1em] text-reve-brown/70 border-b border-reve-border/70">
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Company</th>
              <th className="px-5 py-3 font-medium">Occasion</th>
              <th className="px-5 py-3 font-medium">Quantity</th>
              <th className="px-5 py-3 font-medium">Gift Preference</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-reve-border/60">
            {loading ? (
              <tr><td colSpan={8} className="px-5 py-8 text-reve-brown">Loading…</td></tr>
            ) : error ? (
              <tr><td colSpan={8} className="px-5 py-8 text-reve-brown">Unable to display inquiries right now.</td></tr>
            ) : filtered.length === 0 ? (
              <tr><td colSpan={8} className="px-5 py-8 text-reve-brown">No inquiries found.</td></tr>
            ) : (
              filtered.map((i) => (
                <tr key={i.id} className="hover:bg-reve-peachcream/40 transition-colors">
                  <td className="px-5 py-3.5 text-reve-charcoal font-medium">{i.full_name}</td>
                  <td className="px-5 py-3.5 text-reve-brown">{i.company_name || "—"}</td>
                  <td className="px-5 py-3.5 text-reve-brown">{i.occasion || "—"}</td>
                  <td className="px-5 py-3.5 text-reve-brown">{i.quantity || "—"}</td>
                  <td className="px-5 py-3.5 text-reve-brown">{i.gift_preference || "—"}</td>
                  <td className="px-5 py-3.5"><StatusBadge status={i.status} /></td>
                  <td className="px-5 py-3.5 text-reve-brown/70">{formatDate(i.submitted_at)}</td>
                  <td className="px-5 py-3.5 text-right">
                    <button
                      onClick={() => setSelected(i)}
                      className="text-reve-terracotta font-medium hover:text-reve-brown transition-colors"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="mt-6 lg:hidden space-y-3">
        {loading ? (
          <p className="text-sm text-reve-brown">Loading…</p>
        ) : error ? (
          <p className="text-sm text-reve-brown">Unable to display inquiries right now.</p>
        ) : filtered.length === 0 ? (
          <p className="text-sm text-reve-brown">No inquiries found.</p>
        ) : (
          filtered.map((i) => (
            <button
              key={i.id}
              onClick={() => setSelected(i)}
              className="w-full text-left bg-white rounded-2xl border border-reve-border/70 p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium text-reve-charcoal">{i.full_name}</p>
                <StatusBadge status={i.status} />
              </div>
              <p className="mt-1 text-sm text-reve-brown">{i.company_name || i.work_email || "—"}</p>
              <div className="mt-2 flex items-center justify-between text-xs text-reve-brown/70">
                <span>{i.occasion || "—"}</span>
                <span>{formatDate(i.submitted_at)}</span>
              </div>
            </button>
          ))
        )}
      </div>

      {selected && <InquiryDetailModal inquiry={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}