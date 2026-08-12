// Centralized list of email addresses allowed to access the admin panel.
// Add 2–3 more addresses here later as needed — nothing else needs to change.
export const ADMIN_EMAILS = ["mitali.revecult@gmail.com"];

export function isAdminEmail(email) {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase());
}