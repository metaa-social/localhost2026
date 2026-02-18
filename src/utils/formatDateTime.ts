export function formatDateTime(dateInput: Date | string | number): string {
  const date = new Date(dateInput);

 if (isNaN(date.getTime())) return "";

  return date.toLocaleString("de-CH", {
    timeZone: "Europe/Zurich",
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).replace(" ", ", ");
}

export default formatDateTime;
