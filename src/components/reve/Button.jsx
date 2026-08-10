import React from "react";
import { cn } from "@/lib/utils";

const styles = {
  primary:
    "bg-reve-terracotta text-white hover:bg-reve-brown shadow-[0_8px_24px_-12px_rgba(201,130,104,0.8)]",
  outline:
    "border border-reve-terracotta/60 text-reve-terracotta hover:bg-reve-peach/40",
  ghost: "text-reve-brown hover:text-reve-terracotta",
  light: "bg-white text-reve-charcoal hover:bg-reve-peachcream border border-reve-border",
};

export default function Button({
  as = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-200 min-h-[48px]",
        size === "sm" ? "px-5 py-2.5 text-[13px] min-h-[40px]" : "px-7 py-3.5 text-sm",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}