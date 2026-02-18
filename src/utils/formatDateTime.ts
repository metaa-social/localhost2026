export function formatDateTime(dateInput: Date | string | number): string {
  const date = new Date(dateInput);

  if (isNaN(date.getTime())) return "";

  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Europe/Zurich",
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  // Format parts individually
  const parts = new Intl.DateTimeFormat("de-CH", options).formatToParts(date);

  const day = parts.find(p => p.type === "day")?.value ?? "00";
  const month = parts.find(p => p.type === "month")?.value ?? "00";
  const hour = parts.find(p => p.type === "hour")?.value ?? "00";
  const minute = parts.find(p => p.type === "minute")?.value ?? "00";

  return `${day}.${month}, ${hour}:${minute}`;
}

export default formatDateTime;
