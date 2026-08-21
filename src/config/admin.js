export const ADMIN_EMAILS = [
  "mitali.revecult@gmail.com",
  "work.revecult@gmail.com",
];

export function isAdminEmail(email) {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase());
}