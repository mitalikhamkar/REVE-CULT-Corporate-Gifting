import React from "react";
import { cn } from "@/lib/utils";

const STYLES = {
  new: "bg-reve-peach/60 text-reve-brown",
  contacted: "bg-amber-100 text-amber-800",
  completed: "bg-emerald-100 text-emerald-800",
};

const LABELS = {
  new: "New",
  contacted: "Contacted",
  completed: "Completed",
};

export default function StatusBadge({ status }) {
  const key = (status || "new").toLowerCase();
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium",
        STYLES[key] || STYLES.new
      )}
    >
      {LABELS[key] || "New"}
    </span>
  );
}