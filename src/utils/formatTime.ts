export function formatTime(dateInput: Date | string | number): string {
  const date = new Date(dateInput);

  if (isNaN(date.getTime())) return "";
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default formatTime;
